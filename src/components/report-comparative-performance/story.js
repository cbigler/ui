import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import ReportComparativePerformance, {
  COMPARATIVE_WEEK,
  COMPARATIVE_MONTH,
  COMPARATIVE_QUARTER,
} from './index';

storiesOf('ReportComparativePerformance', module)
  .addWithInfo('Comparative week', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportComparativePerformance
        title="Comparative Performance Example"
        space={{
          id: 'spc_XXX',
          name: 'My space',
          timeZone: 'America/New_York',
        }}

        mode={COMPARATIVE_WEEK}

        lastData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('12:03:00'),
        }}
        previousData={{
          totalVisits: 10301,
          averagePeakCount: 258,
          averagePeakTime: moment.duration('11:37:00'),
        }}
      />
    </div>
  ))
  .addWithInfo('Comparative month', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportComparativePerformance
        title="Comparative Performance Example"
        space={{
          id: 'spc_XXX',
          name: 'My space',
          timeZone: 'America/New_York',
        }}

        mode={COMPARATIVE_MONTH}

        lastData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('12:03:00'),
        }}
        previousData={{
          totalVisits: 10301,
          averagePeakCount: 258,
          averagePeakTime: moment.duration('11:37:00'),
        }}
      />
    </div>
  ))
  .addWithInfo('Comparative quarter', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportComparativePerformance
        title="Comparative Performance Example"
        space={{
          id: 'spc_XXX',
          name: 'My space',
          timeZone: 'America/New_York',
        }}

        mode={COMPARATIVE_QUARTER}

        lastData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('12:03:00'),
        }}
        previousData={{
          totalVisits: 10301,
          averagePeakCount: 258,
          averagePeakTime: moment.duration('11:37:00'),
        }}
      />
    </div>
  ))
  .addWithInfo('Comparative quarter, with zero percent change', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportComparativePerformance
        title="Comparative Performance Example"
        space={{
          id: 'spc_XXX',
          name: 'My space',
          timeZone: 'America/New_York',
        }}

        mode={COMPARATIVE_QUARTER}

        lastData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('12:03:00'),
        }}
        previousData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('11:37:00'),
        }}
      />
    </div>
  ))
  .addWithInfo('Infinity percent', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportComparativePerformance
        title="Comparative Performance Example"
        space={{
          id: 'spc_XXX',
          name: 'My space',
          timeZone: 'America/New_York',
        }}

        mode={COMPARATIVE_QUARTER}

        lastData={{
          totalVisits: 8570,
          averagePeakCount: 233,
          averagePeakTime: moment.duration('12:03:00'),
        }}
        previousData={{
          totalVisits: 0,
          averagePeakCount: 0,
          averagePeakTime: moment.duration('11:37:00'),
        }}
      />
    </div>
  ))
