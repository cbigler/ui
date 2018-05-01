import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import colorVariables from '@density/ui/variables/colors.json';

import './styles.scss';
import Icons from './';
const { IconImageUpload } = Icons;

storiesOf('Icons', module)
  .addWithInfo('A sample icon', () => (
    <IconImageUpload />
  ))
  .addWithInfo('A sample icon in brand-primary color', () => (
    <IconImageUpload color="primary" />
  ))
  .addWithInfo('A sample icon in gray-darker color', () => (
    <IconImageUpload color="darker" />
  ))
  .addWithInfo('A sample icon in a random hex color', () => (
    <IconImageUpload color="#FFBA08" />
  ))
  .addWithInfo('All Icons', () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 275px)',
      gridTemplateRows: 'repeat(100, 30px)',
      gridGap: 10,
    }}>
      {Object.keys(Icons).map(iconName => {
        const IconComponent = Icons[iconName];
        return <div style={{fontFamily: 'Sailec'}}>
          <IconComponent key={iconName} />
          <span style={{marginLeft: 10, fontSize: 14, verticalAlign: 4, color: colorVariables.grayDarker}}>{iconName}</span>
        </div>;
      })}
    </div>
  ))
