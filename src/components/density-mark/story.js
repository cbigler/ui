import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import DensityMark from './';


storiesOf('DensityMark', module)
  .addWithInfo('Normal size', () => (
    <DensityMark />
  ))