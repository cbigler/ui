import * as React from 'react';
import classnames from 'classnames';

export default function Navbar({subtitle, fullWidth, children, onClickSidebarButton}) {
  return <div className="navbar">
    <div className={fullWidth ? 'navbar-full-width' : 'navbar-container'}>
      <div className="navbar-brand">

        {/* Show a button to open a sidebar */}
        {onClickSidebarButton ? <button
          className="navbar-sidebar-button"
          onClick={onClickSidebarButton}
        >=</button> : null}

        {/* Render the logo */}
        <img
          src="http://style-guide.density.io/assets/images/app_bar_logo.png"
          alt="Density Logo"
        />
      </div>
      {subtitle ? <div className="navbar-brand-subtitle">{subtitle}</div> : null}
      <div className="navbar-items">{children}</div>
    </div>
  </div>;
}

export function NavbarItem({
  activePage, pageName,
  href,
  children,
  locked,
}) {
  return <li
    className={classnames('navbar-item', {
      'navbar-item-active': pageName.indexOf(activePage) >= 0,
      'navbar-item-locked': locked,
    })}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
  </li>;
}
