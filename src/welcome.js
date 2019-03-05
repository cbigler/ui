import React from 'react';
import { storiesOf } from '@storybook/react';

const Welcome = () => (
  <div style={{fontFamily: 'Aeonik, Helvetica, Arial, sans-serif', padding: 20, lineHeight: '24px'}}>
    <h1>Welcome to Density UI</h1>
    <p>
      This storybook contains UI components used in Density web applications.
    </p>
  </div>
);

storiesOf('Welcome', module).add('Welcome', () => <Welcome />, {info: {inline: false}});
