import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import InputBox from './index';

storiesOf('InputBox', module)
  .add('Empty', () => (
    <InputBox type="text" />
  ))
  .add('type=text', () => (
    <InputBox type="text" defaultValue="foo!" />
  ))
  .add('type=password', () => (
    <InputBox type="password" placeholder="Type your password" />
  ))
  .add('type=select', () => (
    <InputBox
      type="select"
      choices={[
        {id: 0, label: "Foo"},
        {id: 1, label: "Bar"},
        {id: 2, label: "Disabled", disabled: true},
        {id: 3, label: "Baz"},
      ]}
      onChange={action("selected")}
    />
  ))
  .add('type=select, interactive', () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);

        const choices = [
          {id: 0, label: "Foo"},
          {id: 1, label: "Bar"},
          {id: 2, label: "Disabled", disabled: true},
          {id: 3, label: "Baz"},
        ];

        this.state = {
          value: null,
          choices,
        };
      }

      render() {
        return <InputBox
          type="select"
          value={this.state.value}
          choices={this.state.choices}
          onChange={value => this.setState({value})}
        />;
      }
    }

    return <Wrapper />;
  })
  .add('type=select, disabled', () => (
    <InputBox
      type="select"
      disabled
      choices={[
        {id: 0, label: "Foo"},
        {id: 1, label: "Bar"},
        {id: 2, label: "Disabled", disabled: true},
        {id: 3, label: "Baz"},
      ]}
      onChange={action("selected")}
    />
  ))
  .add('disabled box', () => (
    <InputBox disabled placeholder="I am disabled" />
  ))
  .add('textarea', () => (
    <InputBox type="textarea" placeholder="I am a textarea." style={{height: 300}} />
  ))
  .add('input box with custom width', () => (
    <InputBox type="text" width={300} placeholder="I am disabled" />
  ))
  .add('select box with custom width', () => (
    <InputBox type="select" width={300} />
  ))