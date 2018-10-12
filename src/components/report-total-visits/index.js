import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';

import styles from './styles.scss';

import ReportWrapper, { ReportCard } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';
import { reportTotalVisitsOccupancyBarLabelWidthInPx } from './variables.json';

const OCCUPANCY_BAR_COLORS = [
  colorVariables.brandPrimary,
  colorVariables.brandDanger,
  colorVariables.brandWarning,
  colorVariables.brandSuccess,
];
function ReportCardOccupancyBar({totalWidth, segments}) {
  const totalSegmentValue = segments.reduce((a, b) => a + b, 0);
  const multipleTimeSegmentsShown = segments.length > 1;

  return (
    <div className={styles.occupancyBarContainer}>
      <div
        className={styles.occupancyBar}
        style={{ width: `${totalSegmentValue / totalWidth * 100}%` }}
      >
        {segments.map((segment, ct) => {
          return (
            <div
              className={classnames(
                styles.occupancyBarSection,
                multipleTimeSegmentsShown ? styles.occupancyBarSectionContainsLabels : null,
              )}
              style={{ width: `${segment / totalSegmentValue * 100}%` }}
              key={segment}
            >
              {multipleTimeSegmentsShown ? (
                <span
                  className={styles.occupancyBarSegmentLabel}
                  style={{ color: OCCUPANCY_BAR_COLORS[ct] }}
                >
                  <span className={styles.occupancyBarSegmentLabelBefore}></span>
                  <span className={styles.occupancyBarSegmentLabelInner}>
                    {segment}
                  </span>
                </span>
              ) : null}
              <div
                className={styles.occupancyBarSegment}
                style={{ backgroundColor: OCCUPANCY_BAR_COLORS[ct] }}
              />
            </div>
          );
        })}
        <span className={classnames(
          styles.occupancyBarLabel,
          !multipleTimeSegmentsShown ? styles.occupancyBarLabelPrimary : null,
        )}>
          <span className={styles.occupancyBarLabelSpacer}>
            {totalSegmentValue}
          </span>
        </span>
      </div>
    </div>
  );
}

export default function ReportTotalVisits({
  title,
  startDate,
  endDate,

  segments,
  segmentNames,
}) {
  const numberOfDaysInRange = moment.duration(startDate.diff(endDate)).days();

  const multipleTimeSegmentsShown = segments.length > 0 ? (segments[0].length > 1) : false;

  const largestMagnitudeOccupancy = Math.max.apply(Math,
    segments.map(segment => (
      segment.reduce((a, b) => a + b, 0) // Sum up all occupancies in each time segment
    ))
  );

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
    >
      <ReportCard>
        <h3 className={styles.header}>
          <span className={styles.headerBold}>Friday</span> was your busiest day
        </h3>
        <ul className={styles.dayList}>
          {(() => {
            const days = [];
            let index = 0;
            for (let day = startDate.clone(); day.isBefore(endDate); day = day.clone().add(1, 'day')) {
              days.push(
                <li key={day.format()} className={styles.dayListItem}>
                  {/* The day of the week */}
                  <span className={classnames(styles.dayName, day.format('ddd') === 'Fri' ? styles.dayNameHighlight : null)}>
                    {day.format('ddd')}
                  </span>

                  <ReportCardOccupancyBar
                    totalWidth={largestMagnitudeOccupancy}
                    segments={segments[index]}
                  />
                </li>
              );
              index += 1;
            }
            return days;
          })()}
        </ul>
        {multipleTimeSegmentsShown ? (
          <div className={styles.timeSegmentListWrapper}>
            <ul className={styles.timeSegmentList}>
              {segmentNames.map((name, index) => {
                return (
                  <li key={name} className={styles.timeSegmentListItem}>
                    <div
                      className={styles.timeSegmentColor}
                      style={{backgroundColor: OCCUPANCY_BAR_COLORS[index]}}
                    />
                    <span className={styles.timeSegmentName}>{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </ReportCard>
    </ReportWrapper>
  );
}
ReportTotalVisits.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
};
