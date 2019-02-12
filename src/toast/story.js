import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Toast from './index';

import Icons from '../icons';

storiesOf('Toast', module)
  .add('With multiline content', () => (
    <Toast icon={<Icons.IconInfo color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .add(`With title`, () => (
    <Toast
      title="Hello World?"
      icon={<Icons.IconCheck color="#fff" />}
    >
      Your password has been updated.
    </Toast>
  ))
  .add('Success', () => (
    <Toast type="success" icon={<Icons.IconCheck color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .add(`Success with title`, () => (
    <Toast
      type="success"
      title="Password Updated"
      icon={<Icons.IconCheck color="#fff" />}
    >
      Your password has been updated.
    </Toast>
  ))
  .add(`Success that's non-statically positioned`, () => (
    <div style={{position: 'fixed', top: 20, left: 'calc(50% - 200px)', width: 400}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<Icons.IconCheck color="#fff" />}
      >
        Your password has been updated.
      </Toast>
    </div>
  ))
  .add(`Success that's dimissable`, () => (
    <div style={{width: 500}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<Icons.IconCheck color="#fff" />}
        onDismiss={action('Dismissing toast')}
      >
        Your password has been updated.
      </Toast>
    </div>
  ))
  .add(`Success with a multi-line body`, () => (
    <div style={{width: 400}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<Icons.IconCheck color="#fff" />}
      >
        Your password has been successfully updated. foo bar baz
      </Toast>
    </div>
  ))
  .add('Warning', () => (
    <Toast type="warning" icon={<Icons.IconInfo color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .add('Danger', () => (
    <Toast type="danger" icon={<Icons.IconLinkBroken color="#fff" />}>
      Danger danger, Mr. Ranger!
    </Toast>
  ))
