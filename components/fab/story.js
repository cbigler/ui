import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Fab from './';


storiesOf('Fab', module)
  .addWithInfo('With a &times; inside', () => (
    <Fab>&times;</Fab>
  ))
  .addWithInfo('With a plus inside', () => (
    <Fab>+</Fab>
  ))
  .addWithInfo('Primary', () => (
    <Fab type="primary">+</Fab>
  ))
  .addWithInfo('Success', () => (
    <Fab type="success">+</Fab>
  ))
  .addWithInfo('Warning', () => (
    <Fab type="warning">+</Fab>
  ))
  .addWithInfo('Danger', () => (
    <Fab type="danger">+</Fab>
  ))
  .addWithInfo('Info', () => (
    <Fab type="info">+</Fab>
  ))
