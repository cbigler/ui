import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReportLoading from './index';

storiesOf('ReportLoading', module)
  .addWithInfo('Default', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportLoading part={2} whole={10} />
    </div>
  ))
  .addWithInfo('Fully filled', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportLoading part={2} whole={2} />
    </div>
  ))
  .addWithInfo('Empty', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportLoading part={0} whole={100} />
    </div>
  ))
