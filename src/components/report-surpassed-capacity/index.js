import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import * as d3Scale from 'd3-scale'; /* note: this package doesn't have a `default` export */

import ReportWrapper, { ReportCard, ReportSubHeader, ReportOptionBar } from '@density/ui-report-wrapper';

import styles from './styles.scss';
import colorVariables from '@density/ui/variables/colors.json';
import spacingVariables from '@density/ui/variables/spacing.json';

const OVER_CAPACITY_COLOR = '#D0021B',
      BUSY_COLOR = '#FF7988',
      QUIET_COLOR = '#FFDCE1';

function getMaximumsByKey(data, keyFunction) {
  const keyedData = data.map(keyFunction);
  const maxValue = Math.max.apply(Math, keyedData);

  return data.filter((_, index) => {
    return keyedData[index] === maxValue;
  });
}

function calculateColorForBucket(count, capacity, {quietBusyThreshold, busyOverCapacityThreshold}) {
  const percent = count / capacity;

  if (0 <= percent && percent < quietBusyThreshold) {
    return QUIET_COLOR;
  } else if (quietBusyThreshold <= percent && percent < busyOverCapacityThreshold) {
    return BUSY_COLOR;
  } else {
    return OVER_CAPACITY_COLOR;
  }
}

class SurpassedCapacityChart extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 300 };
    this.onResize = this.onResize.bind(this);

    this.columnHeight = spacingVariables.reportRowHeight;
    this.xAxisMarkFontSize = 16;
    this.yAxisMarkFontSize = 14;
    this.barSpacingLeft = 48;
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
    for (let i = start; i.hours() <= end.hours(); i = i.clone().add(1, 'hour')) {
      let label = i.hours();
      marks.push({
        value: label * 3600, // convert label to seconds
        label: moment.utc().startOf('day').add(label, 'hours').format('ha').slice(0, -1),
      });
    }

    return marks;
  }

  render() {
    const {
      data,
      startDate,
      endDate,
      timeSegment,

      highestCapacity,
      capacity,

      quietBusyThreshold,
      busyOverCapacityThreshold,
    } = this.props;
    const { width } = this.state;

    if (quietBusyThreshold > 1) {
      throw new Error('quietBusyThreshold is greater than one, it must be within 0...1');
    }
    if (busyOverCapacityThreshold > 1) {
      throw new Error('busyOverCapacityThreshold is greater than one, it must be within 0...1');
    }

    const xScale = d3Scale.scaleLinear()
      .domain([
        this.convertTimeToSeconds(timeSegment.start),
        this.convertTimeToSeconds(timeSegment.end),
      ])
      .range([this.barSpacingLeft, width]);

    // Return a list of all distinct days of the week within the time period passed.
    const days = (function() {
      const days = [];
      for (let day = startDate.clone(); day.isSameOrBefore(endDate); day = day.clone().add(1, 'day')) {
        const shortDay = day.format('ddd');
        if (days.indexOf(shortDay) === -1) {
          days.push(shortDay);
        }
      }
      return days;
    })();

    const height = days.length * this.columnHeight - (this.columnHeight/4) + 5;

    return (
      <div ref={r => { this.container = r; }} className={styles.chartContainer}>
        <svg width={width} height={height + 24 + this.xAxisMarkFontSize}>
          {/* Render bottom axis every hour */}
          {this.generateXAxisMarks().map(({value, label}, index, xAxisMarks) => (
            <text
              key={value}
              fill={colorVariables.grayDarker}
              transform={`translate(${xScale(value)}, ${height+32})`}
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

          {/* Render a bar for each row */}
          {days.map((day, index) => {
            return (
              <g key={day} transform={`translate(0,${(index * this.columnHeight)+(this.columnHeight/2)+5})`}>
                <text
                  transform="translate(0,3)"
                  fontSize={this.yAxisMarkFontSize}
                >{day}</text>

                <g transform="translate(0,-6)">
                  {/* "background" color of each bar*/}
                  <rect
                    x={this.barSpacingLeft}
                    y={0}
                    width={width - this.barSpacingLeft}
                    height={8}
                    fill={QUIET_COLOR}
                  />

                  {/* color each region of interest */}
                  {data[index].map(({start, end, count}) => {
                    const xPos = xScale(this.convertTimeToSeconds(start));
                    const percent = count / capacity;

                    let color = calculateColorForBucket(
                      count, capacity,
                      {quietBusyThreshold, busyOverCapacityThreshold},
                    );

                    const highestCapacityLabel = highestCapacity.find(h => (
                      h.day.format('ddd') === day && h.start === start && h.end === end
                    ));

                    const width = xScale(this.convertTimeToSeconds(end)) - xPos;

                    return (
                      <g key={`${start},${end}`}>
                        {highestCapacityLabel ? (
                          <text
                            fontSize="11"
                            transform={`translate(${xPos+(width/2)},-4)`}
                            textAnchor="middle"
                            fill={OVER_CAPACITY_COLOR}
                          >{highestCapacityLabel.count}</text>
                        ) : null}
                        <rect
                          x={xPos}
                          y={0}
                          width={width}
                          height={8}
                          fill={color}
                        />
                      </g>
                    );
                  })}
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }
}

export default function ReportSurpassedCapacity({
  title,
  startDate,
  endDate,
  spaces,
  timeSegment,
  timeSegmentGroup,
  data,
  capacity,
  quietBusyThreshold,
  busyOverCapacityThreshold,
}) {

  const highestCapacityPerDay = data.reduce((acc, day, dayIndex) => {
    // Add indexes to days so that the buckets can be merged later on to figure out for how much
    // time we were over capacity.
    const daysWithIndexes = day.map((d, bucketIndex) => Object.assign({}, d, {dayIndex, bucketIndex}));
    return [
      ...acc,
      ...getMaximumsByKey(daysWithIndexes, d => d.count / capacity).map(i => Object.assign({}, i, {
        day: startDate.clone().add(dayIndex, 'days'),
      })),
    ];
  }, []);

  let highestCapacity = getMaximumsByKey(highestCapacityPerDay, d => d.count / capacity);

  // If hte highest capacity wasn't actually high enough to be over capacity, then we have no cases
  // where we went over capacity. So, reset `highestCapacity`.
  if ((highestCapacity[0].count / capacity) < busyOverCapacityThreshold) {
    highestCapacity = [];
  }

  // There's a distinct possibility that we found a region that has more over capacity regions
  // before it. In order to show an accurate "over capacity length", move balkwards through the list
  // of regions until we find one that is no longer "over capacity".
  const highCapacityRegionBounds = highestCapacity.map(highCapacityBucket => {
    const originalBucketColor = calculateColorForBucket(
      highCapacityBucket.count, capacity,
      {quietBusyThreshold, busyOverCapacityThreshold},
    );

    const dayDataArray = data[highCapacityBucket.dayIndex];

    // Find the start of this region
    let bucketIndex = highCapacityBucket.bucketIndex;
    let bucketColor = originalBucketColor;

    // Keep going backwards until the bucket we've run into is no longer the same type as the original one.
    while (bucketIndex > 0 && bucketColor === originalBucketColor) {
      bucketIndex -= 1;
      const bucketCount = dayDataArray[bucketIndex].count;
      bucketColor = calculateColorForBucket(
        bucketCount, capacity,
        {quietBusyThreshold, busyOverCapacityThreshold},
      );
    }
    const startOfRegion = dayDataArray[bucketIndex+1].start;

    // Find the end of this region
    bucketIndex = highCapacityBucket.bucketIndex;
    bucketColor = originalBucketColor;

    // Keep going forwards until the bucket we've run into is no longer the same type as the original one.
    while (bucketIndex < dayDataArray.length && bucketColor === originalBucketColor) {
      bucketIndex += 1;
      const bucketCount = dayDataArray[bucketIndex].count;
      bucketColor = calculateColorForBucket(
        bucketCount, capacity,
        {quietBusyThreshold, busyOverCapacityThreshold},
      );
    }
    const endOfRegion = dayDataArray[bucketIndex-1].end;

    return Object.assign({}, highCapacityBucket, {
      startOfRegion,
      endOfRegion,
    });
  });

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportSubHeader
        title={highCapacityRegionBounds.length > 0 ? (
          // One or more places where the count goes over the capacity.
          highCapacityRegionBounds.map(highCapacityDay => (
            <span className={styles.header} key={`${highCapacityDay.start},${highCapacityDay.end}`}>
              <strong>{highCapacityDay.day.format('dddd')}</strong> was over
              capacity for <strong>
                {moment.duration(
                  moment.duration(highCapacityDay.endOfRegion).asMilliseconds() -
                    moment.duration(highCapacityDay.startOfRegion).asMilliseconds()
                ).humanize()}
              </strong>, peaking at{' '}
              <strong>{highCapacityDay.count}</strong> visitors around <strong>
                {
                  moment.utc()
                    .startOf('day')
                    .add(moment.duration(highCapacityDay.start))
                    .format('H:mma')
                    .slice(0, -1)
                }
              </strong>.
            </span>
          ))
        ) : (
          // No places where the count goes over the capacity.
          <span className={styles.header}>
            It was quiet this week during <strong>{timeSegmentGroup.name}</strong>.
          </span>
        )}
      >
        <ReportOptionBar
          options={[
            {
              id: 0,
              label: `Quiet (0-${Math.round(quietBusyThreshold*100)-1})`,
              color: QUIET_COLOR,
            },
            {
              id: 1,
              label: `Busy (${Math.round(quietBusyThreshold*100)}-${Math.round(busyOverCapacityThreshold*100)-1})`,
              color: BUSY_COLOR,
            },
            {
              id: 2,
              label: `Over Capacity (${Math.round(busyOverCapacityThreshold*100)}+)`,
              color: OVER_CAPACITY_COLOR,
            },
          ]}
        />
      </ReportSubHeader>
      <ReportCard>
        <SurpassedCapacityChart
          data={data}
          startDate={startDate}
          endDate={endDate}
          timeSegment={timeSegment}

          capacity={capacity}
          highestCapacity={highestCapacity}

          quietBusyThreshold={quietBusyThreshold}
          busyOverCapacityThreshold={busyOverCapacityThreshold}
        />
      </ReportCard>
    </ReportWrapper>
  )
}

ReportSurpassedCapacity.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  spaces: propTypes.arrayOf(propTypes.string).isRequired,

  timeSegment: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    start: propTypes.string.isRequired,
    end: propTypes.string.isRequired,
    days: propTypes.arrayOf(propTypes.string).isRequired,
    spaces: propTypes.arrayOf(propTypes.any).isRequired,
  }).isRequired,
  timeSegmentGroup: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
  capacity: propTypes.number.isRequired,

  quietBusyThreshold: propTypes.number.isRequired,
  busyOverCapacityThreshold: propTypes.number.isRequired,

  data: propTypes.arrayOf(
    propTypes.arrayOf(
      propTypes.shape({
        count: propTypes.number.isRequired,
        start: propTypes.string.isRequired,
        end: propTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};
