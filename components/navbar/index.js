import * as React from 'react';

export default function Navbar({subtitle, fullWidth, children}) {
  return <div className="navbar">
    <div className={fullWidth ? 'navbar-full-width' : 'navbar-container'}>
      <div className="navbar-brand">
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
