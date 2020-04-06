import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';

// import './styles.module.scss';
import TimeFilterPicker from './index';
import colorVariables from '../../variables/colors.json';


storiesOf('TimeFilterPicker', module)
  .add('Default', () => (
    <TimeFilterPicker />
  ))
