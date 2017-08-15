import * as React from 'react';
import classnames from 'classnames';

export default function Button(props) {
  const { className, size, children } = props;
  const restProps = Object.assign({}, props, {className: undefined, size: undefined, children: undefined});
  return <button {...restProps} className={classnames(
    'button',
    size ? `button-${size}` : null,
    className
  )}>{children}</button>;
}
