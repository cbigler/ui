import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import ReportTotalVisits, { DAYS } from './';

storiesOf('ReportTotalVisits', module)
  .addWithInfo('With one time segment', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
        busiestDate={moment('2018-03-20T00:00:00-04:00')}

        segments={[
          [500],
          [100],
          [600],
          [300],
          [10],
          [1000],
          [350],
        ]}
      />
    </div>
  ))
  .addWithInfo('With multiple time segments', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}
        busiestDate={moment('2018-03-20T00:00:00-04:00')}

        timeSegmentNames={['Before opening', 'Breakfast', 'Lunch', 'Dinner']}
        segments={[
          [20, 500, 600, 100],
          [1, 400, 500, 600],
          [220, 320, 260, 480],
          [0, 0, 0, 0],
          [220, 510, 630, 780],
          [0, 5, 520, 74],
          [200, 0, 50, 325],
        ]}
      />
    </div>
  ))
