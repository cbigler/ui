import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import ContextMenu, { ContextMenuItem } from './';


storiesOf('ContextMenu', module)
  .addWithInfo('With icons', () => (
    <ContextMenu>
      <ContextMenuItem>
        <img src="http://i.imgur.com/ssuaPQs.png" />
        Foo
      </ContextMenuItem>
      <ContextMenuItem>
        <img src="http://i.imgur.com/ssuaPQs.png" />
        Bar
      </ContextMenuItem>
    </ContextMenu>
  ))
  .addWithInfo('Without icons', () => (
    <ContextMenu>
      <ContextMenuItem>Foo</ContextMenuItem>
      <ContextMenuItem>Bar</ContextMenuItem>
    </ContextMenu>
  ))
