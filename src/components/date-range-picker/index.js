import React from 'react';
import classnames from 'classnames';
import { DateRangePicker as ReactDatesDateRangePicker } from '@density/react-dates';

import InputBox from '@density/ui-input-box';
import { IconCalendar } from '@density/ui-icons';

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

// exposed component that renders both the date range picker and
// common range list, and binds them together
export default function DateRangePicker(props) {
  const commonRangeList = Array.isArray(props.commonRanges) ? (
    <InputBox
      type="select"
      className={classnames(
        "date-range-picker-common-range-list",
        {right: props.anchor === ANCHOR_RIGHT}
      )}
      value={{
        id: 'icon',
        label: <IconCalendar width={14} height={14} color="dark" />,
      }}
      choices={props.commonRanges.map(range => Object.assign({}, range, {
        label: <span>{range.name || range.label}</span>,
      }))}
      onChange={props.onSelectCommonRange}
    />
  ) : null;

  const pickerProps = Object.assign({}, props);
  delete pickerProps.commonRanges
  delete pickerProps.onSelectCommonRange
  delete pickerProps.showCommonRangeSubtitles
  delete pickerProps.onOpenCommonRangeList

  return <div className='date-range-picker-wrapper'>
    <ReactDateRangePicker {...pickerProps} />
    {commonRangeList}
  </div>;
}
