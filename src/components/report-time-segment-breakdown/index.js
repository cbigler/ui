import React, { Component } from 'react';
import styles from './styles.scss';

import moment from 'moment';
import * as d3Scale from 'd3-scale'; /* note: this package doesn't have a `default` export */
import commaNumber from 'comma-number';
import hexRgb from 'hex-rgb';

import ReportWrapper, { ReportCard } from '@density/ui-report-wrapper';
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

    this.chartTopSpacing = 10;
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
    this.setState({width});
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
        label: label > 12 ? `${label-12}p` : `${label}a`,
      });
    }

    return marks;
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
      .range([0, width]);

    const yScale = d3Scale.scaleLinear()
      .domain([
        0,
        Math.max.apply(Math, points.map(i => i.value)),
      ])
      .range([graphHeight, 0])

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
                <path
                  transform={`translate(0,${this.chartTopSpacing})`}
                  d={`M0,${yScale(0)}   ${curve}   L${width},${yScale(0)} L0,${yScale(0)}`}
                  fill={colorVariables.brandPrimary}
                  opacity={0.18}
                />

                {/* The chart outline */}
                <path
                  transform={`translate(0,${this.chartTopSpacing})`}
                  d={`M0,${yScale(0)}   ${curve}   M0,${yScale(0)}`}
                  fill="transparent"
                  strokeWidth={2}
                  stroke={colorVariables.brandPrimary}
                />
              </g>;
            })()}

            {/* Render the circles on top of the chart to indicate key points */}
            {(() => {
              const occupancyX = xScale(this.convertTimeToSeconds(peakOccupancyTimestamp));
              const peakRateOfEntryX = xScale(this.convertTimeToSeconds(peakRateOfEntryTimestamp));
              return (
                <g>
                  {/* Render circle around occupancy peak */}
                  <circle
                    r={13}
                    cx={occupancyX}
                    cy={yScale(peakOccupancyQuantity)}
                    fill={addAlphaToHex(colorVariables.brandSuccess, 0.37)}
                    stroke={colorVariables.brandSuccess}
                    strokeWidth={2}
                  />

                  {/* Render circle around rate of entry peak */}
                  <circle
                    r={13}
                    cx={peakRateOfEntryX}
                    cy={yScale(peakRateOfEntryQuantity) + (occupancyX === peakRateOfEntryX ? -5 : 0)}
                    fill={addAlphaToHex(colorVariables.brandWarning, 0.35)}
                    stroke={colorVariables.brandWarning}
                    strokeWidth={2}
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
    .format('hh:mma')
    .slice(0, -1); /* am -> a */
}

function peoplePluralizer(n) {
  if (n === 1) {
    return 'person';
  } else {
    return 'people';
  }
}

function addAlphaToHex(hex, alpha) {
  const color = hexRgb(hex);
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
}

export default function ReportTimeSegmentBreakdown({
  title,
  startDate,
  endDate,

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
    >
      <ReportCard>
        <h2 className={styles.reportTimeSegmentBreakdownHeader}>
          You had a daily average of{' '}
          <span className={styles.reportTimeSegmentBreakdownHeaderHighlight}>
            {commaNumber(dailyAverage)}
          </span> visitors.
        </h2>
        <ReportTimeSegmentBreakdownChart
          timeSegment={timeSegment}
          points={points}
          peakRateOfEntryQuantity={peakRateOfEntryQuantity}
          peakRateOfEntryTimestamp={peakRateOfEntryTimestamp}
          peakOccupancyTimestamp={peakOccupancyTimestamp}
          peakOccupancyQuantity={peakOccupancyQuantity}
        />
        <ul className={styles.reportTimeSegmentBreakdownList}>
          <li className={styles.reportTimeSegmentBreakdownItem}>
            <div
              className={styles.reportTimeSegmentBreakdownItemBubble}
              style={{
                backgroundColor: addAlphaToHex(colorVariables.brandWarning, 0.35),
                borderColor: colorVariables.brandWarning,
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
                backgroundColor: addAlphaToHex(colorVariables.brandSuccess, 0.37),
                borderColor: colorVariables.brandSuccess,
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
      </ReportCard>
    </ReportWrapper>
  );
}
