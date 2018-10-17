import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import ReportTotalVisits from './';

storiesOf('ReportTotalVisits', module)
  .addWithInfo('With one time segment', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        segments={[
          [500],
          [100],
          [600],
          [300],
          [10],
          [1000],
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

        segmentNames={['Before opening', 'Breakfast', 'Lunch', 'Dinner']}
        segments={[
          [20, 500, 600, 100],
          [1, 400, 500, 600],
          [220, 320, 260, 480],
          [220, 300, 320, 190],
          [220, 510, 630, 780],
          [0, 5, 520, 74],
        ]}
      />
    </div>
  ))
