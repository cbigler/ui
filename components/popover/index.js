import * as React from 'react';
import Popper from 'popper.js';
import classnames from 'classnames';

export default class Popover extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    // On every render, update the popover position.
    this.popper && this.popper.scheduleUpdate();

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
