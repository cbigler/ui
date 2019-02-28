import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppBar, {AppBarContext, AppBarSection, AppBarTitle} from './';

storiesOf('AppBar', module)
  .add('With text', () => (
    <AppBar>Hello world!</AppBar>
  ))
  .add('With left and right sections', () => (
    <AppBar>
      <AppBarSection>
        <span>ICON</span>
        <AppBarTitle>Title</AppBarTitle>
      </AppBarSection>
      <AppBarSection>ASDF</AppBarSection>
    </AppBar>
  ))
  .add('With TRANSPARENT context', () => (
    <AppBarContext.Provider value="TRANSPARENT">
      <AppBar>
        <AppBarTitle>Title</AppBarTitle>
        <AppBarSection>ASDF</AppBarSection>
      </AppBar>
    </AppBarContext.Provider>
  ))
  .add('With BOTTOM_ACTIONS context', () => (
    <AppBarContext.Provider value="BOTTOM_ACTIONS">
      <AppBar>
        <AppBarTitle>Title</AppBarTitle>
        <AppBarSection>ASDF</AppBarSection>
      </AppBar>
    </AppBarContext.Provider>
  ))
