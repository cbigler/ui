import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DensityMark, { DensityLogo } from './';

storiesOf('DensityBrand', module)
  .addWithInfo('Mark', () => (
    <DensityMark />
  ))
  .addWithInfo('Small Mark', () => (
    <DensityMark size={50} />
  ))
  .addWithInfo('Logo', () => (
    <DensityLogo />
  ))
  .addWithInfo('Small Logo', () => (
    <DensityLogo size={50} />
  ))
