import * as React from 'react';
import classnames from 'classnames';

export default function Fab({type, className, onClick, children}) {
  return <div
    onClick={onClick}
    className={classnames(type ? `fab-${type}` : 'fab', className)}
  >{children}</div>;
}
