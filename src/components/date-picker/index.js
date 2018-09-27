import React from 'react';
import classnames from 'classnames';
import { SingleDatePicker } from '@density/react-dates';
import { IconArrowLeft, IconArrowRight } from '@density/ui-icons';

import styles from './styles.scss';

export const ANCHOR_RIGHT = 'ANCHOR_RIGHT', ANCHOR_LEFT = 'ANCHOR_LEFT';

export default function DatePicker(props) {
  const restProps = Object.assign({}, props);
  delete restProps.onChange;
  delete restProps.anchor;
  delete restProps.className;
  delete restProps.arrowRightDisabled;
  delete restProps.arrowLeftDisabled;

  return <div className={classnames(styles.datePicker, {
    [styles.datePickerAnchorLeft]: !props.anchor || props.anchor === ANCHOR_LEFT,
    [styles.datePickerAnchorRight]: props.anchor === ANCHOR_RIGHT,
    [styles.datePickerFocused]: props.focused,
  })}>
    <div className={styles.datePickerContainer}>
      <div
        className={classnames(
          styles.datePickerIcon,
          styles.datePickerIconLeft,
          {[styles.datePickerIconDisabled]: props.arrowLeftDisabled},
        )}
        role="button"
        onClick={() => {
          if (!props.arrowLeftDisabled) {
            const yesterday = props.date.clone().subtract(1, 'day');
            return props.onChange(yesterday);
          }
        }}
      >
        <IconArrowLeft color={props.arrowLeftDisabled ? 'gray' : 'primary'} width={20} height={20} />
      </div>
      <SingleDatePicker
        numberOfMonths={1}
        onDateChange={props.onChange}
        {...restProps}
      />
      <div
        className={classnames(
          styles.datePickerIcon,
          styles.datePickerIconRight,
          {[styles.datePickerIconDisabled]: props.arrowLeftDisabled},
        )}
        role="button"
        onClick={() => {
          if (!props.arrowRightDisabled) {
            const tomorrow = props.date.clone().add(1, 'day');
            return props.onChange(tomorrow);
          }
        }}
      >
        <IconArrowRight color={props.arrowRightDisabled ? 'gray' : 'primary'} width={20} height={20} />
      </div>
    </div>
  </div>;
}
