import React, { Component } from 'react';
import moment from 'moment';

import * as d3Scale from 'd3-scale';
import * as d3Color from 'd3-color';
import * as d3Shape from 'd3-shape';

import styles from './styles.scss';
import colorVariables from '../../../variables/colors.json';

import ReportWrapper, { ReportPadding, ReportCard, ReportSubHeader } from '@density/ui-report-wrapper';

export const CURVE_STEP = 'CURVE_STEP',
             CURVE_BEZIER = 'CURVE_BEZIER';

const CURVE_TYPE_TO_INTERPOLATION_FUNCTION = {
  [CURVE_STEP]: d3Shape.curveStep,
  [CURVE_BEZIER]: d3Shape.curveBasis,
};

export class ReportHorizonChartVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = { width: null };
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

    const { width } = this.state;
    const height = 400;
    const graphHeight = 140;

    const trackCount = Math.ceil(graphHeight / trackHeight);

    const xScale = d3Scale.scaleLinear()
      .domain([ startDate.valueOf(), endDate.valueOf() ])
      .range([0, width]);

    const maxCountPerTrack = data.map(d => Math.max.apply(Math, d.map(bucket => bucket.interval.analytics.max)));
    const maxCount = Math.max.apply(Math, maxCountPerTrack);

    const yScale = d3Scale.scaleLinear()
      .domain([maxCount, 0])
      .range([0, graphHeight]);

    const linePath = d3Shape.line()
      .x(bucket => xScale(bucket.timestamp.valueOf()))
      .y(bucket => yScale(bucket.interval.analytics.max))
      .curve(CURVE_TYPE_TO_INTERPOLATION_FUNCTION[trackCurveType]);

    const tracks = data.map((d, index) => {
      const translatedPathElements = [];
      for (let i = 0; i < trackCount; i++) {
        translatedPathElements.push(
          <use
            key={`track-${index},${i}`}
            href={`#track-${index}`}
            x={0}
            y={i * trackHeight}
          />
        );
      }

      return {
        id: index,
        data: d,
        translatedPathElements,
        linePath: linePath(d),
      };
    });

    return (
      <div className={styles.reportHorizonChart} ref={r => { this.container = r; }}>
        {width !== null ? (
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
          >
            <clipPath id="track-clippath">
              <rect
                x={xScale(startDate.valueOf())}
                y={yScale(0) - trackHeight}
                width={xScale(endDate.valueOf()) - xScale(startDate.valueOf())}
                height={trackHeight}
              />
            </clipPath>

            {tracks.map(({id, data, linePath, translatedPathElements}, index) => (
              <g key={id} transform={`translate(0,${index * (trackHeight + trackVerticalSpacing)})`}>
                {/*
                  Apply the above clip path to what's being drawn in order to only show the part of all the
                  paths that intersect (remove it and it may make more sense how it works if you're confused)
                */}
                <g
                  transform={`translate(0,${-1 * (graphHeight - trackHeight)})`}
                  clipPath={`url(#track-clippath)`}
                >
                  {/*
                    Next, render the shape of data. This is pretty much the same algorithm used in the foot
                    traffic chart - loop through all data and assemble a svg path. In a
                  */}
                  <g id={`track-${id}`}>
                    <path
                      shapeRendering="crispEdges"
                      d={`
                        M${xScale(startDate.valueOf())}, ${yScale(0)}
                        L${xScale(startDate.valueOf())}, ${yScale(data[0].interval.analytics.max)}
                        H${xScale(data[0].timestamp.valueOf())}

                        ${linePath}

                        H${xScale(data[data.length - 1].timestamp.valueOf())}
                        V${yScale(0)}
                        H${xScale(startDate.valueOf())}
                      `}

                      /* fill each "layer" so that when stacked the highest layer will completely `brandPrimaryNew` */
                      fill={colorVariables.brandPrimaryNew}
                      opacity={1 / trackCount}
                    />
                  </g>

                  {/*
                    Finally, add all those <use> elements down here. Those will effectively "repeat" the
                    path over and over with a different vertical translation, causing the shape that you see.
                  */}
                  {translatedPathElements}
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
}) {
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
              >
                <span>{space.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.reportHorizonChartVisualization}>
            <ReportHorizonChartVisualization
              trackHeight={36}
              trackVerticalSpacing={12}
              trackCurveType={CURVE_BEZIER}
              startDate={startDate}
              endDate={endDate}
              data={spaces.map(space => space.data)}
            />
          </div>
        </div>
      </ReportCard>
    </ReportWrapper>
  );
}
