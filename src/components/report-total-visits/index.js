import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import commaNumber from 'comma-number';

import styles from './styles.scss';

import ReportWrapper, { ReportCard, ReportSubHeader, ReportOptionBar } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';

const DEFAULT_OCCUPANCY_BAR_COLORS = [
  colorVariables.reportBlue,
  colorVariables.reportOrange,
  colorVariables.reportYellow,
  colorVariables.reportGreen,
];
function ReportCardOccupancyBar({totalWidth, segments, timeSegmentColors}) {
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
                  style={{ color: timeSegmentColors[ct] }}
                >
                  <span className={styles.occupancyBarSegmentLabelBefore}></span>
                  <span className={styles.occupancyBarSegmentLabelInner}>
                    {commaNumber(segment)}
                  </span>
                </span>
              ) : null}
              <div
                className={styles.occupancyBarSegment}
                style={{ backgroundColor: timeSegmentColors[ct] }}
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

function getMaximumsByKey(data, keyFunction) {
  const keyedData = data.map(keyFunction);
  const maxValue = Math.max.apply(Math, keyedData);

  return data.filter((_, index) => {
    return keyedData[index] === maxValue;
  });
}

export default function ReportTotalVisits({
  title,
  startDate,
  endDate,
  spaces,

  segments,
  timeSegmentNames,
  timeSegmentColors,
}) {
  timeSegmentColors = timeSegmentColors || DEFAULT_OCCUPANCY_BAR_COLORS;
  const numberOfDaysInRange = moment.duration(startDate.diff(endDate)).days();

  const multipleTimeSegmentsShown = segments.length > 0 ? (segments[0].length > 1) : false;

  if (segments.length === 0) {
    throw new Error(`At least one time segment must be passed.`);
  }

  if (!timeSegmentNames && segments[0].length > 1) {
    throw new Error(`A list of time segment names is required when more than one time segment is specified.`);
  }
  if (!timeSegmentColors && segments[0].length > 1) {
    throw new Error(`A list of time segment colors is required when more than one time segment is specified.`);
  }

  if (timeSegmentNames) {
    segments.forEach((segment, index) => {
      if (segment.length !== timeSegmentNames.length) {
        throw new Error(`Segment ${index} does not contain ${timeSegmentNames.length} items - since there are ${timeSegmentNames.length} time segments, it must!`);
      }
    });
  }

  const largestMagnitudeOccupancy = Math.max.apply(Math,
    segments.map(segment => (
      segment.reduce((a, b) => a + b, 0) // Sum up all occupancies in each time segment
    ))
  );

  const totalCountPerSegment = segments.map((s, index) => ({
    count: s.reduce((a, b) => a + b, 0),
    day: startDate.clone().add(index, 'days'),
  }));

  const highestCount = getMaximumsByKey(totalCountPerSegment, s => s.count);

  const highestCountIsZero = highestCount.length > 0 ? highestCount[0].count === 0 : false;

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportSubHeader
        title={highestCountIsZero ? (
          <span><strong>No events</strong> for this time range.</span>
        ) : (
          <span>
            {highestCount.reduce((acc, i, index) => [
              ...acc,
              <strong key={index}>{i.day.format('dddd')}</strong>,
              // i.day.format('dddd'),
              ...(index < highestCount.length-2 ? [', '] : []),
              ...(index === highestCount.length-2 ? [', and '] : []),
            ], [])}
            {' '} {highestCount.length === 1 ? 'was' : 'were'} your busiest{' '}
            {highestCount.length === 1 ? 'day' : 'days'}.
          </span>
        )}
      >
        {multipleTimeSegmentsShown ? (
          <ReportOptionBar
            options={timeSegmentNames.map((name, index) => ({
              id: index,
              color: timeSegmentColors[index],
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
                  <span className={classnames(
                    styles.dayName,
                    highestCount.find(i => (
                      i.day.format('MM/DD/YYYY') === day.format('MM/DD/YYYY')
                    )) ? styles.dayNameHighlight : null
                  )}>
                    {day.format('ddd')}
                  </span>

                  <ReportCardOccupancyBar
                    totalWidth={largestMagnitudeOccupancy}
                    segments={segments[index]}
                    timeSegmentColors={timeSegmentColors}
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
  timeSegmentColors: propTypes.arrayOf(propTypes.string), /* not required when only one segment is passed */
};
