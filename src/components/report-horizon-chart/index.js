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
             CURVE_BEZIER = 'CURVE_BEZIER';

const CURVE_TYPE_TO_INTERPOLATION_FUNCTION = {
  [CURVE_STEP]: d3Shape.curveStepBefore,
  [CURVE_BEZIER]: d3Shape.curveBasis,
};

export class ReportHorizonChartVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      unique: Math.random().toString(),
    };
    this.onResize = this.onResize.bind(this);
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
    this.setState({ width });
  }

  render() {
    const {
      trackHeight,
      trackVerticalSpacing,
      trackCurveType,
      startDate,
      endDate,
      data,
    } = this.props;
    const { width, unique } = this.state;

    // Calculate the svgs height given the amount of data to show.
    const height = data.length * (trackHeight+trackVerticalSpacing);
    const graphHeight = 140;

    // The number of times that the graph "overflows" for each space.
    const trackCount = Math.ceil(graphHeight / trackHeight);

    // Using the start and end time passed, create a scale that maps from the time range to a scale
    // from 0 to the svg width. This is used to plot timestamps for each horizon chart.
    const xScale = d3Scale.scaleLinear()
      .domain([ startDate.valueOf(), endDate.valueOf() ])
      .range([0, width]);

    // Calculate the max count in the whole chart. This is used to determine the shading scale such
    // that the thing with the highest count in the whole chart will be the darkest shade of the
    // color specified. In addition, this value is used in the y axis scale below.
    const maxCountPerTrack = data.map(d => Math.max.apply(Math, d.map(bucket => bucket.interval.analytics.max)));
    const maxCount = Math.max.apply(Math, maxCountPerTrack);

    // Create a y scale for each horizon chart. NOTE: this scale is used for each horizon chart
    // specifically (each one is in a translated <g>), and not global to the svg. (That's why I
    // called it `localYScale`.)
    const localYScale = d3Scale.scaleLinear()
      .domain([maxCount, 0])
      .range([0, graphHeight]);

    // Give d3.line() an array of points, and use it's interpolation to produce a path with the
    // specified interpolation method.
    const linePath = d3Shape.line()
      .x(bucket => xScale(bucket.timestamp.valueOf()))
      .y(bucket => localYScale(bucket.interval.analytics.max))
      .curve(CURVE_TYPE_TO_INTERPOLATION_FUNCTION[trackCurveType]);

    // Create the path and path repeats for each space's chart.
    const charts = data.map((d, index) => {
      // Start by creating the path - this effectively is one layer of the horizon chart. Note how
      // it's given a unique id, we need that below.
      const horizonChartPath = (
        <g id={`report-${unique}-track-${index}`}>
          <path
            d={`
              M${xScale(startDate.valueOf())}, ${localYScale(0)}
              L${xScale(startDate.valueOf())}, ${localYScale(d[0].interval.analytics.max)}
              H${xScale(d[0].timestamp.valueOf())}

              ${linePath(d)}

              H${xScale(d[d.length - 1].timestamp.valueOf())}
              V${localYScale(0)}
              H${xScale(startDate.valueOf())}
            `}

            /* fill each "layer" so that when stacked the highest layer will completely `brandPrimaryNew` */
            fill={colorVariables.brandPrimaryNew}
            opacity={1 / trackCount}
          />
        </g>
      );

      // In order to repeat the paths, utilize the <use> svg element. It accepts an id of an
      // element, and in the below case, moves each successive element down one track height.
      const repeatedTracks = [];
      for (let i = 0; i < trackCount; i++) {
        repeatedTracks.push(
          <use
            key={`track-${index},${i}`}
            href={`#report-${unique}-track-${index}`}
            x={0}
            y={i * trackHeight} /* translate each one virtically downward by one track height */
          />
        );
      }

      return {
        id: index,
        path: horizonChartPath,
        repeatedTracks,
        linePath: linePath(d),
      };
    });

    return (
      <div className={styles.reportHorizonChart} ref={r => { this.container = r; }}>
        {/* After the width has been set in `componentDidMount`, then render the svg */}
        {width !== null ? (
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
          >
            <clipPath id={`report-${unique}-track-clippath`}>
              <rect
                x={xScale(startDate.valueOf())}
                y={localYScale(0) - trackHeight}
                width={xScale(endDate.valueOf()) - xScale(startDate.valueOf())}
                height={trackHeight}
              />
            </clipPath>

            {charts.map(({id, path, repeatedTracks}, index) => (
              <g key={id} transform={`translate(0,${index * (trackHeight + trackVerticalSpacing)})`}>
                {/*
                  Apply the above clip path to what's being drawn in order to only show the part of
                  all the paths that intersect (remove it and it may make more sense how it works if
                  you're confused). We only want to show the part of the graph where all of the
                  paths intersect.
                */}
                <g
                  transform={`translate(0,${-1 * (graphHeight - trackHeight)})`}
                  clipPath={`url(#report-${unique}-track-clippath)`}
                >
                  {/*
                    Next, render the shape of data. This is pretty much the same algorithm used in the foot
                    traffic chart - loop through all data and assemble a svg path. In a
                  */}
                  {path}

                  {/*
                    Finally, add all those <use> elements down here. Those will effectively "repeat" the
                    path over and over with a different vertical translation, causing the shape that you see.
                  */}
                  {repeatedTracks}
                </g>
              </g>
            ))}
          </svg>
        ) : null}
      </div>
    );
  }
}

export default function ReportHorizonChart({
  title,
  startDate,
  endDate,
  spaces,
  trackCurveType,

  displayContext: {
    showExpandControl,
    onReportExpand,
    trackHeight,
    trackVerticalSpacing,
  }
}) {
  trackHeight = trackHeight || 24;
  trackVerticalSpacing = trackVerticalSpacing || 12;

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces.map(space => space.name)}
    >
      <ReportCard>
        <div className={styles.reportHorizonChartContainer}>
          <div className={styles.reportHorizonChartSpaceNameList}>
            {spaces.map(space => (
              <div
                key={space.id}
                className={styles.reportHorizonChartSpaceNameListItem}
                style={{
                  lineHeight: `${trackHeight}px`,
                  marginBottom: `${trackVerticalSpacing}px`,
                }}
              >
                <span>{space.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.reportHorizonChartVisualization}>
            <ReportHorizonChartVisualization
              trackHeight={trackHeight}
              trackVerticalSpacing={trackVerticalSpacing}
              trackCurveType={trackCurveType}
              startDate={startDate}
              endDate={endDate}
              data={spaces.map(space => space.data)}
            />
          </div>
        </div>
      </ReportCard>
      {showExpandControl ? <ReportExpandController onClick={onReportExpand} /> : null}
    </ReportWrapper>
  );
}
