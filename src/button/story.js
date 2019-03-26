import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Button, { ButtonContext } from './index';
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
  .add('With "CANCEL_BUTTON" context', () => (
    <ButtonContext.Provider value="CANCEL_BUTTON">
      <Button>Hello world!</Button>
    </ButtonContext.Provider>
  ))
  .add('With "CANCEL_BUTTON" context in an app bar', () => (
    <div style={{backgroundColor: colorVariables.grayLight, padding: 12}}>
      <ButtonContext.Provider value="CANCEL_BUTTON">
        <Button>Cancel</Button>
      </ButtonContext.Provider>
      <Button type="primary">Save</Button>
    </div>
  ))
  .add('With "DELETE_BUTTON" context', () => (
    <ButtonContext.Provider value="DELETE_BUTTON">
      <Button>Hello world!</Button>
    </ButtonContext.Provider>
  ))
  .add('With "DIGEST_DELETE_BUTTON" context', () => (
    <ButtonContext.Provider value="DIGEST_DELETE_BUTTON">
      <Button>Hello world!</Button>
    </ButtonContext.Provider>
  ))
  .add('With "USER_MANAGEMENT_DETAIL_DELETE_BUTTON" context', () => (
    <ButtonContext.Provider value="USER_MANAGEMENT_DETAIL_DELETE_BUTTON">
      <Button>Hello world!</Button>
    </ButtonContext.Provider>
  ))
  .add('Button with width=100%', () => (
    <Button width="100%">Hello world!</Button>
  ))
