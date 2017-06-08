import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Switch from './';


storiesOf('Switch', module)
  .addWithInfo('Switch', () => (
    <Switch enabled={true} onChange={action("onchange")} />
  ), {inline: true})
  .add('Interactive', () => (
    <SwitchWrapper initialEnabledState={true} />
  ))







class SwitchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {enabled: props.initialEnabledState};
  }
  render() {
    return <Switch
      enabled={this.state.enabled}
      onChange={event => {
        this.setState({enabled: !this.state.enabled})
        this.props.onChange && this.props.onChange(event);
      }}
    />;
  }
}
