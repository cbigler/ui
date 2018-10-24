import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './styles.scss';

import moment from 'moment';
import * as d3Scale from 'd3-scale'; /* note: this package doesn't have a `default` export */
import commaNumber from 'comma-number';
import hexRgb from 'hex-rgb';

import ReportWrapper, { ReportPadding, ReportCard, ReportSubHeader } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';

// ----------------------------------------------------------------------------
// START BEZIER CURVE CODE
// ----------------------------------------------------------------------------
//
// From https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
const line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[1] - pointA[1]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}
// Position of a control point
// I:  - current (array) [x, y]: current point coordinates
//     - previous (array) [x, y]: previous point coordinates
//     - next (array) [x, y]: next point coordinates
//     - reverse (boolean, optional): sets the direction
// O:  - (array) [x,y]: a tuple of coordinates
const controlPoint = (current, previous, next, reverse) => {
  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current
  const n = next || current
  // The smoothing ratio
  const smoothing = 0.2
  // Properties of the opposed-line
  const o = line(p, n)
  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0)
  const length = o.length * smoothing
  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length
  const y = current[1] + Math.sin(angle) * length
  return [x, y]
}

// Create the bezier curve command
// I:  - point (array) [x,y]: current point coordinates
//     - i (integer): index of 'point' in the array 'a'
//     - a (array): complete array of points coordinates
// O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
const bezierCommand = (point, i, a) => {
  // start control point
  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
  // end control point
  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true)
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
}

const lineCommand = point => `L${point[0]},${point[1]}`

// ----------------------------------------------------------------------------
// END BEZIER CURVE CODE
// ----------------------------------------------------------------------------

class ReportTimeSegmentBreakdownChart extends Component {
  constructor(props) {
    super(props);
    this.state = { width: null, height: 150 };
    this.onResize = this.onResize.bind(this);

    this.chartTopSpacing = 20;
    this.xAxisMarkTopSpacing = 25;
    this.xAxisMarkFontSize = 16;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = this.container.clientWidth;
    this.setState({
      width,
      height: width / 3,
    });
  }

  convertTimeToSeconds(time) {
    return moment.duration(time).asSeconds();
  }

  // Generate an array of "marks" for below the graph, starting at the beginning of the time segment
  // and ending at the end of the time segment.
  generateXAxisMarks() {
    const { timeSegment } = this.props;

    const start = moment.duration(timeSegment.start);
    const end = moment.duration(timeSegment.end);

    const marks = [];
    for (let i = start; i.asHours() <= end.asHours(); i = i.clone().add(1, 'hour')) {
      let label = i.asHours();
      marks.push({
        value: i.asSeconds(),
        label: moment.utc().startOf('day').add(label, 'hours').format('ha').slice(0, -1),
      });
    }

    return marks;
  }

  calculateYValueAlongCurveFromXValue(value) {
    const { points } = this.props;

    // Pre-parse all the timestamps to speed up the calculations below and reduce repeated work.
    const valueTimestamp = this.convertTimeToSeconds(value);
    const pointsTimestamp = points.map(a => this.convertTimeToSeconds(a.timestamp));

    // Calculate the left and right bisector of this value. These are used to know between which two
    // points our arbitrary point lies.
    // NOTE: d3.bisector would be great here, but I couldn't figure it out. So, I wrote my own
    // implmentation.
    let leftBisectorIndex = 0, rightBisectorIndex = 1; // left-most section
    for (let i = 0; i < pointsTimestamp.length-1; i++) {
      if (pointsTimestamp[i] < valueTimestamp && valueTimestamp <= pointsTimestamp[i+1]) {
        leftBisectorIndex = i;
        rightBisectorIndex = i+1;
        break;
      }
    }

    // Calculate a value indicating how far through the section bounded by `leftBisectorIndex` and
    // `rightBisectorIndex` the point indicated by `value` is. This value should be within 0...1 .
    let percentageThroughSection = (
      (valueTimestamp - pointsTimestamp[leftBisectorIndex]) /
      (pointsTimestamp[rightBisectorIndex] - pointsTimestamp[leftBisectorIndex])
    );

    // Use this percentage to determine a decimal index indicating the position of the point
    // referred to by `value`.
    const index = points[leftBisectorIndex].value + (percentageThroughSection * (
      points[rightBisectorIndex].value - points[leftBisectorIndex].value
    ));

    return index;
  }


  render() {
    const {
      startTime,
      endTime,
      points,
      timeSegment,

      peakRateOfEntryTimestamp,
      peakRateOfEntryQuantity,
      peakOccupancyTimestamp,
      peakOccupancyQuantity,
    } = this.props;
    const { width, height } = this.state;

    const graphHeight = height - this.xAxisMarkFontSize - this.xAxisMarkTopSpacing - this.chartTopSpacing;

    const xScale = d3Scale.scaleLinear()
      .domain([
        this.convertTimeToSeconds(timeSegment.start),
        this.convertTimeToSeconds(timeSegment.end),
      ])
      .range([0+20, width-20]);

    const yScale = d3Scale.scaleLinear()
      .domain([
        0,
        Math.max.apply(Math, points.map(i => i.value)),
      ])
      .range([graphHeight, this.chartTopSpacing])

    return (
      <div ref={r => { this.container = r; }} className={styles.chartContainer}>
        {/* When the width is unknown, the chart cannot be rendered. */}
        {width !== null ? (
          <svg width={width} height={height}>
            {/* Render bottom axis every hour */}
            {this.generateXAxisMarks().map(({value, label}, index, xAxisMarks) => (
              <text
                key={value}
                fill={colorVariables.grayDarker}
                transform={`translate(${xScale(value)}, ${height - this.xAxisMarkFontSize})`}
                fontSize={this.xAxisMarkFontSize}
                style={{userSelect: 'none'}}
                textAnchor={(function() {
                  if (index === 0) {
                    return 'start';
                  } else if (index === xAxisMarks.length-1) {
                    return 'end';
                  } else {
                    return 'middle';
                  }
                })()}
              >{label}</text>
            ))}

            {/* Render the chart of the day's average data */}
            {(() => {
              const curve = points.map(({value, timestamp}) => [
                xScale(this.convertTimeToSeconds(timestamp)), /* x */
                yScale(value), /* y */
              ]).reduce((acc, point, index, all) => {
                if (index === 0) {
                  return `M${point[0]},${point[1]}`;
                } else {
                  // If you'd like to debug a rendering issue without the bezier curves (just with
                  // lines), uncomment the line below.
                  // const result = lineCommand(point, index, all);
                  const result = bezierCommand(point, index, all);
                  return `${acc} ${result}`;
                }
              }, '');

              return <g>
                {/* The chart background */}


                {/* The chart outline */}
                <path
                  transform={`translate(0,${this.chartTopSpacing})`}
                  d={`M0,${yScale(0)}   ${curve}   M0,${yScale(0)}`}
                  fill="transparent"
                  strokeWidth={4}
                  stroke={colorVariables.reportOrange}
                />
              </g>;
            })()}

            {/* Render the circles on top of the chart to indicate key points */}
            {(() => {
              const occupancyX = xScale(this.convertTimeToSeconds(peakOccupancyTimestamp));
              const occupancyY = yScale(this.calculateYValueAlongCurveFromXValue(peakOccupancyTimestamp));
              const peakRateOfEntryX = xScale(this.convertTimeToSeconds(peakRateOfEntryTimestamp));
              const peakRateOfEntryY = yScale(this.calculateYValueAlongCurveFromXValue(peakRateOfEntryTimestamp));
              const circleVerticalOffset = Math.abs(occupancyX - peakRateOfEntryX) < 4 ? 5 : 0;

              return (
                <g transform={`translate(0,${this.chartTopSpacing})`}>
                  {/* Render circle around occupancy peak */}
                  <circle
                    r={8}
                    cx={occupancyX}
                    cy={occupancyY + circleVerticalOffset}
                    fill={colorVariables.reportOrange}
                    stroke={colorVariables.reportOrange}
                    strokeWidth={4}
                  />

                  {/* Render circle around rate of entry peak */}
                  <circle
                    r={8}
                    cx={peakRateOfEntryX}
                    cy={peakRateOfEntryY - circleVerticalOffset}
                    fill={colorVariables.grayLightest}
                    stroke={colorVariables.reportOrange}
                    strokeWidth={4}
                  />
                </g>
              );
            })()}
          </svg>
        ) : null}
      </div>
    );
  }
}

function formatTime(time) {
  return moment.utc(moment.duration(time).asMilliseconds())
    .format('h:mma')
    .slice(0, -1); /* am -> a */
}

function peoplePluralizer(n) {
  if (n === 1) {
    return 'person';
  } else {
    return 'people';
  }
}

export default function ReportTimeSegmentBreakdown({
  title,
  startDate,
  endDate,
  spaces,

  timeSegment,
  points,
  dailyAverage,

  peakRateOfEntryTimestamp,
  peakRateOfEntryQuantity,
  peakOccupancyTimestamp,
  peakOccupancyQuantity,
}) {
  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportSubHeader
        title={
          <span>
            <strong>{timeSegment.name}</strong> had a daily average of {' '}
            <strong>{commaNumber(dailyAverage)}</strong> visitors.
          </span>
        }
        >
        <ul className={styles.reportTimeSegmentBreakdownList}>
          <li className={styles.reportTimeSegmentBreakdownItem}>
            <div
              className={styles.reportTimeSegmentBreakdownItemBubble}
              style={{
                backgroundColor: colorVariables.grayLightest,
                borderColor: colorVariables.reportOrange,
              }}
            />
            <span className={styles.reportTimeSegmentBreakdownItemLabel}>
              Peak rate of entry of{' '}
              <span className={styles.reportTimeSegmentBreakdownItemHighlight}>
                {peakRateOfEntryQuantity} {peoplePluralizer(peakRateOfEntryQuantity)} / min
              </span>
              {' '}happened around{' '}
              <span className={styles.reportTimeSegmentBreakdownItemHighlight}>{formatTime(peakRateOfEntryTimestamp)}</span>
            </span>
          </li>
          <li className={styles.reportTimeSegmentBreakdownItem}>
            <div
              className={styles.reportTimeSegmentBreakdownItemBubble}
              style={{
                backgroundColor: colorVariables.reportOrange,
                borderColor: colorVariables.reportOrange,
              }}
            />
            <span className={styles.reportTimeSegmentBreakdownItemLabel}>
              Peak occupancy of{' '}
              <span className={styles.reportTimeSegmentBreakdownItemHighlight}>
                {peakOccupancyQuantity} {peoplePluralizer(peakOccupancyQuantity)}
              </span>
              {' '}happened around{' '}
              <span className={styles.reportTimeSegmentBreakdownItemHighlight}>{formatTime(peakOccupancyTimestamp)}</span>
            </span>
          </li>
        </ul>
      </ReportSubHeader>

      <ReportCard noPadding>
        <ReportTimeSegmentBreakdownChart
          timeSegment={timeSegment}
          points={points}
          peakRateOfEntryQuantity={peakRateOfEntryQuantity}
          peakRateOfEntryTimestamp={peakRateOfEntryTimestamp}
          peakOccupancyTimestamp={peakOccupancyTimestamp}
          peakOccupancyQuantity={peakOccupancyQuantity}
        />
      </ReportCard>
    </ReportWrapper>
  );
}

ReportTimeSegmentBreakdown.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  spaces: propTypes.arrayOf(propTypes.string).isRequired,

  timeSegment: propTypes.shape({
    id: propTypes.string,
    name: propTypes.string,
    start: propTypes.string,
    end: propTypes.string,
    days: propTypes.arrayOf(propTypes.string),
    spaces: propTypes.arrayOf(propTypes.any),
  }).isRequired,

  points: propTypes.arrayOf(
    propTypes.shape({
      timestamp: propTypes.string,
      value: propTypes.number,
    }),
  ).isRequired,

  dailyAverage: propTypes.number,

  peakRateOfEntryTimestamp: propTypes.string.isRequired,
  peakRateOfEntryQuantity: propTypes.number.isRequired,

  peakOccupancyTimestamp: propTypes.string.isRequired,
  peakOccupancyQuantity: propTypes.number.isRequired,
};
