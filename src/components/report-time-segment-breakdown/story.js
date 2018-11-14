import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import colorVariables from '@density/ui/variables/colors.json';

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
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
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
        color={colorVariables.reportBlue}
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
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Lunch',
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
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Lunch',
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
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
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
  .addWithInfo('With both bubbles being at similar values', () => (
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
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
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

        peakOccupancyTimestamp="12:03:00"
        peakOccupancyQuantity={3}
      />
    </div>
  ))
  .addWithInfo('With a time segment start time that is not on the hour', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-10-21T07:00:00.000Z')}
        endDate={moment('2018-10-28T06:59:59.999Z')}
        spaces={["Space 1"]}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Breakfast',
          start: "10:45:00",
          end: "14:00:00",
          days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          spaces: [ /* ... */ ],
        }}
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
        }}
        points={[
          {
            "timestamp": "10:45:00",
            "value": 64.4
          },
          {
            "timestamp": "10:50:00",
            "value": 66
          },
          {
            "timestamp": "10:55:00",
            "value": 70.4
          },
          {
            "timestamp": "11:00:00",
            "value": 96
          },
          {
            "timestamp": "11:05:00",
            "value": 110.2
          },
          {
            "timestamp": "11:10:00",
            "value": 118.8
          },
          {
            "timestamp": "11:15:00",
            "value": 132.8
          },
          {
            "timestamp": "11:20:00",
            "value": 141.4
          },
          {
            "timestamp": "11:25:00",
            "value": 150
          },
          {
            "timestamp": "11:30:00",
            "value": 175.8
          },
          {
            "timestamp": "11:35:00",
            "value": 206.8
          },
          {
            "timestamp": "11:40:00",
            "value": 231
          },
          {
            "timestamp": "11:45:00",
            "value": 251.8
          },
          {
            "timestamp": "11:50:00",
            "value": 272.8
          },
          {
            "timestamp": "11:55:00",
            "value": 284
          },
          {
            "timestamp": "12:00:00",
            "value": 296
          },
          {
            "timestamp": "12:05:00",
            "value": 349.4
          },
          {
            "timestamp": "12:10:00",
            "value": 376.6
          },
          {
            "timestamp": "12:15:00",
            "value": 395
          },
          {
            "timestamp": "12:20:00",
            "value": 401
          },
          {
            "timestamp": "12:25:00",
            "value": 389.8
          },
          {
            "timestamp": "12:30:00",
            "value": 372.2
          },
          {
            "timestamp": "12:35:00",
            "value": 383.6
          },
          {
            "timestamp": "12:40:00",
            "value": 379.8
          },
          {
            "timestamp": "12:45:00",
            "value": 354.2
          },
          {
            "timestamp": "12:50:00",
            "value": 327.8
          },
          {
            "timestamp": "12:55:00",
            "value": 286.4
          },
          {
            "timestamp": "13:00:00",
            "value": 243.4
          },
          {
            "timestamp": "13:05:00",
            "value": 240.4
          },
          {
            "timestamp": "13:10:00",
            "value": 238.4
          },
          {
            "timestamp": "13:15:00",
            "value": 219.6
          },
          {
            "timestamp": "13:20:00",
            "value": 201.6
          },
          {
            "timestamp": "13:25:00",
            "value": 185.6
          },
          {
            "timestamp": "13:30:00",
            "value": 162.8
          },
          {
            "timestamp": "13:35:00",
            "value": 153
          },
          {
            "timestamp": "13:40:00",
            "value": 143.4
          },
          {
            "timestamp": "13:45:00",
            "value": 128
          },
          {
            "timestamp": "13:50:00",
            "value": 119.2
          },
          {
            "timestamp": "13:55:00",
            "value": 105.2
          },
          {
            "timestamp": "14:00:00",
            "value": 105.2
          }
        ]}

        dailyAverage={3698}

        peakRateOfEntryTimestamp="12:04:00"
        peakRateOfEntryQuantity={106}

        peakOccupancyTimestamp="12:20:00"
        peakOccupancyQuantity={401}
      />
    </div>
  ))
  .addWithInfo('With a time segment that ends at the end of the day', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-10-21T07:00:00.000Z')}
        endDate={moment('2018-10-28T06:59:59.999Z')}
        spaces={["Space 1"]}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Breakfast',
          start: "10:45:00",
          end: "23:00:00",
          days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          spaces: [ /* ... */ ],
        }}
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
        }}
        points={[
          {
            "timestamp": "10:45:00",
            "value": 64.4
          },
          {
            "timestamp": "10:50:00",
            "value": 66
          },
          {
            "timestamp": "10:55:00",
            "value": 70.4
          },
          {
            "timestamp": "11:00:00",
            "value": 96
          },
          {
            "timestamp": "11:05:00",
            "value": 110.2
          },
          {
            "timestamp": "11:10:00",
            "value": 118.8
          },
          {
            "timestamp": "11:15:00",
            "value": 132.8
          },
          {
            "timestamp": "11:20:00",
            "value": 141.4
          },
          {
            "timestamp": "11:25:00",
            "value": 150
          },
          {
            "timestamp": "11:30:00",
            "value": 175.8
          },
          {
            "timestamp": "11:35:00",
            "value": 206.8
          },
          {
            "timestamp": "11:40:00",
            "value": 231
          },
          {
            "timestamp": "11:45:00",
            "value": 251.8
          },
          {
            "timestamp": "11:50:00",
            "value": 272.8
          },
          {
            "timestamp": "11:55:00",
            "value": 284
          },
          {
            "timestamp": "12:00:00",
            "value": 296
          },
          {
            "timestamp": "12:05:00",
            "value": 349.4
          },
          {
            "timestamp": "12:10:00",
            "value": 376.6
          },
          {
            "timestamp": "12:15:00",
            "value": 395
          },
          {
            "timestamp": "12:20:00",
            "value": 401
          },
          {
            "timestamp": "12:25:00",
            "value": 389.8
          },
          {
            "timestamp": "12:30:00",
            "value": 372.2
          },
          {
            "timestamp": "12:35:00",
            "value": 383.6
          },
          {
            "timestamp": "12:40:00",
            "value": 379.8
          },
          {
            "timestamp": "12:45:00",
            "value": 354.2
          },
          {
            "timestamp": "12:50:00",
            "value": 327.8
          },
          {
            "timestamp": "12:55:00",
            "value": 286.4
          },
          {
            "timestamp": "13:00:00",
            "value": 243.4
          },
          {
            "timestamp": "13:05:00",
            "value": 240.4
          },
          {
            "timestamp": "13:10:00",
            "value": 238.4
          },
          {
            "timestamp": "13:15:00",
            "value": 219.6
          },
          {
            "timestamp": "13:20:00",
            "value": 201.6
          },
          {
            "timestamp": "13:25:00",
            "value": 185.6
          },
          {
            "timestamp": "13:30:00",
            "value": 162.8
          },
          {
            "timestamp": "13:35:00",
            "value": 153
          },
          {
            "timestamp": "13:40:00",
            "value": 143.4
          },
          {
            "timestamp": "13:45:00",
            "value": 128
          },
          {
            "timestamp": "13:50:00",
            "value": 119.2
          },
          {
            "timestamp": "13:55:00",
            "value": 105.2
          },
          {
            "timestamp": "14:00:00",
            "value": 105.2
          }
        ]}

        dailyAverage={3698}

        peakRateOfEntryTimestamp="12:04:00"
        peakRateOfEntryQuantity={106}

        peakOccupancyTimestamp="12:20:00"
        peakOccupancyQuantity={401}
      />
    </div>
  ))
  .addWithInfo('With a time segment that is the whole day long', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportTimeSegmentBreakdown
        title="Breakfast Average Breakdown"
        startDate={moment('2018-10-21T07:00:00.000Z')}
        endDate={moment('2018-10-28T06:59:59.999Z')}
        spaces={["Space 1"]}
        timeSegment={{
          id: 'tsm_XXX',
          name: 'Breakfast',
          start: "00:00:00",
          end: "23:00:00",
          days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          spaces: [ /* ... */ ],
        }}
        timeSegmentGroup={{
          id: 'tsg_YYY',
          name: 'Breakfast',
        }}
        points={[
          {
            "timestamp": "10:45:00",
            "value": 64.4
          },
          {
            "timestamp": "10:50:00",
            "value": 66
          },
          {
            "timestamp": "10:55:00",
            "value": 70.4
          },
          {
            "timestamp": "11:00:00",
            "value": 96
          },
          {
            "timestamp": "11:05:00",
            "value": 110.2
          },
          {
            "timestamp": "11:10:00",
            "value": 118.8
          },
          {
            "timestamp": "11:15:00",
            "value": 132.8
          },
          {
            "timestamp": "11:20:00",
            "value": 141.4
          },
          {
            "timestamp": "11:25:00",
            "value": 150
          },
          {
            "timestamp": "11:30:00",
            "value": 175.8
          },
          {
            "timestamp": "11:35:00",
            "value": 206.8
          },
          {
            "timestamp": "11:40:00",
            "value": 231
          },
          {
            "timestamp": "11:45:00",
            "value": 251.8
          },
          {
            "timestamp": "11:50:00",
            "value": 272.8
          },
          {
            "timestamp": "11:55:00",
            "value": 284
          },
          {
            "timestamp": "12:00:00",
            "value": 296
          },
          {
            "timestamp": "12:05:00",
            "value": 349.4
          },
          {
            "timestamp": "12:10:00",
            "value": 376.6
          },
          {
            "timestamp": "12:15:00",
            "value": 395
          },
          {
            "timestamp": "12:20:00",
            "value": 401
          },
          {
            "timestamp": "12:25:00",
            "value": 389.8
          },
          {
            "timestamp": "12:30:00",
            "value": 372.2
          },
          {
            "timestamp": "12:35:00",
            "value": 383.6
          },
          {
            "timestamp": "12:40:00",
            "value": 379.8
          },
          {
            "timestamp": "12:45:00",
            "value": 354.2
          },
          {
            "timestamp": "12:50:00",
            "value": 327.8
          },
          {
            "timestamp": "12:55:00",
            "value": 286.4
          },
          {
            "timestamp": "13:00:00",
            "value": 243.4
          },
          {
            "timestamp": "13:05:00",
            "value": 240.4
          },
          {
            "timestamp": "13:10:00",
            "value": 238.4
          },
          {
            "timestamp": "13:15:00",
            "value": 219.6
          },
          {
            "timestamp": "13:20:00",
            "value": 201.6
          },
          {
            "timestamp": "13:25:00",
            "value": 185.6
          },
          {
            "timestamp": "13:30:00",
            "value": 162.8
          },
          {
            "timestamp": "13:35:00",
            "value": 153
          },
          {
            "timestamp": "13:40:00",
            "value": 143.4
          },
          {
            "timestamp": "13:45:00",
            "value": 128
          },
          {
            "timestamp": "13:50:00",
            "value": 119.2
          },
          {
            "timestamp": "13:55:00",
            "value": 105.2
          },
          {
            "timestamp": "14:00:00",
            "value": 105.2
          }
        ]}

        dailyAverage={3698}

        peakRateOfEntryTimestamp="12:04:00"
        peakRateOfEntryQuantity={106}

        peakOccupancyTimestamp="12:20:00"
        peakOccupancyQuantity={401}
      />
    </div>
  ))
