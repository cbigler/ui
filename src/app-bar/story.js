import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppBar, {AppBarSection, AppBarTitle} from './';

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
