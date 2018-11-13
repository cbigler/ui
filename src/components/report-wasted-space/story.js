import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportWastedSpace from './index';

storiesOf('ReportWastedSpace', module)
  .addWithInfo('Default', () => (
    <ReportWastedSpace
      title="Surpassed capacity example"
      startDate={moment("2018-10-21T07:00:00.000Z")}
      endDate={moment("2018-10-28T06:59:59.999Z")}
      spaces={["Cafe Ole"]}

      underutilizedNormalThreshold={0.2}
      normalOverutilizedThreshold={0.8}
      underutilizedPercent={30}
      normalPercent={51}
      overutilizedPercent={19}
    />
  ))
  .addWithInfo('With a final bar that is tiny on mobile', () => (
    <ReportWastedSpace
      title="Surpassed capacity example"
      startDate={moment("2018-10-21T07:00:00.000Z")}
      endDate={moment("2018-10-28T06:59:59.999Z")}
      spaces={["Cafe Ole"]}

      underutilizedNormalThreshold={0.2}
      normalOverutilizedThreshold={0.8}
      underutilizedPercent={30}
      normalPercent={68}
      overutilizedPercent={5}
    />
  ))
  .addWithInfo('With a tiny final bar', () => (
    <ReportWastedSpace
      title="Surpassed capacity example"
      startDate={moment("2018-10-21T07:00:00.000Z")}
      endDate={moment("2018-10-28T06:59:59.999Z")}
      spaces={["Cafe Ole"]}

      underutilizedNormalThreshold={0.2}
      normalOverutilizedThreshold={0.8}
      underutilizedPercent={30}
      normalPercent={68}
      overutilizedPercent={2}
    />
  ))
