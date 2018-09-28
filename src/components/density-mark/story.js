import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DensityMark, { DensityLogo } from './';
import { brandPrimary } from '../../../variables/colors.json';

storiesOf('DensityMark', module)
  .addWithInfo('Mark', () => (
    <DensityMark />
  ))
  .addWithInfo('Small Mark', () => (
    <DensityMark size={50} />
  ))
  .addWithInfo('Small Mark and white', () => (
    <div style={{background: brandPrimary, padding: 20}}>
      <DensityMark size={25} color="#fff" />
    </div>
  ))
  .addWithInfo('Logo', () => (
    <DensityLogo />
  ))
  .addWithInfo('Small Logo', () => (
    <DensityLogo size={25} />
  ))
  .addWithInfo('Small Logo and white', () => (
    <div style={{background: brandPrimary, padding: 20}}>
      <DensityLogo size={25} color="#fff" />
    </div>
  ))
