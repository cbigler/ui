import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import styles from './styles.scss';

import ReportWrapper, { ReportCard } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';
import hexRgb from 'hex-rgb';

function addAlphaToHex(hex, alpha) {
  const color = hexRgb(hex);
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
}

function MaximumMinimumStatement({title, examples, value}) {
  return (
    <div className={styles.maximumMinimumStatement}>
      <span className={styles.maximumMinimumStatementHighlight}>
        {title}:
      </span> {examples.map((m, index) => (
        [
          <span key={`${index}-0`} className={styles.maximumMinimumStatementHighlight}>
            {m.timeSegmentName}
          </span>,
          ' on ',
          <span key={`${index}-1`} className={styles.maximumMinimumStatementHighlight}>
            {m.dayOfWeek}
          </span>,
          index !== examples.length-1 ? ', ' : null,
          index === examples.length-2 ? 'and ' : null,
        ]
      )).reduce((acc, i) => [...acc, ...i], [])}{' '}
      had <span className={styles.maximumMinimumStatementHighlight}>{value}</span> visits
    </div>
  );
}

export default function ReportDailyVisitsPerSegment({
  title,
  startDate,
  endDate,
  spaces,

  data,
  timeSegments,

  cellColorThreshold,
  cellMinimumOpacity,
  cellMaximumOpacity,
}) {
  // Return a list of all days between the start and end date.
  const days = (function() {
    const days = [];
    for (let day = startDate.clone(); day.isSameOrBefore(endDate); day = day.clone().add(1, 'day')) {
      days.push([
        day.format('ddd'),  // Mon
        day.format('M/DD'), // 3/14
        day.format('dddd'), // Monday
      ]);
    }
    return days;
  })();


  if (days.length > 7) {
    throw new Error(`The duration of time between the start date and end date exceeds 7 days (${days.length} days), this isn't permitted.`);
  }

  if (data.length !== timeSegments.length) {
    throw new Error(`The number of rows of data does not match the length of timeSegments (${data.length} days != ${timeSegments.length} days)`);
  }

  if (data[0].length !== days.length) {
    throw new Error(`The number of columns of data does not match the number of days between startDate and endDate (${data[0].length} days != ${days.length} days)`);
  }

  const minValue = Math.min.apply(Math, data.map(v => Math.min.apply(Math, v)));
  const maxValue = Math.max.apply(Math, data.map(v => Math.max.apply(Math, v)));

  const maxima = data.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (col === maxValue) {
        return {timeSegmentName: timeSegments[rowIndex], dayOfWeek: days[colIndex][2], value: maxValue};
      } else {
        return null;
      }
    }).filter(i => i !== null);
  }).reduce((acc, i) => [...acc, ...i], []); // <- "flatMap"

  const minima = data.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (col === minValue) {
        return {timeSegmentName: timeSegments[rowIndex], dayOfWeek: days[colIndex][2], value: minValue};
      } else {
        return null;
      }
    }).filter(i => i !== null);
  }).reduce((acc, i) => [...acc, ...i], []); // <- "flatMap"

  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces}
    >
      <ReportCard>
        <div className={styles.verticalLayout}>

          <MaximumMinimumStatement
            title="Max"
            value={maxValue}
            examples={maxima}
          />
          <MaximumMinimumStatement
            title="Min"
            value={minValue}
            examples={minima}
          />

          <div className={styles.tableWrapper}>
            <div className={styles.segmentTableTimeSegmentLabels}>
              {timeSegments.map(ts => (
                <span className={styles.segmentTableTimeSegmentLabelCell}>{ts}</span>
              ))}
            </div>
            <div className={styles.segmentTable}>
              <div className={classnames(styles.segmentTableRow, styles.segmentTableRowHeader)}>
                {days.map(day => (
                  <div key={day[1]} className={styles.segmentTableRowCellHeader}>
                    <span>{day[0]}</span>
                    <span>{day[1]}</span>
                  </div>
                ))}
              </div>
              {data.map((row, index) => (
                <div
                  className={styles.segmentTableRow}
                  key={index /* I think this is what we want here, since the position of rows shouldn't change? */}
                >
                  {row.map((value, index) => {
                    const percentageShaded = (value - minValue) / (maxValue - minValue); /* 0...1 */
                    const alpha = cellMinimumOpacity + (percentageShaded * (cellMaximumOpacity - cellMinimumOpacity));
                    const textColorPrimary = alpha < cellColorThreshold;
                    return (
                      <div
                        className={styles.segmentTableCell}
                        key={index /* I think this is what we want here, since the position of cells shouldn't change? */}
                        style={{
                          backgroundColor: addAlphaToHex(colorVariables.brandPrimary, alpha),
                          color: textColorPrimary ? colorVariables.brandPrimary : '#fff',
                        }}
                      >
                        {minValue === value ? 'MIN' : ''}
                        {maxValue === value ? 'MAX' : ''}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReportCard>
    </ReportWrapper>
  )
}
ReportDailyVisitsPerSegment.defaultProps = {
  cellColorThreshold: 0.45,
  cellMinimumOpacity: 0.2,
  cellMaximumOpacity: 1.0,
};
