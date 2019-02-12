import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import RadioButton from './index';


storiesOf('RadioButton', module)
  .add('Two radio buttons', () => (
    <div>
      <RadioButton text="Foo" onChange={action('Foo changed!')} />
      <RadioButton text="Bar" onChange={action('Bar changed!')} />
    </div>
  ))
  .add('Two radio buttons, one locked on, one locked off', () => (
    <div>
      <RadioButton text="Foo" checked={true} readOnly />
      <RadioButton text="Bar" checked={false} readOnly />
    </div>
  ))
