import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import commaNumber from 'comma-number';

import styles from './styles.scss';

import ReportWrapper, { ReportCard, ReportSubHeader, ReportOptionBar } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';

const OCCUPANCY_BAR_COLORS = [
  colorVariables.reportBlue,
  colorVariables.reportOrange,
  colorVariables.reportYellow,
  colorVariables.reportGreen,
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
              style={{ width: `${totalSegmentValue ? segment / totalSegmentValue * 100 : 0}%` }}
              key={`${segment},${ct}`}
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
        <span
          className={styles.occupancyBarLabelSpacer}
          style={{marginLeft: totalSegmentValue === 0 ? 0 : undefined}}
        >
            {commaNumber(totalSegmentValue)}
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
  spaces,

  segments,
  timeSegmentNames,
  busiestDate,
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
      spaces={spaces}
    >
      <ReportSubHeader
        title={<span><strong>{busiestDate.format('dddd')}</strong> was your busiest day.</span>}
      >
        {multipleTimeSegmentsShown ? (
          <ReportOptionBar
            options={timeSegmentNames.map((name, index) => ({
              id: index,
              color: OCCUPANCY_BAR_COLORS[index],
              label: name,
            }))}
          />
        ) : null}
      </ReportSubHeader>
      <ReportCard>
        <ul className={styles.dayList}>
          {(() => {
            const days = [];
            let index = 0;
            for (let day = startDate.clone(); day.isSameOrBefore(endDate); day = day.clone().add(1, 'day')) {
              days.push(
                <li key={day.format()} className={styles.dayListItem}>
                  {/* The day of the week */}
                  <span className={classnames(styles.dayName, day.format() === busiestDate.format() ? styles.dayNameHighlight : null)}>
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
  spaces: propTypes.arrayOf(propTypes.string).isRequired,

  segments: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
  timeSegmentNames: propTypes.arrayOf(propTypes.string), /* not required when only one segment is passed */
};
