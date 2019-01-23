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
				height={48}
				maxValue={142}
				colorBands={['#DDD', '#AAA', '#999', '#777']}
        startDate={moment('2019-01-07T00:00:00.000-08:00')}
        endDate={moment('2019-01-08T00:00:00.000-08:00')}
        data={DATA.filter(bucket => (
					bucket.timestamp.valueOf() >= moment('2019-01-07T00:00:00.000-08:00') && 
					bucket.timestamp.valueOf() <= moment('2019-01-08T00:00:00.000-08:00')
				)).map(bucket => ({timestamp: bucket.timestamp, value: bucket.interval.analytics.entrances}))}
      />
    </div>
  ))
  .addWithInfo('Horizon chart report', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportHorizonChart
				title="Lunch Visitors"
				space={{id: 'spc_123', name: 'Main Office Cafe', timeZone: 'America/New_York'}}
        startDate={moment('2019-01-07T00:00:00.000-08:00')}
        endDate={moment('2019-01-11T00:00:00.000-08:00')}
        plots={[
          {
            id: '2019-01-07T00:00:00.000-08:00',
						startDate: moment('2019-01-07T10:45:00.000-05:00'),
        		endDate: moment('2019-01-07T14:00:00.000-05:00'),
            data: DATA,
          },
          {
            id: '2019-01-08T00:00:00.000-08:00',
						startDate: moment('2019-01-08T10:45:00.000-05:00'),
        		endDate: moment('2019-01-08T14:00:00.000-05:00'),
            data: DATA,
					},
					{
            id: '2019-01-09T00:00:00.000-08:00',
						startDate: moment('2019-01-09T10:45:00.000-05:00'),
        		endDate: moment('2019-01-09T14:00:00.000-05:00'),
            data: DATA,
					},
					{
            id: '2019-01-10T00:00:00.000-08:00',
						startDate: moment('2019-01-10T10:45:00.000-05:00'),
        		endDate: moment('2019-01-10T14:00:00.000-05:00'),
            data: DATA,
					},
					{
            id: '2019-01-11T00:00:00.000-08:00',
						startDate: moment('2019-01-11T10:45:00.000-05:00'),
        		endDate: moment('2019-01-11T14:00:00.000-05:00'),
            data: DATA,
          }
        ]}
      />
    </div>
  ))

const DATA = [
  {
    "timestamp": "2019-01-07T08:00:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T08:00:00.000Z",
      "end": "2019-01-07T08:04:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:05:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T08:05:00.000Z",
      "end": "2019-01-07T08:09:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:10:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T08:10:00.000Z",
      "end": "2019-01-07T08:14:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:15:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T08:15:00.000Z",
      "end": "2019-01-07T08:19:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T08:20:00.000Z",
      "end": "2019-01-07T08:24:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T08:25:00.000Z",
      "end": "2019-01-07T08:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T08:30:00.000Z",
      "end": "2019-01-07T08:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T08:35:00.000Z",
      "end": "2019-01-07T08:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T08:40:00.000Z",
      "end": "2019-01-07T08:44:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:45:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T08:45:00.000Z",
      "end": "2019-01-07T08:49:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T08:50:00.000Z",
      "end": "2019-01-07T08:54:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T08:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T08:55:00.000Z",
      "end": "2019-01-07T08:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:00:00.000Z",
      "end": "2019-01-07T09:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:05:00.000Z",
      "end": "2019-01-07T09:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:10:00.000Z",
      "end": "2019-01-07T09:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:15:00.000Z",
      "end": "2019-01-07T09:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:20:00.000Z",
      "end": "2019-01-07T09:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:25:00.000Z",
      "end": "2019-01-07T09:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:30:00.000Z",
      "end": "2019-01-07T09:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T09:35:00.000Z",
      "end": "2019-01-07T09:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T09:40:00.000Z",
      "end": "2019-01-07T09:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T09:45:00.000Z",
      "end": "2019-01-07T09:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T09:50:00.000Z",
      "end": "2019-01-07T09:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T09:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T09:55:00.000Z",
      "end": "2019-01-07T09:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T10:00:00.000Z",
      "end": "2019-01-07T10:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T10:05:00.000Z",
      "end": "2019-01-07T10:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T10:10:00.000Z",
      "end": "2019-01-07T10:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T10:15:00.000Z",
      "end": "2019-01-07T10:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T10:20:00.000Z",
      "end": "2019-01-07T10:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T10:25:00.000Z",
      "end": "2019-01-07T10:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T10:30:00.000Z",
      "end": "2019-01-07T10:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T10:35:00.000Z",
      "end": "2019-01-07T10:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T10:40:00.000Z",
      "end": "2019-01-07T10:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 12,
        "events": 5,
        "entrances": 5,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:45:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-07T10:45:00.000Z",
      "end": "2019-01-07T10:49:59.999Z",
      "analytics": {
        "min": 12,
        "max": 18,
        "events": 7,
        "entrances": 6,
        "exits": 1,
        "utilization": 5.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:50:00.000Z",
    "count": 17,
    "interval": {
      "start": "2019-01-07T10:50:00.000Z",
      "end": "2019-01-07T10:54:59.999Z",
      "analytics": {
        "min": 17,
        "max": 19,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 5.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T10:55:00.000Z",
    "count": 19,
    "interval": {
      "start": "2019-01-07T10:55:00.000Z",
      "end": "2019-01-07T10:59:59.999Z",
      "analytics": {
        "min": 19,
        "max": 20,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 6.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:00:00.000Z",
    "count": 19,
    "interval": {
      "start": "2019-01-07T11:00:00.000Z",
      "end": "2019-01-07T11:04:59.999Z",
      "analytics": {
        "min": 19,
        "max": 24,
        "events": 5,
        "entrances": 5,
        "exits": 0,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:05:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-07T11:05:00.000Z",
      "end": "2019-01-07T11:09:59.999Z",
      "analytics": {
        "min": 21,
        "max": 24,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:10:00.000Z",
    "count": 22,
    "interval": {
      "start": "2019-01-07T11:10:00.000Z",
      "end": "2019-01-07T11:14:59.999Z",
      "analytics": {
        "min": 22,
        "max": 24,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:15:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-07T11:15:00.000Z",
      "end": "2019-01-07T11:19:59.999Z",
      "analytics": {
        "min": 23,
        "max": 29,
        "events": 7,
        "entrances": 6,
        "exits": 1,
        "utilization": 9.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:20:00.000Z",
    "count": 29,
    "interval": {
      "start": "2019-01-07T11:20:00.000Z",
      "end": "2019-01-07T11:24:59.999Z",
      "analytics": {
        "min": 29,
        "max": 32,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 10.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:25:00.000Z",
    "count": 30,
    "interval": {
      "start": "2019-01-07T11:25:00.000Z",
      "end": "2019-01-07T11:29:59.999Z",
      "analytics": {
        "min": 30,
        "max": 32,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 10.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:30:00.000Z",
    "count": 32,
    "interval": {
      "start": "2019-01-07T11:30:00.000Z",
      "end": "2019-01-07T11:34:59.999Z",
      "analytics": {
        "min": 32,
        "max": 38,
        "events": 7,
        "entrances": 6,
        "exits": 1,
        "utilization": 11.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:35:00.000Z",
    "count": 37,
    "interval": {
      "start": "2019-01-07T11:35:00.000Z",
      "end": "2019-01-07T11:39:59.999Z",
      "analytics": {
        "min": 37,
        "max": 43,
        "events": 12,
        "entrances": 8,
        "exits": 4,
        "utilization": 13.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:40:00.000Z",
    "count": 41,
    "interval": {
      "start": "2019-01-07T11:40:00.000Z",
      "end": "2019-01-07T11:44:59.999Z",
      "analytics": {
        "min": 41,
        "max": 44,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 13.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:45:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-07T11:45:00.000Z",
      "end": "2019-01-07T11:49:59.999Z",
      "analytics": {
        "min": 42,
        "max": 45,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:50:00.000Z",
    "count": 45,
    "interval": {
      "start": "2019-01-07T11:50:00.000Z",
      "end": "2019-01-07T11:54:59.999Z",
      "analytics": {
        "min": 43,
        "max": 47,
        "events": 8,
        "entrances": 4,
        "exits": 4,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-07T11:55:00.000Z",
    "count": 45,
    "interval": {
      "start": "2019-01-07T11:55:00.000Z",
      "end": "2019-01-07T11:59:59.999Z",
      "analytics": {
        "min": 45,
        "max": 55,
        "events": 13,
        "entrances": 11,
        "exits": 2,
        "utilization": 17.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:00:00.000Z",
    "count": 54,
    "interval": {
      "start": "2019-01-07T12:00:00.000Z",
      "end": "2019-01-07T12:04:59.999Z",
      "analytics": {
        "min": 54,
        "max": 58,
        "events": 8,
        "entrances": 6,
        "exits": 2,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:05:00.000Z",
    "count": 58,
    "interval": {
      "start": "2019-01-07T12:05:00.000Z",
      "end": "2019-01-07T12:09:59.999Z",
      "analytics": {
        "min": 58,
        "max": 64,
        "events": 16,
        "entrances": 9,
        "exits": 7,
        "utilization": 20.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:10:00.000Z",
    "count": 60,
    "interval": {
      "start": "2019-01-07T12:10:00.000Z",
      "end": "2019-01-07T12:14:59.999Z",
      "analytics": {
        "min": 59,
        "max": 65,
        "events": 20,
        "entrances": 12,
        "exits": 8,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:15:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-07T12:15:00.000Z",
      "end": "2019-01-07T12:19:59.999Z",
      "analytics": {
        "min": 64,
        "max": 70,
        "events": 25,
        "entrances": 15,
        "exits": 10,
        "utilization": 21.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:20:00.000Z",
    "count": 69,
    "interval": {
      "start": "2019-01-07T12:20:00.000Z",
      "end": "2019-01-07T12:24:59.999Z",
      "analytics": {
        "min": 67,
        "max": 75,
        "events": 26,
        "entrances": 14,
        "exits": 12,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:25:00.000Z",
    "count": 71,
    "interval": {
      "start": "2019-01-07T12:25:00.000Z",
      "end": "2019-01-07T12:29:59.999Z",
      "analytics": {
        "min": 68,
        "max": 74,
        "events": 27,
        "entrances": 15,
        "exits": 12,
        "utilization": 23.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:30:00.000Z",
    "count": 74,
    "interval": {
      "start": "2019-01-07T12:30:00.000Z",
      "end": "2019-01-07T12:34:59.999Z",
      "analytics": {
        "min": 69,
        "max": 74,
        "events": 21,
        "entrances": 10,
        "exits": 11,
        "utilization": 22.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:35:00.000Z",
    "count": 73,
    "interval": {
      "start": "2019-01-07T12:35:00.000Z",
      "end": "2019-01-07T12:39:59.999Z",
      "analytics": {
        "min": 65,
        "max": 73,
        "events": 26,
        "entrances": 11,
        "exits": 15,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:40:00.000Z",
    "count": 69,
    "interval": {
      "start": "2019-01-07T12:40:00.000Z",
      "end": "2019-01-07T12:44:59.999Z",
      "analytics": {
        "min": 63,
        "max": 70,
        "events": 36,
        "entrances": 17,
        "exits": 19,
        "utilization": 21.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:45:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-07T12:45:00.000Z",
      "end": "2019-01-07T12:49:59.999Z",
      "analytics": {
        "min": 66,
        "max": 83,
        "events": 39,
        "entrances": 27,
        "exits": 12,
        "utilization": 25.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:50:00.000Z",
    "count": 82,
    "interval": {
      "start": "2019-01-07T12:50:00.000Z",
      "end": "2019-01-07T12:54:59.999Z",
      "analytics": {
        "min": 79,
        "max": 87,
        "events": 42,
        "entrances": 22,
        "exits": 20,
        "utilization": 27.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T12:55:00.000Z",
    "count": 84,
    "interval": {
      "start": "2019-01-07T12:55:00.000Z",
      "end": "2019-01-07T12:59:59.999Z",
      "analytics": {
        "min": 83,
        "max": 90,
        "events": 42,
        "entrances": 22,
        "exits": 20,
        "utilization": 28.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:00:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-07T13:00:00.000Z",
      "end": "2019-01-07T13:04:59.999Z",
      "analytics": {
        "min": 85,
        "max": 90,
        "events": 50,
        "entrances": 25,
        "exits": 25,
        "utilization": 28.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:05:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-07T13:05:00.000Z",
      "end": "2019-01-07T13:09:59.999Z",
      "analytics": {
        "min": 83,
        "max": 96,
        "events": 63,
        "entrances": 36,
        "exits": 27,
        "utilization": 30.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:10:00.000Z",
    "count": 95,
    "interval": {
      "start": "2019-01-07T13:10:00.000Z",
      "end": "2019-01-07T13:14:59.999Z",
      "analytics": {
        "min": 89,
        "max": 97,
        "events": 60,
        "entrances": 30,
        "exits": 30,
        "utilization": 30.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:15:00.000Z",
    "count": 95,
    "interval": {
      "start": "2019-01-07T13:15:00.000Z",
      "end": "2019-01-07T13:19:59.999Z",
      "analytics": {
        "min": 89,
        "max": 101,
        "events": 72,
        "entrances": 39,
        "exits": 33,
        "utilization": 31.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:20:00.000Z",
    "count": 101,
    "interval": {
      "start": "2019-01-07T13:20:00.000Z",
      "end": "2019-01-07T13:24:59.999Z",
      "analytics": {
        "min": 100,
        "max": 112,
        "events": 70,
        "entrances": 39,
        "exits": 31,
        "utilization": 35.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:25:00.000Z",
    "count": 109,
    "interval": {
      "start": "2019-01-07T13:25:00.000Z",
      "end": "2019-01-07T13:29:59.999Z",
      "analytics": {
        "min": 103,
        "max": 113,
        "events": 66,
        "entrances": 34,
        "exits": 32,
        "utilization": 35.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:30:00.000Z",
    "count": 111,
    "interval": {
      "start": "2019-01-07T13:30:00.000Z",
      "end": "2019-01-07T13:34:59.999Z",
      "analytics": {
        "min": 109,
        "max": 123,
        "events": 73,
        "entrances": 40,
        "exits": 33,
        "utilization": 38.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:35:00.000Z",
    "count": 118,
    "interval": {
      "start": "2019-01-07T13:35:00.000Z",
      "end": "2019-01-07T13:39:59.999Z",
      "analytics": {
        "min": 115,
        "max": 121,
        "events": 62,
        "entrances": 30,
        "exits": 32,
        "utilization": 37.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:40:00.000Z",
    "count": 116,
    "interval": {
      "start": "2019-01-07T13:40:00.000Z",
      "end": "2019-01-07T13:44:59.999Z",
      "analytics": {
        "min": 108,
        "max": 119,
        "events": 78,
        "entrances": 40,
        "exits": 38,
        "utilization": 37.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:45:00.000Z",
    "count": 118,
    "interval": {
      "start": "2019-01-07T13:45:00.000Z",
      "end": "2019-01-07T13:49:59.999Z",
      "analytics": {
        "min": 114,
        "max": 136,
        "events": 82,
        "entrances": 50,
        "exits": 32,
        "utilization": 42.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:50:00.000Z",
    "count": 136,
    "interval": {
      "start": "2019-01-07T13:50:00.000Z",
      "end": "2019-01-07T13:54:59.999Z",
      "analytics": {
        "min": 132,
        "max": 142,
        "events": 76,
        "entrances": 38,
        "exits": 38,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-07T13:55:00.000Z",
    "count": 136,
    "interval": {
      "start": "2019-01-07T13:55:00.000Z",
      "end": "2019-01-07T13:59:59.999Z",
      "analytics": {
        "min": 133,
        "max": 142,
        "events": 69,
        "entrances": 37,
        "exits": 32,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:00:00.000Z",
    "count": 141,
    "interval": {
      "start": "2019-01-07T14:00:00.000Z",
      "end": "2019-01-07T14:04:59.999Z",
      "analytics": {
        "min": 131,
        "max": 141,
        "events": 79,
        "entrances": 36,
        "exits": 43,
        "utilization": 44.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:05:00.000Z",
    "count": 134,
    "interval": {
      "start": "2019-01-07T14:05:00.000Z",
      "end": "2019-01-07T14:09:59.999Z",
      "analytics": {
        "min": 134,
        "max": 145,
        "events": 87,
        "entrances": 45,
        "exits": 42,
        "utilization": 45.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:10:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-07T14:10:00.000Z",
      "end": "2019-01-07T14:14:59.999Z",
      "analytics": {
        "min": 121,
        "max": 137,
        "events": 92,
        "entrances": 41,
        "exits": 51,
        "utilization": 42.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:15:00.000Z",
    "count": 127,
    "interval": {
      "start": "2019-01-07T14:15:00.000Z",
      "end": "2019-01-07T14:19:59.999Z",
      "analytics": {
        "min": 126,
        "max": 156,
        "events": 100,
        "entrances": 61,
        "exits": 39,
        "utilization": 48.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:20:00.000Z",
    "count": 149,
    "interval": {
      "start": "2019-01-07T14:20:00.000Z",
      "end": "2019-01-07T14:24:59.999Z",
      "analytics": {
        "min": 145,
        "max": 152,
        "events": 67,
        "entrances": 32,
        "exits": 35,
        "utilization": 47.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:25:00.000Z",
    "count": 146,
    "interval": {
      "start": "2019-01-07T14:25:00.000Z",
      "end": "2019-01-07T14:29:59.999Z",
      "analytics": {
        "min": 141,
        "max": 151,
        "events": 66,
        "entrances": 32,
        "exits": 34,
        "utilization": 47.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:30:00.000Z",
    "count": 144,
    "interval": {
      "start": "2019-01-07T14:30:00.000Z",
      "end": "2019-01-07T14:34:59.999Z",
      "analytics": {
        "min": 127,
        "max": 145,
        "events": 59,
        "entrances": 22,
        "exits": 37,
        "utilization": 45.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:35:00.000Z",
    "count": 129,
    "interval": {
      "start": "2019-01-07T14:35:00.000Z",
      "end": "2019-01-07T14:39:59.999Z",
      "analytics": {
        "min": 109,
        "max": 134,
        "events": 80,
        "entrances": 30,
        "exits": 50,
        "utilization": 41.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:40:00.000Z",
    "count": 109,
    "interval": {
      "start": "2019-01-07T14:40:00.000Z",
      "end": "2019-01-07T14:44:59.999Z",
      "analytics": {
        "min": 91,
        "max": 109,
        "events": 55,
        "entrances": 19,
        "exits": 36,
        "utilization": 33.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:45:00.000Z",
    "count": 92,
    "interval": {
      "start": "2019-01-07T14:45:00.000Z",
      "end": "2019-01-07T14:49:59.999Z",
      "analytics": {
        "min": 85,
        "max": 93,
        "events": 29,
        "entrances": 11,
        "exits": 18,
        "utilization": 29.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:50:00.000Z",
    "count": 85,
    "interval": {
      "start": "2019-01-07T14:50:00.000Z",
      "end": "2019-01-07T14:54:59.999Z",
      "analytics": {
        "min": 84,
        "max": 90,
        "events": 28,
        "entrances": 15,
        "exits": 13,
        "utilization": 28.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T14:55:00.000Z",
    "count": 87,
    "interval": {
      "start": "2019-01-07T14:55:00.000Z",
      "end": "2019-01-07T14:59:59.999Z",
      "analytics": {
        "min": 81,
        "max": 88,
        "events": 18,
        "entrances": 7,
        "exits": 11,
        "utilization": 27.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:00:00.000Z",
    "count": 83,
    "interval": {
      "start": "2019-01-07T15:00:00.000Z",
      "end": "2019-01-07T15:04:59.999Z",
      "analytics": {
        "min": 74,
        "max": 84,
        "events": 19,
        "entrances": 5,
        "exits": 14,
        "utilization": 26.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:05:00.000Z",
    "count": 74,
    "interval": {
      "start": "2019-01-07T15:05:00.000Z",
      "end": "2019-01-07T15:09:59.999Z",
      "analytics": {
        "min": 67,
        "max": 75,
        "events": 16,
        "entrances": 5,
        "exits": 11,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:10:00.000Z",
    "count": 68,
    "interval": {
      "start": "2019-01-07T15:10:00.000Z",
      "end": "2019-01-07T15:14:59.999Z",
      "analytics": {
        "min": 66,
        "max": 70,
        "events": 10,
        "entrances": 6,
        "exits": 4,
        "utilization": 21.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:15:00.000Z",
    "count": 70,
    "interval": {
      "start": "2019-01-07T15:15:00.000Z",
      "end": "2019-01-07T15:19:59.999Z",
      "analytics": {
        "min": 65,
        "max": 70,
        "events": 16,
        "entrances": 6,
        "exits": 10,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:20:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-07T15:20:00.000Z",
      "end": "2019-01-07T15:24:59.999Z",
      "analytics": {
        "min": 64,
        "max": 68,
        "events": 18,
        "entrances": 8,
        "exits": 10,
        "utilization": 21.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:25:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-07T15:25:00.000Z",
      "end": "2019-01-07T15:29:59.999Z",
      "analytics": {
        "min": 60,
        "max": 64,
        "events": 11,
        "entrances": 5,
        "exits": 6,
        "utilization": 19.69
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:30:00.000Z",
    "count": 63,
    "interval": {
      "start": "2019-01-07T15:30:00.000Z",
      "end": "2019-01-07T15:34:59.999Z",
      "analytics": {
        "min": 56,
        "max": 64,
        "events": 23,
        "entrances": 8,
        "exits": 15,
        "utilization": 20.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:35:00.000Z",
    "count": 56,
    "interval": {
      "start": "2019-01-07T15:35:00.000Z",
      "end": "2019-01-07T15:39:59.999Z",
      "analytics": {
        "min": 51,
        "max": 56,
        "events": 13,
        "entrances": 6,
        "exits": 7,
        "utilization": 17.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:40:00.000Z",
    "count": 55,
    "interval": {
      "start": "2019-01-07T15:40:00.000Z",
      "end": "2019-01-07T15:44:59.999Z",
      "analytics": {
        "min": 52,
        "max": 56,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 17.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:45:00.000Z",
    "count": 54,
    "interval": {
      "start": "2019-01-07T15:45:00.000Z",
      "end": "2019-01-07T15:49:59.999Z",
      "analytics": {
        "min": 54,
        "max": 60,
        "events": 17,
        "entrances": 11,
        "exits": 6,
        "utilization": 18.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:50:00.000Z",
    "count": 59,
    "interval": {
      "start": "2019-01-07T15:50:00.000Z",
      "end": "2019-01-07T15:54:59.999Z",
      "analytics": {
        "min": 57,
        "max": 65,
        "events": 26,
        "entrances": 16,
        "exits": 10,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T15:55:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-07T15:55:00.000Z",
      "end": "2019-01-07T15:59:59.999Z",
      "analytics": {
        "min": 65,
        "max": 84,
        "events": 31,
        "entrances": 25,
        "exits": 6,
        "utilization": 26.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:00:00.000Z",
    "count": 84,
    "interval": {
      "start": "2019-01-07T16:00:00.000Z",
      "end": "2019-01-07T16:04:59.999Z",
      "analytics": {
        "min": 84,
        "max": 91,
        "events": 20,
        "entrances": 13,
        "exits": 7,
        "utilization": 28.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:05:00.000Z",
    "count": 90,
    "interval": {
      "start": "2019-01-07T16:05:00.000Z",
      "end": "2019-01-07T16:09:59.999Z",
      "analytics": {
        "min": 87,
        "max": 95,
        "events": 31,
        "entrances": 18,
        "exits": 13,
        "utilization": 29.69
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:10:00.000Z",
    "count": 95,
    "interval": {
      "start": "2019-01-07T16:10:00.000Z",
      "end": "2019-01-07T16:14:59.999Z",
      "analytics": {
        "min": 94,
        "max": 107,
        "events": 41,
        "entrances": 26,
        "exits": 15,
        "utilization": 33.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:15:00.000Z",
    "count": 106,
    "interval": {
      "start": "2019-01-07T16:15:00.000Z",
      "end": "2019-01-07T16:19:59.999Z",
      "analytics": {
        "min": 105,
        "max": 120,
        "events": 55,
        "entrances": 34,
        "exits": 21,
        "utilization": 37.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:20:00.000Z",
    "count": 119,
    "interval": {
      "start": "2019-01-07T16:20:00.000Z",
      "end": "2019-01-07T16:24:59.999Z",
      "analytics": {
        "min": 116,
        "max": 129,
        "events": 43,
        "entrances": 26,
        "exits": 17,
        "utilization": 40.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:25:00.000Z",
    "count": 128,
    "interval": {
      "start": "2019-01-07T16:25:00.000Z",
      "end": "2019-01-07T16:29:59.999Z",
      "analytics": {
        "min": 128,
        "max": 150,
        "events": 60,
        "entrances": 41,
        "exits": 19,
        "utilization": 46.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:30:00.000Z",
    "count": 150,
    "interval": {
      "start": "2019-01-07T16:30:00.000Z",
      "end": "2019-01-07T16:34:59.999Z",
      "analytics": {
        "min": 150,
        "max": 171,
        "events": 64,
        "entrances": 40,
        "exits": 24,
        "utilization": 53.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:35:00.000Z",
    "count": 166,
    "interval": {
      "start": "2019-01-07T16:35:00.000Z",
      "end": "2019-01-07T16:39:59.999Z",
      "analytics": {
        "min": 163,
        "max": 179,
        "events": 58,
        "entrances": 35,
        "exits": 23,
        "utilization": 55.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:40:00.000Z",
    "count": 178,
    "interval": {
      "start": "2019-01-07T16:40:00.000Z",
      "end": "2019-01-07T16:44:59.999Z",
      "analytics": {
        "min": 171,
        "max": 188,
        "events": 80,
        "entrances": 45,
        "exits": 35,
        "utilization": 58.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:45:00.000Z",
    "count": 188,
    "interval": {
      "start": "2019-01-07T16:45:00.000Z",
      "end": "2019-01-07T16:49:59.999Z",
      "analytics": {
        "min": 184,
        "max": 196,
        "events": 86,
        "entrances": 44,
        "exits": 42,
        "utilization": 61.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:50:00.000Z",
    "count": 190,
    "interval": {
      "start": "2019-01-07T16:50:00.000Z",
      "end": "2019-01-07T16:54:59.999Z",
      "analytics": {
        "min": 190,
        "max": 208,
        "events": 94,
        "entrances": 49,
        "exits": 45,
        "utilization": 65.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T16:55:00.000Z",
    "count": 194,
    "interval": {
      "start": "2019-01-07T16:55:00.000Z",
      "end": "2019-01-07T16:59:59.999Z",
      "analytics": {
        "min": 194,
        "max": 205,
        "events": 125,
        "entrances": 67,
        "exits": 58,
        "utilization": 64.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:00:00.000Z",
    "count": 203,
    "interval": {
      "start": "2019-01-07T17:00:00.000Z",
      "end": "2019-01-07T17:04:59.999Z",
      "analytics": {
        "min": 203,
        "max": 209,
        "events": 100,
        "entrances": 52,
        "exits": 48,
        "utilization": 65.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:05:00.000Z",
    "count": 207,
    "interval": {
      "start": "2019-01-07T17:05:00.000Z",
      "end": "2019-01-07T17:09:59.999Z",
      "analytics": {
        "min": 206,
        "max": 223,
        "events": 136,
        "entrances": 75,
        "exits": 61,
        "utilization": 69.69
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:10:00.000Z",
    "count": 221,
    "interval": {
      "start": "2019-01-07T17:10:00.000Z",
      "end": "2019-01-07T17:14:59.999Z",
      "analytics": {
        "min": 215,
        "max": 228,
        "events": 121,
        "entrances": 63,
        "exits": 58,
        "utilization": 71.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:15:00.000Z",
    "count": 226,
    "interval": {
      "start": "2019-01-07T17:15:00.000Z",
      "end": "2019-01-07T17:19:59.999Z",
      "analytics": {
        "min": 225,
        "max": 259,
        "events": 118,
        "entrances": 74,
        "exits": 44,
        "utilization": 80.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:20:00.000Z",
    "count": 256,
    "interval": {
      "start": "2019-01-07T17:20:00.000Z",
      "end": "2019-01-07T17:24:59.999Z",
      "analytics": {
        "min": 255,
        "max": 282,
        "events": 117,
        "entrances": 71,
        "exits": 46,
        "utilization": 88.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:25:00.000Z",
    "count": 281,
    "interval": {
      "start": "2019-01-07T17:25:00.000Z",
      "end": "2019-01-07T17:29:59.999Z",
      "analytics": {
        "min": 280,
        "max": 291,
        "events": 120,
        "entrances": 61,
        "exits": 59,
        "utilization": 90.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:30:00.000Z",
    "count": 283,
    "interval": {
      "start": "2019-01-07T17:30:00.000Z",
      "end": "2019-01-07T17:34:59.999Z",
      "analytics": {
        "min": 278,
        "max": 289,
        "events": 106,
        "entrances": 53,
        "exits": 53,
        "utilization": 90.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:35:00.000Z",
    "count": 283,
    "interval": {
      "start": "2019-01-07T17:35:00.000Z",
      "end": "2019-01-07T17:39:59.999Z",
      "analytics": {
        "min": 269,
        "max": 286,
        "events": 121,
        "entrances": 57,
        "exits": 64,
        "utilization": 89.38
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:40:00.000Z",
    "count": 276,
    "interval": {
      "start": "2019-01-07T17:40:00.000Z",
      "end": "2019-01-07T17:44:59.999Z",
      "analytics": {
        "min": 258,
        "max": 277,
        "events": 102,
        "entrances": 43,
        "exits": 59,
        "utilization": 86.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:45:00.000Z",
    "count": 260,
    "interval": {
      "start": "2019-01-07T17:45:00.000Z",
      "end": "2019-01-07T17:49:59.999Z",
      "analytics": {
        "min": 229,
        "max": 261,
        "events": 116,
        "entrances": 45,
        "exits": 71,
        "utilization": 81.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:50:00.000Z",
    "count": 234,
    "interval": {
      "start": "2019-01-07T17:50:00.000Z",
      "end": "2019-01-07T17:54:59.999Z",
      "analytics": {
        "min": 209,
        "max": 236,
        "events": 111,
        "entrances": 43,
        "exits": 68,
        "utilization": 73.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T17:55:00.000Z",
    "count": 209,
    "interval": {
      "start": "2019-01-07T17:55:00.000Z",
      "end": "2019-01-07T17:59:59.999Z",
      "analytics": {
        "min": 195,
        "max": 210,
        "events": 96,
        "entrances": 44,
        "exits": 52,
        "utilization": 65.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:00:00.000Z",
    "count": 201,
    "interval": {
      "start": "2019-01-07T18:00:00.000Z",
      "end": "2019-01-07T18:04:59.999Z",
      "analytics": {
        "min": 173,
        "max": 201,
        "events": 99,
        "entrances": 36,
        "exits": 63,
        "utilization": 62.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:05:00.000Z",
    "count": 174,
    "interval": {
      "start": "2019-01-07T18:05:00.000Z",
      "end": "2019-01-07T18:09:59.999Z",
      "analytics": {
        "min": 162,
        "max": 178,
        "events": 104,
        "entrances": 46,
        "exits": 58,
        "utilization": 55.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:10:00.000Z",
    "count": 162,
    "interval": {
      "start": "2019-01-07T18:10:00.000Z",
      "end": "2019-01-07T18:14:59.999Z",
      "analytics": {
        "min": 141,
        "max": 164,
        "events": 83,
        "entrances": 31,
        "exits": 52,
        "utilization": 51.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:15:00.000Z",
    "count": 141,
    "interval": {
      "start": "2019-01-07T18:15:00.000Z",
      "end": "2019-01-07T18:19:59.999Z",
      "analytics": {
        "min": 141,
        "max": 150,
        "events": 88,
        "entrances": 47,
        "exits": 41,
        "utilization": 46.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:20:00.000Z",
    "count": 147,
    "interval": {
      "start": "2019-01-07T18:20:00.000Z",
      "end": "2019-01-07T18:24:59.999Z",
      "analytics": {
        "min": 136,
        "max": 148,
        "events": 100,
        "entrances": 45,
        "exits": 55,
        "utilization": 46.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:25:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-07T18:25:00.000Z",
      "end": "2019-01-07T18:29:59.999Z",
      "analytics": {
        "min": 131,
        "max": 144,
        "events": 67,
        "entrances": 33,
        "exits": 34,
        "utilization": 45.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:30:00.000Z",
    "count": 136,
    "interval": {
      "start": "2019-01-07T18:30:00.000Z",
      "end": "2019-01-07T18:34:59.999Z",
      "analytics": {
        "min": 124,
        "max": 140,
        "events": 78,
        "entrances": 33,
        "exits": 45,
        "utilization": 43.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:35:00.000Z",
    "count": 124,
    "interval": {
      "start": "2019-01-07T18:35:00.000Z",
      "end": "2019-01-07T18:39:59.999Z",
      "analytics": {
        "min": 109,
        "max": 126,
        "events": 78,
        "entrances": 34,
        "exits": 44,
        "utilization": 39.38
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:40:00.000Z",
    "count": 114,
    "interval": {
      "start": "2019-01-07T18:40:00.000Z",
      "end": "2019-01-07T18:44:59.999Z",
      "analytics": {
        "min": 98,
        "max": 114,
        "events": 67,
        "entrances": 26,
        "exits": 41,
        "utilization": 35.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:45:00.000Z",
    "count": 99,
    "interval": {
      "start": "2019-01-07T18:45:00.000Z",
      "end": "2019-01-07T18:49:59.999Z",
      "analytics": {
        "min": 85,
        "max": 99,
        "events": 58,
        "entrances": 25,
        "exits": 33,
        "utilization": 30.63
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:50:00.000Z",
    "count": 91,
    "interval": {
      "start": "2019-01-07T18:50:00.000Z",
      "end": "2019-01-07T18:54:59.999Z",
      "analytics": {
        "min": 80,
        "max": 93,
        "events": 55,
        "entrances": 23,
        "exits": 32,
        "utilization": 29.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T18:55:00.000Z",
    "count": 82,
    "interval": {
      "start": "2019-01-07T18:55:00.000Z",
      "end": "2019-01-07T18:59:59.999Z",
      "analytics": {
        "min": 55,
        "max": 82,
        "events": 49,
        "entrances": 11,
        "exits": 38,
        "utilization": 25.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:00:00.000Z",
    "count": 55,
    "interval": {
      "start": "2019-01-07T19:00:00.000Z",
      "end": "2019-01-07T19:04:59.999Z",
      "analytics": {
        "min": 51,
        "max": 60,
        "events": 49,
        "entrances": 23,
        "exits": 26,
        "utilization": 18.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:05:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-07T19:05:00.000Z",
      "end": "2019-01-07T19:09:59.999Z",
      "analytics": {
        "min": 40,
        "max": 52,
        "events": 43,
        "entrances": 17,
        "exits": 26,
        "utilization": 16.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:10:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-07T19:10:00.000Z",
      "end": "2019-01-07T19:14:59.999Z",
      "analytics": {
        "min": 41,
        "max": 47,
        "events": 39,
        "entrances": 20,
        "exits": 19,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:15:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-07T19:15:00.000Z",
      "end": "2019-01-07T19:19:59.999Z",
      "analytics": {
        "min": 39,
        "max": 44,
        "events": 37,
        "entrances": 18,
        "exits": 19,
        "utilization": 13.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:20:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-07T19:20:00.000Z",
      "end": "2019-01-07T19:24:59.999Z",
      "analytics": {
        "min": 25,
        "max": 45,
        "events": 46,
        "entrances": 15,
        "exits": 31,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:25:00.000Z",
    "count": 27,
    "interval": {
      "start": "2019-01-07T19:25:00.000Z",
      "end": "2019-01-07T19:29:59.999Z",
      "analytics": {
        "min": 14,
        "max": 28,
        "events": 44,
        "entrances": 16,
        "exits": 28,
        "utilization": 8.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:30:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-07T19:30:00.000Z",
      "end": "2019-01-07T19:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 16,
        "events": 32,
        "entrances": 6,
        "exits": 26,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T19:35:00.000Z",
      "end": "2019-01-07T19:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 33,
        "entrances": 16,
        "exits": 17,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T19:40:00.000Z",
      "end": "2019-01-07T19:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 40,
        "entrances": 19,
        "exits": 21,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T19:45:00.000Z",
      "end": "2019-01-07T19:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 36,
        "entrances": 14,
        "exits": 22,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T19:50:00.000Z",
      "end": "2019-01-07T19:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 28,
        "entrances": 15,
        "exits": 13,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T19:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T19:55:00.000Z",
      "end": "2019-01-07T19:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 41,
        "entrances": 22,
        "exits": 19,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:00:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T20:00:00.000Z",
      "end": "2019-01-07T20:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 8,
        "events": 25,
        "entrances": 11,
        "exits": 14,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T20:05:00.000Z",
      "end": "2019-01-07T20:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 15,
        "entrances": 5,
        "exits": 10,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T20:10:00.000Z",
      "end": "2019-01-07T20:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 25,
        "entrances": 12,
        "exits": 13,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T20:15:00.000Z",
      "end": "2019-01-07T20:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 16,
        "entrances": 4,
        "exits": 12,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T20:20:00.000Z",
      "end": "2019-01-07T20:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 33,
        "entrances": 18,
        "exits": 15,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T20:25:00.000Z",
      "end": "2019-01-07T20:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 10,
        "events": 27,
        "entrances": 12,
        "exits": 15,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T20:30:00.000Z",
      "end": "2019-01-07T20:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 27,
        "entrances": 12,
        "exits": 15,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T20:35:00.000Z",
      "end": "2019-01-07T20:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 20,
        "entrances": 8,
        "exits": 12,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T20:40:00.000Z",
      "end": "2019-01-07T20:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 19,
        "entrances": 11,
        "exits": 8,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T20:45:00.000Z",
      "end": "2019-01-07T20:49:59.999Z",
      "analytics": {
        "min": 4,
        "max": 9,
        "events": 18,
        "entrances": 10,
        "exits": 8,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T20:50:00.000Z",
      "end": "2019-01-07T20:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 7,
        "events": 26,
        "entrances": 11,
        "exits": 15,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-07T20:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T20:55:00.000Z",
      "end": "2019-01-07T20:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 26,
        "entrances": 10,
        "exits": 16,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-07T21:00:00.000Z",
      "end": "2019-01-07T21:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 20,
        "entrances": 8,
        "exits": 12,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T21:05:00.000Z",
      "end": "2019-01-07T21:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 21,
        "entrances": 8,
        "exits": 13,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T21:10:00.000Z",
      "end": "2019-01-07T21:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 17,
        "entrances": 8,
        "exits": 9,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T21:15:00.000Z",
      "end": "2019-01-07T21:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 10,
        "entrances": 3,
        "exits": 7,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T21:20:00.000Z",
      "end": "2019-01-07T21:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 18,
        "entrances": 12,
        "exits": 6,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T21:25:00.000Z",
      "end": "2019-01-07T21:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 12,
        "events": 15,
        "entrances": 9,
        "exits": 6,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:30:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-07T21:30:00.000Z",
      "end": "2019-01-07T21:34:59.999Z",
      "analytics": {
        "min": 8,
        "max": 12,
        "events": 15,
        "entrances": 8,
        "exits": 7,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:35:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-07T21:35:00.000Z",
      "end": "2019-01-07T21:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 11,
        "events": 10,
        "entrances": 3,
        "exits": 7,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-07T21:40:00.000Z",
      "end": "2019-01-07T21:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 8,
        "events": 15,
        "entrances": 6,
        "exits": 9,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:45:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-07T21:45:00.000Z",
      "end": "2019-01-07T21:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 6,
        "events": 13,
        "entrances": 7,
        "exits": 6,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:50:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T21:50:00.000Z",
      "end": "2019-01-07T21:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 8,
        "events": 15,
        "entrances": 7,
        "exits": 8,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T21:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-07T21:55:00.000Z",
      "end": "2019-01-07T21:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 13,
        "entrances": 6,
        "exits": 7,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T22:00:00.000Z",
      "end": "2019-01-07T22:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T22:05:00.000Z",
      "end": "2019-01-07T22:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:10:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-07T22:10:00.000Z",
      "end": "2019-01-07T22:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 12,
        "entrances": 7,
        "exits": 5,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:15:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-07T22:15:00.000Z",
      "end": "2019-01-07T22:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 7,
        "entrances": 1,
        "exits": 6,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T22:20:00.000Z",
      "end": "2019-01-07T22:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 9,
        "entrances": 2,
        "exits": 7,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T22:25:00.000Z",
      "end": "2019-01-07T22:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 5,
        "entrances": 1,
        "exits": 4,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-07T22:30:00.000Z",
      "end": "2019-01-07T22:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-07T22:35:00.000Z",
      "end": "2019-01-07T22:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T22:40:00.000Z",
      "end": "2019-01-07T22:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 6,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:45:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-07T22:45:00.000Z",
      "end": "2019-01-07T22:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T22:50:00.000Z",
      "end": "2019-01-07T22:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-07T22:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T22:55:00.000Z",
      "end": "2019-01-07T22:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-07T23:00:00.000Z",
      "end": "2019-01-07T23:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T23:05:00.000Z",
      "end": "2019-01-07T23:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T23:10:00.000Z",
      "end": "2019-01-07T23:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T23:15:00.000Z",
      "end": "2019-01-07T23:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-07T23:20:00.000Z",
      "end": "2019-01-07T23:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 9,
        "events": 10,
        "entrances": 8,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:25:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-07T23:25:00.000Z",
      "end": "2019-01-07T23:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 9,
        "entrances": 3,
        "exits": 6,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-07T23:30:00.000Z",
      "end": "2019-01-07T23:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 9,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:35:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-07T23:35:00.000Z",
      "end": "2019-01-07T23:39:59.999Z",
      "analytics": {
        "min": 6,
        "max": 10,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:40:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-07T23:40:00.000Z",
      "end": "2019-01-07T23:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:45:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-07T23:45:00.000Z",
      "end": "2019-01-07T23:49:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:50:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-07T23:50:00.000Z",
      "end": "2019-01-07T23:54:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-07T23:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-07T23:55:00.000Z",
      "end": "2019-01-07T23:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:00:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T00:00:00.000Z",
      "end": "2019-01-08T00:04:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 5,
        "entrances": 4,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:05:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T00:05:00.000Z",
      "end": "2019-01-08T00:09:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:10:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T00:10:00.000Z",
      "end": "2019-01-08T00:14:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:15:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T00:15:00.000Z",
      "end": "2019-01-08T00:19:59.999Z",
      "analytics": {
        "min": 11,
        "max": 14,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:20:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T00:20:00.000Z",
      "end": "2019-01-08T00:24:59.999Z",
      "analytics": {
        "min": 11,
        "max": 12,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:25:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T00:25:00.000Z",
      "end": "2019-01-08T00:29:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:30:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T00:30:00.000Z",
      "end": "2019-01-08T00:34:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:35:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T00:35:00.000Z",
      "end": "2019-01-08T00:39:59.999Z",
      "analytics": {
        "min": 8,
        "max": 12,
        "events": 4,
        "entrances": 4,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:40:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T00:40:00.000Z",
      "end": "2019-01-08T00:44:59.999Z",
      "analytics": {
        "min": 11,
        "max": 14,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:45:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-08T00:45:00.000Z",
      "end": "2019-01-08T00:49:59.999Z",
      "analytics": {
        "min": 13,
        "max": 14,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:50:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T00:50:00.000Z",
      "end": "2019-01-08T00:54:59.999Z",
      "analytics": {
        "min": 13,
        "max": 13,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T00:55:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T00:55:00.000Z",
      "end": "2019-01-08T00:59:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:00:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T01:00:00.000Z",
      "end": "2019-01-08T01:04:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:05:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T01:05:00.000Z",
      "end": "2019-01-08T01:09:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:10:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T01:10:00.000Z",
      "end": "2019-01-08T01:14:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:15:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T01:15:00.000Z",
      "end": "2019-01-08T01:19:59.999Z",
      "analytics": {
        "min": 11,
        "max": 12,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:20:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T01:20:00.000Z",
      "end": "2019-01-08T01:24:59.999Z",
      "analytics": {
        "min": 11,
        "max": 12,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:25:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T01:25:00.000Z",
      "end": "2019-01-08T01:29:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:30:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T01:30:00.000Z",
      "end": "2019-01-08T01:34:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:35:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T01:35:00.000Z",
      "end": "2019-01-08T01:39:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:40:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T01:40:00.000Z",
      "end": "2019-01-08T01:44:59.999Z",
      "analytics": {
        "min": 11,
        "max": 13,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:45:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T01:45:00.000Z",
      "end": "2019-01-08T01:49:59.999Z",
      "analytics": {
        "min": 13,
        "max": 14,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:50:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-08T01:50:00.000Z",
      "end": "2019-01-08T01:54:59.999Z",
      "analytics": {
        "min": 13,
        "max": 14,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T01:55:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T01:55:00.000Z",
      "end": "2019-01-08T01:59:59.999Z",
      "analytics": {
        "min": 11,
        "max": 13,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:00:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T02:00:00.000Z",
      "end": "2019-01-08T02:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:05:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T02:05:00.000Z",
      "end": "2019-01-08T02:09:59.999Z",
      "analytics": {
        "min": 11,
        "max": 14,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:10:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-08T02:10:00.000Z",
      "end": "2019-01-08T02:14:59.999Z",
      "analytics": {
        "min": 14,
        "max": 15,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:15:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-08T02:15:00.000Z",
      "end": "2019-01-08T02:19:59.999Z",
      "analytics": {
        "min": 15,
        "max": 16,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:20:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-08T02:20:00.000Z",
      "end": "2019-01-08T02:24:59.999Z",
      "analytics": {
        "min": 13,
        "max": 15,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:25:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T02:25:00.000Z",
      "end": "2019-01-08T02:29:59.999Z",
      "analytics": {
        "min": 13,
        "max": 15,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:30:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-08T02:30:00.000Z",
      "end": "2019-01-08T02:34:59.999Z",
      "analytics": {
        "min": 13,
        "max": 15,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:35:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-08T02:35:00.000Z",
      "end": "2019-01-08T02:39:59.999Z",
      "analytics": {
        "min": 14,
        "max": 18,
        "events": 5,
        "entrances": 4,
        "exits": 1,
        "utilization": 5.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:40:00.000Z",
    "count": 17,
    "interval": {
      "start": "2019-01-08T02:40:00.000Z",
      "end": "2019-01-08T02:44:59.999Z",
      "analytics": {
        "min": 13,
        "max": 17,
        "events": 4,
        "entrances": 0,
        "exits": 4,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:45:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T02:45:00.000Z",
      "end": "2019-01-08T02:49:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:50:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T02:50:00.000Z",
      "end": "2019-01-08T02:54:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T02:55:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T02:55:00.000Z",
      "end": "2019-01-08T02:59:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:00:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T03:00:00.000Z",
      "end": "2019-01-08T03:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T03:05:00.000Z",
      "end": "2019-01-08T03:09:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T03:10:00.000Z",
      "end": "2019-01-08T03:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:15:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T03:15:00.000Z",
      "end": "2019-01-08T03:19:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:20:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T03:20:00.000Z",
      "end": "2019-01-08T03:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T03:25:00.000Z",
      "end": "2019-01-08T03:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 13,
        "events": 7,
        "entrances": 6,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:30:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T03:30:00.000Z",
      "end": "2019-01-08T03:34:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:35:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T03:35:00.000Z",
      "end": "2019-01-08T03:39:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:40:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T03:40:00.000Z",
      "end": "2019-01-08T03:44:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:45:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T03:45:00.000Z",
      "end": "2019-01-08T03:49:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:50:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-08T03:50:00.000Z",
      "end": "2019-01-08T03:54:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T03:55:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T03:55:00.000Z",
      "end": "2019-01-08T03:59:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:00:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T04:00:00.000Z",
      "end": "2019-01-08T04:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 9,
        "entrances": 5,
        "exits": 4,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:05:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T04:05:00.000Z",
      "end": "2019-01-08T04:09:59.999Z",
      "analytics": {
        "min": 6,
        "max": 10,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T04:10:00.000Z",
      "end": "2019-01-08T04:14:59.999Z",
      "analytics": {
        "min": 8,
        "max": 8,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:15:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T04:15:00.000Z",
      "end": "2019-01-08T04:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:20:00.000Z",
      "end": "2019-01-08T04:24:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:25:00.000Z",
      "end": "2019-01-08T04:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:30:00.000Z",
      "end": "2019-01-08T04:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:35:00.000Z",
      "end": "2019-01-08T04:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:40:00.000Z",
      "end": "2019-01-08T04:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:45:00.000Z",
      "end": "2019-01-08T04:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T04:50:00.000Z",
      "end": "2019-01-08T04:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T04:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T04:55:00.000Z",
      "end": "2019-01-08T04:59:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:00:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T05:00:00.000Z",
      "end": "2019-01-08T05:04:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T05:05:00.000Z",
      "end": "2019-01-08T05:09:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T05:10:00.000Z",
      "end": "2019-01-08T05:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:15:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T05:15:00.000Z",
      "end": "2019-01-08T05:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:20:00.000Z",
      "end": "2019-01-08T05:24:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:25:00.000Z",
      "end": "2019-01-08T05:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:30:00.000Z",
      "end": "2019-01-08T05:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:35:00.000Z",
      "end": "2019-01-08T05:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:40:00.000Z",
      "end": "2019-01-08T05:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:45:00.000Z",
      "end": "2019-01-08T05:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:50:00.000Z",
      "end": "2019-01-08T05:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T05:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T05:55:00.000Z",
      "end": "2019-01-08T05:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T06:00:00.000Z",
      "end": "2019-01-08T06:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:05:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T06:05:00.000Z",
      "end": "2019-01-08T06:09:59.999Z",
      "analytics": {
        "min": 8,
        "max": 8,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T06:10:00.000Z",
      "end": "2019-01-08T06:14:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:15:00.000Z",
      "end": "2019-01-08T06:19:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:20:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:20:00.000Z",
      "end": "2019-01-08T06:24:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:25:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:25:00.000Z",
      "end": "2019-01-08T06:29:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:30:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:30:00.000Z",
      "end": "2019-01-08T06:34:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:35:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:35:00.000Z",
      "end": "2019-01-08T06:39:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:40:00.000Z",
      "end": "2019-01-08T06:44:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:45:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:45:00.000Z",
      "end": "2019-01-08T06:49:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:50:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:50:00.000Z",
      "end": "2019-01-08T06:54:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T06:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T06:55:00.000Z",
      "end": "2019-01-08T06:59:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:00:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:00:00.000Z",
      "end": "2019-01-08T07:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:05:00.000Z",
      "end": "2019-01-08T07:09:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:10:00.000Z",
      "end": "2019-01-08T07:14:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:15:00.000Z",
      "end": "2019-01-08T07:19:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:20:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:20:00.000Z",
      "end": "2019-01-08T07:24:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:25:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:25:00.000Z",
      "end": "2019-01-08T07:29:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:30:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:30:00.000Z",
      "end": "2019-01-08T07:34:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:35:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:35:00.000Z",
      "end": "2019-01-08T07:39:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T07:40:00.000Z",
      "end": "2019-01-08T07:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T07:45:00.000Z",
      "end": "2019-01-08T07:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:50:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T07:50:00.000Z",
      "end": "2019-01-08T07:54:59.999Z",
      "analytics": {
        "min": 8,
        "max": 8,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T07:55:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T07:55:00.000Z",
      "end": "2019-01-08T07:59:59.999Z",
      "analytics": {
        "min": 8,
        "max": 8,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:00:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T08:00:00.000Z",
      "end": "2019-01-08T08:04:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:05:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-08T08:05:00.000Z",
      "end": "2019-01-08T08:09:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:10:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T08:10:00.000Z",
      "end": "2019-01-08T08:14:59.999Z",
      "analytics": {
        "min": 11,
        "max": 12,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:15:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T08:15:00.000Z",
      "end": "2019-01-08T08:19:59.999Z",
      "analytics": {
        "min": 11,
        "max": 11,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:20:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T08:20:00.000Z",
      "end": "2019-01-08T08:24:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:25:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T08:25:00.000Z",
      "end": "2019-01-08T08:29:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:30:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T08:30:00.000Z",
      "end": "2019-01-08T08:34:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T08:35:00.000Z",
      "end": "2019-01-08T08:39:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T08:40:00.000Z",
      "end": "2019-01-08T08:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T08:45:00.000Z",
      "end": "2019-01-08T08:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T08:50:00.000Z",
      "end": "2019-01-08T08:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T08:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T08:55:00.000Z",
      "end": "2019-01-08T08:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:00:00.000Z",
      "end": "2019-01-08T09:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:05:00.000Z",
      "end": "2019-01-08T09:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:10:00.000Z",
      "end": "2019-01-08T09:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:15:00.000Z",
      "end": "2019-01-08T09:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:20:00.000Z",
      "end": "2019-01-08T09:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:25:00.000Z",
      "end": "2019-01-08T09:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:30:00.000Z",
      "end": "2019-01-08T09:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:35:00.000Z",
      "end": "2019-01-08T09:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:40:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T09:40:00.000Z",
      "end": "2019-01-08T09:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T09:45:00.000Z",
      "end": "2019-01-08T09:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T09:50:00.000Z",
      "end": "2019-01-08T09:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T09:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T09:55:00.000Z",
      "end": "2019-01-08T09:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T10:00:00.000Z",
      "end": "2019-01-08T10:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-08T10:05:00.000Z",
      "end": "2019-01-08T10:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-08T10:10:00.000Z",
      "end": "2019-01-08T10:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T10:15:00.000Z",
      "end": "2019-01-08T10:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-08T10:20:00.000Z",
      "end": "2019-01-08T10:24:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T10:25:00.000Z",
      "end": "2019-01-08T10:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:30:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T10:30:00.000Z",
      "end": "2019-01-08T10:34:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:35:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T10:35:00.000Z",
      "end": "2019-01-08T10:39:59.999Z",
      "analytics": {
        "min": 9,
        "max": 9,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T10:40:00.000Z",
      "end": "2019-01-08T10:44:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:45:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T10:45:00.000Z",
      "end": "2019-01-08T10:49:59.999Z",
      "analytics": {
        "min": 11,
        "max": 11,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:50:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-08T10:50:00.000Z",
      "end": "2019-01-08T10:54:59.999Z",
      "analytics": {
        "min": 11,
        "max": 13,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T10:55:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T10:55:00.000Z",
      "end": "2019-01-08T10:59:59.999Z",
      "analytics": {
        "min": 12,
        "max": 16,
        "events": 12,
        "entrances": 8,
        "exits": 4,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:00:00.000Z",
    "count": 16,
    "interval": {
      "start": "2019-01-08T11:00:00.000Z",
      "end": "2019-01-08T11:04:59.999Z",
      "analytics": {
        "min": 16,
        "max": 18,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 5.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:05:00.000Z",
    "count": 17,
    "interval": {
      "start": "2019-01-08T11:05:00.000Z",
      "end": "2019-01-08T11:09:59.999Z",
      "analytics": {
        "min": 17,
        "max": 20,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 6.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:10:00.000Z",
    "count": 19,
    "interval": {
      "start": "2019-01-08T11:10:00.000Z",
      "end": "2019-01-08T11:14:59.999Z",
      "analytics": {
        "min": 19,
        "max": 27,
        "events": 8,
        "entrances": 8,
        "exits": 0,
        "utilization": 8.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:15:00.000Z",
    "count": 27,
    "interval": {
      "start": "2019-01-08T11:15:00.000Z",
      "end": "2019-01-08T11:19:59.999Z",
      "analytics": {
        "min": 27,
        "max": 29,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 9.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:20:00.000Z",
    "count": 29,
    "interval": {
      "start": "2019-01-08T11:20:00.000Z",
      "end": "2019-01-08T11:24:59.999Z",
      "analytics": {
        "min": 29,
        "max": 35,
        "events": 10,
        "entrances": 8,
        "exits": 2,
        "utilization": 10.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:25:00.000Z",
    "count": 35,
    "interval": {
      "start": "2019-01-08T11:25:00.000Z",
      "end": "2019-01-08T11:29:59.999Z",
      "analytics": {
        "min": 34,
        "max": 35,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 10.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:30:00.000Z",
    "count": 34,
    "interval": {
      "start": "2019-01-08T11:30:00.000Z",
      "end": "2019-01-08T11:34:59.999Z",
      "analytics": {
        "min": 33,
        "max": 36,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 11.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:35:00.000Z",
    "count": 34,
    "interval": {
      "start": "2019-01-08T11:35:00.000Z",
      "end": "2019-01-08T11:39:59.999Z",
      "analytics": {
        "min": 34,
        "max": 36,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 11.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:40:00.000Z",
    "count": 35,
    "interval": {
      "start": "2019-01-08T11:40:00.000Z",
      "end": "2019-01-08T11:44:59.999Z",
      "analytics": {
        "min": 35,
        "max": 38,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 11.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:45:00.000Z",
    "count": 38,
    "interval": {
      "start": "2019-01-08T11:45:00.000Z",
      "end": "2019-01-08T11:49:59.999Z",
      "analytics": {
        "min": 38,
        "max": 40,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 12.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:50:00.000Z",
    "count": 39,
    "interval": {
      "start": "2019-01-08T11:50:00.000Z",
      "end": "2019-01-08T11:54:59.999Z",
      "analytics": {
        "min": 39,
        "max": 50,
        "events": 13,
        "entrances": 12,
        "exits": 1,
        "utilization": 15.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T11:55:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-08T11:55:00.000Z",
      "end": "2019-01-08T11:59:59.999Z",
      "analytics": {
        "min": 50,
        "max": 52,
        "events": 10,
        "entrances": 6,
        "exits": 4,
        "utilization": 16.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:00:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-08T12:00:00.000Z",
      "end": "2019-01-08T12:04:59.999Z",
      "analytics": {
        "min": 52,
        "max": 56,
        "events": 17,
        "entrances": 10,
        "exits": 7,
        "utilization": 17.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:05:00.000Z",
    "count": 55,
    "interval": {
      "start": "2019-01-08T12:05:00.000Z",
      "end": "2019-01-08T12:09:59.999Z",
      "analytics": {
        "min": 54,
        "max": 57,
        "events": 13,
        "entrances": 6,
        "exits": 7,
        "utilization": 17.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:10:00.000Z",
    "count": 54,
    "interval": {
      "start": "2019-01-08T12:10:00.000Z",
      "end": "2019-01-08T12:14:59.999Z",
      "analytics": {
        "min": 54,
        "max": 60,
        "events": 13,
        "entrances": 9,
        "exits": 4,
        "utilization": 18.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:15:00.000Z",
    "count": 59,
    "interval": {
      "start": "2019-01-08T12:15:00.000Z",
      "end": "2019-01-08T12:19:59.999Z",
      "analytics": {
        "min": 59,
        "max": 66,
        "events": 21,
        "entrances": 14,
        "exits": 7,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:20:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-08T12:20:00.000Z",
      "end": "2019-01-08T12:24:59.999Z",
      "analytics": {
        "min": 64,
        "max": 69,
        "events": 24,
        "entrances": 12,
        "exits": 12,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:25:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-08T12:25:00.000Z",
      "end": "2019-01-08T12:29:59.999Z",
      "analytics": {
        "min": 56,
        "max": 68,
        "events": 29,
        "entrances": 10,
        "exits": 19,
        "utilization": 21.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:30:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-08T12:30:00.000Z",
      "end": "2019-01-08T12:34:59.999Z",
      "analytics": {
        "min": 56,
        "max": 66,
        "events": 37,
        "entrances": 23,
        "exits": 14,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:35:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-08T12:35:00.000Z",
      "end": "2019-01-08T12:39:59.999Z",
      "analytics": {
        "min": 64,
        "max": 70,
        "events": 36,
        "entrances": 17,
        "exits": 19,
        "utilization": 21.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:40:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-08T12:40:00.000Z",
      "end": "2019-01-08T12:44:59.999Z",
      "analytics": {
        "min": 63,
        "max": 69,
        "events": 34,
        "entrances": 19,
        "exits": 15,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:45:00.000Z",
    "count": 68,
    "interval": {
      "start": "2019-01-08T12:45:00.000Z",
      "end": "2019-01-08T12:49:59.999Z",
      "analytics": {
        "min": 67,
        "max": 75,
        "events": 44,
        "entrances": 23,
        "exits": 21,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:50:00.000Z",
    "count": 70,
    "interval": {
      "start": "2019-01-08T12:50:00.000Z",
      "end": "2019-01-08T12:54:59.999Z",
      "analytics": {
        "min": 62,
        "max": 71,
        "events": 37,
        "entrances": 16,
        "exits": 21,
        "utilization": 22.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T12:55:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T12:55:00.000Z",
      "end": "2019-01-08T12:59:59.999Z",
      "analytics": {
        "min": 58,
        "max": 66,
        "events": 44,
        "entrances": 21,
        "exits": 23,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:00:00.000Z",
    "count": 63,
    "interval": {
      "start": "2019-01-08T13:00:00.000Z",
      "end": "2019-01-08T13:04:59.999Z",
      "analytics": {
        "min": 61,
        "max": 66,
        "events": 52,
        "entrances": 27,
        "exits": 25,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:05:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T13:05:00.000Z",
      "end": "2019-01-08T13:09:59.999Z",
      "analytics": {
        "min": 65,
        "max": 73,
        "events": 46,
        "entrances": 23,
        "exits": 23,
        "utilization": 22.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:10:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T13:10:00.000Z",
      "end": "2019-01-08T13:14:59.999Z",
      "analytics": {
        "min": 64,
        "max": 72,
        "events": 68,
        "entrances": 34,
        "exits": 34,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:15:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T13:15:00.000Z",
      "end": "2019-01-08T13:19:59.999Z",
      "analytics": {
        "min": 60,
        "max": 70,
        "events": 64,
        "entrances": 32,
        "exits": 32,
        "utilization": 21.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:20:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T13:20:00.000Z",
      "end": "2019-01-08T13:24:59.999Z",
      "analytics": {
        "min": 62,
        "max": 75,
        "events": 62,
        "entrances": 36,
        "exits": 26,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:25:00.000Z",
    "count": 75,
    "interval": {
      "start": "2019-01-08T13:25:00.000Z",
      "end": "2019-01-08T13:29:59.999Z",
      "analytics": {
        "min": 74,
        "max": 83,
        "events": 59,
        "entrances": 32,
        "exits": 27,
        "utilization": 25.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:30:00.000Z",
    "count": 80,
    "interval": {
      "start": "2019-01-08T13:30:00.000Z",
      "end": "2019-01-08T13:34:59.999Z",
      "analytics": {
        "min": 80,
        "max": 98,
        "events": 66,
        "entrances": 42,
        "exits": 24,
        "utilization": 30.63
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:35:00.000Z",
    "count": 98,
    "interval": {
      "start": "2019-01-08T13:35:00.000Z",
      "end": "2019-01-08T13:39:59.999Z",
      "analytics": {
        "min": 93,
        "max": 103,
        "events": 77,
        "entrances": 38,
        "exits": 39,
        "utilization": 32.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:40:00.000Z",
    "count": 97,
    "interval": {
      "start": "2019-01-08T13:40:00.000Z",
      "end": "2019-01-08T13:44:59.999Z",
      "analytics": {
        "min": 95,
        "max": 113,
        "events": 80,
        "entrances": 48,
        "exits": 32,
        "utilization": 35.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:45:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-08T13:45:00.000Z",
      "end": "2019-01-08T13:49:59.999Z",
      "analytics": {
        "min": 104,
        "max": 117,
        "events": 76,
        "entrances": 35,
        "exits": 41,
        "utilization": 36.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:50:00.000Z",
    "count": 107,
    "interval": {
      "start": "2019-01-08T13:50:00.000Z",
      "end": "2019-01-08T13:54:59.999Z",
      "analytics": {
        "min": 103,
        "max": 111,
        "events": 74,
        "entrances": 35,
        "exits": 39,
        "utilization": 34.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T13:55:00.000Z",
    "count": 103,
    "interval": {
      "start": "2019-01-08T13:55:00.000Z",
      "end": "2019-01-08T13:59:59.999Z",
      "analytics": {
        "min": 103,
        "max": 116,
        "events": 74,
        "entrances": 42,
        "exits": 32,
        "utilization": 36.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:00:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-08T14:00:00.000Z",
      "end": "2019-01-08T14:04:59.999Z",
      "analytics": {
        "min": 110,
        "max": 131,
        "events": 93,
        "entrances": 55,
        "exits": 38,
        "utilization": 40.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:05:00.000Z",
    "count": 130,
    "interval": {
      "start": "2019-01-08T14:05:00.000Z",
      "end": "2019-01-08T14:09:59.999Z",
      "analytics": {
        "min": 111,
        "max": 130,
        "events": 81,
        "entrances": 31,
        "exits": 50,
        "utilization": 40.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:10:00.000Z",
    "count": 111,
    "interval": {
      "start": "2019-01-08T14:10:00.000Z",
      "end": "2019-01-08T14:14:59.999Z",
      "analytics": {
        "min": 111,
        "max": 128,
        "events": 81,
        "entrances": 46,
        "exits": 35,
        "utilization": 40.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:15:00.000Z",
    "count": 122,
    "interval": {
      "start": "2019-01-08T14:15:00.000Z",
      "end": "2019-01-08T14:19:59.999Z",
      "analytics": {
        "min": 107,
        "max": 125,
        "events": 93,
        "entrances": 42,
        "exits": 51,
        "utilization": 39.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:20:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-08T14:20:00.000Z",
      "end": "2019-01-08T14:24:59.999Z",
      "analytics": {
        "min": 111,
        "max": 125,
        "events": 79,
        "entrances": 41,
        "exits": 38,
        "utilization": 39.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:25:00.000Z",
    "count": 116,
    "interval": {
      "start": "2019-01-08T14:25:00.000Z",
      "end": "2019-01-08T14:29:59.999Z",
      "analytics": {
        "min": 103,
        "max": 118,
        "events": 64,
        "entrances": 28,
        "exits": 36,
        "utilization": 36.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:30:00.000Z",
    "count": 108,
    "interval": {
      "start": "2019-01-08T14:30:00.000Z",
      "end": "2019-01-08T14:34:59.999Z",
      "analytics": {
        "min": 101,
        "max": 115,
        "events": 56,
        "entrances": 25,
        "exits": 31,
        "utilization": 35.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:35:00.000Z",
    "count": 102,
    "interval": {
      "start": "2019-01-08T14:35:00.000Z",
      "end": "2019-01-08T14:39:59.999Z",
      "analytics": {
        "min": 91,
        "max": 104,
        "events": 58,
        "entrances": 24,
        "exits": 34,
        "utilization": 32.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:40:00.000Z",
    "count": 92,
    "interval": {
      "start": "2019-01-08T14:40:00.000Z",
      "end": "2019-01-08T14:44:59.999Z",
      "analytics": {
        "min": 81,
        "max": 93,
        "events": 42,
        "entrances": 17,
        "exits": 25,
        "utilization": 29.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:45:00.000Z",
    "count": 84,
    "interval": {
      "start": "2019-01-08T14:45:00.000Z",
      "end": "2019-01-08T14:49:59.999Z",
      "analytics": {
        "min": 68,
        "max": 87,
        "events": 46,
        "entrances": 15,
        "exits": 31,
        "utilization": 27.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:50:00.000Z",
    "count": 68,
    "interval": {
      "start": "2019-01-08T14:50:00.000Z",
      "end": "2019-01-08T14:54:59.999Z",
      "analytics": {
        "min": 54,
        "max": 68,
        "events": 30,
        "entrances": 8,
        "exits": 22,
        "utilization": 20.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T14:55:00.000Z",
    "count": 54,
    "interval": {
      "start": "2019-01-08T14:55:00.000Z",
      "end": "2019-01-08T14:59:59.999Z",
      "analytics": {
        "min": 39,
        "max": 54,
        "events": 21,
        "entrances": 3,
        "exits": 18,
        "utilization": 16.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:00:00.000Z",
    "count": 39,
    "interval": {
      "start": "2019-01-08T15:00:00.000Z",
      "end": "2019-01-08T15:04:59.999Z",
      "analytics": {
        "min": 38,
        "max": 42,
        "events": 21,
        "entrances": 11,
        "exits": 10,
        "utilization": 13.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:05:00.000Z",
    "count": 40,
    "interval": {
      "start": "2019-01-08T15:05:00.000Z",
      "end": "2019-01-08T15:09:59.999Z",
      "analytics": {
        "min": 40,
        "max": 44,
        "events": 13,
        "entrances": 8,
        "exits": 5,
        "utilization": 13.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:10:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-08T15:10:00.000Z",
      "end": "2019-01-08T15:14:59.999Z",
      "analytics": {
        "min": 41,
        "max": 45,
        "events": 12,
        "entrances": 6,
        "exits": 6,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:15:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-08T15:15:00.000Z",
      "end": "2019-01-08T15:19:59.999Z",
      "analytics": {
        "min": 43,
        "max": 52,
        "events": 16,
        "entrances": 12,
        "exits": 4,
        "utilization": 16.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:20:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-08T15:20:00.000Z",
      "end": "2019-01-08T15:24:59.999Z",
      "analytics": {
        "min": 44,
        "max": 51,
        "events": 13,
        "entrances": 3,
        "exits": 10,
        "utilization": 15.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:25:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-08T15:25:00.000Z",
      "end": "2019-01-08T15:29:59.999Z",
      "analytics": {
        "min": 44,
        "max": 49,
        "events": 11,
        "entrances": 8,
        "exits": 3,
        "utilization": 15.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:30:00.000Z",
    "count": 49,
    "interval": {
      "start": "2019-01-08T15:30:00.000Z",
      "end": "2019-01-08T15:34:59.999Z",
      "analytics": {
        "min": 41,
        "max": 49,
        "events": 17,
        "entrances": 5,
        "exits": 12,
        "utilization": 15.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:35:00.000Z",
    "count": 42,
    "interval": {
      "start": "2019-01-08T15:35:00.000Z",
      "end": "2019-01-08T15:39:59.999Z",
      "analytics": {
        "min": 37,
        "max": 42,
        "events": 11,
        "entrances": 4,
        "exits": 7,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:40:00.000Z",
    "count": 39,
    "interval": {
      "start": "2019-01-08T15:40:00.000Z",
      "end": "2019-01-08T15:44:59.999Z",
      "analytics": {
        "min": 35,
        "max": 40,
        "events": 19,
        "entrances": 10,
        "exits": 9,
        "utilization": 12.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:45:00.000Z",
    "count": 40,
    "interval": {
      "start": "2019-01-08T15:45:00.000Z",
      "end": "2019-01-08T15:49:59.999Z",
      "analytics": {
        "min": 40,
        "max": 43,
        "events": 11,
        "entrances": 6,
        "exits": 5,
        "utilization": 13.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:50:00.000Z",
    "count": 41,
    "interval": {
      "start": "2019-01-08T15:50:00.000Z",
      "end": "2019-01-08T15:54:59.999Z",
      "analytics": {
        "min": 40,
        "max": 45,
        "events": 24,
        "entrances": 13,
        "exits": 11,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T15:55:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-08T15:55:00.000Z",
      "end": "2019-01-08T15:59:59.999Z",
      "analytics": {
        "min": 41,
        "max": 46,
        "events": 21,
        "entrances": 11,
        "exits": 10,
        "utilization": 14.37
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:00:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-08T16:00:00.000Z",
      "end": "2019-01-08T16:04:59.999Z",
      "analytics": {
        "min": 43,
        "max": 53,
        "events": 31,
        "entrances": 20,
        "exits": 11,
        "utilization": 16.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:05:00.000Z",
    "count": 53,
    "interval": {
      "start": "2019-01-08T16:05:00.000Z",
      "end": "2019-01-08T16:09:59.999Z",
      "analytics": {
        "min": 53,
        "max": 65,
        "events": 36,
        "entrances": 24,
        "exits": 12,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:10:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-08T16:10:00.000Z",
      "end": "2019-01-08T16:14:59.999Z",
      "analytics": {
        "min": 65,
        "max": 72,
        "events": 25,
        "entrances": 16,
        "exits": 9,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:15:00.000Z",
    "count": 72,
    "interval": {
      "start": "2019-01-08T16:15:00.000Z",
      "end": "2019-01-08T16:19:59.999Z",
      "analytics": {
        "min": 70,
        "max": 92,
        "events": 50,
        "entrances": 35,
        "exits": 15,
        "utilization": 28.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:20:00.000Z",
    "count": 92,
    "interval": {
      "start": "2019-01-08T16:20:00.000Z",
      "end": "2019-01-08T16:24:59.999Z",
      "analytics": {
        "min": 92,
        "max": 117,
        "events": 58,
        "entrances": 41,
        "exits": 17,
        "utilization": 36.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:25:00.000Z",
    "count": 116,
    "interval": {
      "start": "2019-01-08T16:25:00.000Z",
      "end": "2019-01-08T16:29:59.999Z",
      "analytics": {
        "min": 116,
        "max": 135,
        "events": 51,
        "entrances": 35,
        "exits": 16,
        "utilization": 42.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:30:00.000Z",
    "count": 135,
    "interval": {
      "start": "2019-01-08T16:30:00.000Z",
      "end": "2019-01-08T16:34:59.999Z",
      "analytics": {
        "min": 135,
        "max": 141,
        "events": 55,
        "entrances": 29,
        "exits": 26,
        "utilization": 44.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:35:00.000Z",
    "count": 138,
    "interval": {
      "start": "2019-01-08T16:35:00.000Z",
      "end": "2019-01-08T16:39:59.999Z",
      "analytics": {
        "min": 137,
        "max": 152,
        "events": 75,
        "entrances": 42,
        "exits": 33,
        "utilization": 47.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:40:00.000Z",
    "count": 147,
    "interval": {
      "start": "2019-01-08T16:40:00.000Z",
      "end": "2019-01-08T16:44:59.999Z",
      "analytics": {
        "min": 147,
        "max": 156,
        "events": 93,
        "entrances": 51,
        "exits": 42,
        "utilization": 48.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:45:00.000Z",
    "count": 156,
    "interval": {
      "start": "2019-01-08T16:45:00.000Z",
      "end": "2019-01-08T16:49:59.999Z",
      "analytics": {
        "min": 156,
        "max": 176,
        "events": 98,
        "entrances": 59,
        "exits": 39,
        "utilization": 55.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:50:00.000Z",
    "count": 176,
    "interval": {
      "start": "2019-01-08T16:50:00.000Z",
      "end": "2019-01-08T16:54:59.999Z",
      "analytics": {
        "min": 172,
        "max": 188,
        "events": 106,
        "entrances": 56,
        "exits": 50,
        "utilization": 58.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T16:55:00.000Z",
    "count": 182,
    "interval": {
      "start": "2019-01-08T16:55:00.000Z",
      "end": "2019-01-08T16:59:59.999Z",
      "analytics": {
        "min": 180,
        "max": 209,
        "events": 103,
        "entrances": 64,
        "exits": 39,
        "utilization": 65.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:00:00.000Z",
    "count": 207,
    "interval": {
      "start": "2019-01-08T17:00:00.000Z",
      "end": "2019-01-08T17:04:59.999Z",
      "analytics": {
        "min": 205,
        "max": 227,
        "events": 114,
        "entrances": 67,
        "exits": 47,
        "utilization": 70.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:05:00.000Z",
    "count": 227,
    "interval": {
      "start": "2019-01-08T17:05:00.000Z",
      "end": "2019-01-08T17:09:59.999Z",
      "analytics": {
        "min": 225,
        "max": 239,
        "events": 93,
        "entrances": 52,
        "exits": 41,
        "utilization": 74.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:10:00.000Z",
    "count": 238,
    "interval": {
      "start": "2019-01-08T17:10:00.000Z",
      "end": "2019-01-08T17:14:59.999Z",
      "analytics": {
        "min": 237,
        "max": 257,
        "events": 125,
        "entrances": 72,
        "exits": 53,
        "utilization": 80.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:15:00.000Z",
    "count": 257,
    "interval": {
      "start": "2019-01-08T17:15:00.000Z",
      "end": "2019-01-08T17:19:59.999Z",
      "analytics": {
        "min": 256,
        "max": 272,
        "events": 115,
        "entrances": 63,
        "exits": 52,
        "utilization": 85.0
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:20:00.000Z",
    "count": 268,
    "interval": {
      "start": "2019-01-08T17:20:00.000Z",
      "end": "2019-01-08T17:24:59.999Z",
      "analytics": {
        "min": 265,
        "max": 282,
        "events": 107,
        "entrances": 56,
        "exits": 51,
        "utilization": 88.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:25:00.000Z",
    "count": 273,
    "interval": {
      "start": "2019-01-08T17:25:00.000Z",
      "end": "2019-01-08T17:29:59.999Z",
      "analytics": {
        "min": 270,
        "max": 281,
        "events": 111,
        "entrances": 58,
        "exits": 53,
        "utilization": 87.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:30:00.000Z",
    "count": 278,
    "interval": {
      "start": "2019-01-08T17:30:00.000Z",
      "end": "2019-01-08T17:34:59.999Z",
      "analytics": {
        "min": 278,
        "max": 293,
        "events": 129,
        "entrances": 67,
        "exits": 62,
        "utilization": 91.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:35:00.000Z",
    "count": 283,
    "interval": {
      "start": "2019-01-08T17:35:00.000Z",
      "end": "2019-01-08T17:39:59.999Z",
      "analytics": {
        "min": 253,
        "max": 285,
        "events": 108,
        "entrances": 40,
        "exits": 68,
        "utilization": 89.06
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:40:00.000Z",
    "count": 255,
    "interval": {
      "start": "2019-01-08T17:40:00.000Z",
      "end": "2019-01-08T17:44:59.999Z",
      "analytics": {
        "min": 248,
        "max": 263,
        "events": 96,
        "entrances": 45,
        "exits": 51,
        "utilization": 82.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:45:00.000Z",
    "count": 249,
    "interval": {
      "start": "2019-01-08T17:45:00.000Z",
      "end": "2019-01-08T17:49:59.999Z",
      "analytics": {
        "min": 225,
        "max": 249,
        "events": 116,
        "entrances": 47,
        "exits": 69,
        "utilization": 77.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:50:00.000Z",
    "count": 227,
    "interval": {
      "start": "2019-01-08T17:50:00.000Z",
      "end": "2019-01-08T17:54:59.999Z",
      "analytics": {
        "min": 204,
        "max": 227,
        "events": 101,
        "entrances": 39,
        "exits": 62,
        "utilization": 70.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T17:55:00.000Z",
    "count": 204,
    "interval": {
      "start": "2019-01-08T17:55:00.000Z",
      "end": "2019-01-08T17:59:59.999Z",
      "analytics": {
        "min": 187,
        "max": 204,
        "events": 107,
        "entrances": 46,
        "exits": 61,
        "utilization": 63.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:00:00.000Z",
    "count": 189,
    "interval": {
      "start": "2019-01-08T18:00:00.000Z",
      "end": "2019-01-08T18:04:59.999Z",
      "analytics": {
        "min": 182,
        "max": 191,
        "events": 92,
        "entrances": 45,
        "exits": 47,
        "utilization": 59.69
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:05:00.000Z",
    "count": 187,
    "interval": {
      "start": "2019-01-08T18:05:00.000Z",
      "end": "2019-01-08T18:09:59.999Z",
      "analytics": {
        "min": 166,
        "max": 188,
        "events": 102,
        "entrances": 43,
        "exits": 59,
        "utilization": 58.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:10:00.000Z",
    "count": 171,
    "interval": {
      "start": "2019-01-08T18:10:00.000Z",
      "end": "2019-01-08T18:14:59.999Z",
      "analytics": {
        "min": 155,
        "max": 172,
        "events": 101,
        "entrances": 44,
        "exits": 57,
        "utilization": 53.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:15:00.000Z",
    "count": 158,
    "interval": {
      "start": "2019-01-08T18:15:00.000Z",
      "end": "2019-01-08T18:19:59.999Z",
      "analytics": {
        "min": 153,
        "max": 164,
        "events": 103,
        "entrances": 49,
        "exits": 54,
        "utilization": 51.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:20:00.000Z",
    "count": 153,
    "interval": {
      "start": "2019-01-08T18:20:00.000Z",
      "end": "2019-01-08T18:24:59.999Z",
      "analytics": {
        "min": 128,
        "max": 156,
        "events": 77,
        "entrances": 26,
        "exits": 51,
        "utilization": 48.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:25:00.000Z",
    "count": 128,
    "interval": {
      "start": "2019-01-08T18:25:00.000Z",
      "end": "2019-01-08T18:29:59.999Z",
      "analytics": {
        "min": 122,
        "max": 133,
        "events": 74,
        "entrances": 34,
        "exits": 40,
        "utilization": 41.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:30:00.000Z",
    "count": 122,
    "interval": {
      "start": "2019-01-08T18:30:00.000Z",
      "end": "2019-01-08T18:34:59.999Z",
      "analytics": {
        "min": 98,
        "max": 122,
        "events": 66,
        "entrances": 21,
        "exits": 45,
        "utilization": 37.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:35:00.000Z",
    "count": 98,
    "interval": {
      "start": "2019-01-08T18:35:00.000Z",
      "end": "2019-01-08T18:39:59.999Z",
      "analytics": {
        "min": 97,
        "max": 104,
        "events": 72,
        "entrances": 38,
        "exits": 34,
        "utilization": 32.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:40:00.000Z",
    "count": 102,
    "interval": {
      "start": "2019-01-08T18:40:00.000Z",
      "end": "2019-01-08T18:44:59.999Z",
      "analytics": {
        "min": 81,
        "max": 102,
        "events": 70,
        "entrances": 25,
        "exits": 45,
        "utilization": 31.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:45:00.000Z",
    "count": 82,
    "interval": {
      "start": "2019-01-08T18:45:00.000Z",
      "end": "2019-01-08T18:49:59.999Z",
      "analytics": {
        "min": 59,
        "max": 82,
        "events": 63,
        "entrances": 20,
        "exits": 43,
        "utilization": 25.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:50:00.000Z",
    "count": 59,
    "interval": {
      "start": "2019-01-08T18:50:00.000Z",
      "end": "2019-01-08T18:54:59.999Z",
      "analytics": {
        "min": 41,
        "max": 59,
        "events": 57,
        "entrances": 20,
        "exits": 37,
        "utilization": 18.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T18:55:00.000Z",
    "count": 42,
    "interval": {
      "start": "2019-01-08T18:55:00.000Z",
      "end": "2019-01-08T18:59:59.999Z",
      "analytics": {
        "min": 37,
        "max": 49,
        "events": 51,
        "entrances": 23,
        "exits": 28,
        "utilization": 15.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:00:00.000Z",
    "count": 37,
    "interval": {
      "start": "2019-01-08T19:00:00.000Z",
      "end": "2019-01-08T19:04:59.999Z",
      "analytics": {
        "min": 25,
        "max": 41,
        "events": 48,
        "entrances": 18,
        "exits": 30,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:05:00.000Z",
    "count": 25,
    "interval": {
      "start": "2019-01-08T19:05:00.000Z",
      "end": "2019-01-08T19:09:59.999Z",
      "analytics": {
        "min": 19,
        "max": 25,
        "events": 30,
        "entrances": 13,
        "exits": 17,
        "utilization": 7.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:10:00.000Z",
    "count": 21,
    "interval": {
      "start": "2019-01-08T19:10:00.000Z",
      "end": "2019-01-08T19:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 21,
        "events": 48,
        "entrances": 17,
        "exits": 31,
        "utilization": 6.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T19:15:00.000Z",
      "end": "2019-01-08T19:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 44,
        "entrances": 14,
        "exits": 30,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T19:20:00.000Z",
      "end": "2019-01-08T19:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 37,
        "entrances": 14,
        "exits": 23,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T19:25:00.000Z",
      "end": "2019-01-08T19:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 36,
        "entrances": 13,
        "exits": 23,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-08T19:30:00.000Z",
      "end": "2019-01-08T19:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 33,
        "entrances": 17,
        "exits": 16,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T19:35:00.000Z",
      "end": "2019-01-08T19:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 28,
        "entrances": 13,
        "exits": 15,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T19:40:00.000Z",
      "end": "2019-01-08T19:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 23,
        "entrances": 11,
        "exits": 12,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:45:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-08T19:45:00.000Z",
      "end": "2019-01-08T19:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 41,
        "entrances": 18,
        "exits": 23,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T19:50:00.000Z",
      "end": "2019-01-08T19:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 34,
        "entrances": 20,
        "exits": 14,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T19:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T19:55:00.000Z",
      "end": "2019-01-08T19:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 10,
        "events": 36,
        "entrances": 16,
        "exits": 20,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T20:00:00.000Z",
      "end": "2019-01-08T20:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 28,
        "entrances": 12,
        "exits": 16,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T20:05:00.000Z",
      "end": "2019-01-08T20:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 25,
        "entrances": 14,
        "exits": 11,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:10:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-08T20:10:00.000Z",
      "end": "2019-01-08T20:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 18,
        "entrances": 6,
        "exits": 12,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T20:15:00.000Z",
      "end": "2019-01-08T20:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 9,
        "events": 20,
        "entrances": 11,
        "exits": 9,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:20:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T20:20:00.000Z",
      "end": "2019-01-08T20:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 19,
        "entrances": 9,
        "exits": 10,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:25:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-08T20:25:00.000Z",
      "end": "2019-01-08T20:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 23,
        "entrances": 8,
        "exits": 15,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-08T20:30:00.000Z",
      "end": "2019-01-08T20:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 23,
        "entrances": 9,
        "exits": 14,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T20:35:00.000Z",
      "end": "2019-01-08T20:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 25,
        "entrances": 14,
        "exits": 11,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T20:40:00.000Z",
      "end": "2019-01-08T20:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 27,
        "entrances": 10,
        "exits": 17,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T20:45:00.000Z",
      "end": "2019-01-08T20:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 25,
        "entrances": 12,
        "exits": 13,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-08T20:50:00.000Z",
      "end": "2019-01-08T20:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 8,
        "events": 26,
        "entrances": 14,
        "exits": 12,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T20:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T20:55:00.000Z",
      "end": "2019-01-08T20:59:59.999Z",
      "analytics": {
        "min": 5,
        "max": 9,
        "events": 17,
        "entrances": 8,
        "exits": 9,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:00:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T21:00:00.000Z",
      "end": "2019-01-08T21:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 8,
        "events": 23,
        "entrances": 12,
        "exits": 11,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:05:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T21:05:00.000Z",
      "end": "2019-01-08T21:09:59.999Z",
      "analytics": {
        "min": 5,
        "max": 10,
        "events": 17,
        "entrances": 9,
        "exits": 8,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T21:10:00.000Z",
      "end": "2019-01-08T21:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 17,
        "entrances": 6,
        "exits": 11,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T21:15:00.000Z",
      "end": "2019-01-08T21:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 22,
        "entrances": 9,
        "exits": 13,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-08T21:20:00.000Z",
      "end": "2019-01-08T21:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 25,
        "entrances": 11,
        "exits": 14,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T21:25:00.000Z",
      "end": "2019-01-08T21:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 11,
        "entrances": 2,
        "exits": 9,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-08T21:30:00.000Z",
      "end": "2019-01-08T21:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 11,
        "entrances": 9,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T21:35:00.000Z",
      "end": "2019-01-08T21:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 8,
        "events": 8,
        "entrances": 1,
        "exits": 7,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T21:40:00.000Z",
      "end": "2019-01-08T21:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 12,
        "entrances": 6,
        "exits": 6,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T21:45:00.000Z",
      "end": "2019-01-08T21:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 19,
        "entrances": 9,
        "exits": 10,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T21:50:00.000Z",
      "end": "2019-01-08T21:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 17,
        "entrances": 8,
        "exits": 9,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T21:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T21:55:00.000Z",
      "end": "2019-01-08T21:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 10,
        "entrances": 5,
        "exits": 5,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:00:00.000Z",
      "end": "2019-01-08T22:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 14,
        "entrances": 7,
        "exits": 7,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:05:00.000Z",
      "end": "2019-01-08T22:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 7,
        "events": 4,
        "entrances": 4,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T22:10:00.000Z",
      "end": "2019-01-08T22:14:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T22:15:00.000Z",
      "end": "2019-01-08T22:19:59.999Z",
      "analytics": {
        "min": 4,
        "max": 9,
        "events": 9,
        "entrances": 5,
        "exits": 4,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:20:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T22:20:00.000Z",
      "end": "2019-01-08T22:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 5,
        "entrances": 1,
        "exits": 4,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T22:25:00.000Z",
      "end": "2019-01-08T22:29:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:30:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T22:30:00.000Z",
      "end": "2019-01-08T22:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T22:35:00.000Z",
      "end": "2019-01-08T22:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:40:00.000Z",
      "end": "2019-01-08T22:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:45:00.000Z",
      "end": "2019-01-08T22:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:50:00.000Z",
      "end": "2019-01-08T22:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-08T22:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T22:55:00.000Z",
      "end": "2019-01-08T22:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T23:00:00.000Z",
      "end": "2019-01-08T23:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-08T23:05:00.000Z",
      "end": "2019-01-08T23:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 10,
        "entrances": 6,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-08T23:10:00.000Z",
      "end": "2019-01-08T23:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 8,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:15:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T23:15:00.000Z",
      "end": "2019-01-08T23:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 8,
        "entrances": 4,
        "exits": 4,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:20:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-08T23:20:00.000Z",
      "end": "2019-01-08T23:24:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-08T23:25:00.000Z",
      "end": "2019-01-08T23:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:30:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T23:30:00.000Z",
      "end": "2019-01-08T23:34:59.999Z",
      "analytics": {
        "min": 6,
        "max": 10,
        "events": 10,
        "entrances": 5,
        "exits": 5,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:35:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-08T23:35:00.000Z",
      "end": "2019-01-08T23:39:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-08T23:40:00.000Z",
      "end": "2019-01-08T23:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 12,
        "events": 5,
        "entrances": 5,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:45:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-08T23:45:00.000Z",
      "end": "2019-01-08T23:49:59.999Z",
      "analytics": {
        "min": 8,
        "max": 12,
        "events": 5,
        "entrances": 1,
        "exits": 4,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:50:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T23:50:00.000Z",
      "end": "2019-01-08T23:54:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-08T23:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-08T23:55:00.000Z",
      "end": "2019-01-08T23:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:00:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-09T00:00:00.000Z",
      "end": "2019-01-09T00:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:05:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-09T00:05:00.000Z",
      "end": "2019-01-09T00:09:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T00:10:00.000Z",
      "end": "2019-01-09T00:14:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-09T00:15:00.000Z",
      "end": "2019-01-09T00:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:20:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T00:20:00.000Z",
      "end": "2019-01-09T00:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T00:25:00.000Z",
      "end": "2019-01-09T00:29:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:30:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T00:30:00.000Z",
      "end": "2019-01-09T00:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:35:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T00:35:00.000Z",
      "end": "2019-01-09T00:39:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T00:40:00.000Z",
      "end": "2019-01-09T00:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T00:45:00.000Z",
      "end": "2019-01-09T00:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T00:50:00.000Z",
      "end": "2019-01-09T00:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T00:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T00:55:00.000Z",
      "end": "2019-01-09T00:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T01:00:00.000Z",
      "end": "2019-01-09T01:04:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T01:05:00.000Z",
      "end": "2019-01-09T01:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T01:10:00.000Z",
      "end": "2019-01-09T01:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T01:15:00.000Z",
      "end": "2019-01-09T01:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T01:20:00.000Z",
      "end": "2019-01-09T01:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T01:25:00.000Z",
      "end": "2019-01-09T01:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T01:30:00.000Z",
      "end": "2019-01-09T01:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T01:35:00.000Z",
      "end": "2019-01-09T01:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:40:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T01:40:00.000Z",
      "end": "2019-01-09T01:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T01:45:00.000Z",
      "end": "2019-01-09T01:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T01:50:00.000Z",
      "end": "2019-01-09T01:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T01:55:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T01:55:00.000Z",
      "end": "2019-01-09T01:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T02:00:00.000Z",
      "end": "2019-01-09T02:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T02:05:00.000Z",
      "end": "2019-01-09T02:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T02:10:00.000Z",
      "end": "2019-01-09T02:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T02:15:00.000Z",
      "end": "2019-01-09T02:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T02:20:00.000Z",
      "end": "2019-01-09T02:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T02:25:00.000Z",
      "end": "2019-01-09T02:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T02:30:00.000Z",
      "end": "2019-01-09T02:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T02:35:00.000Z",
      "end": "2019-01-09T02:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T02:40:00.000Z",
      "end": "2019-01-09T02:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T02:45:00.000Z",
      "end": "2019-01-09T02:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T02:50:00.000Z",
      "end": "2019-01-09T02:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T02:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T02:55:00.000Z",
      "end": "2019-01-09T02:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 8,
        "entrances": 3,
        "exits": 5,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T03:00:00.000Z",
      "end": "2019-01-09T03:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T03:05:00.000Z",
      "end": "2019-01-09T03:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T03:10:00.000Z",
      "end": "2019-01-09T03:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 1,
        "exits": 5,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T03:15:00.000Z",
      "end": "2019-01-09T03:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T03:20:00.000Z",
      "end": "2019-01-09T03:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 4,
        "entrances": 4,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T03:25:00.000Z",
      "end": "2019-01-09T03:29:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T03:30:00.000Z",
      "end": "2019-01-09T03:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T03:35:00.000Z",
      "end": "2019-01-09T03:39:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T03:40:00.000Z",
      "end": "2019-01-09T03:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 4,
        "entrances": 0,
        "exits": 4,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T03:45:00.000Z",
      "end": "2019-01-09T03:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:50:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T03:50:00.000Z",
      "end": "2019-01-09T03:54:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T03:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-09T03:55:00.000Z",
      "end": "2019-01-09T03:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:00:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T04:00:00.000Z",
      "end": "2019-01-09T04:04:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:05:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T04:05:00.000Z",
      "end": "2019-01-09T04:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T04:10:00.000Z",
      "end": "2019-01-09T04:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T04:15:00.000Z",
      "end": "2019-01-09T04:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:20:00.000Z",
      "end": "2019-01-09T04:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:25:00.000Z",
      "end": "2019-01-09T04:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:30:00.000Z",
      "end": "2019-01-09T04:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:35:00.000Z",
      "end": "2019-01-09T04:39:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:40:00.000Z",
      "end": "2019-01-09T04:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T04:45:00.000Z",
      "end": "2019-01-09T04:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T04:50:00.000Z",
      "end": "2019-01-09T04:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T04:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T04:55:00.000Z",
      "end": "2019-01-09T04:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:00:00.000Z",
      "end": "2019-01-09T05:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:05:00.000Z",
      "end": "2019-01-09T05:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:10:00.000Z",
      "end": "2019-01-09T05:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:15:00.000Z",
      "end": "2019-01-09T05:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T05:20:00.000Z",
      "end": "2019-01-09T05:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T05:25:00.000Z",
      "end": "2019-01-09T05:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:30:00.000Z",
      "end": "2019-01-09T05:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:35:00.000Z",
      "end": "2019-01-09T05:39:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:40:00.000Z",
      "end": "2019-01-09T05:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:45:00.000Z",
      "end": "2019-01-09T05:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:50:00.000Z",
      "end": "2019-01-09T05:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T05:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T05:55:00.000Z",
      "end": "2019-01-09T05:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:00:00.000Z",
      "end": "2019-01-09T06:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T06:05:00.000Z",
      "end": "2019-01-09T06:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T06:10:00.000Z",
      "end": "2019-01-09T06:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:15:00.000Z",
      "end": "2019-01-09T06:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:20:00.000Z",
      "end": "2019-01-09T06:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:25:00.000Z",
      "end": "2019-01-09T06:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:30:00.000Z",
      "end": "2019-01-09T06:34:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:35:00.000Z",
      "end": "2019-01-09T06:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:40:00.000Z",
      "end": "2019-01-09T06:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:45:00.000Z",
      "end": "2019-01-09T06:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:50:00.000Z",
      "end": "2019-01-09T06:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T06:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T06:55:00.000Z",
      "end": "2019-01-09T06:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:00:00.000Z",
      "end": "2019-01-09T07:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:05:00.000Z",
      "end": "2019-01-09T07:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:10:00.000Z",
      "end": "2019-01-09T07:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:15:00.000Z",
      "end": "2019-01-09T07:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:20:00.000Z",
      "end": "2019-01-09T07:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:25:00.000Z",
      "end": "2019-01-09T07:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:30:00.000Z",
      "end": "2019-01-09T07:34:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:35:00.000Z",
      "end": "2019-01-09T07:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T07:40:00.000Z",
      "end": "2019-01-09T07:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T07:45:00.000Z",
      "end": "2019-01-09T07:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T07:50:00.000Z",
      "end": "2019-01-09T07:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T07:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T07:55:00.000Z",
      "end": "2019-01-09T07:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T08:00:00.000Z",
      "end": "2019-01-09T08:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T08:05:00.000Z",
      "end": "2019-01-09T08:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:10:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T08:10:00.000Z",
      "end": "2019-01-09T08:14:59.999Z",
      "analytics": {
        "min": 4,
        "max": 4,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:15:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T08:15:00.000Z",
      "end": "2019-01-09T08:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T08:20:00.000Z",
      "end": "2019-01-09T08:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T08:25:00.000Z",
      "end": "2019-01-09T08:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T08:30:00.000Z",
      "end": "2019-01-09T08:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T08:35:00.000Z",
      "end": "2019-01-09T08:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T08:40:00.000Z",
      "end": "2019-01-09T08:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T08:45:00.000Z",
      "end": "2019-01-09T08:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T08:50:00.000Z",
      "end": "2019-01-09T08:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T08:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T08:55:00.000Z",
      "end": "2019-01-09T08:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:00:00.000Z",
      "end": "2019-01-09T09:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:05:00.000Z",
      "end": "2019-01-09T09:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:10:00.000Z",
      "end": "2019-01-09T09:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:15:00.000Z",
      "end": "2019-01-09T09:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:20:00.000Z",
      "end": "2019-01-09T09:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:25:00.000Z",
      "end": "2019-01-09T09:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:30:00.000Z",
      "end": "2019-01-09T09:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:35:00.000Z",
      "end": "2019-01-09T09:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:40:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:40:00.000Z",
      "end": "2019-01-09T09:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:45:00.000Z",
      "end": "2019-01-09T09:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T09:50:00.000Z",
      "end": "2019-01-09T09:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T09:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T09:55:00.000Z",
      "end": "2019-01-09T09:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T10:00:00.000Z",
      "end": "2019-01-09T10:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T10:05:00.000Z",
      "end": "2019-01-09T10:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T10:10:00.000Z",
      "end": "2019-01-09T10:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T10:15:00.000Z",
      "end": "2019-01-09T10:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T10:20:00.000Z",
      "end": "2019-01-09T10:24:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T10:25:00.000Z",
      "end": "2019-01-09T10:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:30:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T10:30:00.000Z",
      "end": "2019-01-09T10:34:59.999Z",
      "analytics": {
        "min": 8,
        "max": 8,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:35:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T10:35:00.000Z",
      "end": "2019-01-09T10:39:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:40:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-09T10:40:00.000Z",
      "end": "2019-01-09T10:44:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:45:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-09T10:45:00.000Z",
      "end": "2019-01-09T10:49:59.999Z",
      "analytics": {
        "min": 12,
        "max": 14,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:50:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-09T10:50:00.000Z",
      "end": "2019-01-09T10:54:59.999Z",
      "analytics": {
        "min": 13,
        "max": 16,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T10:55:00.000Z",
    "count": 16,
    "interval": {
      "start": "2019-01-09T10:55:00.000Z",
      "end": "2019-01-09T10:59:59.999Z",
      "analytics": {
        "min": 16,
        "max": 17,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 5.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:00:00.000Z",
    "count": 16,
    "interval": {
      "start": "2019-01-09T11:00:00.000Z",
      "end": "2019-01-09T11:04:59.999Z",
      "analytics": {
        "min": 15,
        "max": 18,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 5.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:05:00.000Z",
    "count": 18,
    "interval": {
      "start": "2019-01-09T11:05:00.000Z",
      "end": "2019-01-09T11:09:59.999Z",
      "analytics": {
        "min": 17,
        "max": 21,
        "events": 5,
        "entrances": 4,
        "exits": 1,
        "utilization": 6.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:10:00.000Z",
    "count": 21,
    "interval": {
      "start": "2019-01-09T11:10:00.000Z",
      "end": "2019-01-09T11:14:59.999Z",
      "analytics": {
        "min": 21,
        "max": 25,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 7.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:15:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-09T11:15:00.000Z",
      "end": "2019-01-09T11:19:59.999Z",
      "analytics": {
        "min": 23,
        "max": 27,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 8.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:20:00.000Z",
    "count": 27,
    "interval": {
      "start": "2019-01-09T11:20:00.000Z",
      "end": "2019-01-09T11:24:59.999Z",
      "analytics": {
        "min": 26,
        "max": 34,
        "events": 11,
        "entrances": 9,
        "exits": 2,
        "utilization": 10.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:25:00.000Z",
    "count": 34,
    "interval": {
      "start": "2019-01-09T11:25:00.000Z",
      "end": "2019-01-09T11:29:59.999Z",
      "analytics": {
        "min": 33,
        "max": 37,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 11.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:30:00.000Z",
    "count": 37,
    "interval": {
      "start": "2019-01-09T11:30:00.000Z",
      "end": "2019-01-09T11:34:59.999Z",
      "analytics": {
        "min": 36,
        "max": 38,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 11.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:35:00.000Z",
    "count": 36,
    "interval": {
      "start": "2019-01-09T11:35:00.000Z",
      "end": "2019-01-09T11:39:59.999Z",
      "analytics": {
        "min": 36,
        "max": 42,
        "events": 6,
        "entrances": 6,
        "exits": 0,
        "utilization": 13.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:40:00.000Z",
    "count": 42,
    "interval": {
      "start": "2019-01-09T11:40:00.000Z",
      "end": "2019-01-09T11:44:59.999Z",
      "analytics": {
        "min": 41,
        "max": 43,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 13.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:45:00.000Z",
    "count": 43,
    "interval": {
      "start": "2019-01-09T11:45:00.000Z",
      "end": "2019-01-09T11:49:59.999Z",
      "analytics": {
        "min": 43,
        "max": 46,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 14.37
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:50:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-09T11:50:00.000Z",
      "end": "2019-01-09T11:54:59.999Z",
      "analytics": {
        "min": 43,
        "max": 52,
        "events": 14,
        "entrances": 11,
        "exits": 3,
        "utilization": 16.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T11:55:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-09T11:55:00.000Z",
      "end": "2019-01-09T11:59:59.999Z",
      "analytics": {
        "min": 49,
        "max": 52,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 15.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:00:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-09T12:00:00.000Z",
      "end": "2019-01-09T12:04:59.999Z",
      "analytics": {
        "min": 49,
        "max": 54,
        "events": 10,
        "entrances": 6,
        "exits": 4,
        "utilization": 16.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:05:00.000Z",
    "count": 53,
    "interval": {
      "start": "2019-01-09T12:05:00.000Z",
      "end": "2019-01-09T12:09:59.999Z",
      "analytics": {
        "min": 52,
        "max": 55,
        "events": 12,
        "entrances": 7,
        "exits": 5,
        "utilization": 17.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:10:00.000Z",
    "count": 55,
    "interval": {
      "start": "2019-01-09T12:10:00.000Z",
      "end": "2019-01-09T12:14:59.999Z",
      "analytics": {
        "min": 55,
        "max": 61,
        "events": 20,
        "entrances": 13,
        "exits": 7,
        "utilization": 19.06
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:15:00.000Z",
    "count": 61,
    "interval": {
      "start": "2019-01-09T12:15:00.000Z",
      "end": "2019-01-09T12:19:59.999Z",
      "analytics": {
        "min": 61,
        "max": 68,
        "events": 22,
        "entrances": 13,
        "exits": 9,
        "utilization": 21.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:20:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-09T12:20:00.000Z",
      "end": "2019-01-09T12:24:59.999Z",
      "analytics": {
        "min": 61,
        "max": 65,
        "events": 29,
        "entrances": 13,
        "exits": 16,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:25:00.000Z",
    "count": 62,
    "interval": {
      "start": "2019-01-09T12:25:00.000Z",
      "end": "2019-01-09T12:29:59.999Z",
      "analytics": {
        "min": 59,
        "max": 64,
        "events": 30,
        "entrances": 16,
        "exits": 14,
        "utilization": 20.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:30:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-09T12:30:00.000Z",
      "end": "2019-01-09T12:34:59.999Z",
      "analytics": {
        "min": 61,
        "max": 66,
        "events": 29,
        "entrances": 15,
        "exits": 14,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:35:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-09T12:35:00.000Z",
      "end": "2019-01-09T12:39:59.999Z",
      "analytics": {
        "min": 64,
        "max": 68,
        "events": 36,
        "entrances": 18,
        "exits": 18,
        "utilization": 21.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:40:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-09T12:40:00.000Z",
      "end": "2019-01-09T12:44:59.999Z",
      "analytics": {
        "min": 65,
        "max": 73,
        "events": 33,
        "entrances": 20,
        "exits": 13,
        "utilization": 22.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:45:00.000Z",
    "count": 72,
    "interval": {
      "start": "2019-01-09T12:45:00.000Z",
      "end": "2019-01-09T12:49:59.999Z",
      "analytics": {
        "min": 71,
        "max": 79,
        "events": 41,
        "entrances": 21,
        "exits": 20,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:50:00.000Z",
    "count": 73,
    "interval": {
      "start": "2019-01-09T12:50:00.000Z",
      "end": "2019-01-09T12:54:59.999Z",
      "analytics": {
        "min": 71,
        "max": 88,
        "events": 48,
        "entrances": 31,
        "exits": 17,
        "utilization": 27.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T12:55:00.000Z",
    "count": 87,
    "interval": {
      "start": "2019-01-09T12:55:00.000Z",
      "end": "2019-01-09T12:59:59.999Z",
      "analytics": {
        "min": 84,
        "max": 93,
        "events": 45,
        "entrances": 24,
        "exits": 21,
        "utilization": 29.06
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:00:00.000Z",
    "count": 90,
    "interval": {
      "start": "2019-01-09T13:00:00.000Z",
      "end": "2019-01-09T13:04:59.999Z",
      "analytics": {
        "min": 89,
        "max": 97,
        "events": 42,
        "entrances": 22,
        "exits": 20,
        "utilization": 30.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:05:00.000Z",
    "count": 92,
    "interval": {
      "start": "2019-01-09T13:05:00.000Z",
      "end": "2019-01-09T13:09:59.999Z",
      "analytics": {
        "min": 83,
        "max": 92,
        "events": 40,
        "entrances": 17,
        "exits": 23,
        "utilization": 28.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:10:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-09T13:10:00.000Z",
      "end": "2019-01-09T13:14:59.999Z",
      "analytics": {
        "min": 78,
        "max": 92,
        "events": 69,
        "entrances": 32,
        "exits": 37,
        "utilization": 28.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:15:00.000Z",
    "count": 81,
    "interval": {
      "start": "2019-01-09T13:15:00.000Z",
      "end": "2019-01-09T13:19:59.999Z",
      "analytics": {
        "min": 70,
        "max": 83,
        "events": 59,
        "entrances": 27,
        "exits": 32,
        "utilization": 25.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:20:00.000Z",
    "count": 76,
    "interval": {
      "start": "2019-01-09T13:20:00.000Z",
      "end": "2019-01-09T13:24:59.999Z",
      "analytics": {
        "min": 72,
        "max": 86,
        "events": 57,
        "entrances": 33,
        "exits": 24,
        "utilization": 26.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:25:00.000Z",
    "count": 85,
    "interval": {
      "start": "2019-01-09T13:25:00.000Z",
      "end": "2019-01-09T13:29:59.999Z",
      "analytics": {
        "min": 85,
        "max": 115,
        "events": 80,
        "entrances": 54,
        "exits": 26,
        "utilization": 35.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:30:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-09T13:30:00.000Z",
      "end": "2019-01-09T13:34:59.999Z",
      "analytics": {
        "min": 106,
        "max": 121,
        "events": 80,
        "entrances": 40,
        "exits": 40,
        "utilization": 37.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:35:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-09T13:35:00.000Z",
      "end": "2019-01-09T13:39:59.999Z",
      "analytics": {
        "min": 108,
        "max": 120,
        "events": 63,
        "entrances": 35,
        "exits": 28,
        "utilization": 37.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:40:00.000Z",
    "count": 120,
    "interval": {
      "start": "2019-01-09T13:40:00.000Z",
      "end": "2019-01-09T13:44:59.999Z",
      "analytics": {
        "min": 112,
        "max": 133,
        "events": 65,
        "entrances": 39,
        "exits": 26,
        "utilization": 41.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:45:00.000Z",
    "count": 133,
    "interval": {
      "start": "2019-01-09T13:45:00.000Z",
      "end": "2019-01-09T13:49:59.999Z",
      "analytics": {
        "min": 130,
        "max": 140,
        "events": 77,
        "entrances": 41,
        "exits": 36,
        "utilization": 43.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:50:00.000Z",
    "count": 138,
    "interval": {
      "start": "2019-01-09T13:50:00.000Z",
      "end": "2019-01-09T13:54:59.999Z",
      "analytics": {
        "min": 132,
        "max": 142,
        "events": 78,
        "entrances": 38,
        "exits": 40,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-09T13:55:00.000Z",
    "count": 136,
    "interval": {
      "start": "2019-01-09T13:55:00.000Z",
      "end": "2019-01-09T13:59:59.999Z",
      "analytics": {
        "min": 133,
        "max": 148,
        "events": 81,
        "entrances": 44,
        "exits": 37,
        "utilization": 46.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:00:00.000Z",
    "count": 143,
    "interval": {
      "start": "2019-01-09T14:00:00.000Z",
      "end": "2019-01-09T14:04:59.999Z",
      "analytics": {
        "min": 140,
        "max": 152,
        "events": 86,
        "entrances": 44,
        "exits": 42,
        "utilization": 47.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:05:00.000Z",
    "count": 145,
    "interval": {
      "start": "2019-01-09T14:05:00.000Z",
      "end": "2019-01-09T14:09:59.999Z",
      "analytics": {
        "min": 135,
        "max": 150,
        "events": 78,
        "entrances": 41,
        "exits": 37,
        "utilization": 46.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:10:00.000Z",
    "count": 149,
    "interval": {
      "start": "2019-01-09T14:10:00.000Z",
      "end": "2019-01-09T14:14:59.999Z",
      "analytics": {
        "min": 142,
        "max": 151,
        "events": 100,
        "entrances": 50,
        "exits": 50,
        "utilization": 47.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:15:00.000Z",
    "count": 149,
    "interval": {
      "start": "2019-01-09T14:15:00.000Z",
      "end": "2019-01-09T14:19:59.999Z",
      "analytics": {
        "min": 138,
        "max": 153,
        "events": 73,
        "entrances": 31,
        "exits": 42,
        "utilization": 47.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:20:00.000Z",
    "count": 138,
    "interval": {
      "start": "2019-01-09T14:20:00.000Z",
      "end": "2019-01-09T14:24:59.999Z",
      "analytics": {
        "min": 137,
        "max": 146,
        "events": 83,
        "entrances": 43,
        "exits": 40,
        "utilization": 45.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:25:00.000Z",
    "count": 141,
    "interval": {
      "start": "2019-01-09T14:25:00.000Z",
      "end": "2019-01-09T14:29:59.999Z",
      "analytics": {
        "min": 133,
        "max": 142,
        "events": 68,
        "entrances": 30,
        "exits": 38,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:30:00.000Z",
    "count": 133,
    "interval": {
      "start": "2019-01-09T14:30:00.000Z",
      "end": "2019-01-09T14:34:59.999Z",
      "analytics": {
        "min": 126,
        "max": 139,
        "events": 73,
        "entrances": 33,
        "exits": 40,
        "utilization": 43.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:35:00.000Z",
    "count": 126,
    "interval": {
      "start": "2019-01-09T14:35:00.000Z",
      "end": "2019-01-09T14:39:59.999Z",
      "analytics": {
        "min": 118,
        "max": 130,
        "events": 48,
        "entrances": 20,
        "exits": 28,
        "utilization": 40.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:40:00.000Z",
    "count": 118,
    "interval": {
      "start": "2019-01-09T14:40:00.000Z",
      "end": "2019-01-09T14:44:59.999Z",
      "analytics": {
        "min": 102,
        "max": 118,
        "events": 35,
        "entrances": 10,
        "exits": 25,
        "utilization": 36.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:45:00.000Z",
    "count": 103,
    "interval": {
      "start": "2019-01-09T14:45:00.000Z",
      "end": "2019-01-09T14:49:59.999Z",
      "analytics": {
        "min": 88,
        "max": 108,
        "events": 43,
        "entrances": 14,
        "exits": 29,
        "utilization": 33.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:50:00.000Z",
    "count": 88,
    "interval": {
      "start": "2019-01-09T14:50:00.000Z",
      "end": "2019-01-09T14:54:59.999Z",
      "analytics": {
        "min": 74,
        "max": 88,
        "events": 26,
        "entrances": 6,
        "exits": 20,
        "utilization": 27.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T14:55:00.000Z",
    "count": 74,
    "interval": {
      "start": "2019-01-09T14:55:00.000Z",
      "end": "2019-01-09T14:59:59.999Z",
      "analytics": {
        "min": 62,
        "max": 75,
        "events": 25,
        "entrances": 7,
        "exits": 18,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:00:00.000Z",
    "count": 63,
    "interval": {
      "start": "2019-01-09T15:00:00.000Z",
      "end": "2019-01-09T15:04:59.999Z",
      "analytics": {
        "min": 59,
        "max": 63,
        "events": 13,
        "entrances": 5,
        "exits": 8,
        "utilization": 19.69
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:05:00.000Z",
    "count": 60,
    "interval": {
      "start": "2019-01-09T15:05:00.000Z",
      "end": "2019-01-09T15:09:59.999Z",
      "analytics": {
        "min": 58,
        "max": 61,
        "events": 20,
        "entrances": 10,
        "exits": 10,
        "utilization": 19.06
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:10:00.000Z",
    "count": 60,
    "interval": {
      "start": "2019-01-09T15:10:00.000Z",
      "end": "2019-01-09T15:14:59.999Z",
      "analytics": {
        "min": 57,
        "max": 62,
        "events": 13,
        "entrances": 5,
        "exits": 8,
        "utilization": 19.38
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:15:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-09T15:15:00.000Z",
      "end": "2019-01-09T15:19:59.999Z",
      "analytics": {
        "min": 54,
        "max": 58,
        "events": 19,
        "entrances": 8,
        "exits": 11,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:20:00.000Z",
    "count": 54,
    "interval": {
      "start": "2019-01-09T15:20:00.000Z",
      "end": "2019-01-09T15:24:59.999Z",
      "analytics": {
        "min": 49,
        "max": 54,
        "events": 16,
        "entrances": 7,
        "exits": 9,
        "utilization": 16.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:25:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-09T15:25:00.000Z",
      "end": "2019-01-09T15:29:59.999Z",
      "analytics": {
        "min": 51,
        "max": 59,
        "events": 21,
        "entrances": 12,
        "exits": 9,
        "utilization": 18.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:30:00.000Z",
    "count": 55,
    "interval": {
      "start": "2019-01-09T15:30:00.000Z",
      "end": "2019-01-09T15:34:59.999Z",
      "analytics": {
        "min": 54,
        "max": 58,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:35:00.000Z",
    "count": 58,
    "interval": {
      "start": "2019-01-09T15:35:00.000Z",
      "end": "2019-01-09T15:39:59.999Z",
      "analytics": {
        "min": 53,
        "max": 58,
        "events": 9,
        "entrances": 2,
        "exits": 7,
        "utilization": 17.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:40:00.000Z",
    "count": 53,
    "interval": {
      "start": "2019-01-09T15:40:00.000Z",
      "end": "2019-01-09T15:44:59.999Z",
      "analytics": {
        "min": 49,
        "max": 53,
        "events": 9,
        "entrances": 3,
        "exits": 6,
        "utilization": 16.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:45:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-09T15:45:00.000Z",
      "end": "2019-01-09T15:49:59.999Z",
      "analytics": {
        "min": 47,
        "max": 51,
        "events": 18,
        "entrances": 9,
        "exits": 9,
        "utilization": 15.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:50:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-09T15:50:00.000Z",
      "end": "2019-01-09T15:54:59.999Z",
      "analytics": {
        "min": 43,
        "max": 51,
        "events": 29,
        "entrances": 15,
        "exits": 14,
        "utilization": 15.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T15:55:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-09T15:55:00.000Z",
      "end": "2019-01-09T15:59:59.999Z",
      "analytics": {
        "min": 49,
        "max": 59,
        "events": 27,
        "entrances": 17,
        "exits": 10,
        "utilization": 18.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:00:00.000Z",
    "count": 58,
    "interval": {
      "start": "2019-01-09T16:00:00.000Z",
      "end": "2019-01-09T16:04:59.999Z",
      "analytics": {
        "min": 58,
        "max": 67,
        "events": 24,
        "entrances": 16,
        "exits": 8,
        "utilization": 20.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:05:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-09T16:05:00.000Z",
      "end": "2019-01-09T16:09:59.999Z",
      "analytics": {
        "min": 66,
        "max": 79,
        "events": 36,
        "entrances": 22,
        "exits": 14,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:10:00.000Z",
    "count": 74,
    "interval": {
      "start": "2019-01-09T16:10:00.000Z",
      "end": "2019-01-09T16:14:59.999Z",
      "analytics": {
        "min": 72,
        "max": 85,
        "events": 31,
        "entrances": 21,
        "exits": 10,
        "utilization": 26.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:15:00.000Z",
    "count": 85,
    "interval": {
      "start": "2019-01-09T16:15:00.000Z",
      "end": "2019-01-09T16:19:59.999Z",
      "analytics": {
        "min": 80,
        "max": 91,
        "events": 40,
        "entrances": 22,
        "exits": 18,
        "utilization": 28.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:20:00.000Z",
    "count": 89,
    "interval": {
      "start": "2019-01-09T16:20:00.000Z",
      "end": "2019-01-09T16:24:59.999Z",
      "analytics": {
        "min": 89,
        "max": 114,
        "events": 67,
        "entrances": 46,
        "exits": 21,
        "utilization": 35.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:25:00.000Z",
    "count": 114,
    "interval": {
      "start": "2019-01-09T16:25:00.000Z",
      "end": "2019-01-09T16:29:59.999Z",
      "analytics": {
        "min": 114,
        "max": 129,
        "events": 65,
        "entrances": 38,
        "exits": 27,
        "utilization": 40.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:30:00.000Z",
    "count": 125,
    "interval": {
      "start": "2019-01-09T16:30:00.000Z",
      "end": "2019-01-09T16:34:59.999Z",
      "analytics": {
        "min": 121,
        "max": 134,
        "events": 57,
        "entrances": 33,
        "exits": 24,
        "utilization": 41.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:35:00.000Z",
    "count": 134,
    "interval": {
      "start": "2019-01-09T16:35:00.000Z",
      "end": "2019-01-09T16:39:59.999Z",
      "analytics": {
        "min": 134,
        "max": 145,
        "events": 74,
        "entrances": 40,
        "exits": 34,
        "utilization": 45.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:40:00.000Z",
    "count": 140,
    "interval": {
      "start": "2019-01-09T16:40:00.000Z",
      "end": "2019-01-09T16:44:59.999Z",
      "analytics": {
        "min": 140,
        "max": 163,
        "events": 75,
        "entrances": 49,
        "exits": 26,
        "utilization": 50.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:45:00.000Z",
    "count": 163,
    "interval": {
      "start": "2019-01-09T16:45:00.000Z",
      "end": "2019-01-09T16:49:59.999Z",
      "analytics": {
        "min": 163,
        "max": 192,
        "events": 97,
        "entrances": 62,
        "exits": 35,
        "utilization": 60.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:50:00.000Z",
    "count": 190,
    "interval": {
      "start": "2019-01-09T16:50:00.000Z",
      "end": "2019-01-09T16:54:59.999Z",
      "analytics": {
        "min": 184,
        "max": 192,
        "events": 83,
        "entrances": 40,
        "exits": 43,
        "utilization": 60.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T16:55:00.000Z",
    "count": 187,
    "interval": {
      "start": "2019-01-09T16:55:00.000Z",
      "end": "2019-01-09T16:59:59.999Z",
      "analytics": {
        "min": 184,
        "max": 210,
        "events": 104,
        "entrances": 63,
        "exits": 41,
        "utilization": 65.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:00:00.000Z",
    "count": 209,
    "interval": {
      "start": "2019-01-09T17:00:00.000Z",
      "end": "2019-01-09T17:04:59.999Z",
      "analytics": {
        "min": 208,
        "max": 243,
        "events": 128,
        "entrances": 81,
        "exits": 47,
        "utilization": 75.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:05:00.000Z",
    "count": 243,
    "interval": {
      "start": "2019-01-09T17:05:00.000Z",
      "end": "2019-01-09T17:09:59.999Z",
      "analytics": {
        "min": 241,
        "max": 263,
        "events": 107,
        "entrances": 60,
        "exits": 47,
        "utilization": 82.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:10:00.000Z",
    "count": 256,
    "interval": {
      "start": "2019-01-09T17:10:00.000Z",
      "end": "2019-01-09T17:14:59.999Z",
      "analytics": {
        "min": 254,
        "max": 266,
        "events": 131,
        "entrances": 65,
        "exits": 66,
        "utilization": 83.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:15:00.000Z",
    "count": 255,
    "interval": {
      "start": "2019-01-09T17:15:00.000Z",
      "end": "2019-01-09T17:19:59.999Z",
      "analytics": {
        "min": 253,
        "max": 265,
        "events": 118,
        "entrances": 64,
        "exits": 54,
        "utilization": 82.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:20:00.000Z",
    "count": 265,
    "interval": {
      "start": "2019-01-09T17:20:00.000Z",
      "end": "2019-01-09T17:24:59.999Z",
      "analytics": {
        "min": 260,
        "max": 278,
        "events": 105,
        "entrances": 56,
        "exits": 49,
        "utilization": 86.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:25:00.000Z",
    "count": 272,
    "interval": {
      "start": "2019-01-09T17:25:00.000Z",
      "end": "2019-01-09T17:29:59.999Z",
      "analytics": {
        "min": 272,
        "max": 295,
        "events": 112,
        "entrances": 62,
        "exits": 50,
        "utilization": 92.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:30:00.000Z",
    "count": 284,
    "interval": {
      "start": "2019-01-09T17:30:00.000Z",
      "end": "2019-01-09T17:34:59.999Z",
      "analytics": {
        "min": 282,
        "max": 294,
        "events": 100,
        "entrances": 51,
        "exits": 49,
        "utilization": 91.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:35:00.000Z",
    "count": 286,
    "interval": {
      "start": "2019-01-09T17:35:00.000Z",
      "end": "2019-01-09T17:39:59.999Z",
      "analytics": {
        "min": 276,
        "max": 295,
        "events": 120,
        "entrances": 55,
        "exits": 65,
        "utilization": 92.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:40:00.000Z",
    "count": 276,
    "interval": {
      "start": "2019-01-09T17:40:00.000Z",
      "end": "2019-01-09T17:44:59.999Z",
      "analytics": {
        "min": 253,
        "max": 277,
        "events": 97,
        "entrances": 38,
        "exits": 59,
        "utilization": 86.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:45:00.000Z",
    "count": 255,
    "interval": {
      "start": "2019-01-09T17:45:00.000Z",
      "end": "2019-01-09T17:49:59.999Z",
      "analytics": {
        "min": 224,
        "max": 256,
        "events": 119,
        "entrances": 45,
        "exits": 74,
        "utilization": 80.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:50:00.000Z",
    "count": 226,
    "interval": {
      "start": "2019-01-09T17:50:00.000Z",
      "end": "2019-01-09T17:54:59.999Z",
      "analytics": {
        "min": 201,
        "max": 228,
        "events": 113,
        "entrances": 46,
        "exits": 67,
        "utilization": 71.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T17:55:00.000Z",
    "count": 205,
    "interval": {
      "start": "2019-01-09T17:55:00.000Z",
      "end": "2019-01-09T17:59:59.999Z",
      "analytics": {
        "min": 193,
        "max": 207,
        "events": 111,
        "entrances": 50,
        "exits": 61,
        "utilization": 64.69
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:00:00.000Z",
    "count": 194,
    "interval": {
      "start": "2019-01-09T18:00:00.000Z",
      "end": "2019-01-09T18:04:59.999Z",
      "analytics": {
        "min": 182,
        "max": 195,
        "events": 102,
        "entrances": 49,
        "exits": 53,
        "utilization": 60.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:05:00.000Z",
    "count": 190,
    "interval": {
      "start": "2019-01-09T18:05:00.000Z",
      "end": "2019-01-09T18:09:59.999Z",
      "analytics": {
        "min": 157,
        "max": 190,
        "events": 105,
        "entrances": 38,
        "exits": 67,
        "utilization": 59.06
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:10:00.000Z",
    "count": 161,
    "interval": {
      "start": "2019-01-09T18:10:00.000Z",
      "end": "2019-01-09T18:14:59.999Z",
      "analytics": {
        "min": 152,
        "max": 163,
        "events": 95,
        "entrances": 47,
        "exits": 48,
        "utilization": 50.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:15:00.000Z",
    "count": 160,
    "interval": {
      "start": "2019-01-09T18:15:00.000Z",
      "end": "2019-01-09T18:19:59.999Z",
      "analytics": {
        "min": 157,
        "max": 164,
        "events": 82,
        "entrances": 40,
        "exits": 42,
        "utilization": 51.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:20:00.000Z",
    "count": 158,
    "interval": {
      "start": "2019-01-09T18:20:00.000Z",
      "end": "2019-01-09T18:24:59.999Z",
      "analytics": {
        "min": 133,
        "max": 161,
        "events": 72,
        "entrances": 24,
        "exits": 48,
        "utilization": 50.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:25:00.000Z",
    "count": 134,
    "interval": {
      "start": "2019-01-09T18:25:00.000Z",
      "end": "2019-01-09T18:29:59.999Z",
      "analytics": {
        "min": 114,
        "max": 136,
        "events": 88,
        "entrances": 37,
        "exits": 51,
        "utilization": 42.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:30:00.000Z",
    "count": 120,
    "interval": {
      "start": "2019-01-09T18:30:00.000Z",
      "end": "2019-01-09T18:34:59.999Z",
      "analytics": {
        "min": 108,
        "max": 123,
        "events": 64,
        "entrances": 26,
        "exits": 38,
        "utilization": 38.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:35:00.000Z",
    "count": 108,
    "interval": {
      "start": "2019-01-09T18:35:00.000Z",
      "end": "2019-01-09T18:39:59.999Z",
      "analytics": {
        "min": 84,
        "max": 108,
        "events": 72,
        "entrances": 25,
        "exits": 47,
        "utilization": 33.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:40:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-09T18:40:00.000Z",
      "end": "2019-01-09T18:44:59.999Z",
      "analytics": {
        "min": 74,
        "max": 87,
        "events": 78,
        "entrances": 36,
        "exits": 42,
        "utilization": 27.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:45:00.000Z",
    "count": 80,
    "interval": {
      "start": "2019-01-09T18:45:00.000Z",
      "end": "2019-01-09T18:49:59.999Z",
      "analytics": {
        "min": 71,
        "max": 81,
        "events": 73,
        "entrances": 33,
        "exits": 40,
        "utilization": 25.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:50:00.000Z",
    "count": 73,
    "interval": {
      "start": "2019-01-09T18:50:00.000Z",
      "end": "2019-01-09T18:54:59.999Z",
      "analytics": {
        "min": 52,
        "max": 73,
        "events": 53,
        "entrances": 16,
        "exits": 37,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T18:55:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-09T18:55:00.000Z",
      "end": "2019-01-09T18:59:59.999Z",
      "analytics": {
        "min": 49,
        "max": 54,
        "events": 44,
        "entrances": 21,
        "exits": 23,
        "utilization": 16.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:00:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-09T19:00:00.000Z",
      "end": "2019-01-09T19:04:59.999Z",
      "analytics": {
        "min": 29,
        "max": 50,
        "events": 49,
        "entrances": 14,
        "exits": 35,
        "utilization": 15.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:05:00.000Z",
    "count": 29,
    "interval": {
      "start": "2019-01-09T19:05:00.000Z",
      "end": "2019-01-09T19:09:59.999Z",
      "analytics": {
        "min": 19,
        "max": 30,
        "events": 30,
        "entrances": 12,
        "exits": 18,
        "utilization": 9.38
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:10:00.000Z",
    "count": 23,
    "interval": {
      "start": "2019-01-09T19:10:00.000Z",
      "end": "2019-01-09T19:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 27,
        "events": 45,
        "entrances": 15,
        "exits": 30,
        "utilization": 8.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:15:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T19:15:00.000Z",
      "end": "2019-01-09T19:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 34,
        "entrances": 10,
        "exits": 24,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T19:20:00.000Z",
      "end": "2019-01-09T19:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 11,
        "events": 34,
        "entrances": 18,
        "exits": 16,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:25:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-09T19:25:00.000Z",
      "end": "2019-01-09T19:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 11,
        "events": 41,
        "entrances": 16,
        "exits": 25,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T19:30:00.000Z",
      "end": "2019-01-09T19:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 9,
        "events": 34,
        "entrances": 16,
        "exits": 18,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T19:35:00.000Z",
      "end": "2019-01-09T19:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 35,
        "entrances": 16,
        "exits": 19,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T19:40:00.000Z",
      "end": "2019-01-09T19:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 43,
        "entrances": 17,
        "exits": 26,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T19:45:00.000Z",
      "end": "2019-01-09T19:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 39,
        "entrances": 13,
        "exits": 26,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T19:50:00.000Z",
      "end": "2019-01-09T19:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 28,
        "entrances": 13,
        "exits": 15,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T19:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T19:55:00.000Z",
      "end": "2019-01-09T19:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 22,
        "entrances": 9,
        "exits": 13,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T20:00:00.000Z",
      "end": "2019-01-09T20:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 12,
        "events": 26,
        "entrances": 17,
        "exits": 9,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:05:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-09T20:05:00.000Z",
      "end": "2019-01-09T20:09:59.999Z",
      "analytics": {
        "min": 8,
        "max": 17,
        "events": 28,
        "entrances": 16,
        "exits": 12,
        "utilization": 5.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:10:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-09T20:10:00.000Z",
      "end": "2019-01-09T20:14:59.999Z",
      "analytics": {
        "min": 15,
        "max": 21,
        "events": 14,
        "entrances": 10,
        "exits": 4,
        "utilization": 6.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:15:00.000Z",
    "count": 21,
    "interval": {
      "start": "2019-01-09T20:15:00.000Z",
      "end": "2019-01-09T20:19:59.999Z",
      "analytics": {
        "min": 12,
        "max": 22,
        "events": 32,
        "entrances": 13,
        "exits": 19,
        "utilization": 6.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:20:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-09T20:20:00.000Z",
      "end": "2019-01-09T20:24:59.999Z",
      "analytics": {
        "min": 15,
        "max": 20,
        "events": 19,
        "entrances": 10,
        "exits": 9,
        "utilization": 6.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:25:00.000Z",
    "count": 16,
    "interval": {
      "start": "2019-01-09T20:25:00.000Z",
      "end": "2019-01-09T20:29:59.999Z",
      "analytics": {
        "min": 4,
        "max": 16,
        "events": 29,
        "entrances": 9,
        "exits": 20,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T20:30:00.000Z",
      "end": "2019-01-09T20:34:59.999Z",
      "analytics": {
        "min": 3,
        "max": 7,
        "events": 24,
        "entrances": 11,
        "exits": 13,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T20:35:00.000Z",
      "end": "2019-01-09T20:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 29,
        "entrances": 9,
        "exits": 20,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T20:40:00.000Z",
      "end": "2019-01-09T20:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 25,
        "entrances": 10,
        "exits": 15,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T20:45:00.000Z",
      "end": "2019-01-09T20:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 11,
        "entrances": 5,
        "exits": 6,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T20:50:00.000Z",
      "end": "2019-01-09T20:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 31,
        "entrances": 16,
        "exits": 15,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T20:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T20:55:00.000Z",
      "end": "2019-01-09T20:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 21,
        "entrances": 9,
        "exits": 12,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T21:00:00.000Z",
      "end": "2019-01-09T21:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 19,
        "entrances": 10,
        "exits": 9,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T21:05:00.000Z",
      "end": "2019-01-09T21:09:59.999Z",
      "analytics": {
        "min": 4,
        "max": 10,
        "events": 21,
        "entrances": 13,
        "exits": 8,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-09T21:10:00.000Z",
      "end": "2019-01-09T21:14:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 12,
        "entrances": 6,
        "exits": 6,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-09T21:15:00.000Z",
      "end": "2019-01-09T21:19:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 15,
        "entrances": 9,
        "exits": 6,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:20:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-09T21:20:00.000Z",
      "end": "2019-01-09T21:24:59.999Z",
      "analytics": {
        "min": 7,
        "max": 13,
        "events": 24,
        "entrances": 10,
        "exits": 14,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:25:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-09T21:25:00.000Z",
      "end": "2019-01-09T21:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 8,
        "events": 23,
        "entrances": 10,
        "exits": 13,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T21:30:00.000Z",
      "end": "2019-01-09T21:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 13,
        "entrances": 3,
        "exits": 10,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T21:35:00.000Z",
      "end": "2019-01-09T21:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 10,
        "entrances": 4,
        "exits": 6,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T21:40:00.000Z",
      "end": "2019-01-09T21:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 11,
        "entrances": 7,
        "exits": 4,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T21:45:00.000Z",
      "end": "2019-01-09T21:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 15,
        "entrances": 7,
        "exits": 8,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T21:50:00.000Z",
      "end": "2019-01-09T21:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 10,
        "entrances": 2,
        "exits": 8,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T21:55:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T21:55:00.000Z",
      "end": "2019-01-09T21:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 12,
        "entrances": 9,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:00:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T22:00:00.000Z",
      "end": "2019-01-09T22:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 7,
        "events": 8,
        "entrances": 2,
        "exits": 6,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:05:00.000Z",
      "end": "2019-01-09T22:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:10:00.000Z",
      "end": "2019-01-09T22:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:15:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-09T22:15:00.000Z",
      "end": "2019-01-09T22:19:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T22:20:00.000Z",
      "end": "2019-01-09T22:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 9,
        "entrances": 3,
        "exits": 6,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T22:25:00.000Z",
      "end": "2019-01-09T22:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:30:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-09T22:30:00.000Z",
      "end": "2019-01-09T22:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:35:00.000Z",
      "end": "2019-01-09T22:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:40:00.000Z",
      "end": "2019-01-09T22:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:45:00.000Z",
      "end": "2019-01-09T22:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T22:50:00.000Z",
      "end": "2019-01-09T22:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T22:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T22:55:00.000Z",
      "end": "2019-01-09T22:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T23:00:00.000Z",
      "end": "2019-01-09T23:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T23:05:00.000Z",
      "end": "2019-01-09T23:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T23:10:00.000Z",
      "end": "2019-01-09T23:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T23:15:00.000Z",
      "end": "2019-01-09T23:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T23:20:00.000Z",
      "end": "2019-01-09T23:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T23:25:00.000Z",
      "end": "2019-01-09T23:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-09T23:30:00.000Z",
      "end": "2019-01-09T23:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-09T23:35:00.000Z",
      "end": "2019-01-09T23:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-09T23:40:00.000Z",
      "end": "2019-01-09T23:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-09T23:45:00.000Z",
      "end": "2019-01-09T23:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 5,
        "entrances": 4,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T23:50:00.000Z",
      "end": "2019-01-09T23:54:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-09T23:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-09T23:55:00.000Z",
      "end": "2019-01-09T23:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:00:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T00:00:00.000Z",
      "end": "2019-01-10T00:04:59.999Z",
      "analytics": {
        "min": 8,
        "max": 11,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-10T00:05:00.000Z",
      "end": "2019-01-10T00:09:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-10T00:10:00.000Z",
      "end": "2019-01-10T00:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T00:15:00.000Z",
      "end": "2019-01-10T00:19:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T00:20:00.000Z",
      "end": "2019-01-10T00:24:59.999Z",
      "analytics": {
        "min": 4,
        "max": 7,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T00:25:00.000Z",
      "end": "2019-01-10T00:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T00:30:00.000Z",
      "end": "2019-01-10T00:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:35:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T00:35:00.000Z",
      "end": "2019-01-10T00:39:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T00:40:00.000Z",
      "end": "2019-01-10T00:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T00:45:00.000Z",
      "end": "2019-01-10T00:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T00:50:00.000Z",
      "end": "2019-01-10T00:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T00:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T00:55:00.000Z",
      "end": "2019-01-10T00:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T01:00:00.000Z",
      "end": "2019-01-10T01:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T01:05:00.000Z",
      "end": "2019-01-10T01:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T01:10:00.000Z",
      "end": "2019-01-10T01:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T01:15:00.000Z",
      "end": "2019-01-10T01:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T01:20:00.000Z",
      "end": "2019-01-10T01:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T01:25:00.000Z",
      "end": "2019-01-10T01:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T01:30:00.000Z",
      "end": "2019-01-10T01:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T01:35:00.000Z",
      "end": "2019-01-10T01:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T01:40:00.000Z",
      "end": "2019-01-10T01:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T01:45:00.000Z",
      "end": "2019-01-10T01:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T01:50:00.000Z",
      "end": "2019-01-10T01:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T01:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T01:55:00.000Z",
      "end": "2019-01-10T01:59:59.999Z",
      "analytics": {
        "min": 4,
        "max": 4,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T02:00:00.000Z",
      "end": "2019-01-10T02:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T02:05:00.000Z",
      "end": "2019-01-10T02:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T02:10:00.000Z",
      "end": "2019-01-10T02:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T02:15:00.000Z",
      "end": "2019-01-10T02:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 5,
        "entrances": 1,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T02:20:00.000Z",
      "end": "2019-01-10T02:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T02:25:00.000Z",
      "end": "2019-01-10T02:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T02:30:00.000Z",
      "end": "2019-01-10T02:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T02:35:00.000Z",
      "end": "2019-01-10T02:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T02:40:00.000Z",
      "end": "2019-01-10T02:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T02:45:00.000Z",
      "end": "2019-01-10T02:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 5,
        "entrances": 0,
        "exits": 5,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:50:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T02:50:00.000Z",
      "end": "2019-01-10T02:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T02:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T02:55:00.000Z",
      "end": "2019-01-10T02:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T03:00:00.000Z",
      "end": "2019-01-10T03:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T03:05:00.000Z",
      "end": "2019-01-10T03:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T03:10:00.000Z",
      "end": "2019-01-10T03:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T03:15:00.000Z",
      "end": "2019-01-10T03:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T03:20:00.000Z",
      "end": "2019-01-10T03:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T03:25:00.000Z",
      "end": "2019-01-10T03:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T03:30:00.000Z",
      "end": "2019-01-10T03:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 9,
        "entrances": 5,
        "exits": 4,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:35:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T03:35:00.000Z",
      "end": "2019-01-10T03:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 8,
        "events": 8,
        "entrances": 6,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:40:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T03:40:00.000Z",
      "end": "2019-01-10T03:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:45:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T03:45:00.000Z",
      "end": "2019-01-10T03:49:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T03:50:00.000Z",
      "end": "2019-01-10T03:54:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 10,
        "entrances": 5,
        "exits": 5,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T03:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T03:55:00.000Z",
      "end": "2019-01-10T03:59:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:00:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T04:00:00.000Z",
      "end": "2019-01-10T04:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-10T04:05:00.000Z",
      "end": "2019-01-10T04:09:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T04:10:00.000Z",
      "end": "2019-01-10T04:14:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:15:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:15:00.000Z",
      "end": "2019-01-10T04:19:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:20:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:20:00.000Z",
      "end": "2019-01-10T04:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:25:00.000Z",
      "end": "2019-01-10T04:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:30:00.000Z",
      "end": "2019-01-10T04:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:35:00.000Z",
      "end": "2019-01-10T04:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:40:00.000Z",
      "end": "2019-01-10T04:44:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:45:00.000Z",
      "end": "2019-01-10T04:49:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:50:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T04:50:00.000Z",
      "end": "2019-01-10T04:54:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T04:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T04:55:00.000Z",
      "end": "2019-01-10T04:59:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:00:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T05:00:00.000Z",
      "end": "2019-01-10T05:04:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:05:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:05:00.000Z",
      "end": "2019-01-10T05:09:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:10:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:10:00.000Z",
      "end": "2019-01-10T05:14:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T05:15:00.000Z",
      "end": "2019-01-10T05:19:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:20:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:20:00.000Z",
      "end": "2019-01-10T05:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:25:00.000Z",
      "end": "2019-01-10T05:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:30:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:30:00.000Z",
      "end": "2019-01-10T05:34:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:35:00.000Z",
      "end": "2019-01-10T05:39:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:40:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:40:00.000Z",
      "end": "2019-01-10T05:44:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:45:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:45:00.000Z",
      "end": "2019-01-10T05:49:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:50:00.000Z",
      "end": "2019-01-10T05:54:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T05:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T05:55:00.000Z",
      "end": "2019-01-10T05:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:00:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T06:00:00.000Z",
      "end": "2019-01-10T06:04:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:05:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T06:05:00.000Z",
      "end": "2019-01-10T06:09:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:10:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T06:10:00.000Z",
      "end": "2019-01-10T06:14:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:15:00.000Z",
      "end": "2019-01-10T06:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:20:00.000Z",
      "end": "2019-01-10T06:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:25:00.000Z",
      "end": "2019-01-10T06:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:30:00.000Z",
      "end": "2019-01-10T06:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:35:00.000Z",
      "end": "2019-01-10T06:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:40:00.000Z",
      "end": "2019-01-10T06:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:45:00.000Z",
      "end": "2019-01-10T06:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:50:00.000Z",
      "end": "2019-01-10T06:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T06:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T06:55:00.000Z",
      "end": "2019-01-10T06:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:00:00.000Z",
      "end": "2019-01-10T07:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:05:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:05:00.000Z",
      "end": "2019-01-10T07:09:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:10:00.000Z",
      "end": "2019-01-10T07:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:15:00.000Z",
      "end": "2019-01-10T07:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:20:00.000Z",
      "end": "2019-01-10T07:24:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:25:00.000Z",
      "end": "2019-01-10T07:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:30:00.000Z",
      "end": "2019-01-10T07:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:35:00.000Z",
      "end": "2019-01-10T07:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:40:00.000Z",
      "end": "2019-01-10T07:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:45:00.000Z",
      "end": "2019-01-10T07:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:50:00.000Z",
      "end": "2019-01-10T07:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T07:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T07:55:00.000Z",
      "end": "2019-01-10T07:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:00:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T08:00:00.000Z",
      "end": "2019-01-10T08:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:05:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T08:05:00.000Z",
      "end": "2019-01-10T08:09:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T08:10:00.000Z",
      "end": "2019-01-10T08:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:15:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T08:15:00.000Z",
      "end": "2019-01-10T08:19:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:20:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T08:20:00.000Z",
      "end": "2019-01-10T08:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 5,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T08:25:00.000Z",
      "end": "2019-01-10T08:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T08:30:00.000Z",
      "end": "2019-01-10T08:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T08:35:00.000Z",
      "end": "2019-01-10T08:39:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T08:40:00.000Z",
      "end": "2019-01-10T08:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T08:45:00.000Z",
      "end": "2019-01-10T08:49:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:50:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T08:50:00.000Z",
      "end": "2019-01-10T08:54:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T08:55:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T08:55:00.000Z",
      "end": "2019-01-10T08:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:00:00.000Z",
      "end": "2019-01-10T09:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:05:00.000Z",
      "end": "2019-01-10T09:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:10:00.000Z",
      "end": "2019-01-10T09:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:15:00.000Z",
      "end": "2019-01-10T09:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:20:00.000Z",
      "end": "2019-01-10T09:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:25:00.000Z",
      "end": "2019-01-10T09:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:30:00.000Z",
      "end": "2019-01-10T09:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T09:35:00.000Z",
      "end": "2019-01-10T09:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T09:40:00.000Z",
      "end": "2019-01-10T09:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T09:45:00.000Z",
      "end": "2019-01-10T09:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T09:50:00.000Z",
      "end": "2019-01-10T09:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T09:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T09:55:00.000Z",
      "end": "2019-01-10T09:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T10:00:00.000Z",
      "end": "2019-01-10T10:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T10:05:00.000Z",
      "end": "2019-01-10T10:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T10:10:00.000Z",
      "end": "2019-01-10T10:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T10:15:00.000Z",
      "end": "2019-01-10T10:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T10:20:00.000Z",
      "end": "2019-01-10T10:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T10:25:00.000Z",
      "end": "2019-01-10T10:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T10:30:00.000Z",
      "end": "2019-01-10T10:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T10:35:00.000Z",
      "end": "2019-01-10T10:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T10:40:00.000Z",
      "end": "2019-01-10T10:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:45:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-10T10:45:00.000Z",
      "end": "2019-01-10T10:49:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:50:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-10T10:50:00.000Z",
      "end": "2019-01-10T10:54:59.999Z",
      "analytics": {
        "min": 12,
        "max": 15,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T10:55:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-10T10:55:00.000Z",
      "end": "2019-01-10T10:59:59.999Z",
      "analytics": {
        "min": 14,
        "max": 16,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:00:00.000Z",
    "count": 16,
    "interval": {
      "start": "2019-01-10T11:00:00.000Z",
      "end": "2019-01-10T11:04:59.999Z",
      "analytics": {
        "min": 16,
        "max": 20,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 6.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:05:00.000Z",
    "count": 19,
    "interval": {
      "start": "2019-01-10T11:05:00.000Z",
      "end": "2019-01-10T11:09:59.999Z",
      "analytics": {
        "min": 19,
        "max": 22,
        "events": 5,
        "entrances": 4,
        "exits": 1,
        "utilization": 6.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:10:00.000Z",
    "count": 22,
    "interval": {
      "start": "2019-01-10T11:10:00.000Z",
      "end": "2019-01-10T11:14:59.999Z",
      "analytics": {
        "min": 21,
        "max": 25,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 7.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:15:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-10T11:15:00.000Z",
      "end": "2019-01-10T11:19:59.999Z",
      "analytics": {
        "min": 23,
        "max": 25,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 7.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:20:00.000Z",
    "count": 25,
    "interval": {
      "start": "2019-01-10T11:20:00.000Z",
      "end": "2019-01-10T11:24:59.999Z",
      "analytics": {
        "min": 23,
        "max": 28,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 8.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:25:00.000Z",
    "count": 28,
    "interval": {
      "start": "2019-01-10T11:25:00.000Z",
      "end": "2019-01-10T11:29:59.999Z",
      "analytics": {
        "min": 28,
        "max": 33,
        "events": 7,
        "entrances": 6,
        "exits": 1,
        "utilization": 10.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:30:00.000Z",
    "count": 33,
    "interval": {
      "start": "2019-01-10T11:30:00.000Z",
      "end": "2019-01-10T11:34:59.999Z",
      "analytics": {
        "min": 32,
        "max": 34,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 10.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:35:00.000Z",
    "count": 33,
    "interval": {
      "start": "2019-01-10T11:35:00.000Z",
      "end": "2019-01-10T11:39:59.999Z",
      "analytics": {
        "min": 33,
        "max": 36,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 11.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:40:00.000Z",
    "count": 35,
    "interval": {
      "start": "2019-01-10T11:40:00.000Z",
      "end": "2019-01-10T11:44:59.999Z",
      "analytics": {
        "min": 33,
        "max": 37,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 11.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:45:00.000Z",
    "count": 36,
    "interval": {
      "start": "2019-01-10T11:45:00.000Z",
      "end": "2019-01-10T11:49:59.999Z",
      "analytics": {
        "min": 36,
        "max": 40,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 12.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:50:00.000Z",
    "count": 40,
    "interval": {
      "start": "2019-01-10T11:50:00.000Z",
      "end": "2019-01-10T11:54:59.999Z",
      "analytics": {
        "min": 40,
        "max": 43,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 13.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T11:55:00.000Z",
    "count": 41,
    "interval": {
      "start": "2019-01-10T11:55:00.000Z",
      "end": "2019-01-10T11:59:59.999Z",
      "analytics": {
        "min": 39,
        "max": 41,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:00:00.000Z",
    "count": 40,
    "interval": {
      "start": "2019-01-10T12:00:00.000Z",
      "end": "2019-01-10T12:04:59.999Z",
      "analytics": {
        "min": 39,
        "max": 41,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:05:00.000Z",
    "count": 39,
    "interval": {
      "start": "2019-01-10T12:05:00.000Z",
      "end": "2019-01-10T12:09:59.999Z",
      "analytics": {
        "min": 39,
        "max": 47,
        "events": 12,
        "entrances": 10,
        "exits": 2,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:10:00.000Z",
    "count": 47,
    "interval": {
      "start": "2019-01-10T12:10:00.000Z",
      "end": "2019-01-10T12:14:59.999Z",
      "analytics": {
        "min": 43,
        "max": 49,
        "events": 23,
        "entrances": 12,
        "exits": 11,
        "utilization": 15.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:15:00.000Z",
    "count": 48,
    "interval": {
      "start": "2019-01-10T12:15:00.000Z",
      "end": "2019-01-10T12:19:59.999Z",
      "analytics": {
        "min": 46,
        "max": 55,
        "events": 26,
        "entrances": 14,
        "exits": 12,
        "utilization": 17.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:20:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-10T12:20:00.000Z",
      "end": "2019-01-10T12:24:59.999Z",
      "analytics": {
        "min": 49,
        "max": 58,
        "events": 25,
        "entrances": 14,
        "exits": 11,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:25:00.000Z",
    "count": 53,
    "interval": {
      "start": "2019-01-10T12:25:00.000Z",
      "end": "2019-01-10T12:29:59.999Z",
      "analytics": {
        "min": 51,
        "max": 59,
        "events": 22,
        "entrances": 14,
        "exits": 8,
        "utilization": 18.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:30:00.000Z",
    "count": 59,
    "interval": {
      "start": "2019-01-10T12:30:00.000Z",
      "end": "2019-01-10T12:34:59.999Z",
      "analytics": {
        "min": 58,
        "max": 65,
        "events": 27,
        "entrances": 13,
        "exits": 14,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:35:00.000Z",
    "count": 58,
    "interval": {
      "start": "2019-01-10T12:35:00.000Z",
      "end": "2019-01-10T12:39:59.999Z",
      "analytics": {
        "min": 58,
        "max": 71,
        "events": 27,
        "entrances": 20,
        "exits": 7,
        "utilization": 22.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:40:00.000Z",
    "count": 71,
    "interval": {
      "start": "2019-01-10T12:40:00.000Z",
      "end": "2019-01-10T12:44:59.999Z",
      "analytics": {
        "min": 65,
        "max": 72,
        "events": 33,
        "entrances": 14,
        "exits": 19,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:45:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-10T12:45:00.000Z",
      "end": "2019-01-10T12:49:59.999Z",
      "analytics": {
        "min": 62,
        "max": 69,
        "events": 44,
        "entrances": 21,
        "exits": 23,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:50:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-10T12:50:00.000Z",
      "end": "2019-01-10T12:54:59.999Z",
      "analytics": {
        "min": 58,
        "max": 65,
        "events": 45,
        "entrances": 22,
        "exits": 23,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T12:55:00.000Z",
    "count": 63,
    "interval": {
      "start": "2019-01-10T12:55:00.000Z",
      "end": "2019-01-10T12:59:59.999Z",
      "analytics": {
        "min": 57,
        "max": 66,
        "events": 35,
        "entrances": 19,
        "exits": 16,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:00:00.000Z",
    "count": 66,
    "interval": {
      "start": "2019-01-10T13:00:00.000Z",
      "end": "2019-01-10T13:04:59.999Z",
      "analytics": {
        "min": 66,
        "max": 75,
        "events": 55,
        "entrances": 32,
        "exits": 23,
        "utilization": 23.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:05:00.000Z",
    "count": 75,
    "interval": {
      "start": "2019-01-10T13:05:00.000Z",
      "end": "2019-01-10T13:09:59.999Z",
      "analytics": {
        "min": 73,
        "max": 81,
        "events": 46,
        "entrances": 25,
        "exits": 21,
        "utilization": 25.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:10:00.000Z",
    "count": 79,
    "interval": {
      "start": "2019-01-10T13:10:00.000Z",
      "end": "2019-01-10T13:14:59.999Z",
      "analytics": {
        "min": 75,
        "max": 82,
        "events": 57,
        "entrances": 27,
        "exits": 30,
        "utilization": 25.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:15:00.000Z",
    "count": 76,
    "interval": {
      "start": "2019-01-10T13:15:00.000Z",
      "end": "2019-01-10T13:19:59.999Z",
      "analytics": {
        "min": 74,
        "max": 84,
        "events": 56,
        "entrances": 29,
        "exits": 27,
        "utilization": 26.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:20:00.000Z",
    "count": 78,
    "interval": {
      "start": "2019-01-10T13:20:00.000Z",
      "end": "2019-01-10T13:24:59.999Z",
      "analytics": {
        "min": 75,
        "max": 81,
        "events": 61,
        "entrances": 30,
        "exits": 31,
        "utilization": 25.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:25:00.000Z",
    "count": 77,
    "interval": {
      "start": "2019-01-10T13:25:00.000Z",
      "end": "2019-01-10T13:29:59.999Z",
      "analytics": {
        "min": 77,
        "max": 92,
        "events": 83,
        "entrances": 49,
        "exits": 34,
        "utilization": 28.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:30:00.000Z",
    "count": 92,
    "interval": {
      "start": "2019-01-10T13:30:00.000Z",
      "end": "2019-01-10T13:34:59.999Z",
      "analytics": {
        "min": 91,
        "max": 106,
        "events": 78,
        "entrances": 46,
        "exits": 32,
        "utilization": 33.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:35:00.000Z",
    "count": 106,
    "interval": {
      "start": "2019-01-10T13:35:00.000Z",
      "end": "2019-01-10T13:39:59.999Z",
      "analytics": {
        "min": 103,
        "max": 109,
        "events": 71,
        "entrances": 35,
        "exits": 36,
        "utilization": 34.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:40:00.000Z",
    "count": 105,
    "interval": {
      "start": "2019-01-10T13:40:00.000Z",
      "end": "2019-01-10T13:44:59.999Z",
      "analytics": {
        "min": 105,
        "max": 129,
        "events": 63,
        "entrances": 43,
        "exits": 20,
        "utilization": 40.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:45:00.000Z",
    "count": 128,
    "interval": {
      "start": "2019-01-10T13:45:00.000Z",
      "end": "2019-01-10T13:49:59.999Z",
      "analytics": {
        "min": 128,
        "max": 145,
        "events": 76,
        "entrances": 46,
        "exits": 30,
        "utilization": 45.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:50:00.000Z",
    "count": 144,
    "interval": {
      "start": "2019-01-10T13:50:00.000Z",
      "end": "2019-01-10T13:54:59.999Z",
      "analytics": {
        "min": 140,
        "max": 149,
        "events": 71,
        "entrances": 37,
        "exits": 34,
        "utilization": 46.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T13:55:00.000Z",
    "count": 147,
    "interval": {
      "start": "2019-01-10T13:55:00.000Z",
      "end": "2019-01-10T13:59:59.999Z",
      "analytics": {
        "min": 137,
        "max": 148,
        "events": 84,
        "entrances": 37,
        "exits": 47,
        "utilization": 46.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:00:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-10T14:00:00.000Z",
      "end": "2019-01-10T14:04:59.999Z",
      "analytics": {
        "min": 129,
        "max": 142,
        "events": 83,
        "entrances": 41,
        "exits": 42,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:05:00.000Z",
    "count": 136,
    "interval": {
      "start": "2019-01-10T14:05:00.000Z",
      "end": "2019-01-10T14:09:59.999Z",
      "analytics": {
        "min": 133,
        "max": 148,
        "events": 83,
        "entrances": 42,
        "exits": 41,
        "utilization": 46.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:10:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-10T14:10:00.000Z",
      "end": "2019-01-10T14:14:59.999Z",
      "analytics": {
        "min": 123,
        "max": 139,
        "events": 78,
        "entrances": 33,
        "exits": 45,
        "utilization": 43.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:15:00.000Z",
    "count": 125,
    "interval": {
      "start": "2019-01-10T14:15:00.000Z",
      "end": "2019-01-10T14:19:59.999Z",
      "analytics": {
        "min": 125,
        "max": 136,
        "events": 109,
        "entrances": 57,
        "exits": 52,
        "utilization": 42.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:20:00.000Z",
    "count": 130,
    "interval": {
      "start": "2019-01-10T14:20:00.000Z",
      "end": "2019-01-10T14:24:59.999Z",
      "analytics": {
        "min": 130,
        "max": 143,
        "events": 75,
        "entrances": 42,
        "exits": 33,
        "utilization": 44.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:25:00.000Z",
    "count": 139,
    "interval": {
      "start": "2019-01-10T14:25:00.000Z",
      "end": "2019-01-10T14:29:59.999Z",
      "analytics": {
        "min": 118,
        "max": 139,
        "events": 89,
        "entrances": 34,
        "exits": 55,
        "utilization": 43.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:30:00.000Z",
    "count": 118,
    "interval": {
      "start": "2019-01-10T14:30:00.000Z",
      "end": "2019-01-10T14:34:59.999Z",
      "analytics": {
        "min": 107,
        "max": 123,
        "events": 74,
        "entrances": 33,
        "exits": 41,
        "utilization": 38.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:35:00.000Z",
    "count": 110,
    "interval": {
      "start": "2019-01-10T14:35:00.000Z",
      "end": "2019-01-10T14:39:59.999Z",
      "analytics": {
        "min": 100,
        "max": 110,
        "events": 57,
        "entrances": 24,
        "exits": 33,
        "utilization": 34.38
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:40:00.000Z",
    "count": 101,
    "interval": {
      "start": "2019-01-10T14:40:00.000Z",
      "end": "2019-01-10T14:44:59.999Z",
      "analytics": {
        "min": 87,
        "max": 101,
        "events": 59,
        "entrances": 23,
        "exits": 36,
        "utilization": 31.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:45:00.000Z",
    "count": 88,
    "interval": {
      "start": "2019-01-10T14:45:00.000Z",
      "end": "2019-01-10T14:49:59.999Z",
      "analytics": {
        "min": 78,
        "max": 88,
        "events": 27,
        "entrances": 10,
        "exits": 17,
        "utilization": 27.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:50:00.000Z",
    "count": 81,
    "interval": {
      "start": "2019-01-10T14:50:00.000Z",
      "end": "2019-01-10T14:54:59.999Z",
      "analytics": {
        "min": 67,
        "max": 82,
        "events": 30,
        "entrances": 8,
        "exits": 22,
        "utilization": 25.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T14:55:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-10T14:55:00.000Z",
      "end": "2019-01-10T14:59:59.999Z",
      "analytics": {
        "min": 61,
        "max": 67,
        "events": 14,
        "entrances": 4,
        "exits": 10,
        "utilization": 20.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:00:00.000Z",
    "count": 61,
    "interval": {
      "start": "2019-01-10T15:00:00.000Z",
      "end": "2019-01-10T15:04:59.999Z",
      "analytics": {
        "min": 47,
        "max": 61,
        "events": 22,
        "entrances": 4,
        "exits": 18,
        "utilization": 18.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:05:00.000Z",
    "count": 47,
    "interval": {
      "start": "2019-01-10T15:05:00.000Z",
      "end": "2019-01-10T15:09:59.999Z",
      "analytics": {
        "min": 47,
        "max": 56,
        "events": 19,
        "entrances": 14,
        "exits": 5,
        "utilization": 17.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:10:00.000Z",
    "count": 56,
    "interval": {
      "start": "2019-01-10T15:10:00.000Z",
      "end": "2019-01-10T15:14:59.999Z",
      "analytics": {
        "min": 49,
        "max": 56,
        "events": 17,
        "entrances": 6,
        "exits": 11,
        "utilization": 17.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:15:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-10T15:15:00.000Z",
      "end": "2019-01-10T15:19:59.999Z",
      "analytics": {
        "min": 50,
        "max": 53,
        "events": 16,
        "entrances": 8,
        "exits": 8,
        "utilization": 16.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:20:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-10T15:20:00.000Z",
      "end": "2019-01-10T15:24:59.999Z",
      "analytics": {
        "min": 46,
        "max": 51,
        "events": 11,
        "entrances": 3,
        "exits": 8,
        "utilization": 15.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:25:00.000Z",
    "count": 46,
    "interval": {
      "start": "2019-01-10T15:25:00.000Z",
      "end": "2019-01-10T15:29:59.999Z",
      "analytics": {
        "min": 44,
        "max": 47,
        "events": 10,
        "entrances": 5,
        "exits": 5,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:30:00.000Z",
    "count": 46,
    "interval": {
      "start": "2019-01-10T15:30:00.000Z",
      "end": "2019-01-10T15:34:59.999Z",
      "analytics": {
        "min": 44,
        "max": 48,
        "events": 11,
        "entrances": 6,
        "exits": 5,
        "utilization": 15.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:35:00.000Z",
    "count": 47,
    "interval": {
      "start": "2019-01-10T15:35:00.000Z",
      "end": "2019-01-10T15:39:59.999Z",
      "analytics": {
        "min": 41,
        "max": 47,
        "events": 10,
        "entrances": 2,
        "exits": 8,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:40:00.000Z",
    "count": 41,
    "interval": {
      "start": "2019-01-10T15:40:00.000Z",
      "end": "2019-01-10T15:44:59.999Z",
      "analytics": {
        "min": 37,
        "max": 42,
        "events": 11,
        "entrances": 4,
        "exits": 7,
        "utilization": 13.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:45:00.000Z",
    "count": 38,
    "interval": {
      "start": "2019-01-10T15:45:00.000Z",
      "end": "2019-01-10T15:49:59.999Z",
      "analytics": {
        "min": 36,
        "max": 44,
        "events": 26,
        "entrances": 16,
        "exits": 10,
        "utilization": 13.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:50:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-10T15:50:00.000Z",
      "end": "2019-01-10T15:54:59.999Z",
      "analytics": {
        "min": 43,
        "max": 56,
        "events": 24,
        "entrances": 18,
        "exits": 6,
        "utilization": 17.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T15:55:00.000Z",
    "count": 56,
    "interval": {
      "start": "2019-01-10T15:55:00.000Z",
      "end": "2019-01-10T15:59:59.999Z",
      "analytics": {
        "min": 56,
        "max": 65,
        "events": 26,
        "entrances": 17,
        "exits": 9,
        "utilization": 20.31
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:00:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-10T16:00:00.000Z",
      "end": "2019-01-10T16:04:59.999Z",
      "analytics": {
        "min": 62,
        "max": 72,
        "events": 32,
        "entrances": 20,
        "exits": 12,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:05:00.000Z",
    "count": 72,
    "interval": {
      "start": "2019-01-10T16:05:00.000Z",
      "end": "2019-01-10T16:09:59.999Z",
      "analytics": {
        "min": 72,
        "max": 83,
        "events": 35,
        "entrances": 23,
        "exits": 12,
        "utilization": 25.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:10:00.000Z",
    "count": 83,
    "interval": {
      "start": "2019-01-10T16:10:00.000Z",
      "end": "2019-01-10T16:14:59.999Z",
      "analytics": {
        "min": 83,
        "max": 98,
        "events": 31,
        "entrances": 23,
        "exits": 8,
        "utilization": 30.63
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:15:00.000Z",
    "count": 98,
    "interval": {
      "start": "2019-01-10T16:15:00.000Z",
      "end": "2019-01-10T16:19:59.999Z",
      "analytics": {
        "min": 98,
        "max": 117,
        "events": 39,
        "entrances": 29,
        "exits": 10,
        "utilization": 36.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:20:00.000Z",
    "count": 117,
    "interval": {
      "start": "2019-01-10T16:20:00.000Z",
      "end": "2019-01-10T16:24:59.999Z",
      "analytics": {
        "min": 116,
        "max": 143,
        "events": 64,
        "entrances": 45,
        "exits": 19,
        "utilization": 44.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:25:00.000Z",
    "count": 143,
    "interval": {
      "start": "2019-01-10T16:25:00.000Z",
      "end": "2019-01-10T16:29:59.999Z",
      "analytics": {
        "min": 140,
        "max": 152,
        "events": 48,
        "entrances": 28,
        "exits": 20,
        "utilization": 47.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:30:00.000Z",
    "count": 151,
    "interval": {
      "start": "2019-01-10T16:30:00.000Z",
      "end": "2019-01-10T16:34:59.999Z",
      "analytics": {
        "min": 150,
        "max": 182,
        "events": 63,
        "entrances": 47,
        "exits": 16,
        "utilization": 56.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:35:00.000Z",
    "count": 182,
    "interval": {
      "start": "2019-01-10T16:35:00.000Z",
      "end": "2019-01-10T16:39:59.999Z",
      "analytics": {
        "min": 177,
        "max": 187,
        "events": 75,
        "entrances": 39,
        "exits": 36,
        "utilization": 58.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:40:00.000Z",
    "count": 185,
    "interval": {
      "start": "2019-01-10T16:40:00.000Z",
      "end": "2019-01-10T16:44:59.999Z",
      "analytics": {
        "min": 178,
        "max": 192,
        "events": 97,
        "entrances": 50,
        "exits": 47,
        "utilization": 60.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:45:00.000Z",
    "count": 188,
    "interval": {
      "start": "2019-01-10T16:45:00.000Z",
      "end": "2019-01-10T16:49:59.999Z",
      "analytics": {
        "min": 187,
        "max": 199,
        "events": 78,
        "entrances": 44,
        "exits": 34,
        "utilization": 62.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:50:00.000Z",
    "count": 198,
    "interval": {
      "start": "2019-01-10T16:50:00.000Z",
      "end": "2019-01-10T16:54:59.999Z",
      "analytics": {
        "min": 197,
        "max": 216,
        "events": 90,
        "entrances": 53,
        "exits": 37,
        "utilization": 67.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T16:55:00.000Z",
    "count": 214,
    "interval": {
      "start": "2019-01-10T16:55:00.000Z",
      "end": "2019-01-10T16:59:59.999Z",
      "analytics": {
        "min": 210,
        "max": 247,
        "events": 123,
        "entrances": 78,
        "exits": 45,
        "utilization": 77.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:00:00.000Z",
    "count": 247,
    "interval": {
      "start": "2019-01-10T17:00:00.000Z",
      "end": "2019-01-10T17:04:59.999Z",
      "analytics": {
        "min": 245,
        "max": 275,
        "events": 106,
        "entrances": 67,
        "exits": 39,
        "utilization": 85.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:05:00.000Z",
    "count": 275,
    "interval": {
      "start": "2019-01-10T17:05:00.000Z",
      "end": "2019-01-10T17:09:59.999Z",
      "analytics": {
        "min": 268,
        "max": 308,
        "events": 116,
        "entrances": 74,
        "exits": 42,
        "utilization": 96.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:10:00.000Z",
    "count": 307,
    "interval": {
      "start": "2019-01-10T17:10:00.000Z",
      "end": "2019-01-10T17:14:59.999Z",
      "analytics": {
        "min": 306,
        "max": 315,
        "events": 129,
        "entrances": 66,
        "exits": 63,
        "utilization": 98.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:15:00.000Z",
    "count": 310,
    "interval": {
      "start": "2019-01-10T17:15:00.000Z",
      "end": "2019-01-10T17:19:59.999Z",
      "analytics": {
        "min": 305,
        "max": 318,
        "events": 124,
        "entrances": 63,
        "exits": 61,
        "utilization": 99.38
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:20:00.000Z",
    "count": 312,
    "interval": {
      "start": "2019-01-10T17:20:00.000Z",
      "end": "2019-01-10T17:24:59.999Z",
      "analytics": {
        "min": 302,
        "max": 316,
        "events": 104,
        "entrances": 48,
        "exits": 56,
        "utilization": 98.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:25:00.000Z",
    "count": 304,
    "interval": {
      "start": "2019-01-10T17:25:00.000Z",
      "end": "2019-01-10T17:29:59.999Z",
      "analytics": {
        "min": 299,
        "max": 322,
        "events": 114,
        "entrances": 63,
        "exits": 51,
        "utilization": 100.63
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:30:00.000Z",
    "count": 316,
    "interval": {
      "start": "2019-01-10T17:30:00.000Z",
      "end": "2019-01-10T17:34:59.999Z",
      "analytics": {
        "min": 303,
        "max": 317,
        "events": 103,
        "entrances": 51,
        "exits": 52,
        "utilization": 99.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:35:00.000Z",
    "count": 315,
    "interval": {
      "start": "2019-01-10T17:35:00.000Z",
      "end": "2019-01-10T17:39:59.999Z",
      "analytics": {
        "min": 297,
        "max": 317,
        "events": 103,
        "entrances": 43,
        "exits": 60,
        "utilization": 99.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:40:00.000Z",
    "count": 298,
    "interval": {
      "start": "2019-01-10T17:40:00.000Z",
      "end": "2019-01-10T17:44:59.999Z",
      "analytics": {
        "min": 279,
        "max": 301,
        "events": 103,
        "entrances": 42,
        "exits": 61,
        "utilization": 94.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:45:00.000Z",
    "count": 279,
    "interval": {
      "start": "2019-01-10T17:45:00.000Z",
      "end": "2019-01-10T17:49:59.999Z",
      "analytics": {
        "min": 270,
        "max": 282,
        "events": 113,
        "entrances": 58,
        "exits": 55,
        "utilization": 88.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:50:00.000Z",
    "count": 282,
    "interval": {
      "start": "2019-01-10T17:50:00.000Z",
      "end": "2019-01-10T17:54:59.999Z",
      "analytics": {
        "min": 262,
        "max": 282,
        "events": 107,
        "entrances": 44,
        "exits": 63,
        "utilization": 88.12
      }
    }
  },
  {
    "timestamp": "2019-01-10T17:55:00.000Z",
    "count": 263,
    "interval": {
      "start": "2019-01-10T17:55:00.000Z",
      "end": "2019-01-10T17:59:59.999Z",
      "analytics": {
        "min": 227,
        "max": 264,
        "events": 111,
        "entrances": 38,
        "exits": 73,
        "utilization": 82.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:00:00.000Z",
    "count": 228,
    "interval": {
      "start": "2019-01-10T18:00:00.000Z",
      "end": "2019-01-10T18:04:59.999Z",
      "analytics": {
        "min": 203,
        "max": 230,
        "events": 114,
        "entrances": 48,
        "exits": 66,
        "utilization": 71.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:05:00.000Z",
    "count": 210,
    "interval": {
      "start": "2019-01-10T18:05:00.000Z",
      "end": "2019-01-10T18:09:59.999Z",
      "analytics": {
        "min": 204,
        "max": 216,
        "events": 100,
        "entrances": 49,
        "exits": 51,
        "utilization": 67.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:10:00.000Z",
    "count": 208,
    "interval": {
      "start": "2019-01-10T18:10:00.000Z",
      "end": "2019-01-10T18:14:59.999Z",
      "analytics": {
        "min": 203,
        "max": 214,
        "events": 73,
        "entrances": 34,
        "exits": 39,
        "utilization": 66.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:15:00.000Z",
    "count": 203,
    "interval": {
      "start": "2019-01-10T18:15:00.000Z",
      "end": "2019-01-10T18:19:59.999Z",
      "analytics": {
        "min": 186,
        "max": 205,
        "events": 87,
        "entrances": 36,
        "exits": 51,
        "utilization": 64.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:20:00.000Z",
    "count": 188,
    "interval": {
      "start": "2019-01-10T18:20:00.000Z",
      "end": "2019-01-10T18:24:59.999Z",
      "analytics": {
        "min": 164,
        "max": 192,
        "events": 72,
        "entrances": 24,
        "exits": 48,
        "utilization": 60.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:25:00.000Z",
    "count": 164,
    "interval": {
      "start": "2019-01-10T18:25:00.000Z",
      "end": "2019-01-10T18:29:59.999Z",
      "analytics": {
        "min": 157,
        "max": 166,
        "events": 77,
        "entrances": 35,
        "exits": 42,
        "utilization": 51.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:30:00.000Z",
    "count": 157,
    "interval": {
      "start": "2019-01-10T18:30:00.000Z",
      "end": "2019-01-10T18:34:59.999Z",
      "analytics": {
        "min": 144,
        "max": 157,
        "events": 84,
        "entrances": 37,
        "exits": 47,
        "utilization": 49.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:35:00.000Z",
    "count": 147,
    "interval": {
      "start": "2019-01-10T18:35:00.000Z",
      "end": "2019-01-10T18:39:59.999Z",
      "analytics": {
        "min": 128,
        "max": 153,
        "events": 83,
        "entrances": 32,
        "exits": 51,
        "utilization": 47.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:40:00.000Z",
    "count": 128,
    "interval": {
      "start": "2019-01-10T18:40:00.000Z",
      "end": "2019-01-10T18:44:59.999Z",
      "analytics": {
        "min": 112,
        "max": 131,
        "events": 63,
        "entrances": 26,
        "exits": 37,
        "utilization": 40.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:45:00.000Z",
    "count": 117,
    "interval": {
      "start": "2019-01-10T18:45:00.000Z",
      "end": "2019-01-10T18:49:59.999Z",
      "analytics": {
        "min": 107,
        "max": 119,
        "events": 59,
        "entrances": 25,
        "exits": 34,
        "utilization": 37.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:50:00.000Z",
    "count": 108,
    "interval": {
      "start": "2019-01-10T18:50:00.000Z",
      "end": "2019-01-10T18:54:59.999Z",
      "analytics": {
        "min": 96,
        "max": 108,
        "events": 48,
        "entrances": 18,
        "exits": 30,
        "utilization": 33.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T18:55:00.000Z",
    "count": 96,
    "interval": {
      "start": "2019-01-10T18:55:00.000Z",
      "end": "2019-01-10T18:59:59.999Z",
      "analytics": {
        "min": 78,
        "max": 96,
        "events": 56,
        "entrances": 22,
        "exits": 34,
        "utilization": 29.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:00:00.000Z",
    "count": 84,
    "interval": {
      "start": "2019-01-10T19:00:00.000Z",
      "end": "2019-01-10T19:04:59.999Z",
      "analytics": {
        "min": 69,
        "max": 84,
        "events": 52,
        "entrances": 20,
        "exits": 32,
        "utilization": 26.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:05:00.000Z",
    "count": 72,
    "interval": {
      "start": "2019-01-10T19:05:00.000Z",
      "end": "2019-01-10T19:09:59.999Z",
      "analytics": {
        "min": 46,
        "max": 72,
        "events": 34,
        "entrances": 4,
        "exits": 30,
        "utilization": 22.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:10:00.000Z",
    "count": 46,
    "interval": {
      "start": "2019-01-10T19:10:00.000Z",
      "end": "2019-01-10T19:14:59.999Z",
      "analytics": {
        "min": 33,
        "max": 48,
        "events": 37,
        "entrances": 15,
        "exits": 22,
        "utilization": 15.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:15:00.000Z",
    "count": 39,
    "interval": {
      "start": "2019-01-10T19:15:00.000Z",
      "end": "2019-01-10T19:19:59.999Z",
      "analytics": {
        "min": 24,
        "max": 39,
        "events": 31,
        "entrances": 8,
        "exits": 23,
        "utilization": 12.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:20:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-10T19:20:00.000Z",
      "end": "2019-01-10T19:24:59.999Z",
      "analytics": {
        "min": 19,
        "max": 24,
        "events": 43,
        "entrances": 21,
        "exits": 22,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:25:00.000Z",
    "count": 23,
    "interval": {
      "start": "2019-01-10T19:25:00.000Z",
      "end": "2019-01-10T19:29:59.999Z",
      "analytics": {
        "min": 10,
        "max": 23,
        "events": 47,
        "entrances": 17,
        "exits": 30,
        "utilization": 7.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:30:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-10T19:30:00.000Z",
      "end": "2019-01-10T19:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 13,
        "events": 38,
        "entrances": 20,
        "exits": 18,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:35:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-10T19:35:00.000Z",
      "end": "2019-01-10T19:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 12,
        "events": 33,
        "entrances": 11,
        "exits": 22,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T19:40:00.000Z",
      "end": "2019-01-10T19:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 16,
        "events": 38,
        "entrances": 25,
        "exits": 13,
        "utilization": 5.0
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:45:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-10T19:45:00.000Z",
      "end": "2019-01-10T19:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 13,
        "events": 37,
        "entrances": 12,
        "exits": 25,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T19:50:00.000Z",
      "end": "2019-01-10T19:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 23,
        "entrances": 10,
        "exits": 13,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T19:55:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T19:55:00.000Z",
      "end": "2019-01-10T19:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 26,
        "entrances": 16,
        "exits": 10,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T20:00:00.000Z",
      "end": "2019-01-10T20:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 26,
        "entrances": 10,
        "exits": 16,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T20:05:00.000Z",
      "end": "2019-01-10T20:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 9,
        "events": 20,
        "entrances": 12,
        "exits": 8,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T20:10:00.000Z",
      "end": "2019-01-10T20:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 23,
        "entrances": 9,
        "exits": 14,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T20:15:00.000Z",
      "end": "2019-01-10T20:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 22,
        "entrances": 8,
        "exits": 14,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T20:20:00.000Z",
      "end": "2019-01-10T20:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 31,
        "entrances": 16,
        "exits": 15,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T20:25:00.000Z",
      "end": "2019-01-10T20:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 19,
        "entrances": 6,
        "exits": 13,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T20:30:00.000Z",
      "end": "2019-01-10T20:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 24,
        "entrances": 11,
        "exits": 13,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T20:35:00.000Z",
      "end": "2019-01-10T20:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 28,
        "entrances": 13,
        "exits": 15,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T20:40:00.000Z",
      "end": "2019-01-10T20:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 22,
        "entrances": 6,
        "exits": 16,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T20:45:00.000Z",
      "end": "2019-01-10T20:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 20,
        "entrances": 9,
        "exits": 11,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T20:50:00.000Z",
      "end": "2019-01-10T20:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 7,
        "events": 20,
        "entrances": 11,
        "exits": 9,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T20:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T20:55:00.000Z",
      "end": "2019-01-10T20:59:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 23,
        "entrances": 10,
        "exits": 13,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T21:00:00.000Z",
      "end": "2019-01-10T21:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 22,
        "entrances": 8,
        "exits": 14,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T21:05:00.000Z",
      "end": "2019-01-10T21:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 17,
        "entrances": 7,
        "exits": 10,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T21:10:00.000Z",
      "end": "2019-01-10T21:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 13,
        "entrances": 8,
        "exits": 5,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:15:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T21:15:00.000Z",
      "end": "2019-01-10T21:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 8,
        "events": 24,
        "entrances": 10,
        "exits": 14,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-10T21:20:00.000Z",
      "end": "2019-01-10T21:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 16,
        "entrances": 5,
        "exits": 11,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T21:25:00.000Z",
      "end": "2019-01-10T21:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 13,
        "entrances": 5,
        "exits": 8,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T21:30:00.000Z",
      "end": "2019-01-10T21:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 15,
        "entrances": 9,
        "exits": 6,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:35:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T21:35:00.000Z",
      "end": "2019-01-10T21:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 13,
        "entrances": 7,
        "exits": 6,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T21:40:00.000Z",
      "end": "2019-01-10T21:44:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:45:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T21:45:00.000Z",
      "end": "2019-01-10T21:49:59.999Z",
      "analytics": {
        "min": 6,
        "max": 13,
        "events": 18,
        "entrances": 11,
        "exits": 7,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:50:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-10T21:50:00.000Z",
      "end": "2019-01-10T21:54:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T21:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-10T21:55:00.000Z",
      "end": "2019-01-10T21:59:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 12,
        "entrances": 5,
        "exits": 7,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T22:00:00.000Z",
      "end": "2019-01-10T22:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 9,
        "entrances": 1,
        "exits": 8,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T22:05:00.000Z",
      "end": "2019-01-10T22:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 16,
        "entrances": 6,
        "exits": 10,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T22:10:00.000Z",
      "end": "2019-01-10T22:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T22:15:00.000Z",
      "end": "2019-01-10T22:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 10,
        "entrances": 6,
        "exits": 4,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T22:20:00.000Z",
      "end": "2019-01-10T22:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T22:25:00.000Z",
      "end": "2019-01-10T22:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-10T22:30:00.000Z",
      "end": "2019-01-10T22:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-10T22:35:00.000Z",
      "end": "2019-01-10T22:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T22:40:00.000Z",
      "end": "2019-01-10T22:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:45:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T22:45:00.000Z",
      "end": "2019-01-10T22:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T22:50:00.000Z",
      "end": "2019-01-10T22:54:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T22:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T22:55:00.000Z",
      "end": "2019-01-10T22:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-10T23:00:00.000Z",
      "end": "2019-01-10T23:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 6,
        "events": 10,
        "entrances": 7,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:05:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T23:05:00.000Z",
      "end": "2019-01-10T23:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 6,
        "entrances": 0,
        "exits": 6,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-10T23:10:00.000Z",
      "end": "2019-01-10T23:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-10T23:15:00.000Z",
      "end": "2019-01-10T23:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-10T23:20:00.000Z",
      "end": "2019-01-10T23:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-10T23:25:00.000Z",
      "end": "2019-01-10T23:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:30:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-10T23:30:00.000Z",
      "end": "2019-01-10T23:34:59.999Z",
      "analytics": {
        "min": 8,
        "max": 11,
        "events": 7,
        "entrances": 5,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:35:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-10T23:35:00.000Z",
      "end": "2019-01-10T23:39:59.999Z",
      "analytics": {
        "min": 10,
        "max": 13,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:40:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-10T23:40:00.000Z",
      "end": "2019-01-10T23:44:59.999Z",
      "analytics": {
        "min": 12,
        "max": 14,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:45:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-10T23:45:00.000Z",
      "end": "2019-01-10T23:49:59.999Z",
      "analytics": {
        "min": 13,
        "max": 15,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:50:00.000Z",
    "count": 13,
    "interval": {
      "start": "2019-01-10T23:50:00.000Z",
      "end": "2019-01-10T23:54:59.999Z",
      "analytics": {
        "min": 12,
        "max": 14,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-10T23:55:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-10T23:55:00.000Z",
      "end": "2019-01-10T23:59:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:00:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-11T00:00:00.000Z",
      "end": "2019-01-11T00:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:05:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T00:05:00.000Z",
      "end": "2019-01-11T00:09:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:10:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-11T00:10:00.000Z",
      "end": "2019-01-11T00:14:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:15:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T00:15:00.000Z",
      "end": "2019-01-11T00:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:20:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T00:20:00.000Z",
      "end": "2019-01-11T00:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 8,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T00:25:00.000Z",
      "end": "2019-01-11T00:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:30:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T00:30:00.000Z",
      "end": "2019-01-11T00:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:35:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T00:35:00.000Z",
      "end": "2019-01-11T00:39:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T00:40:00.000Z",
      "end": "2019-01-11T00:44:59.999Z",
      "analytics": {
        "min": 5,
        "max": 9,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:45:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T00:45:00.000Z",
      "end": "2019-01-11T00:49:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:50:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T00:50:00.000Z",
      "end": "2019-01-11T00:54:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T00:55:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T00:55:00.000Z",
      "end": "2019-01-11T00:59:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:00:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T01:00:00.000Z",
      "end": "2019-01-11T01:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T01:05:00.000Z",
      "end": "2019-01-11T01:09:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T01:10:00.000Z",
      "end": "2019-01-11T01:14:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T01:15:00.000Z",
      "end": "2019-01-11T01:19:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:20:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T01:20:00.000Z",
      "end": "2019-01-11T01:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T01:25:00.000Z",
      "end": "2019-01-11T01:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:30:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T01:30:00.000Z",
      "end": "2019-01-11T01:34:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:35:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T01:35:00.000Z",
      "end": "2019-01-11T01:39:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:40:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T01:40:00.000Z",
      "end": "2019-01-11T01:44:59.999Z",
      "analytics": {
        "min": 10,
        "max": 10,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:45:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T01:45:00.000Z",
      "end": "2019-01-11T01:49:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:50:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T01:50:00.000Z",
      "end": "2019-01-11T01:54:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T01:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T01:55:00.000Z",
      "end": "2019-01-11T01:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T02:00:00.000Z",
      "end": "2019-01-11T02:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:05:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T02:05:00.000Z",
      "end": "2019-01-11T02:09:59.999Z",
      "analytics": {
        "min": 7,
        "max": 10,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T02:10:00.000Z",
      "end": "2019-01-11T02:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T02:15:00.000Z",
      "end": "2019-01-11T02:19:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T02:20:00.000Z",
      "end": "2019-01-11T02:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T02:25:00.000Z",
      "end": "2019-01-11T02:29:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:30:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T02:30:00.000Z",
      "end": "2019-01-11T02:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T02:35:00.000Z",
      "end": "2019-01-11T02:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:40:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T02:40:00.000Z",
      "end": "2019-01-11T02:44:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T02:45:00.000Z",
      "end": "2019-01-11T02:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T02:50:00.000Z",
      "end": "2019-01-11T02:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T02:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T02:55:00.000Z",
      "end": "2019-01-11T02:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T03:00:00.000Z",
      "end": "2019-01-11T03:04:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T03:05:00.000Z",
      "end": "2019-01-11T03:09:59.999Z",
      "analytics": {
        "min": 4,
        "max": 8,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T03:10:00.000Z",
      "end": "2019-01-11T03:14:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T03:15:00.000Z",
      "end": "2019-01-11T03:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T03:20:00.000Z",
      "end": "2019-01-11T03:24:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:25:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T03:25:00.000Z",
      "end": "2019-01-11T03:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 7,
        "entrances": 2,
        "exits": 5,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T03:30:00.000Z",
      "end": "2019-01-11T03:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T03:35:00.000Z",
      "end": "2019-01-11T03:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 7,
        "entrances": 2,
        "exits": 5,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:40:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T03:40:00.000Z",
      "end": "2019-01-11T03:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T03:45:00.000Z",
      "end": "2019-01-11T03:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T03:50:00.000Z",
      "end": "2019-01-11T03:54:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T03:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T03:55:00.000Z",
      "end": "2019-01-11T03:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:00:00.000Z",
      "end": "2019-01-11T04:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T04:05:00.000Z",
      "end": "2019-01-11T04:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T04:10:00.000Z",
      "end": "2019-01-11T04:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T04:15:00.000Z",
      "end": "2019-01-11T04:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:20:00.000Z",
      "end": "2019-01-11T04:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:25:00.000Z",
      "end": "2019-01-11T04:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:30:00.000Z",
      "end": "2019-01-11T04:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:35:00.000Z",
      "end": "2019-01-11T04:39:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:40:00.000Z",
      "end": "2019-01-11T04:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:45:00.000Z",
      "end": "2019-01-11T04:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:50:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T04:50:00.000Z",
      "end": "2019-01-11T04:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T04:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T04:55:00.000Z",
      "end": "2019-01-11T04:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T05:00:00.000Z",
      "end": "2019-01-11T05:04:59.999Z",
      "analytics": {
        "min": 4,
        "max": 4,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T05:05:00.000Z",
      "end": "2019-01-11T05:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T05:10:00.000Z",
      "end": "2019-01-11T05:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T05:15:00.000Z",
      "end": "2019-01-11T05:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T05:20:00.000Z",
      "end": "2019-01-11T05:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T05:25:00.000Z",
      "end": "2019-01-11T05:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T05:30:00.000Z",
      "end": "2019-01-11T05:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:35:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T05:35:00.000Z",
      "end": "2019-01-11T05:39:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T05:40:00.000Z",
      "end": "2019-01-11T05:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T05:45:00.000Z",
      "end": "2019-01-11T05:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T05:50:00.000Z",
      "end": "2019-01-11T05:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T05:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T05:55:00.000Z",
      "end": "2019-01-11T05:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:00:00.000Z",
      "end": "2019-01-11T06:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:05:00.000Z",
      "end": "2019-01-11T06:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:10:00.000Z",
      "end": "2019-01-11T06:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T06:15:00.000Z",
      "end": "2019-01-11T06:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:20:00.000Z",
      "end": "2019-01-11T06:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:25:00.000Z",
      "end": "2019-01-11T06:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:30:00.000Z",
      "end": "2019-01-11T06:34:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:35:00.000Z",
      "end": "2019-01-11T06:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:40:00.000Z",
      "end": "2019-01-11T06:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:45:00.000Z",
      "end": "2019-01-11T06:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:50:00.000Z",
      "end": "2019-01-11T06:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T06:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T06:55:00.000Z",
      "end": "2019-01-11T06:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:00:00.000Z",
      "end": "2019-01-11T07:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:05:00.000Z",
      "end": "2019-01-11T07:09:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:10:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:10:00.000Z",
      "end": "2019-01-11T07:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:15:00.000Z",
      "end": "2019-01-11T07:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:20:00.000Z",
      "end": "2019-01-11T07:24:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:25:00.000Z",
      "end": "2019-01-11T07:29:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:30:00.000Z",
      "end": "2019-01-11T07:34:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:35:00.000Z",
      "end": "2019-01-11T07:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:40:00.000Z",
      "end": "2019-01-11T07:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T07:45:00.000Z",
      "end": "2019-01-11T07:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:50:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T07:50:00.000Z",
      "end": "2019-01-11T07:54:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T07:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T07:55:00.000Z",
      "end": "2019-01-11T07:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:00:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T08:00:00.000Z",
      "end": "2019-01-11T08:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T08:05:00.000Z",
      "end": "2019-01-11T08:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T08:10:00.000Z",
      "end": "2019-01-11T08:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:15:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T08:15:00.000Z",
      "end": "2019-01-11T08:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T08:20:00.000Z",
      "end": "2019-01-11T08:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T08:25:00.000Z",
      "end": "2019-01-11T08:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T08:30:00.000Z",
      "end": "2019-01-11T08:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 3,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T08:35:00.000Z",
      "end": "2019-01-11T08:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:40:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T08:40:00.000Z",
      "end": "2019-01-11T08:44:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T08:45:00.000Z",
      "end": "2019-01-11T08:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:50:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T08:50:00.000Z",
      "end": "2019-01-11T08:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T08:55:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T08:55:00.000Z",
      "end": "2019-01-11T08:59:59.999Z",
      "analytics": {
        "min": 3,
        "max": 3,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:00:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:00:00.000Z",
      "end": "2019-01-11T09:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:05:00.000Z",
      "end": "2019-01-11T09:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:10:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:10:00.000Z",
      "end": "2019-01-11T09:14:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:15:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:15:00.000Z",
      "end": "2019-01-11T09:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:20:00.000Z",
      "end": "2019-01-11T09:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:25:00.000Z",
      "end": "2019-01-11T09:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 0,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T09:30:00.000Z",
      "end": "2019-01-11T09:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T09:35:00.000Z",
      "end": "2019-01-11T09:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T09:40:00.000Z",
      "end": "2019-01-11T09:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T09:45:00.000Z",
      "end": "2019-01-11T09:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T09:50:00.000Z",
      "end": "2019-01-11T09:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T09:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T09:55:00.000Z",
      "end": "2019-01-11T09:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T10:00:00.000Z",
      "end": "2019-01-11T10:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T10:05:00.000Z",
      "end": "2019-01-11T10:09:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T10:10:00.000Z",
      "end": "2019-01-11T10:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T10:15:00.000Z",
      "end": "2019-01-11T10:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T10:20:00.000Z",
      "end": "2019-01-11T10:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 2,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T10:25:00.000Z",
      "end": "2019-01-11T10:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:30:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T10:30:00.000Z",
      "end": "2019-01-11T10:34:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T10:35:00.000Z",
      "end": "2019-01-11T10:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 9,
        "events": 4,
        "entrances": 4,
        "exits": 0,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T10:40:00.000Z",
      "end": "2019-01-11T10:44:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:45:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-11T10:45:00.000Z",
      "end": "2019-01-11T10:49:59.999Z",
      "analytics": {
        "min": 11,
        "max": 14,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:50:00.000Z",
    "count": 14,
    "interval": {
      "start": "2019-01-11T10:50:00.000Z",
      "end": "2019-01-11T10:54:59.999Z",
      "analytics": {
        "min": 13,
        "max": 15,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 4.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T10:55:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-11T10:55:00.000Z",
      "end": "2019-01-11T10:59:59.999Z",
      "analytics": {
        "min": 15,
        "max": 18,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 5.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:00:00.000Z",
    "count": 18,
    "interval": {
      "start": "2019-01-11T11:00:00.000Z",
      "end": "2019-01-11T11:04:59.999Z",
      "analytics": {
        "min": 18,
        "max": 21,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 6.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:05:00.000Z",
    "count": 20,
    "interval": {
      "start": "2019-01-11T11:05:00.000Z",
      "end": "2019-01-11T11:09:59.999Z",
      "analytics": {
        "min": 20,
        "max": 24,
        "events": 4,
        "entrances": 4,
        "exits": 0,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:10:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-11T11:10:00.000Z",
      "end": "2019-01-11T11:14:59.999Z",
      "analytics": {
        "min": 20,
        "max": 25,
        "events": 8,
        "entrances": 2,
        "exits": 6,
        "utilization": 7.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:15:00.000Z",
    "count": 20,
    "interval": {
      "start": "2019-01-11T11:15:00.000Z",
      "end": "2019-01-11T11:19:59.999Z",
      "analytics": {
        "min": 20,
        "max": 23,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 7.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:20:00.000Z",
    "count": 23,
    "interval": {
      "start": "2019-01-11T11:20:00.000Z",
      "end": "2019-01-11T11:24:59.999Z",
      "analytics": {
        "min": 23,
        "max": 29,
        "events": 8,
        "entrances": 7,
        "exits": 1,
        "utilization": 9.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:25:00.000Z",
    "count": 29,
    "interval": {
      "start": "2019-01-11T11:25:00.000Z",
      "end": "2019-01-11T11:29:59.999Z",
      "analytics": {
        "min": 29,
        "max": 34,
        "events": 9,
        "entrances": 7,
        "exits": 2,
        "utilization": 10.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:30:00.000Z",
    "count": 34,
    "interval": {
      "start": "2019-01-11T11:30:00.000Z",
      "end": "2019-01-11T11:34:59.999Z",
      "analytics": {
        "min": 34,
        "max": 41,
        "events": 9,
        "entrances": 8,
        "exits": 1,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:35:00.000Z",
    "count": 41,
    "interval": {
      "start": "2019-01-11T11:35:00.000Z",
      "end": "2019-01-11T11:39:59.999Z",
      "analytics": {
        "min": 39,
        "max": 45,
        "events": 8,
        "entrances": 6,
        "exits": 2,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:40:00.000Z",
    "count": 45,
    "interval": {
      "start": "2019-01-11T11:40:00.000Z",
      "end": "2019-01-11T11:44:59.999Z",
      "analytics": {
        "min": 42,
        "max": 45,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:45:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-11T11:45:00.000Z",
      "end": "2019-01-11T11:49:59.999Z",
      "analytics": {
        "min": 44,
        "max": 48,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 15.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:50:00.000Z",
    "count": 46,
    "interval": {
      "start": "2019-01-11T11:50:00.000Z",
      "end": "2019-01-11T11:54:59.999Z",
      "analytics": {
        "min": 45,
        "max": 47,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T11:55:00.000Z",
    "count": 47,
    "interval": {
      "start": "2019-01-11T11:55:00.000Z",
      "end": "2019-01-11T11:59:59.999Z",
      "analytics": {
        "min": 44,
        "max": 48,
        "events": 10,
        "entrances": 4,
        "exits": 6,
        "utilization": 15.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:00:00.000Z",
    "count": 45,
    "interval": {
      "start": "2019-01-11T12:00:00.000Z",
      "end": "2019-01-11T12:04:59.999Z",
      "analytics": {
        "min": 45,
        "max": 50,
        "events": 15,
        "entrances": 10,
        "exits": 5,
        "utilization": 15.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:05:00.000Z",
    "count": 50,
    "interval": {
      "start": "2019-01-11T12:05:00.000Z",
      "end": "2019-01-11T12:09:59.999Z",
      "analytics": {
        "min": 45,
        "max": 51,
        "events": 17,
        "entrances": 9,
        "exits": 8,
        "utilization": 15.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:10:00.000Z",
    "count": 51,
    "interval": {
      "start": "2019-01-11T12:10:00.000Z",
      "end": "2019-01-11T12:14:59.999Z",
      "analytics": {
        "min": 49,
        "max": 54,
        "events": 16,
        "entrances": 9,
        "exits": 7,
        "utilization": 16.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:15:00.000Z",
    "count": 53,
    "interval": {
      "start": "2019-01-11T12:15:00.000Z",
      "end": "2019-01-11T12:19:59.999Z",
      "analytics": {
        "min": 53,
        "max": 69,
        "events": 20,
        "entrances": 18,
        "exits": 2,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:20:00.000Z",
    "count": 69,
    "interval": {
      "start": "2019-01-11T12:20:00.000Z",
      "end": "2019-01-11T12:24:59.999Z",
      "analytics": {
        "min": 67,
        "max": 72,
        "events": 24,
        "entrances": 11,
        "exits": 13,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:25:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-11T12:25:00.000Z",
      "end": "2019-01-11T12:29:59.999Z",
      "analytics": {
        "min": 65,
        "max": 72,
        "events": 27,
        "entrances": 14,
        "exits": 13,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:30:00.000Z",
    "count": 68,
    "interval": {
      "start": "2019-01-11T12:30:00.000Z",
      "end": "2019-01-11T12:34:59.999Z",
      "analytics": {
        "min": 65,
        "max": 72,
        "events": 31,
        "entrances": 14,
        "exits": 17,
        "utilization": 22.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:35:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-11T12:35:00.000Z",
      "end": "2019-01-11T12:39:59.999Z",
      "analytics": {
        "min": 63,
        "max": 68,
        "events": 38,
        "entrances": 20,
        "exits": 18,
        "utilization": 21.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:40:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-11T12:40:00.000Z",
      "end": "2019-01-11T12:44:59.999Z",
      "analytics": {
        "min": 64,
        "max": 69,
        "events": 26,
        "entrances": 12,
        "exits": 14,
        "utilization": 21.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:45:00.000Z",
    "count": 65,
    "interval": {
      "start": "2019-01-11T12:45:00.000Z",
      "end": "2019-01-11T12:49:59.999Z",
      "analytics": {
        "min": 64,
        "max": 79,
        "events": 35,
        "entrances": 24,
        "exits": 11,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:50:00.000Z",
    "count": 78,
    "interval": {
      "start": "2019-01-11T12:50:00.000Z",
      "end": "2019-01-11T12:54:59.999Z",
      "analytics": {
        "min": 78,
        "max": 84,
        "events": 35,
        "entrances": 20,
        "exits": 15,
        "utilization": 26.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T12:55:00.000Z",
    "count": 83,
    "interval": {
      "start": "2019-01-11T12:55:00.000Z",
      "end": "2019-01-11T12:59:59.999Z",
      "analytics": {
        "min": 73,
        "max": 83,
        "events": 59,
        "entrances": 29,
        "exits": 30,
        "utilization": 25.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:00:00.000Z",
    "count": 82,
    "interval": {
      "start": "2019-01-11T13:00:00.000Z",
      "end": "2019-01-11T13:04:59.999Z",
      "analytics": {
        "min": 62,
        "max": 82,
        "events": 52,
        "entrances": 17,
        "exits": 35,
        "utilization": 25.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:05:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-11T13:05:00.000Z",
      "end": "2019-01-11T13:09:59.999Z",
      "analytics": {
        "min": 63,
        "max": 79,
        "events": 51,
        "entrances": 32,
        "exits": 19,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:10:00.000Z",
    "count": 77,
    "interval": {
      "start": "2019-01-11T13:10:00.000Z",
      "end": "2019-01-11T13:14:59.999Z",
      "analytics": {
        "min": 77,
        "max": 88,
        "events": 53,
        "entrances": 31,
        "exits": 22,
        "utilization": 27.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:15:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-11T13:15:00.000Z",
      "end": "2019-01-11T13:19:59.999Z",
      "analytics": {
        "min": 83,
        "max": 89,
        "events": 55,
        "entrances": 28,
        "exits": 27,
        "utilization": 27.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:20:00.000Z",
    "count": 87,
    "interval": {
      "start": "2019-01-11T13:20:00.000Z",
      "end": "2019-01-11T13:24:59.999Z",
      "analytics": {
        "min": 87,
        "max": 100,
        "events": 68,
        "entrances": 38,
        "exits": 30,
        "utilization": 31.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:25:00.000Z",
    "count": 95,
    "interval": {
      "start": "2019-01-11T13:25:00.000Z",
      "end": "2019-01-11T13:29:59.999Z",
      "analytics": {
        "min": 94,
        "max": 105,
        "events": 67,
        "entrances": 35,
        "exits": 32,
        "utilization": 32.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:30:00.000Z",
    "count": 98,
    "interval": {
      "start": "2019-01-11T13:30:00.000Z",
      "end": "2019-01-11T13:34:59.999Z",
      "analytics": {
        "min": 95,
        "max": 105,
        "events": 70,
        "entrances": 34,
        "exits": 36,
        "utilization": 32.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:35:00.000Z",
    "count": 96,
    "interval": {
      "start": "2019-01-11T13:35:00.000Z",
      "end": "2019-01-11T13:39:59.999Z",
      "analytics": {
        "min": 94,
        "max": 119,
        "events": 82,
        "entrances": 52,
        "exits": 30,
        "utilization": 37.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:40:00.000Z",
    "count": 118,
    "interval": {
      "start": "2019-01-11T13:40:00.000Z",
      "end": "2019-01-11T13:44:59.999Z",
      "analytics": {
        "min": 115,
        "max": 131,
        "events": 75,
        "entrances": 44,
        "exits": 31,
        "utilization": 40.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:45:00.000Z",
    "count": 131,
    "interval": {
      "start": "2019-01-11T13:45:00.000Z",
      "end": "2019-01-11T13:49:59.999Z",
      "analytics": {
        "min": 130,
        "max": 142,
        "events": 78,
        "entrances": 39,
        "exits": 39,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:50:00.000Z",
    "count": 131,
    "interval": {
      "start": "2019-01-11T13:50:00.000Z",
      "end": "2019-01-11T13:54:59.999Z",
      "analytics": {
        "min": 122,
        "max": 132,
        "events": 73,
        "entrances": 35,
        "exits": 38,
        "utilization": 41.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T13:55:00.000Z",
    "count": 128,
    "interval": {
      "start": "2019-01-11T13:55:00.000Z",
      "end": "2019-01-11T13:59:59.999Z",
      "analytics": {
        "min": 127,
        "max": 147,
        "events": 62,
        "entrances": 38,
        "exits": 24,
        "utilization": 45.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:00:00.000Z",
    "count": 142,
    "interval": {
      "start": "2019-01-11T14:00:00.000Z",
      "end": "2019-01-11T14:04:59.999Z",
      "analytics": {
        "min": 140,
        "max": 149,
        "events": 96,
        "entrances": 51,
        "exits": 45,
        "utilization": 46.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:05:00.000Z",
    "count": 148,
    "interval": {
      "start": "2019-01-11T14:05:00.000Z",
      "end": "2019-01-11T14:09:59.999Z",
      "analytics": {
        "min": 137,
        "max": 151,
        "events": 89,
        "entrances": 39,
        "exits": 50,
        "utilization": 47.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:10:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-11T14:10:00.000Z",
      "end": "2019-01-11T14:14:59.999Z",
      "analytics": {
        "min": 131,
        "max": 144,
        "events": 82,
        "entrances": 40,
        "exits": 42,
        "utilization": 45.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:15:00.000Z",
    "count": 135,
    "interval": {
      "start": "2019-01-11T14:15:00.000Z",
      "end": "2019-01-11T14:19:59.999Z",
      "analytics": {
        "min": 134,
        "max": 142,
        "events": 102,
        "entrances": 51,
        "exits": 51,
        "utilization": 44.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:20:00.000Z",
    "count": 135,
    "interval": {
      "start": "2019-01-11T14:20:00.000Z",
      "end": "2019-01-11T14:24:59.999Z",
      "analytics": {
        "min": 131,
        "max": 144,
        "events": 68,
        "entrances": 37,
        "exits": 31,
        "utilization": 45.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:25:00.000Z",
    "count": 141,
    "interval": {
      "start": "2019-01-11T14:25:00.000Z",
      "end": "2019-01-11T14:29:59.999Z",
      "analytics": {
        "min": 128,
        "max": 145,
        "events": 68,
        "entrances": 28,
        "exits": 40,
        "utilization": 45.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:30:00.000Z",
    "count": 129,
    "interval": {
      "start": "2019-01-11T14:30:00.000Z",
      "end": "2019-01-11T14:34:59.999Z",
      "analytics": {
        "min": 129,
        "max": 140,
        "events": 61,
        "entrances": 33,
        "exits": 28,
        "utilization": 43.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:35:00.000Z",
    "count": 134,
    "interval": {
      "start": "2019-01-11T14:35:00.000Z",
      "end": "2019-01-11T14:39:59.999Z",
      "analytics": {
        "min": 113,
        "max": 134,
        "events": 57,
        "entrances": 18,
        "exits": 39,
        "utilization": 41.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:40:00.000Z",
    "count": 113,
    "interval": {
      "start": "2019-01-11T14:40:00.000Z",
      "end": "2019-01-11T14:44:59.999Z",
      "analytics": {
        "min": 109,
        "max": 117,
        "events": 42,
        "entrances": 19,
        "exits": 23,
        "utilization": 36.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:45:00.000Z",
    "count": 109,
    "interval": {
      "start": "2019-01-11T14:45:00.000Z",
      "end": "2019-01-11T14:49:59.999Z",
      "analytics": {
        "min": 96,
        "max": 109,
        "events": 39,
        "entrances": 13,
        "exits": 26,
        "utilization": 33.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:50:00.000Z",
    "count": 96,
    "interval": {
      "start": "2019-01-11T14:50:00.000Z",
      "end": "2019-01-11T14:54:59.999Z",
      "analytics": {
        "min": 79,
        "max": 97,
        "events": 35,
        "entrances": 9,
        "exits": 26,
        "utilization": 30.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T14:55:00.000Z",
    "count": 79,
    "interval": {
      "start": "2019-01-11T14:55:00.000Z",
      "end": "2019-01-11T14:59:59.999Z",
      "analytics": {
        "min": 67,
        "max": 79,
        "events": 24,
        "entrances": 6,
        "exits": 18,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:00:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-11T15:00:00.000Z",
      "end": "2019-01-11T15:04:59.999Z",
      "analytics": {
        "min": 61,
        "max": 67,
        "events": 17,
        "entrances": 7,
        "exits": 10,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:05:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-11T15:05:00.000Z",
      "end": "2019-01-11T15:09:59.999Z",
      "analytics": {
        "min": 63,
        "max": 66,
        "events": 12,
        "entrances": 6,
        "exits": 6,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:10:00.000Z",
    "count": 64,
    "interval": {
      "start": "2019-01-11T15:10:00.000Z",
      "end": "2019-01-11T15:14:59.999Z",
      "analytics": {
        "min": 59,
        "max": 66,
        "events": 16,
        "entrances": 6,
        "exits": 10,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:15:00.000Z",
    "count": 60,
    "interval": {
      "start": "2019-01-11T15:15:00.000Z",
      "end": "2019-01-11T15:19:59.999Z",
      "analytics": {
        "min": 57,
        "max": 61,
        "events": 19,
        "entrances": 8,
        "exits": 11,
        "utilization": 19.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:20:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-11T15:20:00.000Z",
      "end": "2019-01-11T15:24:59.999Z",
      "analytics": {
        "min": 54,
        "max": 58,
        "events": 12,
        "entrances": 6,
        "exits": 6,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:25:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-11T15:25:00.000Z",
      "end": "2019-01-11T15:29:59.999Z",
      "analytics": {
        "min": 50,
        "max": 58,
        "events": 15,
        "entrances": 5,
        "exits": 10,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:30:00.000Z",
    "count": 52,
    "interval": {
      "start": "2019-01-11T15:30:00.000Z",
      "end": "2019-01-11T15:34:59.999Z",
      "analytics": {
        "min": 48,
        "max": 53,
        "events": 9,
        "entrances": 3,
        "exits": 6,
        "utilization": 16.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:35:00.000Z",
    "count": 49,
    "interval": {
      "start": "2019-01-11T15:35:00.000Z",
      "end": "2019-01-11T15:39:59.999Z",
      "analytics": {
        "min": 45,
        "max": 49,
        "events": 13,
        "entrances": 6,
        "exits": 7,
        "utilization": 15.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:40:00.000Z",
    "count": 48,
    "interval": {
      "start": "2019-01-11T15:40:00.000Z",
      "end": "2019-01-11T15:44:59.999Z",
      "analytics": {
        "min": 41,
        "max": 48,
        "events": 20,
        "entrances": 7,
        "exits": 13,
        "utilization": 14.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:45:00.000Z",
    "count": 42,
    "interval": {
      "start": "2019-01-11T15:45:00.000Z",
      "end": "2019-01-11T15:49:59.999Z",
      "analytics": {
        "min": 41,
        "max": 46,
        "events": 9,
        "entrances": 6,
        "exits": 3,
        "utilization": 14.37
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:50:00.000Z",
    "count": 45,
    "interval": {
      "start": "2019-01-11T15:50:00.000Z",
      "end": "2019-01-11T15:54:59.999Z",
      "analytics": {
        "min": 45,
        "max": 59,
        "events": 32,
        "entrances": 22,
        "exits": 10,
        "utilization": 18.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T15:55:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-11T15:55:00.000Z",
      "end": "2019-01-11T15:59:59.999Z",
      "analytics": {
        "min": 57,
        "max": 74,
        "events": 25,
        "entrances": 20,
        "exits": 5,
        "utilization": 23.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:00:00.000Z",
    "count": 72,
    "interval": {
      "start": "2019-01-11T16:00:00.000Z",
      "end": "2019-01-11T16:04:59.999Z",
      "analytics": {
        "min": 68,
        "max": 76,
        "events": 24,
        "entrances": 14,
        "exits": 10,
        "utilization": 23.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:05:00.000Z",
    "count": 76,
    "interval": {
      "start": "2019-01-11T16:05:00.000Z",
      "end": "2019-01-11T16:09:59.999Z",
      "analytics": {
        "min": 75,
        "max": 86,
        "events": 28,
        "entrances": 19,
        "exits": 9,
        "utilization": 26.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:10:00.000Z",
    "count": 86,
    "interval": {
      "start": "2019-01-11T16:10:00.000Z",
      "end": "2019-01-11T16:14:59.999Z",
      "analytics": {
        "min": 85,
        "max": 103,
        "events": 33,
        "entrances": 25,
        "exits": 8,
        "utilization": 32.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:15:00.000Z",
    "count": 103,
    "interval": {
      "start": "2019-01-11T16:15:00.000Z",
      "end": "2019-01-11T16:19:59.999Z",
      "analytics": {
        "min": 103,
        "max": 130,
        "events": 49,
        "entrances": 38,
        "exits": 11,
        "utilization": 40.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:20:00.000Z",
    "count": 130,
    "interval": {
      "start": "2019-01-11T16:20:00.000Z",
      "end": "2019-01-11T16:24:59.999Z",
      "analytics": {
        "min": 130,
        "max": 139,
        "events": 55,
        "entrances": 31,
        "exits": 24,
        "utilization": 43.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:25:00.000Z",
    "count": 137,
    "interval": {
      "start": "2019-01-11T16:25:00.000Z",
      "end": "2019-01-11T16:29:59.999Z",
      "analytics": {
        "min": 133,
        "max": 144,
        "events": 54,
        "entrances": 30,
        "exits": 24,
        "utilization": 45.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:30:00.000Z",
    "count": 143,
    "interval": {
      "start": "2019-01-11T16:30:00.000Z",
      "end": "2019-01-11T16:34:59.999Z",
      "analytics": {
        "min": 143,
        "max": 167,
        "events": 66,
        "entrances": 45,
        "exits": 21,
        "utilization": 52.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:35:00.000Z",
    "count": 167,
    "interval": {
      "start": "2019-01-11T16:35:00.000Z",
      "end": "2019-01-11T16:39:59.999Z",
      "analytics": {
        "min": 165,
        "max": 182,
        "events": 61,
        "entrances": 37,
        "exits": 24,
        "utilization": 56.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:40:00.000Z",
    "count": 180,
    "interval": {
      "start": "2019-01-11T16:40:00.000Z",
      "end": "2019-01-11T16:44:59.999Z",
      "analytics": {
        "min": 176,
        "max": 190,
        "events": 78,
        "entrances": 44,
        "exits": 34,
        "utilization": 59.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:45:00.000Z",
    "count": 190,
    "interval": {
      "start": "2019-01-11T16:45:00.000Z",
      "end": "2019-01-11T16:49:59.999Z",
      "analytics": {
        "min": 179,
        "max": 192,
        "events": 88,
        "entrances": 42,
        "exits": 46,
        "utilization": 60.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:50:00.000Z",
    "count": 186,
    "interval": {
      "start": "2019-01-11T16:50:00.000Z",
      "end": "2019-01-11T16:54:59.999Z",
      "analytics": {
        "min": 176,
        "max": 215,
        "events": 108,
        "entrances": 68,
        "exits": 40,
        "utilization": 67.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T16:55:00.000Z",
    "count": 214,
    "interval": {
      "start": "2019-01-11T16:55:00.000Z",
      "end": "2019-01-11T16:59:59.999Z",
      "analytics": {
        "min": 209,
        "max": 231,
        "events": 120,
        "entrances": 68,
        "exits": 52,
        "utilization": 72.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:00:00.000Z",
    "count": 230,
    "interval": {
      "start": "2019-01-11T17:00:00.000Z",
      "end": "2019-01-11T17:04:59.999Z",
      "analytics": {
        "min": 230,
        "max": 250,
        "events": 110,
        "entrances": 61,
        "exits": 49,
        "utilization": 78.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:05:00.000Z",
    "count": 242,
    "interval": {
      "start": "2019-01-11T17:05:00.000Z",
      "end": "2019-01-11T17:09:59.999Z",
      "analytics": {
        "min": 237,
        "max": 250,
        "events": 130,
        "entrances": 65,
        "exits": 65,
        "utilization": 78.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:10:00.000Z",
    "count": 242,
    "interval": {
      "start": "2019-01-11T17:10:00.000Z",
      "end": "2019-01-11T17:14:59.999Z",
      "analytics": {
        "min": 241,
        "max": 253,
        "events": 126,
        "entrances": 67,
        "exits": 59,
        "utilization": 79.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:15:00.000Z",
    "count": 250,
    "interval": {
      "start": "2019-01-11T17:15:00.000Z",
      "end": "2019-01-11T17:19:59.999Z",
      "analytics": {
        "min": 248,
        "max": 274,
        "events": 118,
        "entrances": 71,
        "exits": 47,
        "utilization": 85.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:20:00.000Z",
    "count": 274,
    "interval": {
      "start": "2019-01-11T17:20:00.000Z",
      "end": "2019-01-11T17:24:59.999Z",
      "analytics": {
        "min": 274,
        "max": 307,
        "events": 112,
        "entrances": 72,
        "exits": 40,
        "utilization": 95.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:25:00.000Z",
    "count": 306,
    "interval": {
      "start": "2019-01-11T17:25:00.000Z",
      "end": "2019-01-11T17:29:59.999Z",
      "analytics": {
        "min": 297,
        "max": 308,
        "events": 100,
        "entrances": 46,
        "exits": 54,
        "utilization": 96.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:30:00.000Z",
    "count": 298,
    "interval": {
      "start": "2019-01-11T17:30:00.000Z",
      "end": "2019-01-11T17:34:59.999Z",
      "analytics": {
        "min": 274,
        "max": 298,
        "events": 121,
        "entrances": 50,
        "exits": 71,
        "utilization": 92.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:35:00.000Z",
    "count": 277,
    "interval": {
      "start": "2019-01-11T17:35:00.000Z",
      "end": "2019-01-11T17:39:59.999Z",
      "analytics": {
        "min": 259,
        "max": 277,
        "events": 104,
        "entrances": 43,
        "exits": 61,
        "utilization": 86.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:40:00.000Z",
    "count": 259,
    "interval": {
      "start": "2019-01-11T17:40:00.000Z",
      "end": "2019-01-11T17:44:59.999Z",
      "analytics": {
        "min": 255,
        "max": 264,
        "events": 116,
        "entrances": 58,
        "exits": 58,
        "utilization": 82.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:45:00.000Z",
    "count": 259,
    "interval": {
      "start": "2019-01-11T17:45:00.000Z",
      "end": "2019-01-11T17:49:59.999Z",
      "analytics": {
        "min": 243,
        "max": 261,
        "events": 114,
        "entrances": 49,
        "exits": 65,
        "utilization": 81.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:50:00.000Z",
    "count": 243,
    "interval": {
      "start": "2019-01-11T17:50:00.000Z",
      "end": "2019-01-11T17:54:59.999Z",
      "analytics": {
        "min": 214,
        "max": 243,
        "events": 115,
        "entrances": 47,
        "exits": 68,
        "utilization": 75.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T17:55:00.000Z",
    "count": 222,
    "interval": {
      "start": "2019-01-11T17:55:00.000Z",
      "end": "2019-01-11T17:59:59.999Z",
      "analytics": {
        "min": 200,
        "max": 227,
        "events": 104,
        "entrances": 41,
        "exits": 63,
        "utilization": 70.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:00:00.000Z",
    "count": 200,
    "interval": {
      "start": "2019-01-11T18:00:00.000Z",
      "end": "2019-01-11T18:04:59.999Z",
      "analytics": {
        "min": 187,
        "max": 201,
        "events": 99,
        "entrances": 44,
        "exits": 55,
        "utilization": 62.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:05:00.000Z",
    "count": 189,
    "interval": {
      "start": "2019-01-11T18:05:00.000Z",
      "end": "2019-01-11T18:09:59.999Z",
      "analytics": {
        "min": 171,
        "max": 191,
        "events": 113,
        "entrances": 49,
        "exits": 64,
        "utilization": 59.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:10:00.000Z",
    "count": 174,
    "interval": {
      "start": "2019-01-11T18:10:00.000Z",
      "end": "2019-01-11T18:14:59.999Z",
      "analytics": {
        "min": 158,
        "max": 174,
        "events": 96,
        "entrances": 42,
        "exits": 54,
        "utilization": 54.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:15:00.000Z",
    "count": 162,
    "interval": {
      "start": "2019-01-11T18:15:00.000Z",
      "end": "2019-01-11T18:19:59.999Z",
      "analytics": {
        "min": 155,
        "max": 163,
        "events": 89,
        "entrances": 45,
        "exits": 44,
        "utilization": 50.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:20:00.000Z",
    "count": 163,
    "interval": {
      "start": "2019-01-11T18:20:00.000Z",
      "end": "2019-01-11T18:24:59.999Z",
      "analytics": {
        "min": 148,
        "max": 163,
        "events": 70,
        "entrances": 30,
        "exits": 40,
        "utilization": 50.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:25:00.000Z",
    "count": 153,
    "interval": {
      "start": "2019-01-11T18:25:00.000Z",
      "end": "2019-01-11T18:29:59.999Z",
      "analytics": {
        "min": 149,
        "max": 156,
        "events": 79,
        "entrances": 40,
        "exits": 39,
        "utilization": 48.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:30:00.000Z",
    "count": 154,
    "interval": {
      "start": "2019-01-11T18:30:00.000Z",
      "end": "2019-01-11T18:34:59.999Z",
      "analytics": {
        "min": 151,
        "max": 163,
        "events": 63,
        "entrances": 30,
        "exits": 33,
        "utilization": 50.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:35:00.000Z",
    "count": 151,
    "interval": {
      "start": "2019-01-11T18:35:00.000Z",
      "end": "2019-01-11T18:39:59.999Z",
      "analytics": {
        "min": 137,
        "max": 152,
        "events": 75,
        "entrances": 31,
        "exits": 44,
        "utilization": 47.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:40:00.000Z",
    "count": 138,
    "interval": {
      "start": "2019-01-11T18:40:00.000Z",
      "end": "2019-01-11T18:44:59.999Z",
      "analytics": {
        "min": 107,
        "max": 138,
        "events": 69,
        "entrances": 19,
        "exits": 50,
        "utilization": 42.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:45:00.000Z",
    "count": 107,
    "interval": {
      "start": "2019-01-11T18:45:00.000Z",
      "end": "2019-01-11T18:49:59.999Z",
      "analytics": {
        "min": 78,
        "max": 107,
        "events": 57,
        "entrances": 14,
        "exits": 43,
        "utilization": 33.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:50:00.000Z",
    "count": 78,
    "interval": {
      "start": "2019-01-11T18:50:00.000Z",
      "end": "2019-01-11T18:54:59.999Z",
      "analytics": {
        "min": 67,
        "max": 79,
        "events": 65,
        "entrances": 27,
        "exits": 38,
        "utilization": 24.69
      }
    }
  },
  {
    "timestamp": "2019-01-11T18:55:00.000Z",
    "count": 67,
    "interval": {
      "start": "2019-01-11T18:55:00.000Z",
      "end": "2019-01-11T18:59:59.999Z",
      "analytics": {
        "min": 54,
        "max": 67,
        "events": 46,
        "entrances": 18,
        "exits": 28,
        "utilization": 20.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:00:00.000Z",
    "count": 57,
    "interval": {
      "start": "2019-01-11T19:00:00.000Z",
      "end": "2019-01-11T19:04:59.999Z",
      "analytics": {
        "min": 44,
        "max": 58,
        "events": 61,
        "entrances": 24,
        "exits": 37,
        "utilization": 18.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:05:00.000Z",
    "count": 44,
    "interval": {
      "start": "2019-01-11T19:05:00.000Z",
      "end": "2019-01-11T19:09:59.999Z",
      "analytics": {
        "min": 38,
        "max": 45,
        "events": 30,
        "entrances": 14,
        "exits": 16,
        "utilization": 14.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:10:00.000Z",
    "count": 42,
    "interval": {
      "start": "2019-01-11T19:10:00.000Z",
      "end": "2019-01-11T19:14:59.999Z",
      "analytics": {
        "min": 25,
        "max": 42,
        "events": 45,
        "entrances": 14,
        "exits": 31,
        "utilization": 12.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:15:00.000Z",
    "count": 25,
    "interval": {
      "start": "2019-01-11T19:15:00.000Z",
      "end": "2019-01-11T19:19:59.999Z",
      "analytics": {
        "min": 19,
        "max": 29,
        "events": 38,
        "entrances": 18,
        "exits": 20,
        "utilization": 9.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:20:00.000Z",
    "count": 23,
    "interval": {
      "start": "2019-01-11T19:20:00.000Z",
      "end": "2019-01-11T19:24:59.999Z",
      "analytics": {
        "min": 23,
        "max": 30,
        "events": 27,
        "entrances": 17,
        "exits": 10,
        "utilization": 9.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:25:00.000Z",
    "count": 30,
    "interval": {
      "start": "2019-01-11T19:25:00.000Z",
      "end": "2019-01-11T19:29:59.999Z",
      "analytics": {
        "min": 25,
        "max": 32,
        "events": 37,
        "entrances": 16,
        "exits": 21,
        "utilization": 10.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:30:00.000Z",
    "count": 25,
    "interval": {
      "start": "2019-01-11T19:30:00.000Z",
      "end": "2019-01-11T19:34:59.999Z",
      "analytics": {
        "min": 24,
        "max": 32,
        "events": 41,
        "entrances": 23,
        "exits": 18,
        "utilization": 10.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:35:00.000Z",
    "count": 30,
    "interval": {
      "start": "2019-01-11T19:35:00.000Z",
      "end": "2019-01-11T19:39:59.999Z",
      "analytics": {
        "min": 21,
        "max": 33,
        "events": 30,
        "entrances": 12,
        "exits": 18,
        "utilization": 10.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:40:00.000Z",
    "count": 24,
    "interval": {
      "start": "2019-01-11T19:40:00.000Z",
      "end": "2019-01-11T19:44:59.999Z",
      "analytics": {
        "min": 14,
        "max": 24,
        "events": 35,
        "entrances": 13,
        "exits": 22,
        "utilization": 7.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:45:00.000Z",
    "count": 15,
    "interval": {
      "start": "2019-01-11T19:45:00.000Z",
      "end": "2019-01-11T19:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 15,
        "events": 37,
        "entrances": 14,
        "exits": 23,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T19:50:00.000Z",
      "end": "2019-01-11T19:54:59.999Z",
      "analytics": {
        "min": 3,
        "max": 9,
        "events": 36,
        "entrances": 17,
        "exits": 19,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T19:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T19:55:00.000Z",
      "end": "2019-01-11T19:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 8,
        "events": 23,
        "entrances": 10,
        "exits": 13,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T20:00:00.000Z",
      "end": "2019-01-11T20:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 6,
        "events": 27,
        "entrances": 11,
        "exits": 16,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:05:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T20:05:00.000Z",
      "end": "2019-01-11T20:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 7,
        "events": 23,
        "entrances": 13,
        "exits": 10,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:10:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T20:10:00.000Z",
      "end": "2019-01-11T20:14:59.999Z",
      "analytics": {
        "min": 4,
        "max": 8,
        "events": 18,
        "entrances": 8,
        "exits": 10,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:15:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T20:15:00.000Z",
      "end": "2019-01-11T20:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 9,
        "events": 25,
        "entrances": 12,
        "exits": 13,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T20:20:00.000Z",
      "end": "2019-01-11T20:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 29,
        "entrances": 13,
        "exits": 16,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T20:25:00.000Z",
      "end": "2019-01-11T20:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 23,
        "entrances": 10,
        "exits": 13,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T20:30:00.000Z",
      "end": "2019-01-11T20:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 17,
        "entrances": 5,
        "exits": 12,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T20:35:00.000Z",
      "end": "2019-01-11T20:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 23,
        "entrances": 4,
        "exits": 19,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T20:40:00.000Z",
      "end": "2019-01-11T20:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 15,
        "entrances": 7,
        "exits": 8,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:45:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T20:45:00.000Z",
      "end": "2019-01-11T20:49:59.999Z",
      "analytics": {
        "min": 0,
        "max": 5,
        "events": 25,
        "entrances": 12,
        "exits": 13,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T20:50:00.000Z",
      "end": "2019-01-11T20:54:59.999Z",
      "analytics": {
        "min": 2,
        "max": 6,
        "events": 22,
        "entrances": 10,
        "exits": 12,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T20:55:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T20:55:00.000Z",
      "end": "2019-01-11T20:59:59.999Z",
      "analytics": {
        "min": 2,
        "max": 7,
        "events": 23,
        "entrances": 12,
        "exits": 11,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T21:00:00.000Z",
      "end": "2019-01-11T21:04:59.999Z",
      "analytics": {
        "min": 3,
        "max": 8,
        "events": 19,
        "entrances": 10,
        "exits": 9,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:05:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T21:05:00.000Z",
      "end": "2019-01-11T21:09:59.999Z",
      "analytics": {
        "min": 4,
        "max": 9,
        "events": 20,
        "entrances": 11,
        "exits": 9,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:10:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T21:10:00.000Z",
      "end": "2019-01-11T21:14:59.999Z",
      "analytics": {
        "min": 6,
        "max": 12,
        "events": 17,
        "entrances": 10,
        "exits": 7,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:15:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T21:15:00.000Z",
      "end": "2019-01-11T21:19:59.999Z",
      "analytics": {
        "min": 2,
        "max": 9,
        "events": 15,
        "entrances": 4,
        "exits": 11,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:20:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T21:20:00.000Z",
      "end": "2019-01-11T21:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 16,
        "entrances": 8,
        "exits": 8,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T21:25:00.000Z",
      "end": "2019-01-11T21:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 16,
        "entrances": 7,
        "exits": 9,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:30:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T21:30:00.000Z",
      "end": "2019-01-11T21:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 22,
        "entrances": 7,
        "exits": 15,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:35:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T21:35:00.000Z",
      "end": "2019-01-11T21:39:59.999Z",
      "analytics": {
        "min": 2,
        "max": 6,
        "events": 15,
        "entrances": 8,
        "exits": 7,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:40:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T21:40:00.000Z",
      "end": "2019-01-11T21:44:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 15,
        "entrances": 8,
        "exits": 7,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T21:45:00.000Z",
      "end": "2019-01-11T21:49:59.999Z",
      "analytics": {
        "min": 4,
        "max": 11,
        "events": 20,
        "entrances": 12,
        "exits": 8,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:50:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T21:50:00.000Z",
      "end": "2019-01-11T21:54:59.999Z",
      "analytics": {
        "min": 6,
        "max": 10,
        "events": 7,
        "entrances": 2,
        "exits": 5,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-11T21:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T21:55:00.000Z",
      "end": "2019-01-11T21:59:59.999Z",
      "analytics": {
        "min": 4,
        "max": 7,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:00:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T22:00:00.000Z",
      "end": "2019-01-11T22:04:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:05:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-11T22:05:00.000Z",
      "end": "2019-01-11T22:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:10:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T22:10:00.000Z",
      "end": "2019-01-11T22:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 5,
        "events": 9,
        "entrances": 4,
        "exits": 5,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:15:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T22:15:00.000Z",
      "end": "2019-01-11T22:19:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 7,
        "entrances": 3,
        "exits": 4,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:20:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T22:20:00.000Z",
      "end": "2019-01-11T22:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:25:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T22:25:00.000Z",
      "end": "2019-01-11T22:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 8,
        "entrances": 4,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:30:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T22:30:00.000Z",
      "end": "2019-01-11T22:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-11T22:35:00.000Z",
      "end": "2019-01-11T22:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 0.0
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:40:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-11T22:40:00.000Z",
      "end": "2019-01-11T22:44:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:45:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-11T22:45:00.000Z",
      "end": "2019-01-11T22:49:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-11T22:50:00.000Z",
      "end": "2019-01-11T22:54:59.999Z",
      "analytics": {
        "min": 4,
        "max": 6,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-11T22:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T22:55:00.000Z",
      "end": "2019-01-11T22:59:59.999Z",
      "analytics": {
        "min": 4,
        "max": 7,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:00:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T23:00:00.000Z",
      "end": "2019-01-11T23:04:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:05:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T23:05:00.000Z",
      "end": "2019-01-11T23:09:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:10:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T23:10:00.000Z",
      "end": "2019-01-11T23:14:59.999Z",
      "analytics": {
        "min": 5,
        "max": 9,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:15:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-11T23:15:00.000Z",
      "end": "2019-01-11T23:19:59.999Z",
      "analytics": {
        "min": 4,
        "max": 7,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:20:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-11T23:20:00.000Z",
      "end": "2019-01-11T23:24:59.999Z",
      "analytics": {
        "min": 4,
        "max": 7,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:25:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-11T23:25:00.000Z",
      "end": "2019-01-11T23:29:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:30:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T23:30:00.000Z",
      "end": "2019-01-11T23:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:35:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-11T23:35:00.000Z",
      "end": "2019-01-11T23:39:59.999Z",
      "analytics": {
        "min": 8,
        "max": 9,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-11T23:40:00.000Z",
      "end": "2019-01-11T23:44:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:45:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-11T23:45:00.000Z",
      "end": "2019-01-11T23:49:59.999Z",
      "analytics": {
        "min": 10,
        "max": 14,
        "events": 8,
        "entrances": 5,
        "exits": 3,
        "utilization": 4.38
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:50:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-11T23:50:00.000Z",
      "end": "2019-01-11T23:54:59.999Z",
      "analytics": {
        "min": 12,
        "max": 13,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-11T23:55:00.000Z",
    "count": 12,
    "interval": {
      "start": "2019-01-11T23:55:00.000Z",
      "end": "2019-01-11T23:59:59.999Z",
      "analytics": {
        "min": 10,
        "max": 12,
        "events": 5,
        "entrances": 2,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:00:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-12T00:00:00.000Z",
      "end": "2019-01-12T00:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:05:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-12T00:05:00.000Z",
      "end": "2019-01-12T00:09:59.999Z",
      "analytics": {
        "min": 9,
        "max": 12,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 3.75
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:10:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T00:10:00.000Z",
      "end": "2019-01-12T00:14:59.999Z",
      "analytics": {
        "min": 9,
        "max": 13,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 4.06
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:15:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-12T00:15:00.000Z",
      "end": "2019-01-12T00:19:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:20:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-12T00:20:00.000Z",
      "end": "2019-01-12T00:24:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:25:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T00:25:00.000Z",
      "end": "2019-01-12T00:29:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T00:30:00.000Z",
      "end": "2019-01-12T00:34:59.999Z",
      "analytics": {
        "min": 7,
        "max": 9,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:35:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T00:35:00.000Z",
      "end": "2019-01-12T00:39:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:40:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T00:40:00.000Z",
      "end": "2019-01-12T00:44:59.999Z",
      "analytics": {
        "min": 8,
        "max": 10,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 3.12
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:45:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T00:45:00.000Z",
      "end": "2019-01-12T00:49:59.999Z",
      "analytics": {
        "min": 9,
        "max": 11,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:50:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-12T00:50:00.000Z",
      "end": "2019-01-12T00:54:59.999Z",
      "analytics": {
        "min": 11,
        "max": 11,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T00:55:00.000Z",
    "count": 11,
    "interval": {
      "start": "2019-01-12T00:55:00.000Z",
      "end": "2019-01-12T00:59:59.999Z",
      "analytics": {
        "min": 10,
        "max": 11,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 3.44
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:00:00.000Z",
    "count": 10,
    "interval": {
      "start": "2019-01-12T01:00:00.000Z",
      "end": "2019-01-12T01:04:59.999Z",
      "analytics": {
        "min": 9,
        "max": 10,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.81
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:05:00.000Z",
    "count": 9,
    "interval": {
      "start": "2019-01-12T01:05:00.000Z",
      "end": "2019-01-12T01:09:59.999Z",
      "analytics": {
        "min": 6,
        "max": 9,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:10:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-12T01:10:00.000Z",
      "end": "2019-01-12T01:14:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:15:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T01:15:00.000Z",
      "end": "2019-01-12T01:19:59.999Z",
      "analytics": {
        "min": 7,
        "max": 7,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:20:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T01:20:00.000Z",
      "end": "2019-01-12T01:24:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:25:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T01:25:00.000Z",
      "end": "2019-01-12T01:29:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 2,
        "entrances": 2,
        "exits": 0,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:30:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T01:30:00.000Z",
      "end": "2019-01-12T01:34:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 2,
        "entrances": 0,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:35:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T01:35:00.000Z",
      "end": "2019-01-12T01:39:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:40:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T01:40:00.000Z",
      "end": "2019-01-12T01:44:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:45:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T01:45:00.000Z",
      "end": "2019-01-12T01:49:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T01:50:00.000Z",
      "end": "2019-01-12T01:54:59.999Z",
      "analytics": {
        "min": 4,
        "max": 4,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T01:55:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T01:55:00.000Z",
      "end": "2019-01-12T01:59:59.999Z",
      "analytics": {
        "min": 4,
        "max": 5,
        "events": 1,
        "entrances": 1,
        "exits": 0,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:00:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T02:00:00.000Z",
      "end": "2019-01-12T02:04:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:05:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T02:05:00.000Z",
      "end": "2019-01-12T02:09:59.999Z",
      "analytics": {
        "min": 5,
        "max": 6,
        "events": 2,
        "entrances": 1,
        "exits": 1,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:10:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T02:10:00.000Z",
      "end": "2019-01-12T02:14:59.999Z",
      "analytics": {
        "min": 3,
        "max": 6,
        "events": 6,
        "entrances": 2,
        "exits": 4,
        "utilization": 1.88
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:15:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T02:15:00.000Z",
      "end": "2019-01-12T02:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 4,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:20:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T02:20:00.000Z",
      "end": "2019-01-12T02:24:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 6,
        "entrances": 0,
        "exits": 6,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:25:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-12T02:25:00.000Z",
      "end": "2019-01-12T02:29:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 3,
        "entrances": 3,
        "exits": 0,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T02:30:00.000Z",
      "end": "2019-01-12T02:34:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:35:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T02:35:00.000Z",
      "end": "2019-01-12T02:39:59.999Z",
      "analytics": {
        "min": 3,
        "max": 8,
        "events": 6,
        "entrances": 5,
        "exits": 1,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:40:00.000Z",
    "count": 8,
    "interval": {
      "start": "2019-01-12T02:40:00.000Z",
      "end": "2019-01-12T02:44:59.999Z",
      "analytics": {
        "min": 7,
        "max": 8,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:45:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T02:45:00.000Z",
      "end": "2019-01-12T02:49:59.999Z",
      "analytics": {
        "min": 6,
        "max": 7,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:50:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-12T02:50:00.000Z",
      "end": "2019-01-12T02:54:59.999Z",
      "analytics": {
        "min": 6,
        "max": 8,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-12T02:55:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-12T02:55:00.000Z",
      "end": "2019-01-12T02:59:59.999Z",
      "analytics": {
        "min": 6,
        "max": 6,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:00:00.000Z",
    "count": 6,
    "interval": {
      "start": "2019-01-12T03:00:00.000Z",
      "end": "2019-01-12T03:04:59.999Z",
      "analytics": {
        "min": 5,
        "max": 7,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 2.19
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:05:00.000Z",
    "count": 7,
    "interval": {
      "start": "2019-01-12T03:05:00.000Z",
      "end": "2019-01-12T03:09:59.999Z",
      "analytics": {
        "min": 4,
        "max": 8,
        "events": 5,
        "entrances": 1,
        "exits": 4,
        "utilization": 2.5
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:10:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T03:10:00.000Z",
      "end": "2019-01-12T03:14:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 7,
        "entrances": 4,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:15:00.000Z",
    "count": 5,
    "interval": {
      "start": "2019-01-12T03:15:00.000Z",
      "end": "2019-01-12T03:19:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 4,
        "entrances": 1,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:20:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T03:20:00.000Z",
      "end": "2019-01-12T03:24:59.999Z",
      "analytics": {
        "min": 2,
        "max": 4,
        "events": 4,
        "entrances": 2,
        "exits": 2,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:25:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T03:25:00.000Z",
      "end": "2019-01-12T03:29:59.999Z",
      "analytics": {
        "min": 2,
        "max": 5,
        "events": 6,
        "entrances": 3,
        "exits": 3,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:30:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T03:30:00.000Z",
      "end": "2019-01-12T03:34:59.999Z",
      "analytics": {
        "min": 0,
        "max": 3,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:35:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-12T03:35:00.000Z",
      "end": "2019-01-12T03:39:59.999Z",
      "analytics": {
        "min": 0,
        "max": 2,
        "events": 6,
        "entrances": 4,
        "exits": 2,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:40:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-12T03:40:00.000Z",
      "end": "2019-01-12T03:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 3,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:45:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T03:45:00.000Z",
      "end": "2019-01-12T03:49:59.999Z",
      "analytics": {
        "min": 3,
        "max": 5,
        "events": 5,
        "entrances": 3,
        "exits": 2,
        "utilization": 1.56
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:50:00.000Z",
    "count": 4,
    "interval": {
      "start": "2019-01-12T03:50:00.000Z",
      "end": "2019-01-12T03:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 3,
        "entrances": 0,
        "exits": 3,
        "utilization": 0.94
      }
    }
  },
  {
    "timestamp": "2019-01-12T03:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T03:55:00.000Z",
      "end": "2019-01-12T03:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 4,
        "events": 4,
        "entrances": 3,
        "exits": 1,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:00:00.000Z",
    "count": 3,
    "interval": {
      "start": "2019-01-12T04:00:00.000Z",
      "end": "2019-01-12T04:04:59.999Z",
      "analytics": {
        "min": 0,
        "max": 4,
        "events": 7,
        "entrances": 2,
        "exits": 5,
        "utilization": 1.25
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:05:00.000Z",
    "count": 0,
    "interval": {
      "start": "2019-01-12T04:05:00.000Z",
      "end": "2019-01-12T04:09:59.999Z",
      "analytics": {
        "min": 0,
        "max": 1,
        "events": 3,
        "entrances": 1,
        "exits": 2,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:10:00.000Z",
      "end": "2019-01-12T04:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 3,
        "entrances": 2,
        "exits": 1,
        "utilization": 0.62
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:15:00.000Z",
    "count": 2,
    "interval": {
      "start": "2019-01-12T04:15:00.000Z",
      "end": "2019-01-12T04:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 2,
        "events": 1,
        "entrances": 0,
        "exits": 1,
        "utilization": 0.31
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:20:00.000Z",
      "end": "2019-01-12T04:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:25:00.000Z",
      "end": "2019-01-12T04:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:30:00.000Z",
      "end": "2019-01-12T04:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:35:00.000Z",
      "end": "2019-01-12T04:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:40:00.000Z",
      "end": "2019-01-12T04:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:45:00.000Z",
      "end": "2019-01-12T04:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:50:00.000Z",
      "end": "2019-01-12T04:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T04:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T04:55:00.000Z",
      "end": "2019-01-12T04:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:00:00.000Z",
      "end": "2019-01-12T05:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:05:00.000Z",
      "end": "2019-01-12T05:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:10:00.000Z",
      "end": "2019-01-12T05:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:15:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:15:00.000Z",
      "end": "2019-01-12T05:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:20:00.000Z",
      "end": "2019-01-12T05:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:25:00.000Z",
      "end": "2019-01-12T05:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:30:00.000Z",
      "end": "2019-01-12T05:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:35:00.000Z",
      "end": "2019-01-12T05:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:40:00.000Z",
      "end": "2019-01-12T05:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:45:00.000Z",
      "end": "2019-01-12T05:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:50:00.000Z",
      "end": "2019-01-12T05:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T05:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T05:55:00.000Z",
      "end": "2019-01-12T05:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:00:00.000Z",
      "end": "2019-01-12T06:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:05:00.000Z",
      "end": "2019-01-12T06:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:10:00.000Z",
      "end": "2019-01-12T06:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:15:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:15:00.000Z",
      "end": "2019-01-12T06:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:20:00.000Z",
      "end": "2019-01-12T06:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:25:00.000Z",
      "end": "2019-01-12T06:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:30:00.000Z",
      "end": "2019-01-12T06:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:35:00.000Z",
      "end": "2019-01-12T06:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:40:00.000Z",
      "end": "2019-01-12T06:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:45:00.000Z",
      "end": "2019-01-12T06:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:50:00.000Z",
      "end": "2019-01-12T06:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T06:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T06:55:00.000Z",
      "end": "2019-01-12T06:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:00:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:00:00.000Z",
      "end": "2019-01-12T07:04:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:05:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:05:00.000Z",
      "end": "2019-01-12T07:09:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:10:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:10:00.000Z",
      "end": "2019-01-12T07:14:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:15:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:15:00.000Z",
      "end": "2019-01-12T07:19:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:20:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:20:00.000Z",
      "end": "2019-01-12T07:24:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:25:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:25:00.000Z",
      "end": "2019-01-12T07:29:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:30:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:30:00.000Z",
      "end": "2019-01-12T07:34:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:35:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:35:00.000Z",
      "end": "2019-01-12T07:39:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:40:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:40:00.000Z",
      "end": "2019-01-12T07:44:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:45:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:45:00.000Z",
      "end": "2019-01-12T07:49:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:50:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:50:00.000Z",
      "end": "2019-01-12T07:54:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  },
  {
    "timestamp": "2019-01-12T07:55:00.000Z",
    "count": 1,
    "interval": {
      "start": "2019-01-12T07:55:00.000Z",
      "end": "2019-01-12T07:59:59.999Z",
      "analytics": {
        "min": 1,
        "max": 1,
        "events": 0,
        "entrances": 0,
        "exits": 0,
        "utilization": null
      }
    }
  }
].map(bucket => Object.assign({}, bucket, {timestamp: moment(bucket.timestamp)}))
