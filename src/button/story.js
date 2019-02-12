import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Button from './';


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
