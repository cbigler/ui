import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportNextWeekForecast from './';

storiesOf('ReportNextWeekForecast', module)
  .addWithInfo('Default view', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportNextWeekForecast
        title="Next week's visits"
        startDate={moment("2018-03-14T00:00:00-04:00")}
        endDate={moment("2018-03-18T00:00:00-04:00")}
        spaces={["Cafe Bruno"]}
        busiestDays={[ moment("2018-03-18T00:00:00-04:00") ]}
        forecasts={[
          {
            visits: 300,
            high: 20,
            low: 20,
            stdDev: 20,
          },
          {
            visits: 622,
            high: 40,
            low: 40,
            stdDev: 40,
          },
          {
            visits: 412,
            high: 60,
            low: 60,
            stdDev: 60,
          },
          {
            visits: 614,
            high: 10,
            low: 10,
            stdDev: 10,
          },
          {
            visits: 895,
            high: 60,
            low: 60,
            stdDev: 60,
          },
          {
            visits: 622,
            high: 40,
            low: 40,
            stdDev: 40,
          },
        ]}
      />
    </div>
  ))
  .addWithInfo('With multiple busiest days', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportNextWeekForecast
        title="Next week's visits"
        startDate={moment("2018-03-14T00:00:00-04:00")}
        endDate={moment("2018-03-18T00:00:00-04:00")}
        spaces={["Cafe Bruno"]}
        busiestDays={[
          moment("2018-03-17T00:00:00-04:00"),
          moment("2018-03-18T00:00:00-04:00"),
        ]}
        forecasts={[
          {
            visits: 300,
            high: 20,
            low: 20,
            stdDev: 20,
          },
          {
            visits: 622,
            high: 40,
            low: 40,
            stdDev: 40,
          },
          {
            visits: 412,
            high: 60,
            low: 60,
            stdDev: 60,
          },
          {
            visits: 622,
            high: 10,
            low: 10,
            stdDev: 10,
          },
          {
            visits: 622,
            high: 60,
            low: 60,
            stdDev: 60,
          },
          {
            visits: 622,
            high: 40,
            low: 40,
            stdDev: 40,
          },
        ]}
      />
    </div>
  ))
