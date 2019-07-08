import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListView, { SORT_CYCLE, ListViewColumn, ListViewColumnSpacer } from './index';

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
        onChangeSort={(id, sortTemplate) => {
          const nullsLast = true;
          const sortDirection = SORT_CYCLE[id === state.sortColumn ? state.sortDirection : 'none'];
          const sorted = state.data.slice().sort((a, b) => {

            // Short circuit and return initial order if sorting is toggled off
            if (sortDirection !== 'asc' && sortDirection !== 'desc') { return 1; }

            // Pass each data item through the sortTemplate function
            const aValue = sortTemplate(a),
                  bValue = sortTemplate(b);

            // Invert sorting if mode is descending
            const sortMultiplier = sortDirection === 'desc' ? -1 : 1;

            // Use coercion trick to check for either null or undefined
            if (aValue == null && bValue == null) {
              return 0;
            } else if (aValue == null) {
              return nullsLast ? -1 : 1;
            } else if (bValue == null) {
              return nullsLast ? 1 : -1;
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
              return (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) * sortMultiplier;
            } else {
              return String(aValue).localeCompare(String(bValue)) * sortMultiplier;
            }
          });
          setState({
            data: state.data,
            sortedData: sorted,
            sortColumn: id,
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
