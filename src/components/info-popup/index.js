import React, { Component } from 'react';
import classnames from 'classnames';

import { IconInfo } from '@density/ui-icons';

export default class InfoPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0,
      visible: false,
    };

    this.onShow = this.onShow.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onBodyTouch = this.onBodyTouch.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('touchstart', this.onBodyTouch);
    window.addEventListener('resize', this.onResize);
    this.onResize(); /* initially place the popup */
  }
  componentWillUnmount() {
    document.body.removeEventListener('touchstart', this.onBodyTouch);
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    if (!this.popup || !this.icon) {
      return;
    }
    const { verticalPopupOffset } = this.props;

    const popupBBox = this.popup.getBoundingClientRect();
    const iconBBox = this.icon.getBoundingClientRect();

    const windowWidth = window.innerWidth;

    let top = iconBBox.bottom - 15 + (verticalPopupOffset || 0);

    // Craft a "left" value that will ensure that the popup is centered underneath the (i).
    let left = iconBBox.x + (iconBBox.width / 2) - (popupBBox.width / 2);

    // Attempt to handle the case of the popup going off the left edge of the screen
    if (left < 20) {
      left = 20;
    }

    // Attempt to handle the case of the popup going off the right edge of the screen
    if (left + popupBBox.width > windowWidth-20) {
      left = windowWidth - popupBBox.width - 20;
    }

    this.setState({top, left});
  }

  // When the user touches the body outside of the popup, dismiss any open popups.
  onBodyTouch(e) {
    let element = e.target;

    // Ensure the touch occured outside of the popup.
    while (element) {
      if (element.className === 'info-popup-container') {
        return;
      }
      element = element.parentNode;
    }

    this.onHide();
  }

  onShow() {
    this.setState({visible: true});
  }
  onHide() {
    this.setState({visible: false});
  }

  render() {
    const { infoIconColor, singleLine, target, children } = this.props;
    const { top, left, visible } = this.state;

    return <span
      className="info-popup-container"
      onMouseEnter={e => this.onShow(e)}
      onMouseLeave={e => this.onHide(e)}

      onTouchStart={e => this.onShow(e)}

      tabIndex={0}
      onFocus={e => this.onShow(e)}
      onBlur={e => this.onHide(e)}
    >
      <span
        className={classnames('info-popup-icon', {'stock-target': !target})}
        ref={r => { this.icon = r; }}
      >
        {target || <IconInfo
          width={20}
          height={20}
          color={infoIconColor || 'primary'}
        />}
      </span>

      <div className="info-popup-wrapper">
        <div
          className={classnames('info-popup-popup', {visible, 'single-line': singleLine})}
          style={{top, left}}
          ref={r => { this.popup = r; }}
        >
          {children}
        </div>
      </div>
    </span>;
  }
}

export function InfoPopupCardWellHighlight(p) {
  const props = Object.assign({}, p);
  const {target, children} = props;
  delete props.target;
  delete props.children;

  return (
    <InfoPopup target={<span className="info-popup-card-well-highlight">{target}</span>} {...props}>
      {children}
    </InfoPopup>
  );
}
