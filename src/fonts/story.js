import React from 'react';
import { storiesOf } from '@storybook/react';

import './index';

storiesOf('Fonts', module)
  .add('Includes fonts into the page', () => (
    <span>
    <p style={{fontFamily: 'Sailec,sans-serif'}}>
      This component, when imported, adds the Density standard font (Sailec) into your page.
      Matter of fact, this text is in Sailec!
    </p>
    <pre style={{background: '#ddd', padding: 20, lineHeight: 2}}>
      // Include in your javascript bundle<br/>
      import '@density/ui-fonts';
    </pre>
    </span>
  ))
