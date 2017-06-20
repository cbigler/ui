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
    return <div className={classnames(
      'input-stack-item',
      this.props.invalid ? 'input-stack-item-invalid' : null,
      this.state.focused ? 'focus' : null,
      this.props.className,
    )}>
      <input
        {...this.props}
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
// export function InputStackItem(props) {
//   return <input
//     {...props}
//     className={classnames(
//       'input-stack-item',
//       props.invalid ? 'input-stack-item-invalid' : null,
//       props.className,
//     )}
//   />;
// }
