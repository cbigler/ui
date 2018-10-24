import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReportSurpassedCapacity from './';

storiesOf('ReportSurpassedCapacity', module)
  .addWithInfo('With a text body', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportSurpassedCapacity
        title="Over capacity"
        startDate={moment("2018-03-14T00:00:00-04:00")}
        endDate={moment("2018-03-18T00:00:00-04:00")}
        spaces={["Cafe Bruno"]}
        busiestDay={moment("2018-03-18T00:00:00-04:00")}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Breakfast',
          start: '09:00:00',
          end: '17:00:00',
          days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          spaces: [ /* ... */ ],
        }}
        capacity={100}
        data={[
          [
            {count: 20, start: '09:00:00', end: '09:05:00'},
            {count: 50, start: '09:05:00', end: '09:30:00'},
            {count: 95, start: '09:30:00', end: '09:45:00'},
            {count: 50, start: '09:45:00', end: '10:00:00'},
            {count: 20, start: '10:00:00', end: '10:30:00'},
          ],
          [
            {count: 20, start: '09:00:00', end: '09:05:00'},
            {count: 50, start: '09:05:00', end: '09:10:00'},
            {count: 90, start: '09:10:00', end: '09:15:00'},
          ],
          [
            {count: 20, start: '09:00:00', end: '09:05:00'},
            {count: 50, start: '09:05:00', end: '09:10:00'},
            {count: 90, start: '09:10:00', end: '09:15:00'},
          ],
          [
            {count: 20, start: '09:00:00', end: '09:05:00'},
            {count: 50, start: '09:05:00', end: '09:10:00'},
            {count: 90, start: '09:10:00', end: '09:15:00'},
          ],
          [
            {count: 20, start: '09:00:00', end: '09:05:00'},
            {count: 50, start: '09:05:00', end: '09:10:00'},
            {count: 90, start: '09:10:00', end: '09:15:00'},
          ],
        ]}
      />
    </div>
  ))
