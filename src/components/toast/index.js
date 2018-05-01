import * as React from 'react';
import classnames from 'classnames';

export default function Toast({
  icon,
  type,
  className,
  title,

  onDismiss,

  children,
}) {
  return <div className={classnames(type ? `toast-${type}` : 'toast-primary', className)}>
    <div className="toast-icon">
      <div className="toast-icon-glyph">
        {icon}
      </div>
    </div>
    <div className="toast-body">
      {onDismiss ? <div className="toast-dismiss" onClick={onDismiss}>&times;</div> : null}
      {title ? <h3 className="toast-header">{title}</h3> : null}
      <span className={classnames('toast-text', title ? 'has-title' : 'no-title')}>
        {children}
      </span>
    </div>
  </div>;
}
