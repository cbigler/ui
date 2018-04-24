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
export default class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
  }

  render() {
    // conditionally render the common range list
    // (if commonRanges is passed into the component)
    const commonRangeList = Array.isArray(this.props.commonRanges) ? (
      <CommonRangeList
        onSelectCommonRange={ selectedCommonRange =>
          this.setState({
            startDate: selectedCommonRange.startDate,
            endDate: selectedCommonRange.endDate
          }
        )}
        commonRanges={this.props.commonRanges}
      />
    ) : null

    // startDate and endDate should be moved from props (passed into component)
    // to the state (manipulatable by sibling components)
    // they will default to those passed into props
    const pickerProps = Object.assign({}, this.props);
    delete pickerProps.startDate
    delete pickerProps.endDate
    delete pickerProps.commonRanges

    return <div className='date-range-wrapper'>
      <ReactDateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        {...pickerProps}
      />
      {commonRangeList}
    </div>;
  }
}