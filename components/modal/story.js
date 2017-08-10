import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';

import Modal, { ModalClose } from './index';
import Card, { CardHeader, CardBody } from '../card';


storiesOf('Modal', module)
  .addWithInfo('With a card inside', () => (
    <div>
      foo
      <Modal onClickBackdrop={action('backdrop click')}>
        <Card>
          <CardHeader>Foo</CardHeader>
          <CardBody>Bar</CardBody>
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
        <Card>
          <CardHeader>
            Foo
          </CardHeader>
          <CardBody>Bar</CardBody>
        </Card>
      </Modal>
    </div>
  ))
