import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Toast from './index';

import Icons from '../icons';

storiesOf('Toast', module)
  .add('Default Toast', () => (
    <Toast visible onDismiss={action('onDismiss')}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .add('Error toast', () => (
    <Toast type="error" visible onDismiss={action('onDismiss')}>
      Error performing action
    </Toast>
  ))
