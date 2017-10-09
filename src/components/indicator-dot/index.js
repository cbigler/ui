import * as React from 'react';
import classnames from 'classnames';

export default function IndicatorDot(props) {
  return <div
    {...props}
    className={classnames(
      `indicator-dot-${props.type || 'gray'}`,
      props.className
    )}
  >
    {props.label}
  </div>;
}
