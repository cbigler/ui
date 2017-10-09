import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';

import Modal, { ModalClose } from './index';
import Button from '../button/index';
import Card, { CardHeader, CardBody } from '../card';


storiesOf('Modal', module)
  .addWithInfo('With a card inside', () => (
    <div>
      foo
      <Modal onClickBackdrop={action('backdrop click')}>
        <Card type="modal">
          <CardHeader>Confirmation</CardHeader>
          <CardBody>
            <p style={{margin: 0}}>This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.</p>
            <br />
            <Button>Yes</Button>
            <br />
            <Button>No</Button>
          </CardBody>
        </Card>
      </Modal>
    </div>
  ))
  .addWithInfo('With a close button', () => (
    <div>
      foo
      <Modal
        onClickBackdrop={action('backdrop click')}
        onClose={action('close button click')}
      >
        <Card type="modal">
          <CardHeader>Confirmation</CardHeader>
          <CardBody>
            <p style={{margin: 0}}>This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.</p>
            <br />
            <Button>Yes</Button>
            <br />
            <Button>No</Button>
          </CardBody>
        </Card>
      </Modal>
    </div>
  ))
