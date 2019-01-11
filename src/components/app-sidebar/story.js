import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppFrame from '../app-frame';
import AppSidebar from './';

storiesOf('AppSidebar', module)
  .addWithInfo('With a text body', () => (
    <AppFrame>
      <AppSidebar visible={true}>Test!</AppSidebar>
    </AppFrame>
  ))
