import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import DashboardReportGrid from './';
import ReportAverageMeetingSize, {
  AVERAGE_MEETING_SIZE_SORT_WORST,
  AVERAGE_MEETING_SIZE_SORT_BEST,
} from '../report-average-meeting-size';
import ReportNextWeekForecast from '../report-next-week-forecast';
import ReportComparativePerformance, {
  COMPARATIVE_WEEK,
  COMPARATIVE_MONTH,
  COMPARATIVE_QUARTER,
} from '../report-comparative-performance';
import ReportSurpassedCapacity from '../report-surpassed-capacity'
import ReportTimeSegmentBreakdown from '@density/ui-report-time-segment-breakdown';

storiesOf('DashboardReportGrid', module)
  .addWithInfo('One', () => (
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
              timeSegmentGroup={{
                id: 'tsg_yyy',
                name: 'Lunch',
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
  .addWithInfo('Two', () => (
    <DashboardReportGrid
      reports={[
        {
          id: 1,
          report: (
            <ReportAverageMeetingSize
              title="Average Meeting size best"
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
          ),
        },
        {
          id: 2,
          report: (
            <ReportSurpassedCapacity
              title="Surpassed capacity example"
              startDate={moment("2018-10-21T07:00:00.000Z")}
              endDate={moment("2018-10-28T06:59:59.999Z")}
              spaces={["Cafe Ole"]}
              capacity={450}
              busyOverCapacityThreshold={0.6}
              quietBusyThreshold={0.4}
              timeSegment={{
                "id": "tsm_XXX",
                "name": "Lunch",
                "start": "10:45:00",
                "end": "14:00:00",
                "days": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                  "spaces": [ /* ... */ ]
              }}
              timeSegmentGroup={{id: 'tsg_YYY', name: 'Lunch'}}
              data={[
                [],
                [
                  {
                    "start": "10:45:00",
                    "end": "10:49:59",
                    "count": 74
                  },
                  {
                    "start": "10:50:00",
                    "end": "10:54:59",
                    "count": 72
                  },
                  {
                    "start": "10:55:00",
                    "end": "10:59:59",
                    "count": 73
                  },
                  {
                    "start": "11:00:00",
                    "end": "11:04:59",
                    "count": 82
                  },
                  {
                    "start": "11:05:00",
                    "end": "11:09:59",
                    "count": 112
                  },
                  {
                    "start": "11:10:00",
                    "end": "11:14:59",
                    "count": 131
                  },
                  {
                    "start": "11:15:00",
                    "end": "11:19:59",
                    "count": 129
                  },
                  {
                    "start": "11:20:00",
                    "end": "11:24:59",
                    "count": 144
                  },
                  {
                    "start": "11:25:00",
                    "end": "11:29:59",
                    "count": 154
                  },
                  {
                    "start": "11:30:00",
                    "end": "11:34:59",
                    "count": 162
                  },
                  {
                    "start": "11:35:00",
                    "end": "11:39:59",
                    "count": 199
                  },
                  {
                    "start": "11:40:00",
                    "end": "11:44:59",
                    "count": 223
                  },
                  {
                    "start": "11:45:00",
                    "end": "11:49:59",
                    "count": 253
                  },
                  {
                    "start": "11:50:00",
                    "end": "11:54:59",
                    "count": 242
                  },
                  {
                    "start": "11:55:00",
                    "end": "11:59:59",
                    "count": 269
                  },
                  {
                    "start": "12:00:00",
                    "end": "12:04:59",
                    "count": 288
                  },
                  {
                    "start": "12:05:00",
                    "end": "12:09:59",
                    "count": 297
                  },
                  {
                    "start": "12:10:00",
                    "end": "12:14:59",
                    "count": 362
                  },
                  {
                    "start": "12:15:00",
                    "end": "12:19:59",
                    "count": 377
                  },
                  {
                    "start": "12:20:00",
                    "end": "12:24:59",
                    "count": 371
                  },
                  {
                    "start": "12:25:00",
                    "end": "12:29:59",
                    "count": 362
                  },
                  {
                    "start": "12:30:00",
                    "end": "12:34:59",
                    "count": 347
                  },
                  {
                    "start": "12:35:00",
                    "end": "12:39:59",
                    "count": 312
                  },
                  {
                    "start": "12:40:00",
                    "end": "12:44:59",
                    "count": 338
                  },
                  {
                    "start": "12:45:00",
                    "end": "12:49:59",
                    "count": 335
                  },
                  {
                    "start": "12:50:00",
                    "end": "12:54:59",
                    "count": 337
                  },
                  {
                    "start": "12:55:00",
                    "end": "12:59:59",
                    "count": 301
                  },
                  {
                    "start": "13:00:00",
                    "end": "13:04:59",
                    "count": 277
                  },
                  {
                    "start": "13:05:00",
                    "end": "13:09:59",
                    "count": 240
                  },
                  {
                    "start": "13:10:00",
                    "end": "13:14:59",
                    "count": 253
                  },
                  {
                    "start": "13:15:00",
                    "end": "13:19:59",
                    "count": 215
                  },
                  {
                    "start": "13:20:00",
                    "end": "13:24:59",
                    "count": 199
                  },
                  {
                    "start": "13:25:00",
                    "end": "13:29:59",
                    "count": 181
                  },
                  {
                    "start": "13:30:00",
                    "end": "13:34:59",
                    "count": 152
                  },
                  {
                    "start": "13:35:00",
                    "end": "13:39:59",
                    "count": 138
                  },
                  {
                    "start": "13:40:00",
                    "end": "13:44:59",
                    "count": 120
                  },
                  {
                    "start": "13:45:00",
                    "end": "13:49:59",
                    "count": 111
                  },
                  {
                    "start": "13:50:00",
                    "end": "13:54:59",
                    "count": 111
                  },
                  {
                    "start": "13:55:00",
                    "end": "13:59:59",
                    "count": 109
                  }
                ],
                [
                  {
                    "start": "10:45:00",
                    "end": "10:49:59",
                    "count": 47
                  },
                  {
                    "start": "10:50:00",
                    "end": "10:54:59",
                    "count": 46
                  },
                  {
                    "start": "10:55:00",
                    "end": "10:59:59",
                    "count": 54
                  },
                  {
                    "start": "11:00:00",
                    "end": "11:04:59",
                    "count": 59
                  },
                  {
                    "start": "11:05:00",
                    "end": "11:09:59",
                    "count": 74
                  },
                  {
                    "start": "11:10:00",
                    "end": "11:14:59",
                    "count": 96
                  },
                  {
                    "start": "11:15:00",
                    "end": "11:19:59",
                    "count": 109
                  },
                  {
                    "start": "11:20:00",
                    "end": "11:24:59",
                    "count": 115
                  },
                  {
                    "start": "11:25:00",
                    "end": "11:29:59",
                    "count": 133
                  },
                  {
                    "start": "11:30:00",
                    "end": "11:34:59",
                    "count": 141
                  },
                  {
                    "start": "11:35:00",
                    "end": "11:39:59",
                    "count": 170
                  },
                  {
                    "start": "11:40:00",
                    "end": "11:44:59",
                    "count": 196
                  },
                  {
                    "start": "11:45:00",
                    "end": "11:49:59",
                    "count": 219
                  },
                  {
                    "start": "11:50:00",
                    "end": "11:54:59",
                    "count": 236
                  },
                  {
                    "start": "11:55:00",
                    "end": "11:59:59",
                    "count": 264
                  },
                  {
                    "start": "12:00:00",
                    "end": "12:04:59",
                    "count": 249
                  },
                  {
                    "start": "12:05:00",
                    "end": "12:09:59",
                    "count": 245
                  },
                  {
                    "start": "12:10:00",
                    "end": "12:14:59",
                    "count": 306
                  },
                  {
                    "start": "12:15:00",
                    "end": "12:19:59",
                    "count": 334
                  },
                  {
                    "start": "12:20:00",
                    "end": "12:24:59",
                    "count": 373
                  },
                  {
                    "start": "12:25:00",
                    "end": "12:29:59",
                    "count": 374
                  },
                  {
                    "start": "12:30:00",
                    "end": "12:34:59",
                    "count": 345
                  },
                  {
                    "start": "12:35:00",
                    "end": "12:39:59",
                    "count": 335
                  },
                  {
                    "start": "12:40:00",
                    "end": "12:44:59",
                    "count": 338
                  },
                  {
                    "start": "12:45:00",
                    "end": "12:49:59",
                    "count": 311
                  },
                  {
                    "start": "12:50:00",
                    "end": "12:54:59",
                    "count": 295
                  },
                  {
                    "start": "12:55:00",
                    "end": "12:59:59",
                    "count": 256
                  },
                  {
                    "start": "13:00:00",
                    "end": "13:04:59",
                    "count": 197
                  },
                  {
                    "start": "13:05:00",
                    "end": "13:09:59",
                    "count": 188
                  },
                  {
                    "start": "13:10:00",
                    "end": "13:14:59",
                    "count": 212
                  },
                  {
                    "start": "13:15:00",
                    "end": "13:19:59",
                    "count": 189
                  },
                  {
                    "start": "13:20:00",
                    "end": "13:24:59",
                    "count": 178
                  },
                  {
                    "start": "13:25:00",
                    "end": "13:29:59",
                    "count": 162
                  },
                  {
                    "start": "13:30:00",
                    "end": "13:34:59",
                    "count": 136
                  },
                  {
                    "start": "13:35:00",
                    "end": "13:39:59",
                    "count": 132
                  },
                  {
                    "start": "13:40:00",
                    "end": "13:44:59",
                    "count": 140
                  },
                  {
                    "start": "13:45:00",
                    "end": "13:49:59",
                    "count": 126
                  },
                  {
                    "start": "13:50:00",
                    "end": "13:54:59",
                    "count": 103
                  },
                  {
                    "start": "13:55:00",
                    "end": "13:59:59",
                    "count": 83
                  }
                ],
                [
                  {
                    "start": "10:45:00",
                    "end": "10:49:59",
                    "count": 70
                  },
                  {
                    "start": "10:50:00",
                    "end": "10:54:59",
                    "count": 70
                  },
                  {
                    "start": "10:55:00",
                    "end": "10:59:59",
                    "count": 71
                  },
                  {
                    "start": "11:00:00",
                    "end": "11:04:59",
                    "count": 72
                  },
                  {
                    "start": "11:05:00",
                    "end": "11:09:59",
                    "count": 98
                  },
                  {
                    "start": "11:10:00",
                    "end": "11:14:59",
                    "count": 112
                  },
                  {
                    "start": "11:15:00",
                    "end": "11:19:59",
                    "count": 137
                  },
                  {
                    "start": "11:20:00",
                    "end": "11:24:59",
                    "count": 154
                  },
                  {
                    "start": "11:25:00",
                    "end": "11:29:59",
                    "count": 149
                  },
                  {
                    "start": "11:30:00",
                    "end": "11:34:59",
                    "count": 167
                  },
                  {
                    "start": "11:35:00",
                    "end": "11:39:59",
                    "count": 184
                  },
                  {
                    "start": "11:40:00",
                    "end": "11:44:59",
                    "count": 198
                  },
                  {
                    "start": "11:45:00",
                    "end": "11:49:59",
                    "count": 228
                  },
                  {
                    "start": "11:50:00",
                    "end": "11:54:59",
                    "count": 274
                  },
                  {
                    "start": "11:55:00",
                    "end": "11:59:59",
                    "count": 279
                  },
                  {
                    "start": "12:00:00",
                    "end": "12:04:59",
                    "count": 271
                  },
                  {
                    "start": "12:05:00",
                    "end": "12:09:59",
                    "count": 316
                  },
                  {
                    "start": "12:10:00",
                    "end": "12:14:59",
                    "count": 331
                  },
                  {
                    "start": "12:15:00",
                    "end": "12:19:59",
                    "count": 338
                  },
                  {
                    "start": "12:20:00",
                    "end": "12:24:59",
                    "count": 367
                  },
                  {
                    "start": "12:25:00",
                    "end": "12:29:59",
                    "count": 360
                  },
                  {
                    "start": "12:30:00",
                    "end": "12:34:59",
                    "count": 332
                  },
                  {
                    "start": "12:35:00",
                    "end": "12:39:59",
                    "count": 332
                  },
                  {
                    "start": "12:40:00",
                    "end": "12:44:59",
                    "count": 364
                  },
                  {
                    "start": "12:45:00",
                    "end": "12:49:59",
                    "count": 359
                  },
                  {
                    "start": "12:50:00",
                    "end": "12:54:59",
                    "count": 313
                  },
                  {
                    "start": "12:55:00",
                    "end": "12:59:59",
                    "count": 276
                  },
                  {
                    "start": "13:00:00",
                    "end": "13:04:59",
                    "count": 224
                  },
                  {
                    "start": "13:05:00",
                    "end": "13:09:59",
                    "count": 225
                  },
                  {
                    "start": "13:10:00",
                    "end": "13:14:59",
                    "count": 228
                  },
                  {
                    "start": "13:15:00",
                    "end": "13:19:59",
                    "count": 216
                  },
                  {
                    "start": "13:20:00",
                    "end": "13:24:59",
                    "count": 193
                  },
                  {
                    "start": "13:25:00",
                    "end": "13:29:59",
                    "count": 162
                  },
                  {
                    "start": "13:30:00",
                    "end": "13:34:59",
                    "count": 159
                  },
                  {
                    "start": "13:35:00",
                    "end": "13:39:59",
                    "count": 142
                  },
                  {
                    "start": "13:40:00",
                    "end": "13:44:59",
                    "count": 149
                  },
                  {
                    "start": "13:45:00",
                    "end": "13:49:59",
                    "count": 135
                  },
                  {
                    "start": "13:50:00",
                    "end": "13:54:59",
                    "count": 122
                  },
                  {
                    "start": "13:55:00",
                    "end": "13:59:59",
                    "count": 117
                  }
                ],
                [
                  {
                    "start": "10:45:00",
                    "end": "10:49:59",
                    "count": 59
                  },
                  {
                    "start": "10:50:00",
                    "end": "10:54:59",
                    "count": 56
                  },
                  {
                    "start": "10:55:00",
                    "end": "10:59:59",
                    "count": 57
                  },
                  {
                    "start": "11:00:00",
                    "end": "11:04:59",
                    "count": 64
                  },
                  {
                    "start": "11:05:00",
                    "end": "11:09:59",
                    "count": 87
                  },
                  {
                    "start": "11:10:00",
                    "end": "11:14:59",
                    "count": 108
                  },
                  {
                    "start": "11:15:00",
                    "end": "11:19:59",
                    "count": 108
                  },
                  {
                    "start": "11:20:00",
                    "end": "11:24:59",
                    "count": 134
                  },
                  {
                    "start": "11:25:00",
                    "end": "11:29:59",
                    "count": 131
                  },
                  {
                    "start": "11:30:00",
                    "end": "11:34:59",
                    "count": 145
                  },
                  {
                    "start": "11:35:00",
                    "end": "11:39:59",
                    "count": 177
                  },
                  {
                    "start": "11:40:00",
                    "end": "11:44:59",
                    "count": 225
                  },
                  {
                    "start": "11:45:00",
                    "end": "11:49:59",
                    "count": 239
                  },
                  {
                    "start": "11:50:00",
                    "end": "11:54:59",
                    "count": 247
                  },
                  {
                    "start": "11:55:00",
                    "end": "11:59:59",
                    "count": 285
                  },
                  {
                    "start": "12:00:00",
                    "end": "12:04:59",
                    "count": 269
                  },
                  {
                    "start": "12:05:00",
                    "end": "12:09:59",
                    "count": 311
                  },
                  {
                    "start": "12:10:00",
                    "end": "12:14:59",
                    "count": 370
                  },
                  {
                    "start": "12:15:00",
                    "end": "12:19:59",
                    "count": 403
                  },
                  {
                    "start": "12:20:00",
                    "end": "12:24:59",
                    "count": 408
                  },
                  {
                    "start": "12:25:00",
                    "end": "12:29:59",
                    "count": 400
                  },
                  {
                    "start": "12:30:00",
                    "end": "12:34:59",
                    "count": 373
                  },
                  {
                    "start": "12:35:00",
                    "end": "12:39:59",
                    "count": 367
                  },
                  {
                    "start": "12:40:00",
                    "end": "12:44:59",
                    "count": 395
                  },
                  {
                    "start": "12:45:00",
                    "end": "12:49:59",
                    "count": 375
                  },
                  {
                    "start": "12:50:00",
                    "end": "12:54:59",
                    "count": 343
                  },
                  {
                    "start": "12:55:00",
                    "end": "12:59:59",
                    "count": 282
                  },
                  {
                    "start": "13:00:00",
                    "end": "13:04:59",
                    "count": 248
                  },
                  {
                    "start": "13:05:00",
                    "end": "13:09:59",
                    "count": 220
                  },
                  {
                    "start": "13:10:00",
                    "end": "13:14:59",
                    "count": 220
                  },
                  {
                    "start": "13:15:00",
                    "end": "13:19:59",
                    "count": 210
                  },
                  {
                    "start": "13:20:00",
                    "end": "13:24:59",
                    "count": 187
                  },
                  {
                    "start": "13:25:00",
                    "end": "13:29:59",
                    "count": 170
                  },
                  {
                    "start": "13:30:00",
                    "end": "13:34:59",
                    "count": 158
                  },
                  {
                    "start": "13:35:00",
                    "end": "13:39:59",
                    "count": 150
                  },
                  {
                    "start": "13:40:00",
                    "end": "13:44:59",
                    "count": 139
                  },
                  {
                    "start": "13:45:00",
                    "end": "13:49:59",
                    "count": 111
                  },
                  {
                    "start": "13:50:00",
                    "end": "13:54:59",
                    "count": 112
                  },
                  {
                    "start": "13:55:00",
                    "end": "13:59:59",
                    "count": 87
                  }
                ],
                [
                  {
                    "start": "10:45:00",
                    "end": "10:49:59",
                    "count": 62
                  },
                  {
                    "start": "10:50:00",
                    "end": "10:54:59",
                    "count": 63
                  },
                  {
                    "start": "10:55:00",
                    "end": "10:59:59",
                    "count": 65
                  },
                  {
                    "start": "11:00:00",
                    "end": "11:04:59",
                    "count": 64
                  },
                  {
                    "start": "11:05:00",
                    "end": "11:09:59",
                    "count": 95
                  },
                  {
                    "start": "11:10:00",
                    "end": "11:14:59",
                    "count": 95
                  },
                  {
                    "start": "11:15:00",
                    "end": "11:19:59",
                    "count": 103
                  },
                  {
                    "start": "11:20:00",
                    "end": "11:24:59",
                    "count": 111
                  },
                  {
                    "start": "11:25:00",
                    "end": "11:29:59",
                    "count": 120
                  },
                  {
                    "start": "11:30:00",
                    "end": "11:34:59",
                    "count": 122
                  },
                  {
                    "start": "11:35:00",
                    "end": "11:39:59",
                    "count": 144
                  },
                  {
                    "start": "11:40:00",
                    "end": "11:44:59",
                    "count": 170
                  },
                  {
                    "start": "11:45:00",
                    "end": "11:49:59",
                    "count": 202
                  },
                  {
                    "start": "11:50:00",
                    "end": "11:54:59",
                    "count": 232
                  },
                  {
                    "start": "11:55:00",
                    "end": "11:59:59",
                    "count": 245
                  },
                  {
                    "start": "12:00:00",
                    "end": "12:04:59",
                    "count": 256
                  },
                  {
                    "start": "12:05:00",
                    "end": "12:09:59",
                    "count": 295
                  },
                  {
                    "start": "12:10:00",
                    "end": "12:14:59",
                    "count": 360
                  },
                  {
                    "start": "12:15:00",
                    "end": "12:19:59",
                    "count": 408
                  },
                  {
                    "start": "12:20:00",
                    "end": "12:24:59",
                    "count": 424
                  },
                  {
                    "start": "12:25:00",
                    "end": "12:29:59",
                    "count": 439
                  },
                  {
                    "start": "12:30:00",
                    "end": "12:34:59",
                    "count": 430
                  },
                  {
                    "start": "12:35:00",
                    "end": "12:39:59",
                    "count": 433
                  },
                  {
                    "start": "12:40:00",
                    "end": "12:44:59",
                    "count": 432
                  },
                  {
                    "start": "12:45:00",
                    "end": "12:49:59",
                    "count": 385
                  },
                  {
                    "start": "12:50:00",
                    "end": "12:54:59",
                    "count": 346
                  },
                  {
                    "start": "12:55:00",
                    "end": "12:59:59",
                    "count": 308
                  },
                  {
                    "start": "13:00:00",
                    "end": "13:04:59",
                    "count": 251
                  },
                  {
                    "start": "13:05:00",
                    "end": "13:09:59",
                    "count": 252
                  },
                  {
                    "start": "13:10:00",
                    "end": "13:14:59",
                    "count": 243
                  },
                  {
                    "start": "13:15:00",
                    "end": "13:19:59",
                    "count": 242
                  },
                  {
                    "start": "13:20:00",
                    "end": "13:24:59",
                    "count": 248
                  },
                  {
                    "start": "13:25:00",
                    "end": "13:29:59",
                    "count": 229
                  },
                  {
                    "start": "13:30:00",
                    "end": "13:34:59",
                    "count": 202
                  },
                  {
                    "start": "13:35:00",
                    "end": "13:39:59",
                    "count": 178
                  },
                  {
                    "start": "13:40:00",
                    "end": "13:44:59",
                    "count": 146
                  },
                  {
                    "start": "13:45:00",
                    "end": "13:49:59",
                    "count": 147
                  },
                  {
                    "start": "13:50:00",
                    "end": "13:54:59",
                    "count": 134
                  },
                  {
                    "start": "13:55:00",
                    "end": "13:59:59",
                    "count": 123
                  }
                ],
                []
              ]}
            />
          ),
        },
        {
          id: 3,
          report: (
            <ReportComparativePerformance
              title="Comparative Performance Example"
              space={{
                id: 'spc_XXX',
                name: 'My space',
                timeZone: 'America/New_York',
              }}

              mode={COMPARATIVE_QUARTER}
              lastStartDate={moment.utc().startOf('quarter').subtract(1, 'quarter')}
              lastEndDate={moment.utc().startOf('quarter').subtract(1, 'quarter').clone().endOf('quarter')}
              previousStartDate={moment.utc().startOf('quarter').subtract(1, 'quarter').clone().subtract(1, 'quarter')}
              previousEndDate={moment.utc().startOf('quarter').subtract(1, 'quarter').clone().subtract(1, 'quarter').clone().endOf('quarter')}

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
          ),
        },
      ]}
    />
  ))
