import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import styles from './styles.scss';

import ReportWrapper, { ReportCard, ReportSubHeader } from '@density/ui-report-wrapper';
import colorVariables from '@density/ui/variables/colors.json';
import hexRgb from 'hex-rgb';

function addAlphaToHex(hex, alpha) {
  const color = hexRgb(hex);
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
}

function MaximumMinimumStatement({title, examples, value, titleLight}) {
  return (
    <div className={styles.maximumMinimumStatement}>
      <span className={classnames(styles.maximumMinimumStatementTitle, {[styles.light]: titleLight})}>
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

function isNumeric(n) {
  return typeof n === 'number';
}

export default function ReportDailyVisitsPerSegment({
  title,
  startDate,
  endDate,
  spaces,

  data,
  timeSegmentNames,

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

  if (data.length !== timeSegmentNames.length) {
    throw new Error(`The number of rows of data does not match the length of timeSegmentNames (${data.length} days != ${timeSegmentNames.length} days)`);
  }

  if (data[0].length !== days.length) {
    throw new Error(`The number of columns of data does not match the number of days between startDate and endDate (${data[0].length} days != ${days.length} days)`);
  }

  const minValue = Math.min.apply(Math, data.map(v => Math.min.apply(Math, v.filter(isNumeric))));
  const maxValue = Math.max.apply(Math, data.map(v => Math.max.apply(Math, v.filter(isNumeric))));

  const maxima = data.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (col === maxValue) {
        return {timeSegmentName: timeSegmentNames[rowIndex], dayOfWeek: days[colIndex][2], value: maxValue};
      } else {
        return null;
      }
    }).filter(i => i !== null);
  }).reduce((acc, i) => [...acc, ...i], []); // <- "flatMap"

  const minima = data.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (col === minValue) {
        return {timeSegmentName: timeSegmentNames[rowIndex], dayOfWeek: days[colIndex][2], value: minValue};
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
      <ReportSubHeader>
        <MaximumMinimumStatement
          title="Max"
          value={maxValue}
          examples={maxima}
        />
        <MaximumMinimumStatement
          title="Min"
          value={minValue}
          examples={minima}
          titleLight
        />
      </ReportSubHeader>
      <ReportCard>
        <div className={styles.verticalLayout}>

          <div className={styles.tableWrapper}>
            <div className={styles.segmentTableTimeSegmentLabels}>
              {timeSegmentNames.map(ts => (
                <span key={ts} className={styles.segmentTableTimeSegmentLabelCell}>{ts}</span>
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
                    let percentageShaded, alpha;
                    if (isNumeric(value)) {
                      // The day has a daily visits number, so calculate it's opacity.
                      percentageShaded = (value - minValue) / (maxValue - minValue); /* 0...1 */
                      alpha = cellMinimumOpacity + (percentageShaded * (cellMaximumOpacity - cellMinimumOpacity));
                    } else {
                      // No daily visits were found for this day and time segment, so make it
                      // completely transparent.
                      alpha = 0;
                    }
                    const textColorPrimary = alpha < cellColorThreshold;
                    return (
                      <div
                        className={styles.segmentTableCell}
                        key={index /* I think this is what we want here, since the position of cells shouldn't change? */}
                        style={{
                          backgroundColor: addAlphaToHex(colorVariables.reportBlue, alpha),
                          color: textColorPrimary ? colorVariables.reportBlue : '#fff',
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
ReportDailyVisitsPerSegment.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  spaces: propTypes.arrayOf(propTypes.string).isRequired,

  timeSegmentNames: propTypes.arrayOf(propTypes.string).isRequired,
  data: propTypes.arrayOf(
    propTypes.arrayOf(
      propTypes.oneOfType([propTypes.number, propTypes.any /* null or undefined */]),
    ),
  ).isRequired,
};
