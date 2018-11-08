import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import ReportWastedSpace from './';

storiesOf('ReportWastedSpace', module)
  .addWithInfo('With a text body', () => (
    <ReportWastedSpace
      title="Surpassed capacity example"
      startDate={moment("2018-10-21T07:00:00.000Z")}
      endDate={moment("2018-10-28T06:59:59.999Z")}
      spaces={["Cafe Ole"]}
    />
  ))
