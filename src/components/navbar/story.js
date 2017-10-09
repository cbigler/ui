import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Navbar from './index';


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
  .addWithInfo('With full width', () => (
    <div className="full-width">
      <Navbar subtitle="Dashboard" fullWidth />
      <br/>
      <p>(make your browser window really wide, and compare with a component without the `fullWidth` prop)</p>
    </div>
  ))
