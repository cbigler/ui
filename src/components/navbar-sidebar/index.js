import * as React from 'react';
import classnames from 'classnames';

export default function NavbarSidebar({show, children}) {
  return <ul className={classnames('navbar-sidebar', show ? 'visible' : null)}>
    {children}
  </ul>;
}

export function NavbarSidebarItem({activePage, pageName, href, header, children}) {
  const type = header ? 'item-header' : 'item';
  return <li className={pageName.indexOf(activePage) >= 0 ? `navbar-sidebar-${type}-active` : `navbar-sidebar-${type}`}>
    <a href={href}>{children}</a>
  </li>;
}
