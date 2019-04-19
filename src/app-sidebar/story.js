import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppFrame from '../app-frame';
import AppPane from '../app-pane';
import AppSidebar from './';

storiesOf('AppSidebar', module)
  .add('Default', () => (
    <div style={{height: 300}}>
      <AppFrame>
        <AppSidebar visible={true}>
          This is the sidebar
        </AppSidebar>
        <AppPane>
          This is a pane
        </AppPane>
      </AppFrame>
    </div>
  ))
  .add('With a bigger width', () => (
    <div style={{height: 500}}>
      <AppFrame>
        <AppSidebar visible={true} width={600}>
          This is the sidebar
        </AppSidebar>
        <AppPane>
          This is a pane
        </AppPane>
      </AppFrame>
    </div>
  ))
  .add('With a smaller width', () => (
    <div style={{height: 500}}>
      <AppFrame>
        <AppSidebar visible={true} width={200}>
          This is the sidebar
        </AppSidebar>
        <AppPane>
          This is a pane
        </AppPane>
      </AppFrame>
    </div>
  ))
