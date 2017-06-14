import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Navbar from './';


storiesOf('Navbar', module)
  .addWithInfo('Navigation Bar', () => (
    <div className="full-width">
      <Navbar />
    </div>
  ))
  .addWithInfo('With label', () => (
    <div className="full-width">
      <Navbar subtitle="Dashboard" />
    </div>
  ))
