import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListView, {
  ListViewColumn,
  ListViewColumnSpacer,
  getDefaultSort,
  getNextSortDirection
} from './index';

const TEST_DATA = [
  {id: 0, name: "Main campus eatery", function: "Eat", capacity: 80, visits: 521},
  {id: 1, name: "My street cafe", function: "Eat", capacity: 80, visits: 590},
  {id: 2, name: "4th floor cafeteria", function: "Eat", capacity: 40, visits: 193},
  {id: 3, name: "Conference Room A", function: "Work", capacity: 20, visits: 105},
  {id: 4, name: "Conference room B", function: "Work", capacity: 20, visits: 198},
  {id: 5, name: "Blue Lounge", function: "Lounge", capacity: 10, visits: 96},
  {id: 6, name: "Red Lounge", function: "Lounge", capacity: 16, visits: 166},
];

storiesOf('ListView', module)
  .add('With some data', () => (
    <ListView
      showHeaders={true}
      data={TEST_DATA}
    >
      <ListViewColumn
        id="Name"
        template={item => item.name}
      />
      <ListViewColumn
        id="Visits"
        template={item => item.visits}
      />
    </ListView>
  ), {info: {inline: false}})
  .add('With split left/right column groups', () => (
    <ListView
      showHeaders={true}
      data={TEST_DATA}
    >
      <ListViewColumn
        id="Name"
        template={item => item.name}
        width={240}
      />
      <ListViewColumn
        id="Function"
        template={item => item.function}
        width={160}
      />
      <ListViewColumnSpacer />
      <ListViewColumn
        id="Capacity"
        template={item => item.capacity}
        width={120}
        align="right"
      />
      <ListViewColumn
        id="Visits"
        template={item => item.visits}
        width={120}
        align="right"
      />
    </ListView>
  ), {info: {inline: false}})
  .add('With sorting', () => {
    function ListViewTester() {
      const [state, setState] = useState({
        data: TEST_DATA,
        sortedData: TEST_DATA,
        sortColumn: null,
        sortDirection: 'none'
      });

      return <ListView
        data={state.sortedData}
        sortColumn={state.sortColumn}
        sortDirection={state.sortDirection}
        onChangeSort={(sortColumn, sortTemplate) => {
          const lastSortDirection = sortColumn === state.sortColumn ? state.sortDirection : 'none';
          const sortDirection = getNextSortDirection(lastSortDirection);

          setState({
            ...state,
            sortedData: state.data.slice().sort(getDefaultSort(sortTemplate, sortDirection)),
            sortColumn,
            sortDirection
          });
        }}
      >
        <ListViewColumn
          id="Name"
          template={item => item.name}
          width={240}
        />
        <ListViewColumn
          id="Function"
          template={item => item.function}
          width={160}
        />
        <ListViewColumnSpacer />
        <ListViewColumn
          id="Capacity"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Visits"
          template={item => item.visits}
          width={120}
          align="right"
        />
      </ListView>
    }
    return <ListViewTester />;
  }, {info: {inline: false}})
