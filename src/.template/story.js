import React from 'react';
import { storiesOf } from '@storybook/react';

import %COMPONENTUPPERCAMEL% from './index';

storiesOf('%COMPONENTUPPERCAMEL%', module)
  .add('Example Story', () => (
    <%COMPONENTUPPERCAMEL%>Hello world!</%COMPONENTUPPERCAMEL%>
  ))
