import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportWrapper, { ReportCard, ReportPadding, ReportError } from './index';

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
  .addWithInfo('ReportWrapper with details link shown', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
        spaces={["Space 1"]}
        hideDetailsLink={false}
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
        spaces={["Space 1", "Space 2"]}
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
        spaces={["Space 1", "Space 2"]}
      >
        <div>
          Hello world
        </div>
      </ReportWrapper>
    </div>
  ))
  .addWithInfo('ReportWrapper with ReportCard (with no padding) inside, with seperate padded sections', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={moment.utc()}
        endDate={moment.utc().subtract(2, 'days')}
        spaces={["Space 1", "Space 2"]}
      >
        <ReportCard noPadding>
          <ReportPadding>This has padding</ReportPadding>
          <span>This does not</span>
          <ReportPadding>This has padding</ReportPadding>
        </ReportCard>
      </ReportWrapper>
    </div>
  ))
  .addWithInfo('ReportWrapper with ReportError inside', () => (
    <div style={{width: '100%', paddingTop: 100}}>
      <ReportWrapper
        title="Cafeteria meal visits abc def ghi jkl"
        startDate={null}
        endDate={null}
        spaces={[]}
      >
        <ReportError />
      </ReportWrapper>
    </div>
  ))