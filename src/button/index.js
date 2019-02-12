import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function Button(props) {
  const { className, size, children } = props;
  const restProps = Object.assign({}, props, {
    className: undefined,
    size: undefined,
    children: undefined,
  });

  const buttonSize = ({
    small: 'buttonSmall',
    large: 'buttonLarge',
  })[size];

  return <button {...restProps} className={classnames(
    styles.button,
    size ? styles[buttonSize] : null,
  )}>{children}</button>;
}
Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
  size: propTypes.oneOf(['small', 'large']),
  disabled: propTypes.bool,
};
