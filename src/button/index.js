import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import styles from './styles.scss';

const BUTTON_SIZE_STYLES = {
  small: styles.small,
  large: styles.large,
};

const BUTTON_TYPE_STYLES = {
  default: undefined,
  primary: styles.primary,
  danger: styles.danger,
};

export default function Button({
  type,
  size,
  children,
  disabled,

  width,
  height,

  ...props
}) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classnames(styles.button, BUTTON_SIZE_STYLES[size], BUTTON_TYPE_STYLES[type])}
      style={{width, height}}
    >
      {children}
    </button>
  );
}
Button.displayName = 'Button';
