import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import PagerButtonGroup from './index';


storiesOf('PagerButtonGroup', module)
  .addWithInfo('Default view', () => (
    <PagerButtonGroup
      onClickNext={action('next')}
      onClickPrevious={action('previous')}
    />
  ))
  .addWithInfo('First and last buttons', () => (
    <PagerButtonGroup
      onClickNext={action('next')}
      onClickPrevious={action('previous')}
      showFirstLastButtons
    />
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
  .addWithInfo('Disabled buttons', () => (
    <PagerButtonGroup
      showFirstLastButtons

      disabledNext={true}
      disabledStart={true}
      disabledPrevious={true}
      disabledEnd={false}

      onClickNext={action('next')}
      onClickPrevious={action('previous')}
      onClickStart={action('start')}
      onClickEnd={action('end')}
    />
  ))
