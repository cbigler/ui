import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportTimeSegmentBreakdown from './';

storiesOf('ReportTimeSegmentBreakdown', module)
  .addWithInfo('With a text body', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
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
        points={[
          {timestamp: '09:00:00', value: 1},
          {timestamp: '10:00:00', value: 2},
          {timestamp: '11:00:00', value: 1},
          {timestamp: '12:00:00', value: 3},
          {timestamp: '13:00:00', value: 5},
          {timestamp: '14:00:00', value: 6},
          {timestamp: '15:00:00', value: 7},
          {timestamp: '16:00:00', value: 4},
          {timestamp: '17:00:00', value: 1},
        ]}

        dailyAverage={3124}

        peakRateOfEntryTimestamp="12:45:00"
        peakRateOfEntryQuantity={4}

        peakOccupancyTimestamp="10:20:00"
        peakOccupancyQuantity={1}
      />
    </div>
  ))
