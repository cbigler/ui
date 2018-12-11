import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';
import ReportUtilization, { MOST_UTILIZED, LEAST_UTILIZED } from './index';

storiesOf('ReportUtilization', module)
  .addWithInfo('With most utilized sorting', () => (
    <div style={{width: 800, paddingTop: 100}}>
      <ReportUtilization
        title="Most utilized spaces"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        mode={MOST_UTILIZED}
        utilizations={[
          {id: 0, name: "Main campus eatery", utilization: 0.93},
          {id: 1, name: "My street cafe", utilization: 0.93},
          {id: 2, name: "4th floor cafeteria", utilization: 0.55},
          {id: 3, name: "18. War St Fish", utilization: 0.32},
          {id: 4, name: "Hipster Cafe", utilization: 0.21},
          {id: 5, name: "123 S. Olive Cafeteria", utilization: 0.18},
          {id: 6, name: "456 E. Rutherford Cafeteria", utilization: 0.02},
          {id: 7, name: "SHOULD BE NOT INCLUDED WHEN NOT EXPANDED", utilization: 0.01},
          {id: 8, name: "SHOULD ALSO NOT BE INCLUDED WHEN NOT ON DETAILS PAGE", utilization: 0.01},
        ]}
        showExpandControl
        onReportExpand={action('Expand report')}
      />
    </div>
  ))
  .addWithInfo('With least utilized sorting', () => (
    <div style={{width: 800, paddingTop: 100}}>
      <ReportUtilization
        title="Least utilized spaces"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        mode={LEAST_UTILIZED}
        utilizations={[
          {id: 0, name: "THIS SPACE SHOULD NOT BE SHOWN", utilization: 0.99},
          {id: 1, name: "THIS SPACE SHOULD NOT BE SHOWN", utilization: 0.99},
          {id: 2, name: "Main campus eatery", utilization: 0.93},
          {id: 3, name: "My street cafe", utilization: 0.93},
          {id: 4, name: "4th floor cafeteria", utilization: 0.55},
          {id: 5, name: "18. War St Fish", utilization: 0.32},
          {id: 6, name: "Hipster Cafe", utilization: 0.21},
          {id: 7, name: "123 S. Olive Cafeteria", utilization: 0.18},
          {id: 8, name: "456 E. Rutherford Cafeteria", utilization: 0.02},
        ]}
        showExpandControl
        onReportExpand={action('Expand report')}
      />
    </div>
  ))
  .addWithInfo('In an expanded view, with a width of 1000', () => (
    <div style={{width: 1000, paddingTop: 100}}>
      <ReportUtilization
        title="Least utilized spaces"
        startDate={moment('2018-03-14T00:00:00-04:00')}
        endDate={moment('2018-03-20T00:00:00-04:00')}
        mode={LEAST_UTILIZED}
        utilizations={[
          {id: 0, name: "THIS SPACE SHOULD ONLY BE SHOWN IN THE EXPANDED VIEW", utilization: 0.99},
          {id: 1, name: "THIS SPACE SHOULD ONLY BE SHOWN IN THE EXPANDED VIEW", utilization: 0.99},
          {id: 2, name: "Main campus eatery", utilization: 0.93},
          {id: 3, name: "My street cafe", utilization: 0.93},
          {id: 4, name: "4th floor cafeteria", utilization: 0.55},
          {id: 5, name: "18. War St Fish", utilization: 0.32},
          {id: 6, name: "Hipster Cafe", utilization: 0.21},
          {id: 7, name: "123 S. Olive Cafeteria", utilization: 0.18},
          {id: 8, name: "456 E. Rutherford Cafeteria", utilization: 0.02},
        ]}
      />
    </div>
  ))
