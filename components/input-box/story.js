import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import InputBox from './index';

storiesOf('InputBox', module)
  .addWithInfo('Empty', () => (
    <InputBox type="text" />
  ))
  .addWithInfo('type=text', () => (
    <InputBox type="text" value="foo!" />
  ))
  .addWithInfo('type=password', () => (
    <InputBox type="password" placeholder="Type your password" />
  ))
  .addWithInfo('type=select', () => (
    <InputBox
      type="select"
      options={[
        {value: "foo", label: "Foo"},
        {value: "bar", label: "Bar"},
        {value: "baz", label: "Baz"},
      ]}
      onChange={action("selected")}
    />
  ))
  .addWithInfo('disabled box', () => (
    <InputBox disabled placeholder="I am disabled" />
  ))
  .addWithInfo('textarea', () => (
    <InputBox type="textarea" placeholder="I am a textarea." style={{height: 300}} />
  ))
