import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Button, {
  ButtonContext,
  ButtonGroup,
  BUTTON_TYPE_STYLES,
  BUTTON_VARIETY_STYLES,
} from './index';
import AppBar, { AppBarContext, AppBarSection, AppBarTitle } from '../app-bar';
import colorVariables from '../../variables/colors.json';

storiesOf('Button', module)
  .add('Overview', () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${Object.keys(BUTTON_VARIETY_STYLES).length}, 180px)`,
      gridTemplateRows: `repeat(${Object.keys(BUTTON_TYPE_STYLES).length}, 40px)`,
      gridGap: 10,
      marginLeft: 10,
      marginTop: 10,
    }}>
      {Object.keys(BUTTON_TYPE_STYLES).map(type => (
        <Fragment key={type}>
          {Object.keys(BUTTON_VARIETY_STYLES).map(variety => (
            <Button key={`${variety},${type}`} variety={variety} type={type}>
              {type} and {variety}
            </Button>
          ))}
        </Fragment>
      ))}
    </div>
  ))
  .add('Base button', () => (
    <Button onClick={action('Click!')}>Hello world!</Button>
  ))
  .add('Disabled button', () => (
    <Button disabled>Hello world!</Button>
  ))
  .add('Filled button', () => (
    <Button variety="filled">Hello world!</Button>
  ))
  .add('Filled danger button', () => (
    <Button variety="filled" type="danger">Hello world!</Button>
  ))
  .add('Underline button', () => (
    <Button variety="underline">Hello world!</Button>
  ))
  .add('Underline danger button', () => (
    <Button variety="underline" type="danger">Hello world!</Button>
  ))
  .add('Two buttons in a button group', () => (
    <ButtonGroup>
      <Button variety="underline">Cancel</Button>
      <Button variety="filled">Save</Button>
    </ButtonGroup>
  ))
  .add('Two buttons in a button group in a bottom actions app bar', () => (
    <AppBarContext.Provider value="BOTTOM_ACTIONS">
      <AppBar>
        <AppBarSection />
        <AppBarSection>
          <ButtonGroup>
            <Button variety="underline">Cancel</Button>
            <Button variety="filled">Save</Button>
          </ButtonGroup>
        </AppBarSection>
      </AppBar>
    </AppBarContext.Provider>
  ))
  .add('Link Button', () => (
    <Button target="_blank" href="http://example.com">Go to example.com</Button>
  ))
  .add('Button with width=100%', () => (
    <Button width="100%">Hello world!</Button>
  ))
  .add('Small button', () => (
    <Button size="small">Hello world!</Button>
  ))
  .add('Large button', () => (
    <Button size="large">Hello world!</Button>
  ))
