import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import DashboardReportGrid from './';
import ReportNextWeekForecast from '../report-next-week-forecast';
import ReportTimeSegmentBreakdown from '../report-time-segment-breakdown';

storiesOf('DashboardReportGrid', module)
  .addWithInfo('With a text body', () => (
    <DashboardReportGrid
      reports={[
        {
          id: 1,
          report: (
            <ReportNextWeekForecast
              title="Next week's visits ONE"
              startDate={moment("2018-03-14T00:00:00-04:00")}
              endDate={moment("2018-03-18T00:00:00-04:00")}
              spaces={["Cafe Bruno"]}
              busiestDay={moment("2018-03-18T00:00:00-04:00")}
              forecasts={[
                {
                  visits: 300,
                  high: 20,
                  low: 20,
                  stdDev: 20,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
                {
                  visits: 412,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 614,
                  high: 10,
                  low: 10,
                  stdDev: 10,
                },
                {
                  visits: 895,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
              ]}
            />
          ),
        },
        {
          id: 2,
          report: (
            <ReportTimeSegmentBreakdown
              title="Lunch Average Breakdown TWO"
              startDate={moment('2018-03-14T00:00:00-04:00')}
              endDate={moment('2018-03-20T00:00:00-04:00')}
              spaces={["Space 1"]}
              timeSegment={{
                id: 'tsm_XXX',
                name: 'Lunch',
                start: '11:00:00',
                end: '16:00:00',
                days: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                spaces: [ /* ... */ ],
              }}
              points={[
                {timestamp: '11:00:00', value: 1},
                {timestamp: '12:00:00', value: 4},
                {timestamp: '13:00:00', value: 8},
                {timestamp: '13:45:00', value: 10},
                {timestamp: '14:15:00', value: 3},
                {timestamp: '15:00:00', value: 2.5},
                {timestamp: '16:00:00', value: 1},
              ]}

              dailyAverage={821}

              peakRateOfEntryTimestamp="11:00:00"
              peakRateOfEntryQuantity={3}

              peakOccupancyTimestamp="16:00:00"
              peakOccupancyQuantity={7}
            />
          ),
        },
        {
          id: 3,
          report: (
            <ReportNextWeekForecast
              title="Next week's visits THREE"
              startDate={moment("2018-03-14T00:00:00-04:00")}
              endDate={moment("2018-03-18T00:00:00-04:00")}
              spaces={["Cafe Bruno"]}
              busiestDay={moment("2018-03-18T00:00:00-04:00")}
              forecasts={[
                {
                  visits: 300,
                  high: 20,
                  low: 20,
                  stdDev: 20,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
                {
                  visits: 412,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 614,
                  high: 10,
                  low: 10,
                  stdDev: 10,
                },
                {
                  visits: 895,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
              ]}
            />
          ),
        },
        {
          id: 4,
          report: (
            <ReportNextWeekForecast
              title="Next week's visits FOUR"
              startDate={moment("2018-03-14T00:00:00-04:00")}
              endDate={moment("2018-03-18T00:00:00-04:00")}
              spaces={["Cafe Bruno"]}
              busiestDay={moment("2018-03-18T00:00:00-04:00")}
              forecasts={[
                {
                  visits: 300,
                  high: 20,
                  low: 20,
                  stdDev: 20,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
                {
                  visits: 412,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 614,
                  high: 10,
                  low: 10,
                  stdDev: 10,
                },
                {
                  visits: 895,
                  high: 60,
                  low: 60,
                  stdDev: 60,
                },
                {
                  visits: 622,
                  high: 40,
                  low: 40,
                  stdDev: 40,
                },
              ]}
            />
          ),
        },
      ]}
    />
  ))
