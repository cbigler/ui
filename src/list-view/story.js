import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListView, {
  ListViewColumn,
  ListViewColumnSpacer,
  getDefaultSortFunction,
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
      onClickRow={item => alert(item.name)}
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
  .add('With row headers', () => (
    <div style={{width: '100%', overflowX: 'scroll'}}>
      <ListView
        showHeaders={true}
        data={TEST_DATA}
      >
        <ListViewColumn
          id="Name"
          template={item => item.name}
          isRowHeader={true}
          width={240}
        />
        <ListViewColumn
          id="Function"
          template={item => item.function}
          width={160}
        />
        <ListViewColumnSpacer />
        <ListViewColumn
          id="Capacity1"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity2"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity3"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity4"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity5"
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
    </div>
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
        rowHeight={40}
        fontSize={14}
        headerFontSize={12}
        data={state.sortedData}
        sort={[{
          column: state.sortColumn,
          direction: state.sortDirection
        }]}
        onChangeSort={(sortColumn, sortTemplate) => {
          const lastSortDirection = sortColumn === state.sortColumn ? state.sortDirection : 'none';
          const sortDirection = getNextSortDirection(lastSortDirection);

          setState({
            ...state,
            sortedData: state.data.slice().sort(getDefaultSortFunction(sortTemplate, sortDirection)),
            sortColumn,
            sortDirection
          });
        }}
      >
        <ListViewColumn
          id="Name"
          template={item => <span style={{fontWeight: 500}}>{item.name}</span>}
          valueTemplate={item => item.name}
          isRowHeader={true}
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
          id="Capacity2"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity3"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity4"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity5"
          template={item => item.capacity}
          width={120}
          align="right"
        />
        <ListViewColumn
          id="Capacity6"
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
  .add('With multiple sorting', () => {
    function ListViewTester() {
      const [state, setState] = useState({
        data: TEST_DATA,
        sortedData: TEST_DATA,
        sort: []
      });

      return <ListView
        data={state.sortedData}
        sort={state.sort}
        onChangeSort={(sortColumn, sortTemplate) => {

          // Mutate some state
          const currentSortIndex = state.sort.findIndex(x => x.column === sortColumn);
          const currentSort = currentSortIndex > -1 ? state.sort.splice(currentSortIndex, 1)[0] : {
            column: sortColumn,
            template: sortTemplate,
            direction: 'none'
          };
          currentSort.direction = getNextSortDirection(currentSort.direction);
          state.sort.unshift(currentSort);

          setState({
            ...state,
            sortedData: state.sort.reverse().reduce((curr, next) => (
              curr.sort(getDefaultSortFunction(next.template, next.direction))
            ), state.data.slice())
          });
        }}
      >
        <ListViewColumn
          id="Name"
          template={item => <span style={{fontWeight: 500}}>{item.name}</span>}
          valueTemplate={item => item.name}
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