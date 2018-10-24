import React, { Component } from 'react';
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
    for (let i = start; i.asHours() <= end.asHours(); i = i.clone().add(1, 'hour')) {
      let label = i.asHours();
      marks.push({
        value: i.asSeconds(),
        label: moment.utc().startOf('day').add(label, 'hours').format('ha').slice(0, -1),
      });
    }

    return marks;
  }

  render() {
    const { data, startDate, endDate, timeSegment, highestCapacity, capacity } = this.props;
    const { width } = this.state;

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

                    let color;
                    if (0 <= percent && percent < 0.39) {
                      color = QUIET_COLOR;
                    } else if (0.40 <= percent && percent < 0.59) {
                      color = BUSY_COLOR;
                    } else {
                      color = OVER_CAPACITY_COLOR;
                    }

                    const highestCapacityLabel = highestCapacity.find(h => (
                      h.start === start && h.end === end
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
  data,
  capacity,
}) {
  const highestCapacityPerDay = data.reduce((acc, day, index) => {
    return [
      ...acc,
      ...getMaximumsByKey(day, d => d.count / capacity).map(i => Object.assign({}, i, {
        day: startDate.clone().add(index, 'days'),
      }))
    ];
  }, []);

  const highestCapacity = getMaximumsByKey(highestCapacityPerDay, d => d.count / capacity);

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportSubHeader
        title={highestCapacity.map(highCapacityDay => (
          <span className={styles.header} key={`${highCapacityDay.start},${highCapacityDay.end}`}>
            <strong>{highCapacityDay.day.format('dddd')}</strong> was over
            capacity for <strong>
              {moment.duration(
                moment.duration(highCapacityDay.end).asMilliseconds() -
                moment.duration(highCapacityDay.start).asMilliseconds()
              ).humanize()}
            </strong>, peaking at{' '}
            <strong>{highCapacityDay.count}</strong> visitors.
          </span>
        ))}
      >
        <ReportOptionBar
          options={[
            {id: 0, label: 'Quiet (0-39)', color: QUIET_COLOR},
            {id: 1, label: 'Busy (40-59)', color: BUSY_COLOR},
            {id: 2, label: 'Over Capacity (60+)', color: OVER_CAPACITY_COLOR},
          ]}
        />
      </ReportSubHeader>
      <ReportCard>
        <SurpassedCapacityChart
          data={data}
          startDate={startDate}
          endDate={endDate}
          capacity={capacity}
          highestCapacity={highestCapacity}
          timeSegment={timeSegment}
        />
      </ReportCard>
    </ReportWrapper>
  )
}
