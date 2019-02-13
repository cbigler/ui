import React from 'react';
import classnames from 'classnames';
import { DateRangePicker as ReactDatesDateRangePicker } from '@density/react-dates';
import propTypes from 'prop-types';
import moment from 'moment';

import InputBox from '../input-box';
import Icons from '../icons';

import styles from './styles.scss';

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

  return <div className={classnames(styles.dateRangePicker, {
    [styles.dateRangePickerAnchorLeft]: !props.anchor || props.anchor === ANCHOR_LEFT,
    [styles.dateRangePickerAnchorRight]: props.anchor === ANCHOR_RIGHT,
    [styles.dateRangePickerFocused]: props.focusedInput,
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
    <div
      className={classnames(
        styles.dateRangePickerCommonRangeList,
        {[styles.right]: props.anchor === ANCHOR_RIGHT}
      )}
    >
      <InputBox
        type="select"
        width={70 /* px */}
        listBoxWidth={200 /* px */}
        value={{
          id: 'icon',
          label: <Icons.Calendar width={14} height={14} color="dark" />,
        }}
        choices={props.commonRanges.map(range => Object.assign({}, range, {
          label: <span>{range.name || range.label}</span>,
        }))}
        onChange={props.onSelectCommonRange}
      />
    </div>
  ) : null;

  const pickerProps = Object.assign({}, props);
  delete pickerProps.commonRanges
  delete pickerProps.onSelectCommonRange
  delete pickerProps.showCommonRangeSubtitles
  delete pickerProps.onOpenCommonRangeList

  return <div className={styles.dateRangePickerWrapper}>
    <ReactDateRangePicker {...pickerProps} />
    {commonRangeList}
  </div>;
}

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.propTypes = {
  onChange: propTypes.func,
  onFocusChange: propTypes.func,
  focusedInput: propTypes.oneOf([
    null,
    START_DATE_ACTIVE,
    END_DATE_ACTIVE,
  ]),
  anchor: propTypes.oneOf([ANCHOR_LEFT, ANCHOR_RIGHT]),

  startDate: propTypes.oneOfType([
    propTypes.instanceOf(moment),
    propTypes.string, /* for moment to parse */
    propTypes.number,
  ]).isRequired,
  endDate: propTypes.oneOfType([
    propTypes.instanceOf(moment),
    propTypes.string, /* for moment to parse */
    propTypes.number,
  ]).isRequired,

  commonRanges: propTypes.arrayOf(propTypes.shape({
    id: propTypes.any,
    name: propTypes.node,
    label: propTypes.node,
  })),
  onSelectCommonRange: propTypes.func,
};
