import React from 'react';
import { storiesOf } from '@storybook/react';

import fontVariables from '../../variables/fonts.json';

import './index';

storiesOf('Fonts', module)
  .add('Includes fonts into the page', () => (
    <span>
      <p style={{fontFamily: fontVariables.fontBase}}>
        This component, when imported, adds the Density standard font (Aeonik) into your page.
        Matter of fact, this text is in Aeonik!
      </p>
      <pre style={{background: '#ddd', padding: 20, lineHeight: 2}}>
        // Include in your javascript bundle<br/>
        import '@density/ui';
      </pre>
      <p style={{fontFamily: fontVariables.fontBase, fontWeight: 'bold'}}>This text is in Aeonik bold</p>
      <p style={{fontFamily: fontVariables.fontBase, fontWeight: 500}}>This text is in Aeonik medium</p>
      <p style={{fontFamily: fontVariables.fontBase}}>This text is in Aeonik regular</p>
    </span>
  ), {info: {inline: false}})
