import React from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReportDailyPeaks, {
  HorizonChartVisualization,
	CURVE_STEP,
	CURVE_LINEAR,
	CURVE_BEZIER,
	CURVE_CARDINAL
} from './index';

storiesOf('ReportDailyPeaks', module)
  .addWithInfo('Horizon chart on its own', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <HorizonChartVisualization
        id="layer1"
        curveType={CURVE_CARDINAL}
        // trackCurveType={CURVE_STEP}
				title="Horizon Chart"
				width={360}
				height={48}
				maxValue={16}
				colorBands={['#FCC', '#CFC', '#CCF', '#AAA']}
        start={moment("2019-01-07T15:45:00.000Z")}
        end={moment("2019-01-07T19:30:00.000Z")}
        data={DATA[0].data}
      />
    </div>
  ))
  .addWithInfo('Daily peaks report', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportDailyPeaks
				title="Peak Lunch Visits"
				spaces={['Main Office Cafe']}
        startDate={moment('2019-01-07T00:00:00.000-05:00')}
        endDate={moment('2019-01-11T00:00:00.000-05:00')}
        data={DATA}
      />
    </div>
  ))

const DATA = [
  {
    "start": moment("2019-01-07T15:45:00.000Z"),
    "end": moment("2019-01-07T19:30:00.000Z"),
    "maxBucket": {
      "value": 15,
      "timestamp": moment("2019-01-07T17:05:00.000Z")
    },
    "data": [
      {
        "timestamp": moment("2019-01-07T15:45:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-07T15:50:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-07T15:55:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-07T16:00:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-07T16:05:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-07T16:10:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-07T16:15:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T16:20:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-07T16:25:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T16:30:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-07T16:35:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T16:40:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T16:45:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T16:50:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-07T16:55:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-07T17:00:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-07T17:05:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-07T17:10:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-07T17:15:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-07T17:20:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-07T17:25:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-07T17:30:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-07T17:35:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-07T17:40:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T17:45:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T17:50:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T17:55:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T18:00:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-07T18:05:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-07T18:10:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T18:15:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-07T18:20:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-07T18:25:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T18:30:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T18:35:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-07T18:40:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-07T18:45:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-07T18:50:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-07T18:55:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-07T19:00:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-07T19:05:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-07T19:10:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-07T19:15:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-07T19:20:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-07T19:25:00.000Z"),
        "value": 4
      }
    ]
  },
  {
    "start": moment("2019-01-08T15:45:00.000Z"),
    "end": moment("2019-01-08T19:30:00.000Z"),
    "maxBucket": {
      "value": 15,
      "timestamp": moment("2019-01-08T17:10:00.000Z")
    },
    "data": [
      {
        "timestamp": moment("2019-01-08T15:45:00.000Z"),
        "value": 2
      },
      {
        "timestamp": moment("2019-01-08T15:50:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-08T15:55:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-08T16:00:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T16:05:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-08T16:10:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T16:15:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-08T16:20:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T16:25:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-08T16:30:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-08T16:35:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T16:40:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-08T16:45:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-08T16:50:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-08T16:55:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-08T17:00:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-08T17:05:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-08T17:10:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-08T17:15:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-08T17:20:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-08T17:25:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-08T17:30:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-08T17:35:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-08T17:40:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T17:45:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-08T17:50:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-08T17:55:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-08T18:00:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T18:05:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T18:10:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-08T18:15:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-08T18:20:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-08T18:25:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-08T18:30:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-08T18:35:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-08T18:40:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-08T18:45:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T18:50:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T18:55:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-08T19:00:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T19:05:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-08T19:10:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-08T19:15:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-08T19:20:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-08T19:25:00.000Z"),
        "value": 3
      }
    ]
  },
  {
    "start": moment("2019-01-09T15:45:00.000Z"),
    "end": moment("2019-01-09T19:30:00.000Z"),
    "maxBucket": {
      "value": 17,
      "timestamp": moment("2019-01-09T17:00:00.000Z")
    },
    "data": [
      {
        "timestamp": moment("2019-01-09T15:45:00.000Z"),
        "value": 2
      },
      {
        "timestamp": moment("2019-01-09T15:50:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-09T15:55:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-09T16:00:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-09T16:05:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T16:10:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T16:15:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T16:20:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T16:25:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T16:30:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-09T16:35:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T16:40:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T16:45:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-09T16:50:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T16:55:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-09T17:00:00.000Z"),
        "value": 17
      },
      {
        "timestamp": moment("2019-01-09T17:05:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-09T17:10:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-09T17:15:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-09T17:20:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-09T17:25:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-09T17:30:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-09T17:35:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-09T17:40:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T17:45:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-09T17:50:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T17:55:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T18:00:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T18:05:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T18:10:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-09T18:15:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T18:20:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T18:25:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T18:30:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-09T18:35:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T18:40:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-09T18:45:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-09T18:50:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-09T18:55:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-09T19:00:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-09T19:05:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-09T19:10:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-09T19:15:00.000Z"),
        "value": 2
      },
      {
        "timestamp": moment("2019-01-09T19:20:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-09T19:25:00.000Z"),
        "value": 4
      }
    ]
  },
  {
    "start": moment("2019-01-10T15:45:00.000Z"),
    "end": moment("2019-01-10T19:30:00.000Z"),
    "maxBucket": {
      "value": 16,
      "timestamp": moment("2019-01-10T16:55:00.000Z")
    },
    "data": [
      {
        "timestamp": moment("2019-01-10T15:45:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T15:50:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T15:55:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T16:00:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T16:05:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T16:10:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T16:15:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-10T16:20:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-10T16:25:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-10T16:30:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-10T16:35:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-10T16:40:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-10T16:45:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-10T16:50:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-10T16:55:00.000Z"),
        "value": 16
      },
      {
        "timestamp": moment("2019-01-10T17:00:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-10T17:05:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-10T17:10:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-10T17:15:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-10T17:20:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-10T17:25:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-10T17:30:00.000Z"),
        "value": 11
      },
      {
        "timestamp": moment("2019-01-10T17:35:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-10T17:40:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-10T17:45:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-10T17:50:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-10T17:55:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-10T18:00:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-10T18:05:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-10T18:10:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-10T18:15:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-10T18:20:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T18:25:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-10T18:30:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-10T18:35:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-10T18:40:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-10T18:45:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T18:50:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T18:55:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T19:00:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-10T19:05:00.000Z"),
        "value": 1
      },
      {
        "timestamp": moment("2019-01-10T19:10:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-10T19:15:00.000Z"),
        "value": 2
      },
      {
        "timestamp": moment("2019-01-10T19:20:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-10T19:25:00.000Z"),
        "value": 4
      }
    ]
  },
  {
    "start": moment("2019-01-11T15:45:00.000Z"),
    "end": moment("2019-01-11T19:30:00.000Z"),
    "maxBucket": {
      "value": 15,
      "timestamp": moment("2019-01-11T17:15:00.000Z")
    },
    "data": [
      {
        "timestamp": moment("2019-01-11T15:45:00.000Z"),
        "value": 2
      },
      {
        "timestamp": moment("2019-01-11T15:50:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-11T15:55:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T16:00:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-11T16:05:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T16:10:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-11T16:15:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-11T16:20:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-11T16:25:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-11T16:30:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T16:35:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-11T16:40:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T16:45:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T16:50:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-11T16:55:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-11T17:00:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-11T17:05:00.000Z"),
        "value": 13
      },
      {
        "timestamp": moment("2019-01-11T17:10:00.000Z"),
        "value": 14
      },
      {
        "timestamp": moment("2019-01-11T17:15:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-11T17:20:00.000Z"),
        "value": 15
      },
      {
        "timestamp": moment("2019-01-11T17:25:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-11T17:30:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-11T17:35:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T17:40:00.000Z"),
        "value": 12
      },
      {
        "timestamp": moment("2019-01-11T17:45:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-11T17:50:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-11T17:55:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T18:00:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T18:05:00.000Z"),
        "value": 10
      },
      {
        "timestamp": moment("2019-01-11T18:10:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T18:15:00.000Z"),
        "value": 9
      },
      {
        "timestamp": moment("2019-01-11T18:20:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-11T18:25:00.000Z"),
        "value": 8
      },
      {
        "timestamp": moment("2019-01-11T18:30:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-11T18:35:00.000Z"),
        "value": 7
      },
      {
        "timestamp": moment("2019-01-11T18:40:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T18:45:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-11T18:50:00.000Z"),
        "value": 6
      },
      {
        "timestamp": moment("2019-01-11T18:55:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T19:00:00.000Z"),
        "value": 5
      },
      {
        "timestamp": moment("2019-01-11T19:05:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-11T19:10:00.000Z"),
        "value": 3
      },
      {
        "timestamp": moment("2019-01-11T19:15:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T19:20:00.000Z"),
        "value": 4
      },
      {
        "timestamp": moment("2019-01-11T19:25:00.000Z"),
        "value": 4
      }
    ]
  }
]