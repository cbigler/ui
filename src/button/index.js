import React, { useContext } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import styles from './styles.scss';

export const ButtonContext = React.createContext(null);

const BUTTON_SIZE_STYLES = {
  small: styles.small,
  large: styles.large,
};

export const BUTTON_VARIETY_STYLES = {
  default: styles.default,
  filled: styles.filled,
  underline: styles.underline,
};

export const BUTTON_TYPE_STYLES = {
  primary: styles.primary,
  danger: styles.danger,
  warning: styles.warning,
  success: styles.success,
  muted: styles.muted,
};

export default function Button({
  size,
  children,
  disabled,
  variety,
  type,

  width,
  height,

  ...props
}) {
  const context = useContext(ButtonContext);
  return (
    <button
      {...props}
      disabled={disabled}
      className={classnames(
        styles.button,
        BUTTON_TYPE_STYLES[type],
        BUTTON_VARIETY_STYLES[variety],
        BUTTON_SIZE_STYLES[size],
      )}
      style={{ width, height }}
    >
      {children}
    </button>
  );
}
Button.displayName = 'Button';
Button.defaultProps = {
  variety: 'default',
  type: 'primary',
};
Button.propTypes = {
  variety: propTypes.oneOf(['default', 'filled', 'underline']),
  type: propTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
    'muted',
  ]),
};

export function ButtonGroup({ children }) {
  return (
    <div className={styles.buttonGroup}>
      {children}
    </div>
  );
}
ButtonGroup.displayName = 'ButtonGroup';
