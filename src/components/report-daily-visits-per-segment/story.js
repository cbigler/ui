import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportDailyVisitsPerSegment from './';

storiesOf('ReportDailyVisitsPerSegment', module)
  .addWithInfo('With a text body', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportDailyVisitsPerSegment
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-18T00:00:00-04:00')}
        spaces={["Space 1"]}
      />
    </div>
  ))
