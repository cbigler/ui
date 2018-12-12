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
    return `${start.format('MMMM')}`;
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
  lastStartDate,
  lastEndDate,
  previousStartDate,
  previousEndDate,
}) {
  const unit = MODE_TO_UNIT[mode];

  const visitPercentageDifference = (
    lastData.totalVisits - previousData.totalVisits
  ) / previousData.totalVisits;
  const peakCountPercentageDifference = (
    lastData.averagePeakCount - previousData.averagePeakCount
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
            <strong>{visitPercentageDifference === Infinity ? <span>&infin;</span> : Math.round(Math.abs(visitPercentageDifference * 100) * 10) / 10}%</strong>{' '}
            {visitPercentageDifference >= 0 ? 'more' : 'fewer'} visits{' '}
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
                <strong>{getRangeName(mode, previousStartDate)}</strong>
                <span className={styles.subheading}>
                  <span className={styles.subheadingDate}>{previousStartDate.format('MMM D, YYYY')}</span> -{' '}
                  <span className={styles.subheadingDate}>{previousEndDate.format('MMM D, YYYY')}</span>
                </span>
              </th>
              <th>
                <strong>{getRangeName(mode, lastStartDate)}</strong>
                <span className={styles.subheading}>
                  <span className={styles.subheadingDate}>{lastStartDate.format('MMM D, YYYY')}</span> -{' '}
                  <span className={styles.subheadingDate}>{lastEndDate.format('MMM D, YYYY')}</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Visits</td>
              <td className={styles.tableHighlight}>{commaNumber(previousData.totalVisits)}</td>
              <td>
                {commaNumber(lastData.totalVisits)}{' '}
                <span className={classnames(styles.percentage, {
                  [styles.percentagePositive]: visitPercentageDifference > 0,
                  [styles.percentageNegative]: visitPercentageDifference < 0,
                })}>
                  {
                    peakCountPercentageDifference === Infinity ?
                    <span>&infin;</span> :
                    Math.round(Math.abs(visitPercentageDifference * 100) * 10) / 10
                  }%
                </span>
              </td>
            </tr>
            <tr>
              <td>Average Peak Count</td>
              <td className={styles.tableHighlight}>{commaNumber(previousData.averagePeakCount)}</td>
              <td>
                {commaNumber(lastData.averagePeakCount)}{' '}
                <span className={classnames(styles.percentage, {
                  [styles.percentagePositive]: peakCountPercentageDifference > 0,
                  [styles.percentageNegative]: peakCountPercentageDifference < 0,
                })}>
                  {
                    peakCountPercentageDifference === Infinity ?
                      <span>&infin;</span> :
                      Math.round(Math.abs(peakCountPercentageDifference * 100) * 10) / 10
                  }%
                </span>
              </td>
            </tr>
            <tr>
              <td>Average Peak Time</td>
              <td className={styles.tableHighlight}>
                {
                  moment.utc()
                    .startOf('day')
                    .add(previousData.averagePeakTime.asSeconds(), 'seconds')
                    .format('h:mma')
                    .slice(0, -1)
                }
              </td>
              <td>
                {
                  moment.utc()
                    .startOf('day')
                    .add(lastData.averagePeakTime.asSeconds(), 'seconds')
                    .format('h:mma')
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
