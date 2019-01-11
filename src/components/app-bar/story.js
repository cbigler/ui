import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppBar from './';

storiesOf('AppBar', module)
  .addWithInfo('With a text body', () => (
    <AppBar title="Hello world!" />
  ))
