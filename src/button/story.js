import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Button from './index';
import colorVariables from '../../variables/colors.json';


storiesOf('Button', module)
  .add('Base button', () => (
    <Button onClick={action('Click!')}>Hello world!</Button>
  ))
  .add('Small button', () => (
    <Button size="small">Hello world!</Button>
  ))
  .add('Large button', () => (
    <Button size="large">Hello world!</Button>
  ))
  .add('Disabled button', () => (
    <Button disabled>Hello world!</Button>
  ))
  .add('Primary button', () => (
    <Button type="primary">Hello world!</Button>
  ))
  .add('Primary + disabled button', () => (
    <Button disabled type="primary">Hello world!</Button>
  ))
  .add('Button with width=100%', () => (
    <Button width="100%">Hello world!</Button>
  ))
