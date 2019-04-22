import React from 'react';
import { storiesOf } from '@storybook/react';

import fontVariables from '../../variables/fonts.json';

import './index';

storiesOf('Fonts', module)
  .add('Includes fonts into the page', () => (
    <div>
      <h1>Typography</h1>
      <p style={{fontFamily: fontVariables.fontBase}}>
        This component, when imported, adds the Density standard font (Aeonik) into your page.
        Matter of fact, this text is in Aeonik!
      </p>
      <div>
        <pre style={{
          background: '#eee',
          padding: 20,
          lineHeight: 2,
          maxWidth: 400,
          borderRadius: 4
          }}>
          // Include in your javascript bundle<br/>
          import '@density/ui';
        </pre>
      </div>



      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>

      <p style={{fontFamily: fontVariables.fontBase, fontWeight: 'bold'}}>This text is in Aeonik bold</p>
      <p style={{fontFamily: fontVariables.fontBase, fontWeight: 500}}>This text is in Aeonik medium</p>
      <p style={{fontFamily: fontVariables.fontBase}}>This text is in Aeonik regular</p>
    </div>
  ), {info: {inline: false}})
