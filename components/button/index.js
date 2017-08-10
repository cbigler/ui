import * as React from 'react';
import classnames from 'classnames';

export default function Button({className, size, children}) {
  return <button className={classnames(
    'button',
    size ? `button-${size}` : null,
    className
  )}>
    {children}
  </button>;
}
