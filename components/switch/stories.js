import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
const infoOpts = {
  source: false,
  inline: true,
  propTables: false,
};

import {chartAsReactComponent} from '@density/charts';
import SwitchFn from './';
const Switch = chartAsReactComponent(SwitchFn);

storiesOf('Switch', module)
  .addWithInfo('An enabled switch.', () => (
    <Switch enabled={true} onChange={action('toggle')} />
  ), infoOpts)
  .addWithInfo('A disabled switch.', () => (
    <Switch enabled={false} onChange={action('toggle')} />
  ), infoOpts)
