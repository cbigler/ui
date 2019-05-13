import React, { useContext } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import styles from './styles.scss';

export const ButtonContext = React.createContext(null);

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
  const context = useContext(ButtonContext);
  if ([
    'DELETE_BUTTON',
    'DIGEST_DELETE_BUTTON',
    'USER_MANAGEMENT_DETAIL_DELETE_BUTTON'
  ].includes(context)) {
    return (
      <button
        {...props}
        disabled={disabled}
        className={classnames(styles.button, styles.contextDeleteButton)}
      >
        {children}
      </button>
    );
  } else if (['CANCEL_BUTTON'].includes(context)) {
    return (
      <button
        {...props}
        disabled={disabled}
        className={classnames(styles.button, styles.contextCancelButton)}
      >
        {children}
      </button>
    );
  } else if (['DELETE_SEGMENT_BUTTON'].includes(context)) {
    return (
      <button
        {...props}
        disabled={disabled}
        className={classnames(styles.button, styles.contextDeleteSegmentButton)}
      >
        {children}
      </button>
    );
  } else {
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
}
Button.displayName = 'Button';
