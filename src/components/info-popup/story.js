import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import InfoPopup from './index';

import Card, { CardHeader, CardBody } from '../card/index';


storiesOf('InfoPopup', module)
  .addWithInfo('Alone', () => (
    <div style={{marginLeft: 50}}>
      <InfoPopup>
        <h3>Utilization</h3>
        <p>A measure of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam orci, lacinia ac vestibulum ut, vehicula at eros. Pellentesque molestie eu odio nec volutpat. Fusce cursus sapien quis massa tincidunt pellentesque. Sed molestie orci a augue auctor iaculis. Donec pharetra fringilla sem in convallis. Maecenas diam nisi, hendrerit rhoncus aliquam et, bibendum et felis. Nunc nec tortor interdum, mattis lectus nec, aliquet lectus. Vivamus hendrerit pharetra metus ut pulvinar.</p>
        <br/>
        <img src="https://i.imgur.com/jjQJZOo.png" />
      </InfoPopup>
    </div>
  ))
  .addWithInfo('With text next to it', () => (
    <div>
      <span style={{fontFamily: 'Sailec,Helvetica,sans-serif', fontSize: 14}}>
        foo bar baz this needs to be longer yea yea yea<InfoPopup>
          <h3>Utilization</h3>
          <p>A measure of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam orci, lacinia ac vestibulum ut, vehicula at eros. Pellentesque molestie eu odio nec volutpat. Fusce cursus sapien quis massa tincidunt pellentesque. Sed molestie orci a augue auctor iaculis. Donec pharetra fringilla sem in convallis. Maecenas diam nisi, hendrerit rhoncus aliquam et, bibendum et felis. Nunc nec tortor interdum, mattis lectus nec, aliquet lectus. Vivamus hendrerit pharetra metus ut pulvinar.</p>
          <br/>
          <img src="https://i.imgur.com/jjQJZOo.png" />
        </InfoPopup>
      </span>
    </div>
  ))
  .addWithInfo('In a header of a card', () => (
    <Card>
      <CardHeader>
        My header&nbsp;
        <InfoPopup>
          <h3>Utilization</h3>
          <p>A measure of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam orci, lacinia ac vestibulum ut, vehicula at eros. Pellentesque molestie eu odio nec volutpat. Fusce cursus sapien quis massa tincidunt pellentesque. Sed molestie orci a augue auctor iaculis. Donec pharetra fringilla sem in convallis. Maecenas diam nisi, hendrerit rhoncus aliquam et, bibendum et felis. Nunc nec tortor interdum, mattis lectus nec, aliquet lectus. Vivamus hendrerit pharetra metus ut pulvinar.</p>
        </InfoPopup>
      </CardHeader>
      <CardBody>
        foo bar baz
      </CardBody>
    </Card>
  ))
  .addWithInfo('With a custom target', () => (
    <span>
      <InfoPopup target={<span style={{fontFamily: 'Sailec,Helvetica,sans-serif', fontSize: 14}}>
        With custom text hover
      </span>}>
        <h3>Utilization</h3>
        <p>A measure of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam orci, lacinia ac vestibulum ut, vehicula at eros. Pellentesque molestie eu odio nec volutpat. Fusce cursus sapien quis massa tincidunt pellentesque. Sed molestie orci a augue auctor iaculis. Donec pharetra fringilla sem in convallis. Maecenas diam nisi, hendrerit rhoncus aliquam et, bibendum et felis. Nunc nec tortor interdum, mattis lectus nec, aliquet lectus. Vivamus hendrerit pharetra metus ut pulvinar.</p>
      </InfoPopup>
    </span>
  ))
