import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import %COMPONENTUPPERCAMEL% from './';

storiesOf('%COMPONENTUPPERCAMEL%', module)
  .addWithInfo('With a text body', () => (
    <%COMPONENTUPPERCAMEL% text="Hello world!" />
  ))
