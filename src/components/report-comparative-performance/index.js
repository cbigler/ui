import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import commaNumber from 'comma-number';

import styles from './styles.scss';

import ReportWrapper, { ReportCard, ReportSubHeader } from '@density/ui-report-wrapper';

export const COMPARATIVE_WEEK = 'WEEK',
             COMPARATIVE_MONTH = 'MONTH',
             COMPARATIVE_QUARTER = 'QUARTER';

const MODE_TO_UNIT = {
  [COMPARATIVE_WEEK]: 'week',
  [COMPARATIVE_MONTH]: 'month',
  [COMPARATIVE_QUARTER]: 'quarter',
};

function getRangeLastUnitValue(mode) {
  switch (mode) {
  case COMPARATIVE_WEEK:
    return 'Last Week';
  case COMPARATIVE_MONTH:
    return 'Last Month';
  case COMPARATIVE_QUARTER:
    return 'Last Quarter';
  default:
    return null;
  }
}
function getRangePreviousUnitValue(mode) {
  switch (mode) {
  case COMPARATIVE_WEEK:
    return 'the previous week';
  case COMPARATIVE_MONTH:
    return 'the previous month';
  case COMPARATIVE_QUARTER:
    return 'the previous quarter';
  default:
    return null;
  }
}
function getRangeName(mode, start) {
  switch (mode) {
  case COMPARATIVE_WEEK:
    return `Week of ${start.format('MMM D')}`
  case COMPARATIVE_MONTH:
    return `${start.format('MMM')}`;
  case COMPARATIVE_QUARTER:
    return `Q${start.quarter()}`;
  default:
    return null;
  }
}

export default function ReportComparativePerformance({
  title,
  space,

  mode,
  lastData,
  previousData,
}) {
  const nowAtSpace = moment.utc().tz(space.timeZone);
  const unit = MODE_TO_UNIT[mode];

  const lastStartDate = nowAtSpace.clone().startOf(unit).subtract(1, unit);
  const lastEndDate = lastStartDate.clone().endOf(unit);

  const previousStartDate = lastStartDate.clone().subtract(1, unit);
  const previousEndDate = previousStartDate.clone().endOf(unit);

  const visitPercentageDifference = (
    previousData.totalVisits - lastData.totalVisits
  ) / previousData.totalVisits;
  const peakCountPercentageDifference = (
    previousData.averagePeakCount - lastData.averagePeakCount
  ) / previousData.averagePeakCount;

  return (
    <ReportWrapper
      title={title}
      spaces={[space.name]}
    >
      <ReportSubHeader
        title={(
          <span>
            <strong>{getRangeLastUnitValue(mode)}</strong> had{' '}
            <strong>{Math.round(Math.abs(visitPercentageDifference * 100))}%</strong>{' '}
            {visitPercentageDifference >= 0 ? 'more' : 'less'} visits{' '}
            than {getRangePreviousUnitValue(mode)}.
          </span>
        )}
      />
      <ReportCard noPadding>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th className={styles.tableHighlight}>
                <strong>{getRangeName(mode, lastStartDate)}</strong>
                <span className={styles.subheading}>
                  <span className={styles.subheadingDate}>{lastStartDate.format('MMM D, YYYY')}</span> -{' '}
                  <span className={styles.subheadingDate}>{lastEndDate.format('MMM D, YYYY')}</span>
                </span>
              </th>
              <th>
                <strong>{getRangeName(mode, previousStartDate)}</strong>
                <span className={styles.subheading}>
                  <span className={styles.subheadingDate}>{previousStartDate.format('MMM D, YYYY')}</span> -{' '}
                  <span className={styles.subheadingDate}>{previousEndDate.format('MMM D, YYYY')}</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Visits</td>
              <td className={styles.tableHighlight}>{commaNumber(lastData.totalVisits)}</td>
              <td>
                {commaNumber(previousData.totalVisits)}{' '}
                <span className={classnames(styles.percentage, {
                  [styles.percentagePositive]: visitPercentageDifference > 0,
                  [styles.percentageNegative]: visitPercentageDifference < 0,
                })}>({Math.round(Math.abs(visitPercentageDifference * 100))}%)</span>
              </td>
            </tr>
            <tr>
              <td>Average Peak Count</td>
              <td className={styles.tableHighlight}>{commaNumber(lastData.averagePeakCount)}</td>
              <td>
                {commaNumber(previousData.averagePeakCount)}{' '}
                <span className={classnames(styles.percentage, {
                  [styles.percentagePositive]: peakCountPercentageDifference > 0,
                  [styles.percentageNegative]: peakCountPercentageDifference < 0,
                })}>({Math.round(Math.abs(peakCountPercentageDifference * 100))}%)</span>
              </td>
            </tr>
            <tr>
              <td>Average Peak Time</td>
              <td className={styles.tableHighlight}>
                {
                  moment.utc()
                    .startOf('day')
                    .add(lastData.averagePeakTime.asSeconds(), 'seconds')
                    .format('H:mma')
                    .slice(0, -1)
                }
              </td>
              <td>
                {
                  moment.utc()
                    .startOf('day')
                    .add(previousData.averagePeakTime.asSeconds(), 'seconds')
                    .format('H:mma')
                    .slice(0, -1)
                }
              </td>
            </tr>
          </tbody>
        </table>
      </ReportCard>
    </ReportWrapper>
  );
}
