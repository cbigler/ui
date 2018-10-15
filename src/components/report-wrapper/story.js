import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportWrapper, { ReportCard } from './';

storiesOf('ReportWrapper', module)
  .addWithInfo('ReportWrapper with ReportCard inside', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
        spaces={["Space 1"]}
      >
        <ReportCard>
          Hello world
        </ReportCard>
      </ReportWrapper>
    </div>
  ))
  .addWithInfo('ReportWrapper with ReportCard and > 1 space', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
        spaces={["Space 1", "Space 2", "Space 3"]}
      >
        <ReportCard>
          Hello world
        </ReportCard>
      </ReportWrapper>
    </div>
  ))
  .addWithInfo('ReportWrapper with ReportCard (with no padding) inside', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
      >
        <ReportCard noPadding>
          Hello world
        </ReportCard>
      </ReportWrapper>
    </div>
  ))
  .addWithInfo('ReportWrapper with something else inside', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
      >
        <div>
          Hello world
        </div>
      </ReportWrapper>
    </div>
  ))
