import * as React from 'react';

export default function Navbar({subtitle}) {
  return <div className="navbar">
    <div className="navbar-brand">
      <img
        src="http://style-guide.density.io/assets/images/app_bar_logo.png"
        alt="Density Logo"
      />
    </div>
    {subtitle ? <div className="navbar-brand-subtitle">{subtitle}</div> : null}
  </div>;
}
