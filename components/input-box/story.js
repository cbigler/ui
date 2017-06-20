import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import InputBox from './';


storiesOf('InputBox', module)
  .addWithInfo('Empty', () => (
    <InputBox type="text" />
  ))
  .addWithInfo('type=text', () => (
    <InputBox type="text" value="foo!" />
  ))
  .addWithInfo('type=password', () => (
    <InputBox type="password" placeholder="Type your password here." />
  ))
  .addWithInfo('type=select', () => (
    <InputBox type="select">
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </InputBox>
  ))
