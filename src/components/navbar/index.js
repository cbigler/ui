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

    const openSidebar = () => this.setState({open: true});
    const closeSidebar = () => this.setState({open: false});

    return <div className="navbar">

      {/* The normal navbar content area, shown on a computer */}
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

      {/* The mobile version of the navbar */}
      <div className={classnames('navbar-mobile-sidebar', {open: this.state.open})}>
        <span
          role="button"
          className="navbar-mobile-sidebar-close-button"
          onClick={() => this.setState(
            {open: false},
            () => onClickSidebarButton ? onClickSidebarButton(false) : null
          )}
        >&#xe914;</span>
        {
          mobileSidebar ?
          mobileSidebar(closeSidebar, openSidebar).map((i, ct) => <span key={ct}>{i}</span>) :
          null
        }
      </div>
    </div>;
  }
}


export function NavbarItem({
  activePage, pageName,
  href,
  children,
  locked,
  lockedReason,
  onClick,
}) {
  return <li
    className={classnames('navbar-item', {
      'navbar-item-active': pageName.indexOf(activePage) >= 0,
      'navbar-item-locked': locked,
    })}
    onClick={onClick}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
    {lockedReason ? <div className="navbar-item-tooltip">
      <div className="navbar-item-tooltip-pointer" />
      {lockedReason}
    </div> : null}
  </li>;
}

export function NavbarMobileItem({
  activePage, pageName,
  href,
  children,
  locked,
  indent,
  onClick,
}) {
  return <li
    className={classnames('navbar-mobile-item', {
      'navbar-mobile-item-active': pageName.indexOf(activePage) >= 0,
      'navbar-mobile-item-locked': locked,
    })}
    style={{paddingLeft: indent ? ((indent - 1) * 10) : 0}}
    onClick={onClick}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
  </li>;
}
