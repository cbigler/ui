import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportDailyVisitsPerSegment from './';

storiesOf('ReportDailyVisitsPerSegment', module)
  .addWithInfo('Default', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-18T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegments={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [824, 921, 824, 921, 824],
          [911, 902, 911, 902, 911],
          [870, 872, 945, 872, 870],
          [811, 904, 811, 904, 811],
          [873, 832, 873, 832, 873],
          [782, 741, 782, 700, 782],
        ]}
      />
    </div>
  ))
  .addWithInfo('With multiple minima and maxima', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-18T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegments={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [824, 921, 824, 921, 824],
          [911, 902, 911, 902, 911],
          [945, 872, 945, 872, 945],
          [811, 904, 811, 904, 811],
          [873, 832, 873, 832, 873],
          [782, 741, 782, 741, 782],
        ]}
      />
    </div>
  ))
