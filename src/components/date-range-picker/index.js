import * as React from 'react';
import classnames from 'classnames';
import { DateRangePicker as ReactDatesDateRangePicker } from '@density/react-dates';

export const ANCHOR_RIGHT = 'ANCHOR_RIGHT',
  ANCHOR_LEFT = 'ANCHOR_LEFT',
  START_DATE_ACTIVE = 'startDate',
  END_DATE_ACTIVE = 'endDate';

// internal date range picker (via ReactDates)
function ReactDateRangePicker(props) {
  const restProps = Object.assign({}, props);
  delete restProps.onChange;
  delete restProps.anchor;
  delete restProps.className;

  return <div className={classnames(`date-range-picker`, {
    'date-range-picker-anchor-left': !props.anchor || props.anchor === ANCHOR_LEFT,
    'date-range-picker-anchor-right': props.anchor === ANCHOR_RIGHT,
    'date-range-picker-focused': props.focusedInput,
  }, props.className)}>
    <ReactDatesDateRangePicker
      onDatesChange={props.onChange}
      customArrowIcon={<span>&mdash;</span>}
      {...restProps}
    />
  </div>;
}

// selectable list of common ranges
function CommonRangeList(props) {
  return <ul className='common-range-list'>
    {props.commonRanges.map((r, i) =>
      <li
        onClick={() => props.onSelectCommonRange(r)}
        key={i}
      >{r.name}</li>
    )}
  </ul>
}

// exposed component that renders both the date range picker and
// common range list, and binds them together
export default function DateRangePicker(props) {
  const commonRangeList = Array.isArray(props.commonRanges) ? (
    <CommonRangeList
      onSelectCommonRange={props.onSelectCommonRange}
      commonRanges={props.commonRanges}
    />
  ) : null

  const pickerProps = Object.assign({}, props);
  delete pickerProps.commonRanges
  delete pickerProps.onSelectCommonRange

  return <div className='date-range-wrapper'>
    <ReactDateRangePicker {...pickerProps} />
    {commonRangeList}
  </div>;
}
