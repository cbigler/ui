import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Toast from './index';


storiesOf('Toast', module)
  .addWithInfo('With multiline content', () => (
    <Toast icon={<span>&#10004;</span>}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('Success', () => (
    <Toast type="success" icon={<span>&#10004;</span>}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('info', () => (
    <Toast type="info" icon={<span>&#10004;</span>}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('Warning', () => (
    <Toast type="warning" icon={<span>&times;</span>}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('Danger', () => (
    <Toast type="danger" icon={<span>&times;</span>}>
      Oh No!!!
    </Toast>
  ))
