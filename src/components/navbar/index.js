import * as React from 'react';
import classnames from 'classnames';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    const {
      subtitle,
      fullWidth,
      children,
      mobileSidebar,

      onClickSidebarButton,
    } = this.props;

    return <div className="navbar">
      <div className={fullWidth ? 'navbar-full-width' : 'navbar-container'}>
        <div className="navbar-brand">
          {/* Show a button to open a sidebar */}
          {mobileSidebar || onClickSidebarButton ? <button
            className="navbar-sidebar-button"
            onClick={() => this.setState(
              {open: true},
              () => onClickSidebarButton ? onClickSidebarButton(true) : null
            )}
          /> : null}

          {/* Render the logo */}
          <img
            src="http://style-guide.density.io/assets/images/app_bar_logo.png"
            alt="Density Logo"
          />
        </div>
        {subtitle ? <div className="navbar-brand-subtitle">{subtitle}</div> : null}
        <div className="navbar-items">{children}</div>
      </div>
      <div className={classnames('navbar-mobile-sidebar', {open: this.state.open})}>
        <span
          role="button"
          className="navbar-mobile-sidebar-close-button"
          onClick={() => this.setState(
            {open: false},
            () => onClickSidebarButton ? onClickSidebarButton(false) : null
          )}
        >&#xe914;</span>
        {/* This might be a horrible idea, injecting a `key` prop like this. */}
        {mobileSidebar ? mobileSidebar.map((i, ct) => <span key={ct}>{i}</span>) : null}
      </div>
    </div>;
  }
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

export function NavbarMobileItem({
  activePage, pageName,
  href,
  children,
  locked,
  indent,
}) {
  return <li
    className={classnames('navbar-mobile-item', {
      'navbar-mobile-item-active': pageName.indexOf(activePage) >= 0,
      'navbar-mobile-item-locked': locked,
    })}
    style={{paddingLeft: indent ? ((indent - 1) * 10) : 0}}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
  </li>;
}
