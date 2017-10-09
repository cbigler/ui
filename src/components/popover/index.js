import * as React from 'react';
import Popper from 'popper.js';
import classnames from 'classnames';

export default class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  // When anything else other than the popover is clicked, close the popover.
  initializeBackgroundClickHandler() {
    this.closePopover = event => {
      const oldId = event.target.id;
      event.target.id = 'popover-close-reference';

      if (this.props.show && this.props.onDismiss) {
        const clickedInsidePopover = document.querySelector('.popover-wrapper #popover-close-reference');
        if (!clickedInsidePopover) {
          this.props.onDismiss();
        }
      }

      event.target.id = oldId;
    }
    window.addEventListener('click', this.closePopover, false);
  }

  componentDidMount() {
    // FIXME: A bit of a hack. Popper doesn't work well in a testing environment (a lack of
    // `document.createRange`: https://github.com/tmpvar/jsdom/issues/317) so in a testing
    // environment popper isn't used (and since the component is never rendered to a screen when
    // testing, I think this is fine.)
    if (process.env.NODE_ENV === 'test') {
      this.popper = null;
      return;
    }

    this.popper = new Popper(this.wrapper, this.popover, {
      modifiers: {
        arrow: {
          enabled: true,
          element: ".popover-arrow",
        },
      },
    });
  }

  // After an update, bind a click listener to window to listen for click events outside the
  // popover. If one is recieved, call `this.props.onDismiss`.
  componentDidUpdate() {
  }

  // If the popover click handler is still bound, then remove it prior to unmounting the component.
  componentWillUnmount() {
    if (this.closePopover) {
      window.removeEventListener('click', this.closePopover);
    }
  }

  render() {
    // On every render, update the popover position.
    this.popper && this.popper.scheduleUpdate();

    // On every render, add a click handler to the the body element to listen for out of bounds
    // click events.
    if (this.props.show && !this.closePopover) {
      setTimeout(() => {
        this.initializeBackgroundClickHandler.apply(this);
      }, 100);
    } else if (this.closePopover) {
      window.removeEventListener('click', this.closePopover);
      delete this.closePopover;
    }

    return <div className="popover-wrapper" ref={ref => this.wrapper = this.props.target || ref}>
      {this.props.children}
      <div
        className={classnames('popover', this.props.className)}
        ref={ref => this.popover = ref}
        style={{display: this.props.show ? 'block' : 'none'}}
      >
        <div className="popover-arrow" />
        {this.props.popover}
      </div>
    </div>;
  }
}
