import React from 'react';
import classnames from 'classnames';
import camelcase from 'camelcase';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function Button(props) {
  const { className, size, children } = props;
  const restProps = Object.assign({}, props, {
    className: undefined,
    size: undefined,
    children: undefined,
  });

  return <button {...restProps} className={classnames(
    styles.button,
    size ? styles[camelcase(`button-${size}`)] : null,
  )}>{children}</button>;
}
Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
  size: propTypes.oneOf(['small', 'large']),
  disabled: propTypes.bool,
};
