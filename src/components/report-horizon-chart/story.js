import React from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReportHorizonChart, {
  ReportHorizonChartVisualization,
	CURVE_STEP,
	CURVE_LINEAR,
	CURVE_BEZIER,
	CURVE_CARDINAL
} from './index';

storiesOf('ReportHorizonChart', module)
  .addWithInfo('Horizon chart on its own', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportHorizonChartVisualization
        id="layer1"
        curveType={CURVE_CARDINAL}
        // trackCurveType={CURVE_STEP}
				title="Horizon Chart"
				width={360}
				height={24}
        startDate={moment('2019-01-07T00:00:00.000-08:00')}
        endDate={moment('2019-01-08T00:00:00.000-08:00')}
        data={DATA}
      />
    </div>
  ))
  .addWithInfo('Horizon chart report', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportHorizonChart
				title="Visitors Over Time"
				spaces={[{id: 'spc_123', name: 'Main Office Cafe', timeZone: 'America/New_York'}]}
        plots={[
          {
            id: '2019-01-07T00:00:00.000-08:00',
						name: 'Monday',
						startDate: moment('2019-01-07T10:45:00.000-08:00'),
        		endDate: moment('2019-01-07T14:00:00.000-08:00'),
            data: DATA,
          },
          {
            id: '2019-01-08T00:00:00.000-08:00',
						name: 'Tuesday',
						startDate: moment('2019-01-08T10:45:00.000-08:00'),
        		endDate: moment('2019-01-08T14:00:00.000-08:00'),
            data: DATA,
					},
					{
            id: '2019-01-09T00:00:00.000-08:00',
						name: 'Wednesday',
						startDate: moment('2019-01-09T10:45:00.000-08:00'),
        		endDate: moment('2019-01-09T14:00:00.000-08:00'),
            data: DATA,
					},
					{
            id: '2019-01-10T00:00:00.000-08:00',
						name: 'Thursday',
						startDate: moment('2019-01-10T10:45:00.000-08:00'),
        		endDate: moment('2019-01-10T14:00:00.000-08:00'),
            data: DATA,
					},
					{
            id: '2019-01-11T00:00:00.000-08:00',
						name: 'Friday',
						startDate: moment('2019-01-11T10:45:00.000-08:00'),
        		endDate: moment('2019-01-11T14:00:00.000-08:00'),
            data: DATA,
          }
				]}
        curveType={CURVE_CARDINAL}
      />
    </div>
  ))

const DATA = [
  {
    "timestamp": "2019-01-07T08:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T08:00:00.000Z",
      "end": "2019-01-07T08:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  }].map(bucket => Object.assign({}, bucket, {timestamp: moment(bucket.timestamp)}))
