import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportWastedSpace from './index';

storiesOf('ReportWastedSpace', module)
  .addWithInfo('Default', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportWastedSpace
        title="Surpassed capacity example"
        startDate={moment("2018-10-21T07:00:00.000Z")}
        endDate={moment("2018-10-28T06:59:59.999Z")}
        spaces={["Cafe Ole"]}

        underutilizedNormalThreshold={20}
        normalOverutilizedThreshold={80}
        underutilizedPercent={30}
        normalPercent={51}
        overutilizedPercent={19}
      />
    </div>
  ))
  .addWithInfo('With a final bar that is tiny on mobile', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportWastedSpace
        title="Surpassed capacity example"
        startDate={moment("2018-10-21T07:00:00.000Z")}
        endDate={moment("2018-10-28T06:59:59.999Z")}
        spaces={["Cafe Ole"]}

        underutilizedNormalThreshold={20}
        normalOverutilizedThreshold={80}
        underutilizedPercent={30}
        normalPercent={68}
        overutilizedPercent={5}
      />
    </div>
  ))
  .addWithInfo('With a tiny final bar', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportWastedSpace
        title="Surpassed capacity example"
        startDate={moment("2018-10-21T07:00:00.000Z")}
        endDate={moment("2018-10-28T06:59:59.999Z")}
        spaces={["Cafe Ole"]}

        underutilizedNormalThreshold={20}
        normalOverutilizedThreshold={80}
        underutilizedPercent={30}
        normalPercent={68}
        overutilizedPercent={2}
      />
    </div>
  ))
  .addWithInfo('With a final bar of zero', () => (
    <div style={{width: '100%', marginTop: 100}}>
      <ReportWastedSpace
        title="Surpassed capacity example"
        startDate={moment("2018-10-21T07:00:00.000Z")}
        endDate={moment("2018-10-28T06:59:59.999Z")}
        spaces={["Cafe Ole"]}

        underutilizedNormalThreshold={20}
        normalOverutilizedThreshold={80}
        underutilizedPercent={30}
        normalPercent={70}
        overutilizedPercent={0}
      />
    </div>
  ))
