import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import ReportTotalVisits, { DAYS } from './index';
import colorVariables from '../../../variables/colors.json';

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
          [350],
        ]}
      />
    </div>
  ))
  .addWithInfo('With one time segment and custom color', () => (
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
          [350],
        ]}
        timeSegmentColors={[colorVariables.reportOrange]}
      />
    </div>
  ))
  .addWithInfo('With one time segment and saturday/sunday being null and therefore being hidden', () => (
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
          [null],
          [null],
          [1000],
          [350],
        ]}
      />
    </div>
  ))
  .addWithInfo('With one time segment and multiple "busiest days"', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        segments={[
          [500],
          [100],
          [1000],
          [300],
          [10],
          [1000],
          [350],
        ]}
      />
    </div>
  ))
  .addWithInfo('With one time segment and all segments containing zero', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        segments={[
          [0],
          [0],
          [0],
          [0],
          [0],
          [0],
          [0],
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
  .addWithInfo('With two time segments, and custom colors', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportTotalVisits
        title="Cafeteria meal visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        spaces={["Space 1"]}

        timeSegmentNames={["Ryan Test Group", "Working Hours"]}
        timeSegmentColors={[colorVariables.reportGreen, colorVariables.reportOrange]}
        segments={[
          [0, 0],
          [20, 520],
          [30, 514],
          [0, 510],
          [0, 522],
          [0, 522],
          [0, 522],
        ]}
      />
    </div>
  ))
