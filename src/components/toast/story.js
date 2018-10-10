import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Toast from './index';

import { IconInfo, IconCheck, IconLinkBroken } from '@density/ui-icons';

storiesOf('Toast', module)
  .addWithInfo('With multiline content', () => (
    <Toast icon={<IconInfo color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo(`With title`, () => (
    <Toast
      title="Hello World?"
      icon={<IconCheck color="#fff" />}
    >
      Your password has been updated.
    </Toast>
  ))
  .addWithInfo('Success', () => (
    <Toast type="success" icon={<IconCheck color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo(`Success with title`, () => (
    <Toast
      type="success"
      title="Password Updated"
      icon={<IconCheck color="#fff" />}
    >
      Your password has been updated.
    </Toast>
  ))
  .addWithInfo(`Success that's non-statically positioned`, () => (
    <div style={{position: 'fixed', top: 20, left: 'calc(50% - 200px)', width: 400}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<IconCheck color="#fff" />}
      >
        Your password has been updated.
      </Toast>
    </div>
  ))
  .addWithInfo(`Success that's dimissable`, () => (
    <div style={{width: 500}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<IconCheck color="#fff" />}
        onDismiss={action('Dismissing toast')}
      >
        Your password has been updated.
      </Toast>
    </div>
  ))
  .addWithInfo(`Success with a multi-line body`, () => (
    <div style={{width: 400}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={<IconCheck color="#fff" />}
      >
        Your password has been successfully updated. foo bar baz
      </Toast>
    </div>
  ))
  .addWithInfo('Warning', () => (
    <Toast type="warning" icon={<IconInfo color="#fff" />}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('Danger', () => (
    <Toast type="danger" icon={<IconLinkBroken color="#fff" />}>
      Danger danger, Mr. Ranger!
    </Toast>
  ))
