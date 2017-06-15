import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Container from './';


storiesOf('Container', module)
  .addWithInfo('Normal width', () => (
    <Container>
      foo
    </Container>
  ))
  .addWithInfo('Full width', () => (
    <Container fullWidth>
      foo
    </Container>
  ))
