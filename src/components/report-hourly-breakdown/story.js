import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportHourlyBreakdown from './index';

storiesOf('ReportHourlyBreakdown', module)
  .addWithInfo('Default', () => (
    <div style={{paddingTop: 100, width: '100%'}}>
      <ReportHourlyBreakdown
        title="Hourly Breakdown"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        space={{name: 'My Space'}}

        data={[
          {
            date: moment.utc('2018-03-14T00:00:00Z'),
            values: [
              0,
              3,
              29,
              41,
              28,
              56,
              114,
              176,
              134,
              85,
              45,
              34,
              84,
              75,
              22,
            ],
          },
          {
            date: moment.utc('2018-03-15T00:00:00Z'),
            values: [
              2,
              10,
              23,
              52,
              28,
              40,
              121,
              198,
              145,
              75,
              12,
              18,
              92,
              43,
              10,
            ],
          },
          {
            date: moment.utc('2018-03-16T00:00:00Z'),
            values: [
              1,
              4,
              14,
              36,
              35,
              67,
              143,
              167,
              180,
              97,
              47,
              35,
              79,
              67,
              33,
            ],
          },
          {
            date: moment.utc('2018-03-17T00:00:00Z'),
            values: [
              0,
              7,
              28,
              24,
              42,
              95,
              167,
              154,
              135,
              110,
              45,
              43,
              110,
              87,
              42,
            ],
          },
          {
            date: moment.utc('2018-03-18T00:00:00Z'),
            values: [
              0,
              4,
              14,
              32,
              38,
              78,
              210,
              212,
              189,
              121,
              87,
              78,
              49,
              23,
              12,
            ],
          },
          {
            date: moment.utc('2018-03-19T00:00:00Z'),
            values: [
              0,
              0,
              0,
              3,
              22,
              34,
              87,
              75,
              67,
              30,
              12,
              0,
              0,
              0,
              0,
            ],
          },
          {
            date: moment.utc('2018-03-20T00:00:00Z'),
            values: [
              0,
              0,
              0,
              6,
              4,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
        ]}
        dataStartTime={moment('2018-03-14T00:00:00-04:00').add(6, 'hours')}
      />
    </div>
  ))
