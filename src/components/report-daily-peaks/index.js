import React, { Component } from 'react';
import moment from 'moment';

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { normal } from 'color-blend';
import { hexRgb } from '../../helpers/color';

import styles from './styles.scss';
import colorVariables from '../../../variables/colors.json';

import ReportWrapper, {
  ReportCard,
  ReportSubHeader,
  ReportOptionBar,
} from '@density/ui-report-wrapper';

export const CURVE_STEP = 'CURVE_STEP',
             CURVE_LINEAR = 'CURVE_LINEAR',
             CURVE_BEZIER = 'CURVE_BEZIER',
             CURVE_CARDINAL = 'CURVE_CARDINAL';

const CURVE_TYPE_TO_INTERPOLATION_FUNCTION = {
  [CURVE_STEP]: d3Shape.curveStepBefore,
  [CURVE_LINEAR]: d3Shape.curveLinear,
  [CURVE_BEZIER]: d3Shape.curveBasis,
  [CURVE_CARDINAL]: d3Shape.curveCardinal,
};

export const VISITS = 'VISITS',
             OCCUPANCY = 'OCCUPANCY';

const METRIC_SETTINGS = {
  [VISITS]: {
    name: 'Visits',
    keyLabel: 'People/min',
    valueSuffix: '/min',
  },
  [OCCUPANCY]: {
    name: 'Occupancy',
    keyLabel: 'People',
    valueSuffix: ' people',
  },
};

export class HorizonChartVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = { unique: Math.random().toString() };
  }

  render() {
    const {
      height,
      maxValue,
      maxBucket,
      colorBands,
      curveType,
      start,
      end,
      data,
    } = this.props;

    // Internal width for the SVG layout to use
    const width = 1000;

    // Unclipped height
    const unclippedHeight = height * colorBands.length;

    // Save start/end timestamp values
    const startValue = start.valueOf();
    const endValue = end.valueOf();

    // Using the start and end time passed, create a scale that maps from the time range to a scale
    // from 0 to the svg width. This is used to plot timestamps for each horizon chart.
    const xScale = d3Scale.scaleLinear()
      .domain([ startValue, endValue ])
      .range([0, width]);

    // Calculate max count in the plot
    const maxScale = maxValue || Math.max.apply(Math, data.map(item => item.value));

    // Y scale for the unclipped data
    const unclippedYScale = d3Scale.scaleLinear()
      .domain([maxScale, 0])
      .range([0, unclippedHeight]);

    // Give d3.line() an array of points, and use it's interpolation to produce a path with the
    // specified interpolation method.
    const linePath = d3Shape.line()
      .x(item => xScale(item.timestamp))
      .y(item => unclippedYScale(item.value))
      .curve(CURVE_TYPE_TO_INTERPOLATION_FUNCTION[curveType]);

    // In order to overlap the paths, repeat the same path once for each color.
    // Each successive path is shifted down by one track height.
    const repeatedPaths = data.length > 0 ? colorBands.map((color, index) => <path
      key={color}
      fill={color}
      transform={`translate(0, ${index * height})`}
      d={`
        M${xScale(startValue)}, ${unclippedYScale(0)}
        L${xScale(startValue)}, ${unclippedYScale(data[0].value)}
        H${xScale(data[0].timestamp)}

        ${linePath(data)}

        H${xScale(data[data.length - 1].timestamp)}
        V${unclippedYScale(0)}
        H${xScale(startValue)}
      `}
    />) : null;

    return (
      <div style={{position: 'relative'}}>
        {/* After the width has been set in `componentDidMount`, then render the svg */}
        {width !== null ? (
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
          >
            <clipPath id={`horizon-chart-${this.state.unique}-clippath`}>
              <rect
                x={xScale(startValue)}
                y={unclippedYScale(0) - height}
                width={xScale(endValue) - xScale(startValue)}
                height={height}
              />
            </clipPath>
            <g>
              {/*
                Apply the above clip path to what's being drawn in order to only show the part of
                all the paths that intersect (remove it and it may make more sense how it works if
                you're confused). We only want to show the part of the graph where all of the
                paths intersect.
              */}
              <g
                transform={`translate(0,${-1 * (unclippedHeight - height)})`}
                clipPath={`url(#horizon-chart-${this.state.unique}-clippath)`}
              >
                {/*
                  Finally, render all the <path> elements with different Y offsets
                */}
                {repeatedPaths}
              </g>
            </g>
          </svg>
        ) : null}
        {data.length === 0 ?
          <div style={{
            position: 'absolute',
            fontSize: '12px',
            color: colorVariables.grayDarker,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>No data</div> : null}
        {maxBucket && maxBucket.timestamp ?
          <div style={{
            position: 'absolute',
            left: `calc(${xScale(maxBucket.timestamp) / 10}% - 1px)`,
            width: 2,
            top: 0,
            height: height,
            backgroundColor: colorVariables.brandPrimaryNew
          }}></div> : null}
      </div>
    );
  }
}

export function HorizonChartAxis({
  start,
  end
}) {
  const width = 1000;

  const numberOfHours = end.diff(start, 'hours');
  const distanceBetweenHoursInPx = width / numberOfHours;

  let hoursBetweenTicks = 1;
  if (distanceBetweenHoursInPx < 30) {
    hoursBetweenTicks = 3;
  } else if (distanceBetweenHoursInPx < 50) {
    hoursBetweenTicks = 2;
  }

  const marks = [];
  for (let label = start.clone().startOf('hour'); label.valueOf() <= end.valueOf(); label = label.clone().add(hoursBetweenTicks, 'hours')) {
    if (label.valueOf() >= start.valueOf()) {
      marks.push({
        value: label.valueOf(),
        label: label.format('ha').slice(0, -1),
      });
    }
  }

  const xScale = d3Scale.scaleLinear()
    .domain([ start.valueOf(), end.valueOf() ])
    .range([0, width]);

  return <div style={{
    width: "100%",
    height: "24px",
    position: "relative"
  }}>
    {marks.map(({value, label}, index) => (
      <div
        key={value}
        style={{
          userSelect: 'none',
          position: 'absolute',
          left: `${xScale(value) * 100 / width}%`,
          transform: index === 0 && value === start.valueOf() ?
            'translate(0%)' :
            (index === marks.length - 1 && value === end.valueOf() ? 
              'translate(-100%)' :
              'translate(-50%)'),
          color: colorVariables.grayDarker,
          fontSize: 12
        }}
      >{label}</div>
    ))}
  </div>;
}

export default function ReportDailyPeaks({
  title,
  startDate,
  endDate,
  spaces,
  data,
  curveType = CURVE_CARDINAL,
  numberOfBands = 4,
  metric = VISITS
}) {
  // Mix opaque colors for each band
  const whiteBackground  = { r: 255, g: 255, b: 255, a: 1 };
  const colorBands = [];
  for (let i = 0; i < numberOfBands; i++) {
    const rgb = hexRgb(colorVariables.grayDarker);
    const alpha = (i + 1) / numberOfBands;
    const blended = normal(whiteBackground, { r: rgb.red, g: rgb.green, b: rgb.blue, a: alpha });
    colorBands.push(`rgba(${blended.r}, ${blended.g}, ${blended.b}, ${blended.a}`);
  }

  // Get reference to "metric settings" object for this metric
  const metricSettings = METRIC_SETTINGS[metric];

  // Find the min/max time that we see peaks for a day
  const earliestPeak = moment.utc(Math.min.apply(Math, data.map(
    day => day.maxBucket.timestamp ? 
      moment.utc(day.maxBucket.timestamp.format('HH:mm'), 'HH:mm') :
      moment.max()
  )));
  const latestPeak = moment.utc(Math.max.apply(Math, data.map(
    day => day.maxBucket.timestamp ?
      moment.utc(day.maxBucket.timestamp.format('HH:mm'), 'HH:mm') :
      moment.min()
  )));

  // Find the overall max value and define the color band labels for the key
  const maxValue = Math.max.apply(Math, data.map(i => i.maxBucket.value));
  const colorBandLabels = colorBands.map((band, index) => {
    const bandMin = index > 0 ? Math.floor(index * maxValue / colorBands.length) + 1 : 0;
    const bandMax = Math.floor((index + 1) * maxValue / colorBands.length);
    return {
      id: index,
      color: band,
      label: bandMax > bandMin ? `${bandMin}-${bandMax}` : bandMax
    };
  });

  // Render the report!
  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportSubHeader
        title={maxValue > 0 ? 
          <span>Peak {metricSettings.name.toLowerCase()} occurred between{' '}
            <strong>{earliestPeak.format('h:mma').slice(0, -1)}</strong>
            {' '}and{' '}
            <strong>{latestPeak.format('h:mma').slice(0, -1)}</strong>
            {' '}on these days.
          </span> : 
          <span><strong>No data</strong> for these days.</span>}
      >
        {maxValue > 0 ? <div className={styles.reportDailyPeaksKey}>
          <strong style={{ transform: 'translate(0, 1px)', marginRight: 10 }}>{metricSettings.keyLabel}: </strong>
          <ReportOptionBar options={colorBandLabels} />
        </div> : null}
      </ReportSubHeader>
      <ReportCard>
        <div className={styles.reportDailyPeaksTable}>
          <div className={styles.reportDailyPeaksTableColumn}>
            <div className={styles.reportDailyPeaksTableHeader}>Day</div>
            {data.map(day => <div
              key={day.start}
              className={styles.reportDailyPeaksTableText}
            >
              <span>{day.start.format('ddd')}</span>
              <span style={{fontSize:12}}>{day.start.format('MMM\u00a0D')}</span>
            </div>)}
          </div>
          <div className={styles.reportDailyPeaksTableColumn}>
            <div className={styles.reportDailyPeaksTableHeader}>Peak</div>
            {data.map(day => <div
              key={day.start}
              className={styles.reportDailyPeaksTableText}
            >
              <strong style={{ color: colorVariables.brandPrimaryNew }}>
                {day.maxBucket.timestamp ? '' : '-'}
                {day.maxBucket.timestamp ? day.maxBucket.timestamp.format('h:mma').slice(0, -1) : ''}
              </strong>
              <span style={{ fontSize:12 }}>
                {day.maxBucket.value > 0 ? day.maxBucket.value : ''}
                {metricSettings.valueSuffix}
              </span>
            </div>)}
          </div>
          <div className={styles.reportDailyPeaksTableColumn} style={{ flexGrow: 1 }}>
            <div className={styles.reportDailyPeaksTableHeader}>
              {metricSettings.name}
            </div>
            {data.map(day => <div
              key={day.start}
              className={styles.reportDailyPeaksVisualizationContainer}
            >
              <HorizonChartVisualization
                key={day.start}
                height={42}
                maxValue={maxValue}
                maxBucket={day.maxBucket.timestamp ? day.maxBucket : undefined}
                colorBands={colorBands}
                curveType={curveType}
                start={day.start}
                end={day.end}
                data={day.data}
              />
            </div>)}
            {maxValue > 0 ? <div className={styles.reportDailyPeaksAxisContainer}>
              <HorizonChartAxis start={data[0].start} end={data[0].end} />
            </div> : null}
          </div>
        </div>
      </ReportCard>
    </ReportWrapper>
  );
}
//{showExpandControl ? <ReportExpandController onClick={onReportExpand} /> : null}
