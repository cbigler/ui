import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import InfoPopup from './index';


storiesOf('InfoPopup', module)
  .addWithInfo('With a text body', () => (
    <div>
      <span style={{fontFamily: 'Sailec,Helvetica,sans-serif', fontSize: 14}}>
        foo bar baz this needs to be longer yea yea yea<InfoPopup text="Hello world!">
          <h3>Utilization</h3>
          <p>A measure of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam orci, lacinia ac vestibulum ut, vehicula at eros. Pellentesque molestie eu odio nec volutpat. Fusce cursus sapien quis massa tincidunt pellentesque. Sed molestie orci a augue auctor iaculis. Donec pharetra fringilla sem in convallis. Maecenas diam nisi, hendrerit rhoncus aliquam et, bibendum et felis. Nunc nec tortor interdum, mattis lectus nec, aliquet lectus. Vivamus hendrerit pharetra metus ut pulvinar.</p>
          <br/>
          <img src="https://i.imgur.com/jjQJZOo.png" />
        </InfoPopup>
      </span>
    </div>
  ))
