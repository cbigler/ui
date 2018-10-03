import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Fonts', module)
  .addWithInfo('Includes fonts into the page', () => (
    <span>
    <p>
      You'll have to trust us, there's not realyl a good way to prove this!
    </p>
    <p>
      <pre style={{background: '#ddd', padding: 20}}>
        // Include in your javascript
        import '@density/ui-fonts';
      </pre>
    </p>
    </span>
  ))
