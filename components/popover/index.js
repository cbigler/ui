import * as React from 'react';
import Popper from 'popper.js';

export default class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
      <div className="popover" ref={ref => this.popover = ref} style={{display: this.props.show ? 'block' : 'none'}}>
        <div className="popover-arrow" />
        {this.props.popover}
      </div>
    </div>;
  }
}
