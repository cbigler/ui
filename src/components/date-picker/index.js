import * as React from 'react';
import classnames from 'classnames';
import { SingleDatePicker } from '@density/react-dates';

export const ANCHOR_RIGHT = 'ANCHOR_RIGHT', ANCHOR_LEFT = 'ANCHOR_LEFT';

export default function DatePicker(props) {
  const restProps = Object.assign({}, props);
  delete restProps.onChange;
  delete restProps.anchor;
  delete restProps.className;

  return <div className={classnames(`date-picker`, {
    'date-picker-anchor-left': !props.anchor || props.anchor === ANCHOR_LEFT,
    'date-picker-anchor-right': props.anchor === ANCHOR_RIGHT,
    'date-picker-focused': props.focused,
  }, props.className)}>
    <SingleDatePicker
      numberOfMonths={1}
      onDateChange={props.onChange}
      {...restProps}
    />
  </div>;
}
