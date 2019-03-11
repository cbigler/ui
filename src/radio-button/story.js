import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import RadioButton, { RadioButtonContext } from './index';


storiesOf('RadioButton', module)
  .add('Two radio buttons', () => (
    <div onChange={action('Changed')}>
      <RadioButton text="Foo" name="story" value="foo" />
      <RadioButton text="Bar" name="story" value="bar" />
    </div>
  ))
  .add('Two radio buttons, one locked on, one locked off', () => (
    <div>
      <RadioButton text="Foo" name="story" value="foo" checked={true} disabled />
      <RadioButton text="Bar" name="story" value="bar" checked={false} disabled />
    </div>
  ))
  .add('Two radio buttons controlled with click action', () => (
    <div onChange={action('Clicked')}>
      <RadioButton text="Foo" name="story" value="foo" checked={true} />
      <RadioButton text="Bar" name="story" value="bar" checked={false} />
    </div>
  ))
  .add('With USER_FORM context', () => (
    <div>
      <RadioButtonContext.Provider value="USER_FORM">
        <RadioButton text="Foo" name="story" value="foo" checked={true} onChange={action('Clicked')} />
        <RadioButton text="Bar" name="story" value="bar" checked={false} onChange={action('Clicked')} />
      </RadioButtonContext.Provider>
    </div>
  ))
