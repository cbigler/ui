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

  return (
    <div className={styles.occupancyBarContainer}>
      <div
        className={styles.occupancyBar}
        style={{ width: `${totalSegmentValue / totalWidth * 100}%` }}
      >
        {segments.map((segment, ct) => {
          return (
            <div
              className={styles.occupancyBarSection}
              style={{ width: `${segment / totalSegmentValue * 100}%` }}
              key={segment}
            >
              <span
                className={styles.occupancyBarSegmentLabel}
                style={{ color: OCCUPANCY_BAR_COLORS[ct] }}
              >
                <span className={styles.occupancyBarSegmentLabelBefore}></span>
                <span className={styles.occupancyBarSegmentLabelInner}>
                  {segment}
                </span>
              </span>
              <div
                className={styles.occupancyBarSegment}
                style={{ backgroundColor: OCCUPANCY_BAR_COLORS[ct] }}
              />
            </div>
          );
        })}
        <span className={styles.occupancyBarLabel}>
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
}) {
  const numberOfDaysInRange = moment.duration(startDate.diff(endDate)).days();

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
      </ReportCard>
    </ReportWrapper>
  );
}
ReportTotalVisits.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
};
