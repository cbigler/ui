import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import ReportAverageMeetingSize, {
  AVERAGE_MEETING_SIZE_SORT_WORST,
  AVERAGE_MEETING_SIZE_SORT_BEST,
} from './index';

storiesOf('ReportAverageMeetingSize', module)
  .addWithInfo('Worst performing room', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportAverageMeetingSize
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        sortOrder={AVERAGE_MEETING_SIZE_SORT_WORST}
        data={[
          {
            id: 1,
            spaceName: 'Space 1',
            averageMeetingSeats: 4,
            availableSeats: 5,
          },
          {
            id: 2,
            spaceName: 'Space 2',
            averageMeetingSeats: 10,
            availableSeats: 28,
          },
          {
            id: 3,
            spaceName: 'Space that has a really long name',
            averageMeetingSeats: 3,
            availableSeats: 10,
          },
        ]}
      />
    </div>
  ))
  .addWithInfo('Best performing room', () => (
    <div style={{width: '100%',paddingTop: 100}}>
      <ReportAverageMeetingSize
        title="Daily Segment Visits"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        sortOrder={AVERAGE_MEETING_SIZE_SORT_BEST}
        data={[
          {
            id: 1,
            spaceName: 'Space 1',
            averageMeetingSeats: 4,
            availableSeats: 5,
          },
          {
            id: 2,
            spaceName: 'Space 2',
            averageMeetingSeats: 10,
            availableSeats: 28,
          },
          {
            id: 3,
            spaceName: 'Space that has a really long name',
            averageMeetingSeats: 3,
            availableSeats: 10,
          },
        ]}
      />
    </div>
  ))
