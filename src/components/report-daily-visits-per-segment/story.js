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

        timeSegmentNames={[
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

        timeSegmentNames={[
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
  .addWithInfo('With 7 days', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegmentNames={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [824, 921, 824, 921, 824, 824, 921],
          [911, 902, 911, 902, 911, 911, 902],
          [870, 872, 945, 872, 870, 870, 870],
          [811, 904, 811, 904, 811, 811, 904],
          [873, 832, 873, 832, 873, 873, 832],
          [782, 741, 782, 700, 782, 782, 741],
        ]}
      />
    </div>
  ))
  .addWithInfo('With a few time segments that are missing days of data', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegmentNames={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [null, 921, 824, 921, 824, 824, null],
          [911, 902, 911, 902, 911, 911, null],
          [870, 872, 945, 872, 870, 870, null],
          [null, 904, 811, 904, 811, 811, null],
          [null, 832, 873, 832, 873, 873, 832],
          [null, 741, 782, 700, 782, 782, 741],
        ]}
      />
    </div>
  ))
  .addWithInfo('With only missing data', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegmentNames={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
        ]}
      />
    </div>
  ))
  .addWithInfo('Min and max the same', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegmentNames={[
          'Before Open',
          'Breakfast',
          'Between',
          'Lunch',
          'Dinner',
          'After Close',
        ]}
        data={[
          [10, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
        ]}
      />
    </div>
  ))
