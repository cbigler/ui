import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import IndicatorDot from './';

storiesOf('IndicatorDot', module)
  .addWithInfo('Default', () => (
    <IndicatorDot content="foo" label="I know nothing" />
  ))
  .addWithInfo('All Good!', () => (
    <IndicatorDot type="success" label="Sleeping on a bed of clouds" />
  ))
  .addWithInfo('Not so Good...', () => (
    <IndicatorDot type="danger" label="Explosions everywhere" />
  ))
  .addWithInfo('Primary colored', () => (
    <IndicatorDot type="primary" label="I'm out of funny phrases" />
  ))
  .addWithInfo('No label', () => (
    <IndicatorDot type="primary" />
  ))
