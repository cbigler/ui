import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Button from './';


storiesOf('Button', module)
  .addWithInfo('Base button', () => (
    <Button onClick={action('Click!')}>Hello world!</Button>
  ))
  .addWithInfo('Small button', () => (
    <Button size="small">Hello world!</Button>
  ))
  .addWithInfo('Large button', () => (
    <Button size="large">Hello world!</Button>
  ))
  .addWithInfo('Disabled button', () => (
    <Button disabled>Hello world!</Button>
  ))
