import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportTimeSegmentBreakdown from './';

storiesOf('ReportTimeSegmentBreakdown', module)
  .addWithInfo('At breakfast', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
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

        peakRateOfEntryTimestamp="12:30:00"
        peakRateOfEntryQuantity={3}

        peakOccupancyTimestamp="15:00:00"
        peakOccupancyQuantity={7}
      />
    </div>
  ))
  .addWithInfo('At lunch', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Lunch Average Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Lunch',
          start: '11:00:00',
          end: '16:00:00',
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
          {timestamp: '11:00:00', value: 1},
          {timestamp: '12:00:00', value: 4},
          {timestamp: '13:00:00', value: 8},
          {timestamp: '13:45:00', value: 10},
          {timestamp: '14:15:00', value: 3},
          {timestamp: '15:00:00', value: 2.5},
          {timestamp: '16:00:00', value: 1},
        ]}

        dailyAverage={821}

        peakRateOfEntryTimestamp="12:10:00"
        peakRateOfEntryQuantity={3}

        peakOccupancyTimestamp="15:00:00"
        peakOccupancyQuantity={7}
      />
    </div>
  ))
  .addWithInfo('With one bubble being at the start of the time range and one at the end', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Lunch Average Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Lunch',
          start: '11:00:00',
          end: '16:00:00',
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
          {timestamp: '11:00:00', value: 1},
          {timestamp: '12:00:00', value: 4},
          {timestamp: '13:00:00', value: 8},
          {timestamp: '13:45:00', value: 10},
          {timestamp: '14:15:00', value: 3},
          {timestamp: '15:00:00', value: 2.5},
          {timestamp: '16:00:00', value: 1},
        ]}

        dailyAverage={821}

        peakRateOfEntryTimestamp="11:00:00"
        peakRateOfEntryQuantity={3}

        peakOccupancyTimestamp="16:00:00"
        peakOccupancyQuantity={7}
      />
    </div>
  ))
  .addWithInfo('With both bubbles being at the same value', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
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

        peakRateOfEntryTimestamp="12:00:00"
        peakRateOfEntryQuantity={3}

        peakOccupancyTimestamp="12:00:00"
        peakOccupancyQuantity={3}
      />
    </div>
  ))
