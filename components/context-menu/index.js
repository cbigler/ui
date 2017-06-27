import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function ContextMenu({className, children}) {
  return <div className={classnames('context-menu', className)}>
    {children}
  </div>;
}

export function ContextMenuItem({className, children}) {
  return <div className={classnames('context-menu-item', className)}>
    {children}
  </div>;
}
