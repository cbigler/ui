import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';

import {inputStackHeight} from './variables';

export function InputStackGroup(props) {
  return <div
    {...props}
    className={classnames("input-stack-group", props.className)}
  >
    <div>{props.children}</div>
  </div>;
}

export class InputStackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {focused: false};
  }
  render() {
    const propsRest = Object.assign({}, this.props);
    delete propsRest.invalid;
    delete propsRest.focused;
    delete propsRest.className;

    return <div className={classnames(
      'input-stack-item',
      this.props.invalid ? 'input-stack-item-invalid' : null,
      this.state.focused ? 'focus' : null,
      this.props.className,
    )}>
      <input
        {...propsRest}
        onFocus={data => {
          this.setState({focused: true});
          this.props.onFocus && this.props.onFocus(data);
        }}
        onBlur={data => {
          this.setState({focused: false});
          this.props.onBlur && this.props.onBlur(data);
        }}
      />
    </div>;
  }
}

// Render the spec with this data.
export function spec() {
  return <InputStackGroup>
    <InputStackItem type="text" placeholder="Text box" />
    <InputStackItem invalid type="text" value="I'm invalid :(" />
    <InputStackItem type="password" placeholder="Another password box" />
  </InputStackGroup>
}
