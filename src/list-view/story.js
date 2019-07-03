import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListView, { ListViewColumn } from './index';

storiesOf('ListView', module)
  .add('With some data', () => (
    <ListView
      showHeaders={true}
      data={[
        {id: 0, name: "Main campus eatery", function: "Eat", capacity: 80, visits: 521},
        {id: 1, name: "My street cafe", function: "Eat", capacity: 80, visits: 590},
        {id: 2, name: "4th floor cafeteria", function: "Eat", capacity: 40, visits: 193},
        {id: 3, name: "Conference Room A", function: "Work", capacity: 20, visits: 105},
        {id: 4, name: "Conference room B", function: "Work", capacity: 20, visits: 198},
        {id: 5, name: "Blue Lounge", function: "Lounge", capacity: 10, visits: 96},
        {id: 6, name: "Red Lounge", function: "Lounge", capacity: 8, visits: 166},
      ]}
    >
      <ListViewColumn
        title="Name"
        template={item => item.name}
      />
      <ListViewColumn
        title="Visits"
        template={item => item.visits}
      />
    </ListView>
  ), {info: {inline: false}})
  .add('With split left/right column groups', () => (
    <ListView
      showHeaders={true}
      data={[
        {id: 0, name: "Main campus eatery", function: "Eat", capacity: 80, visits: 521},
        {id: 1, name: "My street cafe", function: "Eat", capacity: 80, visits: 590},
        {id: 2, name: "4th floor cafeteria", function: "Eat", capacity: 40, visits: 193},
        {id: 3, name: "Conference Room A", function: "Work", capacity: 20, visits: 105},
        {id: 4, name: "Conference room B", function: "Work", capacity: 20, visits: 198},
        {id: 5, name: "Blue Lounge", function: "Lounge", capacity: 10, visits: 96},
        {id: 6, name: "Red Lounge", function: "Lounge", capacity: 8, visits: 166},
      ]}
    >
      <ListViewColumn
        title="Name"
        template={item => item.name}
        width={240}
      />
      <ListViewColumn
        title="Function"
        template={item => item.function}
        width={160}
      />
      <ListViewColumn
        title=" "
        template={item => null}
        width="auto"
      />
      <ListViewColumn
        title="Capacity"
        template={item => item.capacity}
        width={120}
      />
      <ListViewColumn
        title="Visits"
        template={item => item.visits}
        width={120}
      />
    </ListView>
  ), {info: {inline: false}})
  .add('With split left/right column groups', () => (
    <ListView
      showHeaders={true}
      data={[
        {id: 0, name: "Main campus eatery", function: "Eat", capacity: 80, visits: 521},
        {id: 1, name: "My street cafe", function: "Eat", capacity: 80, visits: 590},
        {id: 2, name: "4th floor cafeteria", function: "Eat", capacity: 40, visits: 193},
        {id: 3, name: "Conference Room A", function: "Work", capacity: 20, visits: 105},
        {id: 4, name: "Conference room B", function: "Work", capacity: 20, visits: 198},
        {id: 5, name: "Blue Lounge", function: "Lounge", capacity: 10, visits: 96},
        {id: 6, name: "Red Lounge", function: "Lounge", capacity: 8, visits: 166},
      ]}
    >
      <ListViewColumn
        title="Name"
        template={item => item.name}
        width={240}
      />
      <ListViewColumn
        title="Function"
        template={item => item.function}
        width={160}
      />
      <ListViewColumn
        width="auto"
      />
      <ListViewColumn
        title="Capacity"
        template={item => item.capacity}
        width={120}
      />
      <ListViewColumn
        title="Visits"
        template={item => item.visits}
        width={120}
      />
    </ListView>
  ), {info: {inline: false}})
