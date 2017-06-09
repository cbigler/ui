import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Card, {CardBody} from './';

storiesOf('Card', module)
  .addWithInfo('Card', () => (
    <Card>
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
  .addWithInfo('Dark Card', () => (
    <Card type="dark">
      <CardBody>
        <p>Hello World!</p>
      </CardBody>
    </Card>
  ))
