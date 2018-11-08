import React from 'react';
import classnames from 'classnames';

import { IconLock } from '@density/ui-icons';
import { DensityLogo } from '@density/ui-density-mark';

import './styles.scss';

export default class AppBar extends React.Component {
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

    return <div className="app-bar">

      {/* The normal app-bar content area, shown on a computer */}
      <div className={fullWidth ? 'app-bar-full-width' : 'app-bar-container'}>
        <div className="app-bar-left">
          <div className="app-bar-brand">
            {/* Show a button to open a sidebar */}
            {mobileSidebar || onClickSidebarButton ? <button
              className="app-bar-sidebar-button"
              onClick={() => this.setState(
                {open: true},
                () => onClickSidebarButton ? onClickSidebarButton(true) : null
              )}
            /> : null}

            {/* Render the logo */}
            {/* <DensityLogo size={20} /> */}
          </div>
          <div className="app-bar-items">{children}</div>
        </div>

        <div className="app-bar-right">
          {/* <div className="app-bar-items">{children}</div> */}
        </div>
      </div>

      {/* The mobile version of the app-bar */}
      <div className={classnames('app-bar-mobile-sidebar', {open: this.state.open})}>
        <span
          role="button"
          className="app-bar-mobile-sidebar-close-button"
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


export function AppBarItem({
  activePage, pageName,
  href,
  children,
  locked,
  lockedReason,
  onClick,
}) {
  return <li
    className={classnames('app-bar-item', {
      'app-bar-item-active': pageName.indexOf(activePage) >= 0,
      'app-bar-item-locked': locked,
    })}
    onClick={onClick}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
    {locked && lockedReason ? <div className="app-bar-item-tooltip">
      <div className="app-bar-item-tooltip-pointer" />
      {lockedReason}
    </div> : null}
  </li>;
}

export function AppBarMobileItem({
  activePage, pageName,
  href,
  children,
  locked,
  indent,
  onClick,
}) {
  return <li
    className={classnames('app-bar-mobile-item', {
      'app-bar-mobile-item-active': pageName.indexOf(activePage) >= 0,
      'app-bar-mobile-item-locked': locked,
    })}
    style={{paddingLeft: indent ? ((indent - 1) * 10) : 0}}
    onClick={onClick}
  >
    {locked ? <span>{children}</span> : <a href={href}>{children}</a>}
  </li>;
}
