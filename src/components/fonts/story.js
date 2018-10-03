import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './index.js';

storiesOf('Fonts', module)
  .addWithInfo('Includes fonts into the page', () => (
    <span>
    <p style={{fontFamily: 'Sailec,sans-serif'}}>
      This component, when imported, adds the Density standard font (Sailec) into your page.
      Matter of fact, this text is in Sailec!
    </p>
    <p>
      <pre style={{background: '#ddd', padding: 20, lineHeight: 2}}>
        // Include in your javascript<br/>
        import '@density/ui-fonts';
      </pre>
    </p>
    </span>
  ))
