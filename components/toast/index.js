import * as React from 'react';
import classnames from 'classnames';

export default function Toast({icon, type, className, children}) {
  return <div className={classnames('toast', type ? `toast-${type}` : null, className)}>
    <div className="toast-icon">{icon}</div>
    <div className="toast-body">
      <span>{children}</span>
    </div>
  </div>;
}
