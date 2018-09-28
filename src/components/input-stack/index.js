import React from 'react';
import classnames from 'classnames';

import { inputStackHeight } from './variables';
import styles from './styles.scss';

export function InputStackGroup(props) {
  return <div
    {...props}
    className={classnames(styles.inputStackGroup)}
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
      styles.inputStackItem,
      this.props.invalid ? styles.inputStackItemInvalid : null,
      this.state.focused ? styles.inputStackItemFocus : null,
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
