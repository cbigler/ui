import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.scss';
import classnames from 'classnames';
import moment from 'moment';

import ReportWrapper, { ReportCard, ReportSubHeader } from '@density/ui-report-wrapper';

export const AVERAGE_MEETING_SIZE_SORT_BEST = 'BEST',
             AVERAGE_MEETING_SIZE_SORT_WORST = 'WORST';

export default function ReportAverageMeetingSize({
  title,
  startDate,
  endDate,
  sortOrder,
  data,
}) {
  const sortedData = data.sort((a, b) => {
    const aEmptySeats = a.availableSeats - a.averageMeetingSeats;
    const bEmptySeats = b.availableSeats - b.averageMeetingSeats;
    if (sortOrder === AVERAGE_MEETING_SIZE_SORT_BEST) {
      return aEmptySeats - bEmptySeats;
    } else {
      return bEmptySeats - aEmptySeats;
    }
  });
  const topMeetingRoomEmptySeats = (
    sortedData[0].availableSeats - sortedData[0].averageMeetingSeats
  );
  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={data.map(i => i.spaceName)}
    >
      <ReportSubHeader
        title={(
          <span>
            <strong>{sortedData[0].spaceName}</strong> is the{' '}
            {sortOrder === AVERAGE_MEETING_SIZE_SORT_BEST ? 'best' : 'worst'}{' '}
            performing meeting room with an average of{' '}
            <strong>
              {topMeetingRoomEmptySeats} empty {topMeetingRoomEmptySeats === 1 ? 'seat' : 'seats'}
            </strong>.
          </span>
        )}
      />
      <ReportCard noPadding>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Room</th>
              <th className={styles.tableHighlight}>
                <span className={styles.mobileHeader}>Avg. Meeting</span>
                <span className={styles.desktopHeader}>Average Meeting</span>
              </th>
              <th>Empty Seats</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(item => (
              <tr key={item.id}>
                <td className={styles.spaceNameCell}>
                  <span className={styles.spaceNameText}>{item.spaceName}</span>
                </td>
                <td className={classnames(styles.tableHighlight, styles.averageMeetingCell)}>
                  <div className={styles.dotWrapper}>
                    {(() => {
                      const dots = [];

                      for (let i = 0; i < item.averageMeetingSeats; i++) {
                        dots.push(
                          <div key={`${i},filled`} className={classnames(styles.dot, styles.dotFilled)} />
                        );
                      }

                      for (let i = 0; i < (item.availableSeats - item.averageMeetingSeats); i++) {
                        dots.push(
                          <div key={`${i},empty`} className={styles.dot} />
                        );
                      }

                      return dots;
                    })()}
                    <div className={styles.dotLabel}>
                      <span>
                        <span className={styles.dotLabelPart}>
                          {item.averageMeetingSeats}
                        </span> / <span className={styles.dotLabelWhole}>
                          {item.availableSeats}
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                <td className={styles.emptySeatsCell}>
                  {item.availableSeats - item.averageMeetingSeats}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReportCard>
    </ReportWrapper>
  );
}
ReportAverageMeetingSize.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.any.isRequired,
      spaceName: propTypes.string.isRequired,
      averageMeetingSeats: propTypes.number.isRequired,
      availableSeats: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  sortOrder: propTypes.oneOf([
    AVERAGE_MEETING_SIZE_SORT_BEST,
    AVERAGE_MEETING_SIZE_SORT_WORST,
  ]).isRequired,
};
