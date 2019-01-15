import React, { Component } from 'react';
import moment from 'moment';

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import styles from './styles.scss';
import colorVariables from '../../../variables/colors.json';

import ReportWrapper, {
  ReportPadding,
  ReportCard,
  ReportSubHeader,
  ReportExpandController,
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

const BLUES = ["#f7fbff","#f6faff","#f5fafe","#f5f9fe","#f4f9fe","#f3f8fe","#f2f8fd","#f2f7fd","#f1f7fd","#f0f6fd","#eff6fc","#eef5fc","#eef5fc","#edf4fc","#ecf4fb","#ebf3fb","#eaf3fb","#eaf2fb","#e9f2fa","#e8f1fa","#e7f1fa","#e7f0fa","#e6f0f9","#e5eff9","#e4eff9","#e3eef9","#e3eef8","#e2edf8","#e1edf8","#e0ecf8","#e0ecf7","#dfebf7","#deebf7","#ddeaf7","#ddeaf6","#dce9f6","#dbe9f6","#dae8f6","#d9e8f5","#d9e7f5","#d8e7f5","#d7e6f5","#d6e6f4","#d6e5f4","#d5e5f4","#d4e4f4","#d3e4f3","#d2e3f3","#d2e3f3","#d1e2f3","#d0e2f2","#cfe1f2","#cee1f2","#cde0f1","#cce0f1","#ccdff1","#cbdff1","#cadef0","#c9def0","#c8ddf0","#c7ddef","#c6dcef","#c5dcef","#c4dbee","#c3dbee","#c2daee","#c1daed","#c0d9ed","#bfd9ec","#bed8ec","#bdd8ec","#bcd7eb","#bbd7eb","#b9d6eb","#b8d5ea","#b7d5ea","#b6d4e9","#b5d4e9","#b4d3e9","#b2d3e8","#b1d2e8","#b0d1e7","#afd1e7","#add0e7","#acd0e6","#abcfe6","#a9cfe5","#a8cee5","#a7cde5","#a5cde4","#a4cce4","#a3cbe3","#a1cbe3","#a0cae3","#9ec9e2","#9dc9e2","#9cc8e1","#9ac7e1","#99c6e1","#97c6e0","#96c5e0","#94c4df","#93c3df","#91c3df","#90c2de","#8ec1de","#8dc0de","#8bc0dd","#8abfdd","#88bedc","#87bddc","#85bcdc","#84bbdb","#82bbdb","#81badb","#7fb9da","#7eb8da","#7cb7d9","#7bb6d9","#79b5d9","#78b5d8","#76b4d8","#75b3d7","#73b2d7","#72b1d7","#70b0d6","#6fafd6","#6daed5","#6caed5","#6badd5","#69acd4","#68abd4","#66aad3","#65a9d3","#63a8d2","#62a7d2","#61a7d1","#5fa6d1","#5ea5d0","#5da4d0","#5ba3d0","#5aa2cf","#59a1cf","#57a0ce","#569fce","#559ecd","#549ecd","#529dcc","#519ccc","#509bcb","#4f9acb","#4d99ca","#4c98ca","#4b97c9","#4a96c9","#4895c8","#4794c8","#4693c7","#4592c7","#4492c6","#4391c6","#4190c5","#408fc4","#3f8ec4","#3e8dc3","#3d8cc3","#3c8bc2","#3b8ac2","#3a89c1","#3988c1","#3787c0","#3686c0","#3585bf","#3484bf","#3383be","#3282bd","#3181bd","#3080bc","#2f7fbc","#2e7ebb","#2d7dbb","#2c7cba","#2b7bb9","#2a7ab9","#2979b8","#2878b8","#2777b7","#2676b6","#2574b6","#2473b5","#2372b4","#2371b4","#2270b3","#216fb3","#206eb2","#1f6db1","#1e6cb0","#1d6bb0","#1c6aaf","#1c69ae","#1b68ae","#1a67ad","#1966ac","#1865ab","#1864aa","#1763aa","#1662a9","#1561a8","#1560a7","#145fa6","#135ea5","#135da4","#125ca4","#115ba3","#115aa2","#1059a1","#1058a0","#0f579f","#0e569e","#0e559d","#0e549c","#0d539a","#0d5299","#0c5198","#0c5097","#0b4f96","#0b4e95","#0b4d93","#0b4c92","#0a4b91","#0a4a90","#0a498e","#0a488d","#09478c","#09468a","#094589","#094487","#094386","#094285","#094183","#084082","#083e80","#083d7f","#083c7d","#083b7c","#083a7a","#083979","#083877","#083776","#083674","#083573","#083471","#083370","#08326e","#08316d","#08306b"];

export class ReportHorizonChartVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = { unique: Math.random().toString() };
  }

  render() {
    const {
      width,
      height,
      maxValue,
      colorBands,
      curveType,
      startDate,
      endDate,
      data,
    } = this.props;

    // Unclipped height
    const unclippedHeight = height * colorBands.length;

    // Save start/end timestamp values
    const startValue = startDate.valueOf();
    const endValue = endDate.valueOf();

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

    // Start by creating the path - this effectively is one layer of the horizon chart. Note how
    // it's given a unique id, we need that below.
    const horizonChartPath = (
      <path id={`horizon-chart-${this.state.unique}`}
        d={`
          M${xScale(startValue)}, ${unclippedYScale(0)}
          L${xScale(startValue)}, ${unclippedYScale(data[0].value)}
          H${xScale(data[0].timestamp)}

          ${linePath(data)}

          H${xScale(data[data.length - 1].timestamp)}
          V${unclippedYScale(0)}
          H${xScale(startValue)}
        `}
      />
    );

    // In order to overlap the paths, utilize the <use> svg element. It accepts an id of an
    // element, and in the below case, moves each successive element down one track height.
    const repeatedPaths = [];
    for (let i = 1; i < colorBands.length; i++) {
      repeatedPaths.push(
        <use
          key={i}
          href={`#horizon-chart-${this.state.unique}`}
          x={0}
          y={i * height} /* translate each one vertically downward by one height */
          fill={colorBands[i]}
        />
      );
    }

    return (
      <div className={styles.reportHorizonChart}>
        {/* After the width has been set in `componentDidMount`, then render the svg */}
        {width !== null ? (
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
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
                  Next, render the shape of data. This is pretty much the same algorithm used in the foot
                  traffic chart - loop through all data and assemble a svg path. In a
                */}
                <g fill={colorBands[0]}>{horizonChartPath}</g>

                {/*
                  Finally, add all those <use> elements down here. Those will effectively "repeat" the
                  path over and over with a different vertical translation, causing the shape that you see.
                */}
                {repeatedPaths}
              </g>
            </g>
          </svg>
        ) : null}
      </div>
    );
  }
}

export function ReportHorizonChartAxis({
  width,
  startDate,
  endDate
}) {
  const numberOfHours = endDate.diff(startDate, 'hours');
  const distanceBetweenHoursInPx = width / numberOfHours;

  let hoursBetweenTicks = 1;
  if (distanceBetweenHoursInPx < 30) {
    hoursBetweenTicks = 3;
  } else if (distanceBetweenHoursInPx < 50) {
    hoursBetweenTicks = 2;
  }

  const marks = [];
  for (let label = startDate.clone().startOf('hour'); label.valueOf() <= endDate.valueOf(); label = label.clone().add(hoursBetweenTicks, 'hours')) {
    marks.push({
      value: label.valueOf(),
      label: label.tz('America/Los_Angeles').format('ha').slice(0, -1),
    });
  }

  const xScale = d3Scale.scaleLinear()
    .domain([ startDate.valueOf(), endDate.valueOf() ])
    .range([0, width]);

  return <svg width={width} height={12}>
    {marks.map(({value, label}, index, xAxisMarks) => (
      <text
        key={value}
        fill={colorVariables.grayDarker}
        transform={`translate(${xScale(value)}, 10)`}
        fontSize={12}
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
  </svg>;
}

export default function ReportHorizonChart({
  title,
  startDate,
  endDate,
  curveType,
  spaces,
  plots,
}) {

  // TODO: These should be props
  const trackWidth = 600;
  const trackHeight = 48;

  // TODO: This should be a prop
  const numberOfBands = 4;
  const colorBands = [];
  for (let i = 0; i < numberOfBands; i++) {
    colorBands.push(BLUES[Math.ceil((i + 1) * (BLUES.length / numberOfBands)) - 1]);
  }

  // TODO: this should go in the dashboard preprocessing helper
  const processedPlots = plots.map(plot => {
    let maxBucket = { value: 0 };
    const startDateValue = plot.startDate.valueOf();
    const endDateValue = plot.endDate.valueOf();
    const data = plot.data.filter(bucket => (
      bucket.timestamp.valueOf() >= startDateValue && 
      bucket.timestamp.valueOf() <= endDateValue
    )).map(bucket => {
      const bucketValue = bucket.interval.analytics.entrances;
      if (bucketValue > maxBucket.value) { 
        maxBucket = { timestamp: bucket.timestamp, value: bucketValue };
      }
      return { timestamp: bucket.timestamp, value: bucketValue };
    });
    return {
      id: plot.id,
      name: plot.name,
      startDate: plot.startDate,
      endDate: plot.endDate,
      maxBucket,
      data
    };
  })

  const maxValue = Math.max.apply(Math, processedPlots.map(i => i.maxBucket.value));
  const colorBandValues = colorBands.map((band, index) => ({
    color: band,
    value: Math.ceil((index + 1) * maxValue / colorBands.length)
  }));

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces.map(space => space.name)}
    >
      <ReportCard>
        <table>
          <thead>
            <tr>
              <th></th>
              <th style={{fontSize:14}}>
                <div style={{
                  width: '100%',
                  display:'flex',
                  flexDirection: 'row',
                  marginBottom: '10px',
                  fontSize: '12px',
                  fontWeight: 'normal'
              }}>
                  {colorBandValues.map(band => <div style={{flex:1}}>
                    <div style={{color: colorVariables.grayDarker}}>{` <= ${Math.ceil(band.value/5)}/min`}</div>
                    <div style={{backgroundColor: band.color, color: band.color}}>{'x'}</div>
                  </div>)}
                </div>
              </th>
              <th style={{fontSize:14}}>Peak</th>
            </tr>
          </thead>
          <tbody>
            {processedPlots.map((plot, index) => (
              <tr key={plot.id}>
                <td className={styles.reportHorizonChartTableText}>{plot.name}</td>
                <td>
                  <ReportHorizonChartVisualization
                    key={plot.id}
                    width={trackWidth}
                    height={trackHeight}
                    maxValue={maxValue}
                    colorBands={colorBands}
                    curveType={curveType}
                    startDate={plot.startDate}
                    endDate={plot.endDate}
                    data={plot.data}
                  />
                </td>
                <td className={styles.reportHorizonChartTableText} style={{paddingLeft:16}}>
                  {plot.maxBucket.value > 0 ? `${Math.ceil(plot.maxBucket.value/5)}/min` : ''}
                  {plot.maxBucket.timestamp ? ' @ ' : '-'}
                  {plot.maxBucket.timestamp ? plot.maxBucket.timestamp.tz('America/Los_Angeles').format('h:mma').slice(0, -1) : ''}
                </td>
              </tr>
            ))}
            <tr>
                <td></td>
                <td>
                  <ReportHorizonChartAxis
                    width={trackWidth}
                    startDate={plots[0].startDate}
                    endDate={plots[0].endDate} />
                </td>
                <td></td>
            </tr>
          </tbody>
        </table>
      </ReportCard>
    </ReportWrapper>
  );
}
//{showExpandControl ? <ReportExpandController onClick={onReportExpand} /> : null}
