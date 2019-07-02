import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListView, { ListViewColumn } from './index';

storiesOf('ListView', module)
  // .add('Documentation', () => (
  //   <ReportTotalVisitsRollup
  //     title="Most visited spaces"
  //     segmentName="lunch"
  //     startDate={moment('2018-03-14T00:00:00-04:00')}
  //     endDate={moment('2018-03-20T00:00:00-04:00')}
  //     mode={MOST_VISITED}
  //     visits={[
  //       {id: 0, name: "Main campus eatery", visits: 150},
  //       {id: 1, name: "My street cafe", visits: 100},
  //       {id: 2, name: "4th floor cafeteria", visits: 130},
  //       {id: 3, name: "18. War St Fish", visits: 105},
  //       {id: 4, name: "Hipster Cafe", visits: 199},
  //       {id: 5, name: "123 S. Olive Cafeteria", visits: 96},
  //       {id: 6, name: "456 E. Rutherford Cafeteria", visits: 166},
  //       {id: 7, name: "SHOULD BE NOT INCLUDED WHEN NOT EXPANDED", visits: 80},
  //       {id: 8, name: "SHOULD ALSO NOT BE INCLUDED WHEN NOT ON DETAILS PAGE", visits: 79},
  //     ]}
  //     displayContext={{
  //       showExpandControl: true,
  //       onReportExpand: action('Expand report'),
  //       maximumNumberOfRows: 7,
  //     }}
  //   />
  // ), {info: {text: README}})
  .add('With some data', () => (
    <ListView
      showHeaders={true}
      data={[
        {id: 0, name: "Main campus eatery", visits: 150},
        {id: 1, name: "My street cafe", visits: 100},
        {id: 2, name: "4th floor cafeteria", visits: 130},
        {id: 3, name: "18. War St Fish", visits: 105},
        {id: 4, name: "Hipster Cafe", visits: 199},
        {id: 5, name: "123 S. Olive Cafeteria", visits: 96},
        {id: 6, name: "456 E. Rutherford Cafeteria", visits: 166},
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
