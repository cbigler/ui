import React from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReportHorizonChart, {
  ReportHorizonChartVisualization,
  CURVE_STEP,
  CURVE_BEZIER,
} from './index';

storiesOf('ReportHorizonChart', module)
  .addWithInfo('Horizon chart on its own', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportHorizonChartVisualization
        id="layer1"
        trackHeight={36}
        trackVerticalSpacing={12}
        trackCurveType={CURVE_BEZIER}
        // trackCurveType={CURVE_STEP}
        title="Horizon Chart"
        startDate={moment('2018-12-17T00:00:00.000-04:00')}
        endDate={moment('2018-12-17T23:59:59.999-04:00')}
        space={{id: 'spc_xxx', name: 'Space 1', timeZone: 'America/New_York'}}
        data={[DATA, DATA, DATA]}
      />
    </div>
  ))
  .addWithInfo('Horizon chart report', () => (
    <div style={{width: 'auto', paddingTop: 100}}>
      <ReportHorizonChart
        title="Horizon Chart"
        startDate={moment('2018-12-17T00:00:00.000-04:00')}
        endDate={moment('2018-12-17T23:59:59.999-04:00')}
        spaces={[
          {
            id: 'spc_xxx',
            name: 'My Space',
            data: DATA,
          },
          {
            id: 'spc_abc',
            name: 'My Space Two',
            data: DATA,
          },
        ]}

        trackHeight={36}
        trackVerticalSpacing={12}
        trackCurveType={CURVE_BEZIER}
        // trackCurveType={CURVE_STEP}
      />
    </div>
  ))

const DATA = [
	{
		"timestamp": "2018-12-18T04:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:55:00.000Z",
			"end": "2018-12-18T04:59:59.999Z",
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
		"timestamp": "2018-12-18T04:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:50:00.000Z",
			"end": "2018-12-18T04:54:59.999Z",
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
		"timestamp": "2018-12-18T04:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:45:00.000Z",
			"end": "2018-12-18T04:49:59.999Z",
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
		"timestamp": "2018-12-18T04:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:40:00.000Z",
			"end": "2018-12-18T04:44:59.999Z",
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
		"timestamp": "2018-12-18T04:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:35:00.000Z",
			"end": "2018-12-18T04:39:59.999Z",
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
		"timestamp": "2018-12-18T04:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:30:00.000Z",
			"end": "2018-12-18T04:34:59.999Z",
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
		"timestamp": "2018-12-18T04:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:25:00.000Z",
			"end": "2018-12-18T04:29:59.999Z",
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
		"timestamp": "2018-12-18T04:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:20:00.000Z",
			"end": "2018-12-18T04:24:59.999Z",
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
		"timestamp": "2018-12-18T04:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:15:00.000Z",
			"end": "2018-12-18T04:19:59.999Z",
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
		"timestamp": "2018-12-18T04:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:10:00.000Z",
			"end": "2018-12-18T04:14:59.999Z",
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
		"timestamp": "2018-12-18T04:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:05:00.000Z",
			"end": "2018-12-18T04:09:59.999Z",
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
		"timestamp": "2018-12-18T04:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T04:00:00.000Z",
			"end": "2018-12-18T04:04:59.999Z",
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
		"timestamp": "2018-12-18T03:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:55:00.000Z",
			"end": "2018-12-18T03:59:59.999Z",
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
		"timestamp": "2018-12-18T03:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:50:00.000Z",
			"end": "2018-12-18T03:54:59.999Z",
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
		"timestamp": "2018-12-18T03:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:45:00.000Z",
			"end": "2018-12-18T03:49:59.999Z",
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
		"timestamp": "2018-12-18T03:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:40:00.000Z",
			"end": "2018-12-18T03:44:59.999Z",
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
		"timestamp": "2018-12-18T03:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:35:00.000Z",
			"end": "2018-12-18T03:39:59.999Z",
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
		"timestamp": "2018-12-18T03:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:30:00.000Z",
			"end": "2018-12-18T03:34:59.999Z",
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
		"timestamp": "2018-12-18T03:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:25:00.000Z",
			"end": "2018-12-18T03:29:59.999Z",
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
		"timestamp": "2018-12-18T03:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:20:00.000Z",
			"end": "2018-12-18T03:24:59.999Z",
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
		"timestamp": "2018-12-18T03:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:15:00.000Z",
			"end": "2018-12-18T03:19:59.999Z",
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
		"timestamp": "2018-12-18T03:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:10:00.000Z",
			"end": "2018-12-18T03:14:59.999Z",
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
		"timestamp": "2018-12-18T03:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:05:00.000Z",
			"end": "2018-12-18T03:09:59.999Z",
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
		"timestamp": "2018-12-18T03:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T03:00:00.000Z",
			"end": "2018-12-18T03:04:59.999Z",
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
		"timestamp": "2018-12-18T02:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:55:00.000Z",
			"end": "2018-12-18T02:59:59.999Z",
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
		"timestamp": "2018-12-18T02:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:50:00.000Z",
			"end": "2018-12-18T02:54:59.999Z",
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
		"timestamp": "2018-12-18T02:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:45:00.000Z",
			"end": "2018-12-18T02:49:59.999Z",
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
		"timestamp": "2018-12-18T02:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:40:00.000Z",
			"end": "2018-12-18T02:44:59.999Z",
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
		"timestamp": "2018-12-18T02:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:35:00.000Z",
			"end": "2018-12-18T02:39:59.999Z",
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
		"timestamp": "2018-12-18T02:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:30:00.000Z",
			"end": "2018-12-18T02:34:59.999Z",
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
		"timestamp": "2018-12-18T02:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:25:00.000Z",
			"end": "2018-12-18T02:29:59.999Z",
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
		"timestamp": "2018-12-18T02:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:20:00.000Z",
			"end": "2018-12-18T02:24:59.999Z",
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
		"timestamp": "2018-12-18T02:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:15:00.000Z",
			"end": "2018-12-18T02:19:59.999Z",
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
		"timestamp": "2018-12-18T02:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:10:00.000Z",
			"end": "2018-12-18T02:14:59.999Z",
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
		"timestamp": "2018-12-18T02:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:05:00.000Z",
			"end": "2018-12-18T02:09:59.999Z",
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
		"timestamp": "2018-12-18T02:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T02:00:00.000Z",
			"end": "2018-12-18T02:04:59.999Z",
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
		"timestamp": "2018-12-18T01:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:55:00.000Z",
			"end": "2018-12-18T01:59:59.999Z",
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
		"timestamp": "2018-12-18T01:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:50:00.000Z",
			"end": "2018-12-18T01:54:59.999Z",
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
		"timestamp": "2018-12-18T01:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:45:00.000Z",
			"end": "2018-12-18T01:49:59.999Z",
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
		"timestamp": "2018-12-18T01:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:40:00.000Z",
			"end": "2018-12-18T01:44:59.999Z",
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
		"timestamp": "2018-12-18T01:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:35:00.000Z",
			"end": "2018-12-18T01:39:59.999Z",
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
		"timestamp": "2018-12-18T01:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:30:00.000Z",
			"end": "2018-12-18T01:34:59.999Z",
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
		"timestamp": "2018-12-18T01:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:25:00.000Z",
			"end": "2018-12-18T01:29:59.999Z",
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
		"timestamp": "2018-12-18T01:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:20:00.000Z",
			"end": "2018-12-18T01:24:59.999Z",
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
		"timestamp": "2018-12-18T01:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:15:00.000Z",
			"end": "2018-12-18T01:19:59.999Z",
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
		"timestamp": "2018-12-18T01:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:10:00.000Z",
			"end": "2018-12-18T01:14:59.999Z",
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
		"timestamp": "2018-12-18T01:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:05:00.000Z",
			"end": "2018-12-18T01:09:59.999Z",
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
		"timestamp": "2018-12-18T01:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T01:00:00.000Z",
			"end": "2018-12-18T01:04:59.999Z",
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
		"timestamp": "2018-12-18T00:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:55:00.000Z",
			"end": "2018-12-18T00:59:59.999Z",
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
		"timestamp": "2018-12-18T00:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:50:00.000Z",
			"end": "2018-12-18T00:54:59.999Z",
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
		"timestamp": "2018-12-18T00:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:45:00.000Z",
			"end": "2018-12-18T00:49:59.999Z",
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
		"timestamp": "2018-12-18T00:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:40:00.000Z",
			"end": "2018-12-18T00:44:59.999Z",
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
		"timestamp": "2018-12-18T00:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:35:00.000Z",
			"end": "2018-12-18T00:39:59.999Z",
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
		"timestamp": "2018-12-18T00:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:30:00.000Z",
			"end": "2018-12-18T00:34:59.999Z",
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
		"timestamp": "2018-12-18T00:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:25:00.000Z",
			"end": "2018-12-18T00:29:59.999Z",
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
		"timestamp": "2018-12-18T00:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:20:00.000Z",
			"end": "2018-12-18T00:24:59.999Z",
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
		"timestamp": "2018-12-18T00:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:15:00.000Z",
			"end": "2018-12-18T00:19:59.999Z",
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
		"timestamp": "2018-12-18T00:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:10:00.000Z",
			"end": "2018-12-18T00:14:59.999Z",
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
		"timestamp": "2018-12-18T00:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:05:00.000Z",
			"end": "2018-12-18T00:09:59.999Z",
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
		"timestamp": "2018-12-18T00:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-18T00:00:00.000Z",
			"end": "2018-12-18T00:04:59.999Z",
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
		"timestamp": "2018-12-17T23:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:55:00.000Z",
			"end": "2018-12-17T23:59:59.999Z",
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
		"timestamp": "2018-12-17T23:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:50:00.000Z",
			"end": "2018-12-17T23:54:59.999Z",
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
		"timestamp": "2018-12-17T23:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:45:00.000Z",
			"end": "2018-12-17T23:49:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 3,
				"entrances": 0,
				"exits": 3,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:40:00.000Z",
			"end": "2018-12-17T23:44:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:35:00.000Z",
			"end": "2018-12-17T23:39:59.999Z",
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
		"timestamp": "2018-12-17T23:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:30:00.000Z",
			"end": "2018-12-17T23:34:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:25:00.000Z",
			"end": "2018-12-17T23:29:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:20:00.000Z",
			"end": "2018-12-17T23:24:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:15:00.000Z",
			"end": "2018-12-17T23:19:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:10:00.000Z",
			"end": "2018-12-17T23:14:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T23:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:05:00.000Z",
			"end": "2018-12-17T23:09:59.999Z",
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
		"timestamp": "2018-12-17T23:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T23:00:00.000Z",
			"end": "2018-12-17T23:04:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T22:55:00.000Z",
			"end": "2018-12-17T22:59:59.999Z",
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
		"timestamp": "2018-12-17T22:50:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T22:50:00.000Z",
			"end": "2018-12-17T22:54:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:45:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T22:45:00.000Z",
			"end": "2018-12-17T22:49:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 3,
				"entrances": 0,
				"exits": 3,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:40:00.000Z",
		"count": 6,
		"interval": {
			"start": "2018-12-17T22:40:00.000Z",
			"end": "2018-12-17T22:44:59.999Z",
			"analytics": {
				"min": 1,
				"max": 6,
				"events": 5,
				"entrances": 0,
				"exits": 5,
				"utilization": 8.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:35:00.000Z",
		"count": 7,
		"interval": {
			"start": "2018-12-17T22:35:00.000Z",
			"end": "2018-12-17T22:39:59.999Z",
			"analytics": {
				"min": 6,
				"max": 7,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 10
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:30:00.000Z",
		"count": 8,
		"interval": {
			"start": "2018-12-17T22:30:00.000Z",
			"end": "2018-12-17T22:34:59.999Z",
			"analytics": {
				"min": 7,
				"max": 8,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 11.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:25:00.000Z",
		"count": 12,
		"interval": {
			"start": "2018-12-17T22:25:00.000Z",
			"end": "2018-12-17T22:29:59.999Z",
			"analytics": {
				"min": 8,
				"max": 12,
				"events": 4,
				"entrances": 0,
				"exits": 4,
				"utilization": 18.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:20:00.000Z",
		"count": 17,
		"interval": {
			"start": "2018-12-17T22:20:00.000Z",
			"end": "2018-12-17T22:24:59.999Z",
			"analytics": {
				"min": 12,
				"max": 17,
				"events": 5,
				"entrances": 0,
				"exits": 5,
				"utilization": 26.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:15:00.000Z",
		"count": 22,
		"interval": {
			"start": "2018-12-17T22:15:00.000Z",
			"end": "2018-12-17T22:19:59.999Z",
			"analytics": {
				"min": 17,
				"max": 23,
				"events": 7,
				"entrances": 1,
				"exits": 6,
				"utilization": 38.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:10:00.000Z",
		"count": 23,
		"interval": {
			"start": "2018-12-17T22:10:00.000Z",
			"end": "2018-12-17T22:14:59.999Z",
			"analytics": {
				"min": 22,
				"max": 23,
				"events": 3,
				"entrances": 1,
				"exits": 2,
				"utilization": 38.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:05:00.000Z",
		"count": 25,
		"interval": {
			"start": "2018-12-17T22:05:00.000Z",
			"end": "2018-12-17T22:09:59.999Z",
			"analytics": {
				"min": 23,
				"max": 25,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 40
			}
		}
	},
	{
		"timestamp": "2018-12-17T22:00:00.000Z",
		"count": 27,
		"interval": {
			"start": "2018-12-17T22:00:00.000Z",
			"end": "2018-12-17T22:04:59.999Z",
			"analytics": {
				"min": 25,
				"max": 27,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 43.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:55:00.000Z",
		"count": 27,
		"interval": {
			"start": "2018-12-17T21:55:00.000Z",
			"end": "2018-12-17T21:59:59.999Z",
			"analytics": {
				"min": 26,
				"max": 28,
				"events": 4,
				"entrances": 2,
				"exits": 2,
				"utilization": 46.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:50:00.000Z",
		"count": 27,
		"interval": {
			"start": "2018-12-17T21:50:00.000Z",
			"end": "2018-12-17T21:54:59.999Z",
			"analytics": {
				"min": 27,
				"max": 28,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 46.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:45:00.000Z",
		"count": 27,
		"interval": {
			"start": "2018-12-17T21:45:00.000Z",
			"end": "2018-12-17T21:49:59.999Z",
			"analytics": {
				"min": 27,
				"max": 27,
				"events": 0,
				"entrances": 0,
				"exits": 0,
				"utilization": null
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:40:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T21:40:00.000Z",
			"end": "2018-12-17T21:44:59.999Z",
			"analytics": {
				"min": 27,
				"max": 29,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 46.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:35:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T21:35:00.000Z",
			"end": "2018-12-17T21:39:59.999Z",
			"analytics": {
				"min": 29,
				"max": 30,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:30:00.000Z",
		"count": 30,
		"interval": {
			"start": "2018-12-17T21:30:00.000Z",
			"end": "2018-12-17T21:34:59.999Z",
			"analytics": {
				"min": 29,
				"max": 30,
				"events": 3,
				"entrances": 1,
				"exits": 2,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:25:00.000Z",
		"count": 30,
		"interval": {
			"start": "2018-12-17T21:25:00.000Z",
			"end": "2018-12-17T21:29:59.999Z",
			"analytics": {
				"min": 29,
				"max": 30,
				"events": 4,
				"entrances": 2,
				"exits": 2,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:20:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T21:20:00.000Z",
			"end": "2018-12-17T21:24:59.999Z",
			"analytics": {
				"min": 26,
				"max": 30,
				"events": 7,
				"entrances": 4,
				"exits": 3,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:15:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T21:15:00.000Z",
			"end": "2018-12-17T21:19:59.999Z",
			"analytics": {
				"min": 29,
				"max": 32,
				"events": 8,
				"entrances": 4,
				"exits": 4,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:10:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T21:10:00.000Z",
			"end": "2018-12-17T21:14:59.999Z",
			"analytics": {
				"min": 29,
				"max": 30,
				"events": 6,
				"entrances": 3,
				"exits": 3,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:05:00.000Z",
		"count": 32,
		"interval": {
			"start": "2018-12-17T21:05:00.000Z",
			"end": "2018-12-17T21:09:59.999Z",
			"analytics": {
				"min": 26,
				"max": 32,
				"events": 13,
				"entrances": 5,
				"exits": 8,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T21:00:00.000Z",
		"count": 28,
		"interval": {
			"start": "2018-12-17T21:00:00.000Z",
			"end": "2018-12-17T21:04:59.999Z",
			"analytics": {
				"min": 27,
				"max": 32,
				"events": 14,
				"entrances": 9,
				"exits": 5,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:55:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T20:55:00.000Z",
			"end": "2018-12-17T20:59:59.999Z",
			"analytics": {
				"min": 27,
				"max": 31,
				"events": 9,
				"entrances": 4,
				"exits": 5,
				"utilization": 51.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:50:00.000Z",
		"count": 33,
		"interval": {
			"start": "2018-12-17T20:50:00.000Z",
			"end": "2018-12-17T20:54:59.999Z",
			"analytics": {
				"min": 29,
				"max": 33,
				"events": 12,
				"entrances": 4,
				"exits": 8,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:45:00.000Z",
		"count": 31,
		"interval": {
			"start": "2018-12-17T20:45:00.000Z",
			"end": "2018-12-17T20:49:59.999Z",
			"analytics": {
				"min": 31,
				"max": 34,
				"events": 14,
				"entrances": 8,
				"exits": 6,
				"utilization": 56.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:40:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T20:40:00.000Z",
			"end": "2018-12-17T20:44:59.999Z",
			"analytics": {
				"min": 30,
				"max": 35,
				"events": 8,
				"entrances": 2,
				"exits": 6,
				"utilization": 56.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:35:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T20:35:00.000Z",
			"end": "2018-12-17T20:39:59.999Z",
			"analytics": {
				"min": 35,
				"max": 43,
				"events": 18,
				"entrances": 5,
				"exits": 13,
				"utilization": 71.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:30:00.000Z",
		"count": 46,
		"interval": {
			"start": "2018-12-17T20:30:00.000Z",
			"end": "2018-12-17T20:34:59.999Z",
			"analytics": {
				"min": 43,
				"max": 47,
				"events": 5,
				"entrances": 1,
				"exits": 4,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:25:00.000Z",
		"count": 41,
		"interval": {
			"start": "2018-12-17T20:25:00.000Z",
			"end": "2018-12-17T20:29:59.999Z",
			"analytics": {
				"min": 40,
				"max": 46,
				"events": 9,
				"entrances": 7,
				"exits": 2,
				"utilization": 76.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:20:00.000Z",
		"count": 38,
		"interval": {
			"start": "2018-12-17T20:20:00.000Z",
			"end": "2018-12-17T20:24:59.999Z",
			"analytics": {
				"min": 37,
				"max": 41,
				"events": 13,
				"entrances": 8,
				"exits": 5,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:15:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T20:15:00.000Z",
			"end": "2018-12-17T20:19:59.999Z",
			"analytics": {
				"min": 38,
				"max": 42,
				"events": 4,
				"entrances": 0,
				"exits": 4,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:10:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T20:10:00.000Z",
			"end": "2018-12-17T20:14:59.999Z",
			"analytics": {
				"min": 41,
				"max": 44,
				"events": 15,
				"entrances": 7,
				"exits": 8,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:05:00.000Z",
		"count": 48,
		"interval": {
			"start": "2018-12-17T20:05:00.000Z",
			"end": "2018-12-17T20:09:59.999Z",
			"analytics": {
				"min": 42,
				"max": 48,
				"events": 17,
				"entrances": 6,
				"exits": 11,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T20:00:00.000Z",
		"count": 47,
		"interval": {
			"start": "2018-12-17T20:00:00.000Z",
			"end": "2018-12-17T20:04:59.999Z",
			"analytics": {
				"min": 47,
				"max": 48,
				"events": 7,
				"entrances": 4,
				"exits": 3,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:55:00.000Z",
		"count": 45,
		"interval": {
			"start": "2018-12-17T19:55:00.000Z",
			"end": "2018-12-17T19:59:59.999Z",
			"analytics": {
				"min": 40,
				"max": 48,
				"events": 18,
				"entrances": 10,
				"exits": 8,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:50:00.000Z",
		"count": 48,
		"interval": {
			"start": "2018-12-17T19:50:00.000Z",
			"end": "2018-12-17T19:54:59.999Z",
			"analytics": {
				"min": 43,
				"max": 48,
				"events": 13,
				"entrances": 5,
				"exits": 8,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:45:00.000Z",
		"count": 46,
		"interval": {
			"start": "2018-12-17T19:45:00.000Z",
			"end": "2018-12-17T19:49:59.999Z",
			"analytics": {
				"min": 46,
				"max": 49,
				"events": 10,
				"entrances": 6,
				"exits": 4,
				"utilization": 81.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:40:00.000Z",
		"count": 49,
		"interval": {
			"start": "2018-12-17T19:40:00.000Z",
			"end": "2018-12-17T19:44:59.999Z",
			"analytics": {
				"min": 43,
				"max": 49,
				"events": 17,
				"entrances": 7,
				"exits": 10,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:35:00.000Z",
		"count": 50,
		"interval": {
			"start": "2018-12-17T19:35:00.000Z",
			"end": "2018-12-17T19:39:59.999Z",
			"analytics": {
				"min": 48,
				"max": 53,
				"events": 17,
				"entrances": 8,
				"exits": 9,
				"utilization": 88.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:30:00.000Z",
		"count": 45,
		"interval": {
			"start": "2018-12-17T19:30:00.000Z",
			"end": "2018-12-17T19:34:59.999Z",
			"analytics": {
				"min": 44,
				"max": 51,
				"events": 17,
				"entrances": 11,
				"exits": 6,
				"utilization": 85
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:25:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T19:25:00.000Z",
			"end": "2018-12-17T19:29:59.999Z",
			"analytics": {
				"min": 41,
				"max": 47,
				"events": 9,
				"entrances": 6,
				"exits": 3,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:20:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T19:20:00.000Z",
			"end": "2018-12-17T19:24:59.999Z",
			"analytics": {
				"min": 42,
				"max": 45,
				"events": 8,
				"entrances": 4,
				"exits": 4,
				"utilization": 75
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:15:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T19:15:00.000Z",
			"end": "2018-12-17T19:19:59.999Z",
			"analytics": {
				"min": 37,
				"max": 43,
				"events": 16,
				"entrances": 8,
				"exits": 8,
				"utilization": 71.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:10:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T19:10:00.000Z",
			"end": "2018-12-17T19:14:59.999Z",
			"analytics": {
				"min": 42,
				"max": 44,
				"events": 8,
				"entrances": 4,
				"exits": 4,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:05:00.000Z",
		"count": 41,
		"interval": {
			"start": "2018-12-17T19:05:00.000Z",
			"end": "2018-12-17T19:09:59.999Z",
			"analytics": {
				"min": 38,
				"max": 43,
				"events": 13,
				"entrances": 7,
				"exits": 6,
				"utilization": 71.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T19:00:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T19:00:00.000Z",
			"end": "2018-12-17T19:04:59.999Z",
			"analytics": {
				"min": 36,
				"max": 41,
				"events": 10,
				"entrances": 7,
				"exits": 3,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:55:00.000Z",
		"count": 40,
		"interval": {
			"start": "2018-12-17T18:55:00.000Z",
			"end": "2018-12-17T18:59:59.999Z",
			"analytics": {
				"min": 37,
				"max": 41,
				"events": 15,
				"entrances": 6,
				"exits": 9,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:50:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T18:50:00.000Z",
			"end": "2018-12-17T18:54:59.999Z",
			"analytics": {
				"min": 38,
				"max": 43,
				"events": 13,
				"entrances": 5,
				"exits": 8,
				"utilization": 71.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:45:00.000Z",
		"count": 45,
		"interval": {
			"start": "2018-12-17T18:45:00.000Z",
			"end": "2018-12-17T18:49:59.999Z",
			"analytics": {
				"min": 42,
				"max": 46,
				"events": 22,
				"entrances": 10,
				"exits": 12,
				"utilization": 76.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:40:00.000Z",
		"count": 48,
		"interval": {
			"start": "2018-12-17T18:40:00.000Z",
			"end": "2018-12-17T18:44:59.999Z",
			"analytics": {
				"min": 44,
				"max": 48,
				"events": 7,
				"entrances": 2,
				"exits": 5,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:35:00.000Z",
		"count": 50,
		"interval": {
			"start": "2018-12-17T18:35:00.000Z",
			"end": "2018-12-17T18:39:59.999Z",
			"analytics": {
				"min": 48,
				"max": 51,
				"events": 6,
				"entrances": 2,
				"exits": 4,
				"utilization": 85
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:30:00.000Z",
		"count": 47,
		"interval": {
			"start": "2018-12-17T18:30:00.000Z",
			"end": "2018-12-17T18:34:59.999Z",
			"analytics": {
				"min": 46,
				"max": 50,
				"events": 11,
				"entrances": 7,
				"exits": 4,
				"utilization": 83.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:25:00.000Z",
		"count": 46,
		"interval": {
			"start": "2018-12-17T18:25:00.000Z",
			"end": "2018-12-17T18:29:59.999Z",
			"analytics": {
				"min": 46,
				"max": 49,
				"events": 9,
				"entrances": 5,
				"exits": 4,
				"utilization": 81.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:20:00.000Z",
		"count": 45,
		"interval": {
			"start": "2018-12-17T18:20:00.000Z",
			"end": "2018-12-17T18:24:59.999Z",
			"analytics": {
				"min": 43,
				"max": 47,
				"events": 13,
				"entrances": 7,
				"exits": 6,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:15:00.000Z",
		"count": 39,
		"interval": {
			"start": "2018-12-17T18:15:00.000Z",
			"end": "2018-12-17T18:19:59.999Z",
			"analytics": {
				"min": 39,
				"max": 45,
				"events": 10,
				"entrances": 8,
				"exits": 2,
				"utilization": 75
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:10:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T18:10:00.000Z",
			"end": "2018-12-17T18:14:59.999Z",
			"analytics": {
				"min": 34,
				"max": 41,
				"events": 14,
				"entrances": 9,
				"exits": 5,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:05:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T18:05:00.000Z",
			"end": "2018-12-17T18:09:59.999Z",
			"analytics": {
				"min": 31,
				"max": 36,
				"events": 15,
				"entrances": 8,
				"exits": 7,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T18:00:00.000Z",
		"count": 33,
		"interval": {
			"start": "2018-12-17T18:00:00.000Z",
			"end": "2018-12-17T18:04:59.999Z",
			"analytics": {
				"min": 32,
				"max": 35,
				"events": 15,
				"entrances": 8,
				"exits": 7,
				"utilization": 58.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:55:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T17:55:00.000Z",
			"end": "2018-12-17T17:59:59.999Z",
			"analytics": {
				"min": 33,
				"max": 37,
				"events": 16,
				"entrances": 6,
				"exits": 10,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:50:00.000Z",
		"count": 33,
		"interval": {
			"start": "2018-12-17T17:50:00.000Z",
			"end": "2018-12-17T17:54:59.999Z",
			"analytics": {
				"min": 30,
				"max": 37,
				"events": 18,
				"entrances": 11,
				"exits": 7,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:45:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T17:45:00.000Z",
			"end": "2018-12-17T17:49:59.999Z",
			"analytics": {
				"min": 32,
				"max": 37,
				"events": 12,
				"entrances": 5,
				"exits": 7,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:40:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T17:40:00.000Z",
			"end": "2018-12-17T17:44:59.999Z",
			"analytics": {
				"min": 33,
				"max": 37,
				"events": 12,
				"entrances": 6,
				"exits": 6,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:35:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T17:35:00.000Z",
			"end": "2018-12-17T17:39:59.999Z",
			"analytics": {
				"min": 32,
				"max": 36,
				"events": 12,
				"entrances": 6,
				"exits": 6,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:30:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T17:30:00.000Z",
			"end": "2018-12-17T17:34:59.999Z",
			"analytics": {
				"min": 33,
				"max": 37,
				"events": 22,
				"entrances": 10,
				"exits": 12,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:25:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T17:25:00.000Z",
			"end": "2018-12-17T17:29:59.999Z",
			"analytics": {
				"min": 37,
				"max": 43,
				"events": 8,
				"entrances": 1,
				"exits": 7,
				"utilization": 70
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:20:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T17:20:00.000Z",
			"end": "2018-12-17T17:24:59.999Z",
			"analytics": {
				"min": 41,
				"max": 44,
				"events": 13,
				"entrances": 6,
				"exits": 7,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:15:00.000Z",
		"count": 40,
		"interval": {
			"start": "2018-12-17T17:15:00.000Z",
			"end": "2018-12-17T17:19:59.999Z",
			"analytics": {
				"min": 39,
				"max": 44,
				"events": 10,
				"entrances": 7,
				"exits": 3,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:10:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T17:10:00.000Z",
			"end": "2018-12-17T17:14:59.999Z",
			"analytics": {
				"min": 39,
				"max": 42,
				"events": 8,
				"entrances": 3,
				"exits": 5,
				"utilization": 68.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:05:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T17:05:00.000Z",
			"end": "2018-12-17T17:09:59.999Z",
			"analytics": {
				"min": 39,
				"max": 44,
				"events": 13,
				"entrances": 6,
				"exits": 7,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T17:00:00.000Z",
		"count": 39,
		"interval": {
			"start": "2018-12-17T17:00:00.000Z",
			"end": "2018-12-17T17:04:59.999Z",
			"analytics": {
				"min": 38,
				"max": 44,
				"events": 12,
				"entrances": 8,
				"exits": 4,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:55:00.000Z",
		"count": 43,
		"interval": {
			"start": "2018-12-17T16:55:00.000Z",
			"end": "2018-12-17T16:59:59.999Z",
			"analytics": {
				"min": 39,
				"max": 44,
				"events": 10,
				"entrances": 3,
				"exits": 7,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:50:00.000Z",
		"count": 49,
		"interval": {
			"start": "2018-12-17T16:50:00.000Z",
			"end": "2018-12-17T16:54:59.999Z",
			"analytics": {
				"min": 43,
				"max": 49,
				"events": 10,
				"entrances": 2,
				"exits": 8,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:45:00.000Z",
		"count": 49,
		"interval": {
			"start": "2018-12-17T16:45:00.000Z",
			"end": "2018-12-17T16:49:59.999Z",
			"analytics": {
				"min": 46,
				"max": 50,
				"events": 10,
				"entrances": 5,
				"exits": 5,
				"utilization": 83.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:40:00.000Z",
		"count": 51,
		"interval": {
			"start": "2018-12-17T16:40:00.000Z",
			"end": "2018-12-17T16:44:59.999Z",
			"analytics": {
				"min": 49,
				"max": 54,
				"events": 20,
				"entrances": 9,
				"exits": 11,
				"utilization": 90
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:35:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T16:35:00.000Z",
			"end": "2018-12-17T16:39:59.999Z",
			"analytics": {
				"min": 41,
				"max": 52,
				"events": 21,
				"entrances": 15,
				"exits": 6,
				"utilization": 86.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:30:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T16:30:00.000Z",
			"end": "2018-12-17T16:34:59.999Z",
			"analytics": {
				"min": 41,
				"max": 47,
				"events": 16,
				"entrances": 7,
				"exits": 9,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:25:00.000Z",
		"count": 46,
		"interval": {
			"start": "2018-12-17T16:25:00.000Z",
			"end": "2018-12-17T16:29:59.999Z",
			"analytics": {
				"min": 43,
				"max": 47,
				"events": 12,
				"entrances": 5,
				"exits": 7,
				"utilization": 78.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:20:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T16:20:00.000Z",
			"end": "2018-12-17T16:24:59.999Z",
			"analytics": {
				"min": 44,
				"max": 49,
				"events": 14,
				"entrances": 8,
				"exits": 6,
				"utilization": 81.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:15:00.000Z",
		"count": 48,
		"interval": {
			"start": "2018-12-17T16:15:00.000Z",
			"end": "2018-12-17T16:19:59.999Z",
			"analytics": {
				"min": 43,
				"max": 48,
				"events": 10,
				"entrances": 3,
				"exits": 7,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:10:00.000Z",
		"count": 42,
		"interval": {
			"start": "2018-12-17T16:10:00.000Z",
			"end": "2018-12-17T16:14:59.999Z",
			"analytics": {
				"min": 42,
				"max": 48,
				"events": 14,
				"entrances": 10,
				"exits": 4,
				"utilization": 80
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:05:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T16:05:00.000Z",
			"end": "2018-12-17T16:09:59.999Z",
			"analytics": {
				"min": 37,
				"max": 42,
				"events": 15,
				"entrances": 10,
				"exits": 5,
				"utilization": 70
			}
		}
	},
	{
		"timestamp": "2018-12-17T16:00:00.000Z",
		"count": 38,
		"interval": {
			"start": "2018-12-17T16:00:00.000Z",
			"end": "2018-12-17T16:04:59.999Z",
			"analytics": {
				"min": 35,
				"max": 38,
				"events": 15,
				"entrances": 7,
				"exits": 8,
				"utilization": 63.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:55:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T15:55:00.000Z",
			"end": "2018-12-17T15:59:59.999Z",
			"analytics": {
				"min": 31,
				"max": 39,
				"events": 18,
				"entrances": 11,
				"exits": 7,
				"utilization": 65
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:50:00.000Z",
		"count": 32,
		"interval": {
			"start": "2018-12-17T15:50:00.000Z",
			"end": "2018-12-17T15:54:59.999Z",
			"analytics": {
				"min": 32,
				"max": 34,
				"events": 6,
				"entrances": 4,
				"exits": 2,
				"utilization": 56.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:45:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T15:45:00.000Z",
			"end": "2018-12-17T15:49:59.999Z",
			"analytics": {
				"min": 29,
				"max": 34,
				"events": 10,
				"entrances": 4,
				"exits": 6,
				"utilization": 55
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:40:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T15:40:00.000Z",
			"end": "2018-12-17T15:44:59.999Z",
			"analytics": {
				"min": 34,
				"max": 37,
				"events": 10,
				"entrances": 5,
				"exits": 5,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:35:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T15:35:00.000Z",
			"end": "2018-12-17T15:39:59.999Z",
			"analytics": {
				"min": 34,
				"max": 37,
				"events": 11,
				"entrances": 5,
				"exits": 6,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:30:00.000Z",
		"count": 36,
		"interval": {
			"start": "2018-12-17T15:30:00.000Z",
			"end": "2018-12-17T15:34:59.999Z",
			"analytics": {
				"min": 35,
				"max": 37,
				"events": 5,
				"entrances": 2,
				"exits": 3,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:25:00.000Z",
		"count": 33,
		"interval": {
			"start": "2018-12-17T15:25:00.000Z",
			"end": "2018-12-17T15:29:59.999Z",
			"analytics": {
				"min": 33,
				"max": 36,
				"events": 5,
				"entrances": 4,
				"exits": 1,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:20:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T15:20:00.000Z",
			"end": "2018-12-17T15:24:59.999Z",
			"analytics": {
				"min": 32,
				"max": 37,
				"events": 6,
				"entrances": 1,
				"exits": 5,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:15:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T15:15:00.000Z",
			"end": "2018-12-17T15:19:59.999Z",
			"analytics": {
				"min": 37,
				"max": 44,
				"events": 17,
				"entrances": 5,
				"exits": 12,
				"utilization": 73.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:10:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T15:10:00.000Z",
			"end": "2018-12-17T15:14:59.999Z",
			"analytics": {
				"min": 43,
				"max": 46,
				"events": 10,
				"entrances": 5,
				"exits": 5,
				"utilization": 76.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:05:00.000Z",
		"count": 44,
		"interval": {
			"start": "2018-12-17T15:05:00.000Z",
			"end": "2018-12-17T15:09:59.999Z",
			"analytics": {
				"min": 43,
				"max": 45,
				"events": 6,
				"entrances": 3,
				"exits": 3,
				"utilization": 75
			}
		}
	},
	{
		"timestamp": "2018-12-17T15:00:00.000Z",
		"count": 41,
		"interval": {
			"start": "2018-12-17T15:00:00.000Z",
			"end": "2018-12-17T15:04:59.999Z",
			"analytics": {
				"min": 41,
				"max": 46,
				"events": 11,
				"entrances": 7,
				"exits": 4,
				"utilization": 76.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:55:00.000Z",
		"count": 37,
		"interval": {
			"start": "2018-12-17T14:55:00.000Z",
			"end": "2018-12-17T14:59:59.999Z",
			"analytics": {
				"min": 36,
				"max": 42,
				"events": 12,
				"entrances": 8,
				"exits": 4,
				"utilization": 70
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:50:00.000Z",
		"count": 35,
		"interval": {
			"start": "2018-12-17T14:50:00.000Z",
			"end": "2018-12-17T14:54:59.999Z",
			"analytics": {
				"min": 34,
				"max": 37,
				"events": 8,
				"entrances": 5,
				"exits": 3,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:45:00.000Z",
		"count": 32,
		"interval": {
			"start": "2018-12-17T14:45:00.000Z",
			"end": "2018-12-17T14:49:59.999Z",
			"analytics": {
				"min": 30,
				"max": 35,
				"events": 17,
				"entrances": 10,
				"exits": 7,
				"utilization": 58.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:40:00.000Z",
		"count": 29,
		"interval": {
			"start": "2018-12-17T14:40:00.000Z",
			"end": "2018-12-17T14:44:59.999Z",
			"analytics": {
				"min": 29,
				"max": 34,
				"events": 15,
				"entrances": 9,
				"exits": 6,
				"utilization": 56.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:35:00.000Z",
		"count": 32,
		"interval": {
			"start": "2018-12-17T14:35:00.000Z",
			"end": "2018-12-17T14:39:59.999Z",
			"analytics": {
				"min": 29,
				"max": 32,
				"events": 5,
				"entrances": 1,
				"exits": 4,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:30:00.000Z",
		"count": 32,
		"interval": {
			"start": "2018-12-17T14:30:00.000Z",
			"end": "2018-12-17T14:34:59.999Z",
			"analytics": {
				"min": 31,
				"max": 34,
				"events": 12,
				"entrances": 6,
				"exits": 6,
				"utilization": 56.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:25:00.000Z",
		"count": 31,
		"interval": {
			"start": "2018-12-17T14:25:00.000Z",
			"end": "2018-12-17T14:29:59.999Z",
			"analytics": {
				"min": 29,
				"max": 32,
				"events": 13,
				"entrances": 7,
				"exits": 6,
				"utilization": 53.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:20:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T14:20:00.000Z",
			"end": "2018-12-17T14:24:59.999Z",
			"analytics": {
				"min": 30,
				"max": 34,
				"events": 11,
				"entrances": 4,
				"exits": 7,
				"utilization": 55
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:15:00.000Z",
		"count": 34,
		"interval": {
			"start": "2018-12-17T14:15:00.000Z",
			"end": "2018-12-17T14:19:59.999Z",
			"analytics": {
				"min": 34,
				"max": 36,
				"events": 8,
				"entrances": 4,
				"exits": 4,
				"utilization": 60
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:10:00.000Z",
		"count": 33,
		"interval": {
			"start": "2018-12-17T14:10:00.000Z",
			"end": "2018-12-17T14:14:59.999Z",
			"analytics": {
				"min": 33,
				"max": 37,
				"events": 13,
				"entrances": 7,
				"exits": 6,
				"utilization": 61.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:05:00.000Z",
		"count": 30,
		"interval": {
			"start": "2018-12-17T14:05:00.000Z",
			"end": "2018-12-17T14:09:59.999Z",
			"analytics": {
				"min": 29,
				"max": 35,
				"events": 9,
				"entrances": 6,
				"exits": 3,
				"utilization": 58.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T14:00:00.000Z",
		"count": 26,
		"interval": {
			"start": "2018-12-17T14:00:00.000Z",
			"end": "2018-12-17T14:04:59.999Z",
			"analytics": {
				"min": 25,
				"max": 30,
				"events": 8,
				"entrances": 6,
				"exits": 2,
				"utilization": 50
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:55:00.000Z",
		"count": 23,
		"interval": {
			"start": "2018-12-17T13:55:00.000Z",
			"end": "2018-12-17T13:59:59.999Z",
			"analytics": {
				"min": 22,
				"max": 26,
				"events": 7,
				"entrances": 5,
				"exits": 2,
				"utilization": 43.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:50:00.000Z",
		"count": 27,
		"interval": {
			"start": "2018-12-17T13:50:00.000Z",
			"end": "2018-12-17T13:54:59.999Z",
			"analytics": {
				"min": 21,
				"max": 27,
				"events": 12,
				"entrances": 4,
				"exits": 8,
				"utilization": 45
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:45:00.000Z",
		"count": 25,
		"interval": {
			"start": "2018-12-17T13:45:00.000Z",
			"end": "2018-12-17T13:49:59.999Z",
			"analytics": {
				"min": 25,
				"max": 28,
				"events": 8,
				"entrances": 5,
				"exits": 3,
				"utilization": 46.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:40:00.000Z",
		"count": 24,
		"interval": {
			"start": "2018-12-17T13:40:00.000Z",
			"end": "2018-12-17T13:44:59.999Z",
			"analytics": {
				"min": 22,
				"max": 25,
				"events": 5,
				"entrances": 3,
				"exits": 2,
				"utilization": 41.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:35:00.000Z",
		"count": 22,
		"interval": {
			"start": "2018-12-17T13:35:00.000Z",
			"end": "2018-12-17T13:39:59.999Z",
			"analytics": {
				"min": 22,
				"max": 25,
				"events": 4,
				"entrances": 3,
				"exits": 1,
				"utilization": 41.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:30:00.000Z",
		"count": 22,
		"interval": {
			"start": "2018-12-17T13:30:00.000Z",
			"end": "2018-12-17T13:34:59.999Z",
			"analytics": {
				"min": 20,
				"max": 24,
				"events": 14,
				"entrances": 7,
				"exits": 7,
				"utilization": 40
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:25:00.000Z",
		"count": 20,
		"interval": {
			"start": "2018-12-17T13:25:00.000Z",
			"end": "2018-12-17T13:29:59.999Z",
			"analytics": {
				"min": 20,
				"max": 22,
				"events": 8,
				"entrances": 5,
				"exits": 3,
				"utilization": 36.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:20:00.000Z",
		"count": 18,
		"interval": {
			"start": "2018-12-17T13:20:00.000Z",
			"end": "2018-12-17T13:24:59.999Z",
			"analytics": {
				"min": 17,
				"max": 20,
				"events": 6,
				"entrances": 4,
				"exits": 2,
				"utilization": 33.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:15:00.000Z",
		"count": 14,
		"interval": {
			"start": "2018-12-17T13:15:00.000Z",
			"end": "2018-12-17T13:19:59.999Z",
			"analytics": {
				"min": 14,
				"max": 18,
				"events": 4,
				"entrances": 4,
				"exits": 0,
				"utilization": 30
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:10:00.000Z",
		"count": 15,
		"interval": {
			"start": "2018-12-17T13:10:00.000Z",
			"end": "2018-12-17T13:14:59.999Z",
			"analytics": {
				"min": 14,
				"max": 15,
				"events": 5,
				"entrances": 2,
				"exits": 3,
				"utilization": 25
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:05:00.000Z",
		"count": 11,
		"interval": {
			"start": "2018-12-17T13:05:00.000Z",
			"end": "2018-12-17T13:09:59.999Z",
			"analytics": {
				"min": 11,
				"max": 16,
				"events": 8,
				"entrances": 6,
				"exits": 2,
				"utilization": 26.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T13:00:00.000Z",
		"count": 12,
		"interval": {
			"start": "2018-12-17T13:00:00.000Z",
			"end": "2018-12-17T13:04:59.999Z",
			"analytics": {
				"min": 10,
				"max": 12,
				"events": 7,
				"entrances": 3,
				"exits": 4,
				"utilization": 20
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:55:00.000Z",
		"count": 9,
		"interval": {
			"start": "2018-12-17T12:55:00.000Z",
			"end": "2018-12-17T12:59:59.999Z",
			"analytics": {
				"min": 7,
				"max": 12,
				"events": 13,
				"entrances": 8,
				"exits": 5,
				"utilization": 20
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:50:00.000Z",
		"count": 14,
		"interval": {
			"start": "2018-12-17T12:50:00.000Z",
			"end": "2018-12-17T12:54:59.999Z",
			"analytics": {
				"min": 8,
				"max": 14,
				"events": 7,
				"entrances": 1,
				"exits": 6,
				"utilization": 21.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:45:00.000Z",
		"count": 15,
		"interval": {
			"start": "2018-12-17T12:45:00.000Z",
			"end": "2018-12-17T12:49:59.999Z",
			"analytics": {
				"min": 14,
				"max": 16,
				"events": 5,
				"entrances": 2,
				"exits": 3,
				"utilization": 26.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:40:00.000Z",
		"count": 17,
		"interval": {
			"start": "2018-12-17T12:40:00.000Z",
			"end": "2018-12-17T12:44:59.999Z",
			"analytics": {
				"min": 15,
				"max": 17,
				"events": 6,
				"entrances": 2,
				"exits": 4,
				"utilization": 28.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:35:00.000Z",
		"count": 18,
		"interval": {
			"start": "2018-12-17T12:35:00.000Z",
			"end": "2018-12-17T12:39:59.999Z",
			"analytics": {
				"min": 15,
				"max": 19,
				"events": 7,
				"entrances": 3,
				"exits": 4,
				"utilization": 31.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:30:00.000Z",
		"count": 13,
		"interval": {
			"start": "2018-12-17T12:30:00.000Z",
			"end": "2018-12-17T12:34:59.999Z",
			"analytics": {
				"min": 13,
				"max": 18,
				"events": 5,
				"entrances": 5,
				"exits": 0,
				"utilization": 30
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:25:00.000Z",
		"count": 11,
		"interval": {
			"start": "2018-12-17T12:25:00.000Z",
			"end": "2018-12-17T12:29:59.999Z",
			"analytics": {
				"min": 11,
				"max": 13,
				"events": 2,
				"entrances": 2,
				"exits": 0,
				"utilization": 21.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:20:00.000Z",
		"count": 9,
		"interval": {
			"start": "2018-12-17T12:20:00.000Z",
			"end": "2018-12-17T12:24:59.999Z",
			"analytics": {
				"min": 8,
				"max": 11,
				"events": 4,
				"entrances": 3,
				"exits": 1,
				"utilization": 18.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:15:00.000Z",
		"count": 7,
		"interval": {
			"start": "2018-12-17T12:15:00.000Z",
			"end": "2018-12-17T12:19:59.999Z",
			"analytics": {
				"min": 6,
				"max": 9,
				"events": 4,
				"entrances": 3,
				"exits": 1,
				"utilization": 15
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:10:00.000Z",
		"count": 7,
		"interval": {
			"start": "2018-12-17T12:10:00.000Z",
			"end": "2018-12-17T12:14:59.999Z",
			"analytics": {
				"min": 7,
				"max": 8,
				"events": 4,
				"entrances": 2,
				"exits": 2,
				"utilization": 13.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:05:00.000Z",
		"count": 7,
		"interval": {
			"start": "2018-12-17T12:05:00.000Z",
			"end": "2018-12-17T12:09:59.999Z",
			"analytics": {
				"min": 5,
				"max": 7,
				"events": 4,
				"entrances": 2,
				"exits": 2,
				"utilization": 11.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T12:00:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T12:00:00.000Z",
			"end": "2018-12-17T12:04:59.999Z",
			"analytics": {
				"min": 5,
				"max": 7,
				"events": 2,
				"entrances": 2,
				"exits": 0,
				"utilization": 11.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:55:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T11:55:00.000Z",
			"end": "2018-12-17T11:59:59.999Z",
			"analytics": {
				"min": 3,
				"max": 5,
				"events": 5,
				"entrances": 3,
				"exits": 2,
				"utilization": 8.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:50:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T11:50:00.000Z",
			"end": "2018-12-17T11:54:59.999Z",
			"analytics": {
				"min": 2,
				"max": 4,
				"events": 2,
				"entrances": 2,
				"exits": 0,
				"utilization": 6.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:45:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:45:00.000Z",
			"end": "2018-12-17T11:49:59.999Z",
			"analytics": {
				"min": 1,
				"max": 3,
				"events": 3,
				"entrances": 2,
				"exits": 1,
				"utilization": 5
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T11:40:00.000Z",
			"end": "2018-12-17T11:44:59.999Z",
			"analytics": {
				"min": 0,
				"max": 2,
				"events": 4,
				"entrances": 2,
				"exits": 2,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:35:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:35:00.000Z",
			"end": "2018-12-17T11:39:59.999Z",
			"analytics": {
				"min": 0,
				"max": 2,
				"events": 3,
				"entrances": 1,
				"exits": 2,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:30:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:30:00.000Z",
			"end": "2018-12-17T11:34:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 1.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:25:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T11:25:00.000Z",
			"end": "2018-12-17T11:29:59.999Z",
			"analytics": {
				"min": 1,
				"max": 3,
				"events": 2,
				"entrances": 0,
				"exits": 2,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:20:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:20:00.000Z",
			"end": "2018-12-17T11:24:59.999Z",
			"analytics": {
				"min": 1,
				"max": 3,
				"events": 2,
				"entrances": 2,
				"exits": 0,
				"utilization": 5
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:15:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:15:00.000Z",
			"end": "2018-12-17T11:19:59.999Z",
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
		"timestamp": "2018-12-17T11:10:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:10:00.000Z",
			"end": "2018-12-17T11:14:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 1.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:05:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:05:00.000Z",
			"end": "2018-12-17T11:09:59.999Z",
			"analytics": {
				"min": 1,
				"max": 2,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T11:00:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T11:00:00.000Z",
			"end": "2018-12-17T11:04:59.999Z",
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
		"timestamp": "2018-12-17T10:55:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:55:00.000Z",
			"end": "2018-12-17T10:59:59.999Z",
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
		"timestamp": "2018-12-17T10:50:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:50:00.000Z",
			"end": "2018-12-17T10:54:59.999Z",
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
		"timestamp": "2018-12-17T10:45:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:45:00.000Z",
			"end": "2018-12-17T10:49:59.999Z",
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
		"timestamp": "2018-12-17T10:40:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:40:00.000Z",
			"end": "2018-12-17T10:44:59.999Z",
			"analytics": {
				"min": 1,
				"max": 2,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T10:35:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:35:00.000Z",
			"end": "2018-12-17T10:39:59.999Z",
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
		"timestamp": "2018-12-17T10:30:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:30:00.000Z",
			"end": "2018-12-17T10:34:59.999Z",
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
		"timestamp": "2018-12-17T10:25:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T10:25:00.000Z",
			"end": "2018-12-17T10:29:59.999Z",
			"analytics": {
				"min": 1,
				"max": 2,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 1.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T10:20:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T10:20:00.000Z",
			"end": "2018-12-17T10:24:59.999Z",
			"analytics": {
				"min": 1,
				"max": 2,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T10:15:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:15:00.000Z",
			"end": "2018-12-17T10:19:59.999Z",
			"analytics": {
				"min": 1,
				"max": 2,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T10:10:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:10:00.000Z",
			"end": "2018-12-17T10:14:59.999Z",
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
		"timestamp": "2018-12-17T10:05:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T10:05:00.000Z",
			"end": "2018-12-17T10:09:59.999Z",
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
		"timestamp": "2018-12-17T10:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T10:00:00.000Z",
			"end": "2018-12-17T10:04:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 1.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T09:55:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:55:00.000Z",
			"end": "2018-12-17T09:59:59.999Z",
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
		"timestamp": "2018-12-17T09:50:00.000Z",
		"count": 1,
		"interval": {
			"start": "2018-12-17T09:50:00.000Z",
			"end": "2018-12-17T09:54:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T09:45:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:45:00.000Z",
			"end": "2018-12-17T09:49:59.999Z",
			"analytics": {
				"min": 0,
				"max": 1,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 1.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T09:40:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:40:00.000Z",
			"end": "2018-12-17T09:44:59.999Z",
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
		"timestamp": "2018-12-17T09:35:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:35:00.000Z",
			"end": "2018-12-17T09:39:59.999Z",
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
		"timestamp": "2018-12-17T09:30:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:30:00.000Z",
			"end": "2018-12-17T09:34:59.999Z",
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
		"timestamp": "2018-12-17T09:25:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:25:00.000Z",
			"end": "2018-12-17T09:29:59.999Z",
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
		"timestamp": "2018-12-17T09:20:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:20:00.000Z",
			"end": "2018-12-17T09:24:59.999Z",
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
		"timestamp": "2018-12-17T09:15:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:15:00.000Z",
			"end": "2018-12-17T09:19:59.999Z",
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
		"timestamp": "2018-12-17T09:10:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:10:00.000Z",
			"end": "2018-12-17T09:14:59.999Z",
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
		"timestamp": "2018-12-17T09:05:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:05:00.000Z",
			"end": "2018-12-17T09:09:59.999Z",
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
		"timestamp": "2018-12-17T09:00:00.000Z",
		"count": 0,
		"interval": {
			"start": "2018-12-17T09:00:00.000Z",
			"end": "2018-12-17T09:04:59.999Z",
			"analytics": {
				"min": 0,
				"max": 0,
				"events": 0,
				"entrances": 0,
				"exits": 0,
				"utilization": 0
			}
		}
	},
	{
		"timestamp": "2018-12-17T08:55:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T08:55:00.000Z",
			"end": "2018-12-17T08:59:59.999Z",
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
		"timestamp": "2018-12-17T08:50:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T08:50:00.000Z",
			"end": "2018-12-17T08:54:59.999Z",
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
		"timestamp": "2018-12-17T08:45:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:45:00.000Z",
			"end": "2018-12-17T08:49:59.999Z",
			"analytics": {
				"min": 2,
				"max": 3,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T08:40:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:40:00.000Z",
			"end": "2018-12-17T08:44:59.999Z",
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
		"timestamp": "2018-12-17T08:35:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:35:00.000Z",
			"end": "2018-12-17T08:39:59.999Z",
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
		"timestamp": "2018-12-17T08:30:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:30:00.000Z",
			"end": "2018-12-17T08:34:59.999Z",
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
		"timestamp": "2018-12-17T08:25:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T08:25:00.000Z",
			"end": "2018-12-17T08:29:59.999Z",
			"analytics": {
				"min": 2,
				"max": 3,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 5
			}
		}
	},
	{
		"timestamp": "2018-12-17T08:20:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T08:20:00.000Z",
			"end": "2018-12-17T08:24:59.999Z",
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
		"timestamp": "2018-12-17T08:15:00.000Z",
		"count": 2,
		"interval": {
			"start": "2018-12-17T08:15:00.000Z",
			"end": "2018-12-17T08:19:59.999Z",
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
		"timestamp": "2018-12-17T08:10:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:10:00.000Z",
			"end": "2018-12-17T08:14:59.999Z",
			"analytics": {
				"min": 2,
				"max": 3,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 3.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T08:05:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:05:00.000Z",
			"end": "2018-12-17T08:09:59.999Z",
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
		"timestamp": "2018-12-17T08:00:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T08:00:00.000Z",
			"end": "2018-12-17T08:04:59.999Z",
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
		"timestamp": "2018-12-17T07:55:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T07:55:00.000Z",
			"end": "2018-12-17T07:59:59.999Z",
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
		"timestamp": "2018-12-17T07:50:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T07:50:00.000Z",
			"end": "2018-12-17T07:54:59.999Z",
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
		"timestamp": "2018-12-17T07:45:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T07:45:00.000Z",
			"end": "2018-12-17T07:49:59.999Z",
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
		"timestamp": "2018-12-17T07:40:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T07:40:00.000Z",
			"end": "2018-12-17T07:44:59.999Z",
			"analytics": {
				"min": 3,
				"max": 4,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 5
			}
		}
	},
	{
		"timestamp": "2018-12-17T07:35:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T07:35:00.000Z",
			"end": "2018-12-17T07:39:59.999Z",
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
		"timestamp": "2018-12-17T07:30:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T07:30:00.000Z",
			"end": "2018-12-17T07:34:59.999Z",
			"analytics": {
				"min": 3,
				"max": 4,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 6.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T07:25:00.000Z",
		"count": 3,
		"interval": {
			"start": "2018-12-17T07:25:00.000Z",
			"end": "2018-12-17T07:29:59.999Z",
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
		"timestamp": "2018-12-17T07:20:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T07:20:00.000Z",
			"end": "2018-12-17T07:24:59.999Z",
			"analytics": {
				"min": 3,
				"max": 4,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 5
			}
		}
	},
	{
		"timestamp": "2018-12-17T07:15:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T07:15:00.000Z",
			"end": "2018-12-17T07:19:59.999Z",
			"analytics": {
				"min": 4,
				"max": 5,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 6.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T07:10:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T07:10:00.000Z",
			"end": "2018-12-17T07:14:59.999Z",
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
		"timestamp": "2018-12-17T07:05:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T07:05:00.000Z",
			"end": "2018-12-17T07:09:59.999Z",
			"analytics": {
				"min": 4,
				"max": 5,
				"events": 1,
				"entrances": 1,
				"exits": 0,
				"utilization": 8.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T07:00:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T07:00:00.000Z",
			"end": "2018-12-17T07:04:59.999Z",
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
		"timestamp": "2018-12-17T06:55:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:55:00.000Z",
			"end": "2018-12-17T06:59:59.999Z",
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
		"timestamp": "2018-12-17T06:50:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:50:00.000Z",
			"end": "2018-12-17T06:54:59.999Z",
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
		"timestamp": "2018-12-17T06:45:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:45:00.000Z",
			"end": "2018-12-17T06:49:59.999Z",
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
		"timestamp": "2018-12-17T06:40:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:40:00.000Z",
			"end": "2018-12-17T06:44:59.999Z",
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
		"timestamp": "2018-12-17T06:35:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:35:00.000Z",
			"end": "2018-12-17T06:39:59.999Z",
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
		"timestamp": "2018-12-17T06:30:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:30:00.000Z",
			"end": "2018-12-17T06:34:59.999Z",
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
		"timestamp": "2018-12-17T06:25:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:25:00.000Z",
			"end": "2018-12-17T06:29:59.999Z",
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
		"timestamp": "2018-12-17T06:20:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:20:00.000Z",
			"end": "2018-12-17T06:24:59.999Z",
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
		"timestamp": "2018-12-17T06:15:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:15:00.000Z",
			"end": "2018-12-17T06:19:59.999Z",
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
		"timestamp": "2018-12-17T06:10:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:10:00.000Z",
			"end": "2018-12-17T06:14:59.999Z",
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
		"timestamp": "2018-12-17T06:05:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:05:00.000Z",
			"end": "2018-12-17T06:09:59.999Z",
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
		"timestamp": "2018-12-17T06:00:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T06:00:00.000Z",
			"end": "2018-12-17T06:04:59.999Z",
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
		"timestamp": "2018-12-17T05:55:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:55:00.000Z",
			"end": "2018-12-17T05:59:59.999Z",
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
		"timestamp": "2018-12-17T05:50:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:50:00.000Z",
			"end": "2018-12-17T05:54:59.999Z",
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
		"timestamp": "2018-12-17T05:45:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:45:00.000Z",
			"end": "2018-12-17T05:49:59.999Z",
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
		"timestamp": "2018-12-17T05:40:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:40:00.000Z",
			"end": "2018-12-17T05:44:59.999Z",
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
		"timestamp": "2018-12-17T05:35:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:35:00.000Z",
			"end": "2018-12-17T05:39:59.999Z",
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
		"timestamp": "2018-12-17T05:30:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:30:00.000Z",
			"end": "2018-12-17T05:34:59.999Z",
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
		"timestamp": "2018-12-17T05:25:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:25:00.000Z",
			"end": "2018-12-17T05:29:59.999Z",
			"analytics": {
				"min": 4,
				"max": 5,
				"events": 2,
				"entrances": 1,
				"exits": 1,
				"utilization": 8.33
			}
		}
	},
	{
		"timestamp": "2018-12-17T05:20:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:20:00.000Z",
			"end": "2018-12-17T05:24:59.999Z",
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
		"timestamp": "2018-12-17T05:15:00.000Z",
		"count": 4,
		"interval": {
			"start": "2018-12-17T05:15:00.000Z",
			"end": "2018-12-17T05:19:59.999Z",
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
		"timestamp": "2018-12-17T05:10:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T05:10:00.000Z",
			"end": "2018-12-17T05:14:59.999Z",
			"analytics": {
				"min": 4,
				"max": 5,
				"events": 1,
				"entrances": 0,
				"exits": 1,
				"utilization": 6.67
			}
		}
	},
	{
		"timestamp": "2018-12-17T05:05:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T05:05:00.000Z",
			"end": "2018-12-17T05:09:59.999Z",
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
		"timestamp": "2018-12-17T05:00:00.000Z",
		"count": 5,
		"interval": {
			"start": "2018-12-17T05:00:00.000Z",
			"end": "2018-12-17T05:04:59.999Z",
			"analytics": {
				"min": 5,
				"max": 5,
				"events": 0,
				"entrances": 0,
				"exits": 0,
				"utilization": null
			}
		}
	}
].map(bucket => Object.assign({}, bucket, {timestamp: moment(bucket.timestamp)}))
