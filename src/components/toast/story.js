import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Toast from './index';


const CHECKMARK = <svg width='18' height='15' viewBox='0 0 18 15' xmlns='http://www.w3.org/2000/svg'>
  <g id='Accounts' fill='none' fillRule='evenodd' strokeLinecap='square'
  strokeLinejoin='round'>
      <g id='acc-003-1-r1' transform='translate(-477 -145)' stroke='#FFF' strokeWidth='1.5'>
          <g id='Notification--Failure' transform='translate(450 116)'>
              <polyline id='icon-check' points='28 36.9693091 33.619907 42.589216 43.7357395 30.2254207'
              />
          </g>
      </g>
  </g>
</svg>;

const INFO = <svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <g id='Environment' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g id='env-001-1-r1' transform='translate(-217 -268)' stroke='#FFF' strokeWidth='1.5'>
            <g id='col-spaces' transform='translate(170 116)'>
                <g id='container-spaces' transform='translate(0 105)'>
                    <g id='Notification--Failure' transform='translate(20 20)'>
                        <g id='Page-1' transform='translate(28 28)'>
                            <path d='M16,8 C16,12.4182222 12.4183333,16 8,16 C3.58177778,16 0,12.4182222 0,8 C0,3.58166667 3.58177778,0 8,0 C12.4183333,0 16,3.58166667 16,8 L16,8 Z'
                            id='Stroke-1' strokeLinecap='round' />
                            <path d='M8,12 L8,7' id='Stroke-3' strokeLinecap='square' />
                            <path d='M8,4 L8,3.9219' id='Stroke-5' strokeLinecap='square' />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>;

storiesOf('Toast', module)
  .addWithInfo('With multiline content', () => (
    <Toast icon={INFO}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo(`With title`, () => (
    <Toast
      title="Hello World?"
      icon={CHECKMARK}
    >
      Your password has been updated.
    </Toast>
  ))
  .addWithInfo('Success', () => (
    <Toast type="success" icon={CHECKMARK}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo(`Success with title`, () => (
    <Toast
      type="success"
      title="Password Updated"
      icon={CHECKMARK}
    >
      Your password has been updated.
    </Toast>
  ))
  .addWithInfo(`Success that's non-statically positioned`, () => (
    <div style={{position: 'fixed', top: 20, left: 'calc(50% - 200px)', width: 400}}>
      <Toast
        type="success"
        title="Password Updated"
        icon={CHECKMARK}
      >
        Your password has been updated.
      </Toast>
    </div>
  ))
  .addWithInfo(`Success that's dimissable`, () => (
    <Toast
      type="success"
      title="Password Updated"
      icon={CHECKMARK}
      onDismiss={action('Dismissing toast')}
    >
      Your password has been updated.
    </Toast>
  ))
  .addWithInfo(`Success with a multi-line body`, () => (
    <Toast
      type="success"
      title="Password Updated"
      icon={CHECKMARK}
      onDismiss={action('Dismissing toast')}
    >
      Your password has been successfully updated. foo bar baz
    </Toast>
  ))
  .addWithInfo('Warning', () => (
    <Toast type="warning" icon={INFO}>
      To link a doorway with a space, drag the doorway from below to a space on the left.
    </Toast>
  ))
  .addWithInfo('Danger', () => (
    <Toast type="danger" icon={INFO}>
      Danger danger, Mr. Ranger!
    </Toast>
  ))
