import * as React from 'react';
import classnames from 'classnames';

export default function Container({children, fullWidth}) {
  return <div className={classnames('container', {'container-full-width': fullWidth})}>
    {children}
  </div>;
}
