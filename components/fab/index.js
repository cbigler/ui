import * as React from 'react';

export default function Fab({type, children}) {
  return <div className={type ? `fab-${type}` : 'fab'}>{children}</div>;
}
