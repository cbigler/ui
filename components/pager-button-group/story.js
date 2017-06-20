import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import PagerButtonGroup from './';


storiesOf('PagerButtonGroup', module)
  .addWithInfo('Default view', () => (
    <PagerButtonGroup />
  ))
  .addWithInfo('First and last buttons', () => (
    <PagerButtonGroup showFirstLastButtons />
  ))
  .addWithInfo('Click handlers', () => (
    <PagerButtonGroup
      showFirstLastButtons
      onClickNext={action('next')}
      onClickPrevious={action('previous')}
      onClickStart={action('start')}
      onClickEnd={action('end')}
    />
  ))
