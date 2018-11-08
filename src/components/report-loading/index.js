import React from 'react';
import ReportWrapper, { ReportCard } from '@density/ui-report-wrapper';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function ReportLoading({part, whole}) {
  return (
    <ReportWrapper
      title="Loading ..."
      startDate={null}
      endDate={null}
      spaces={['space 1']}
      hideDetailsLink={false}
      loading
    >
      <ReportCard>
        <div className={styles.reportLoading}>
          <span className={styles.reportLoadingBarLabel}>Reports Loaded:</span>
          <div className={styles.reportLoadingBar}>
            <div className={styles.reportLoadingBarInner} style={{width: `${part / whole * 100}%`}} />
          </div>
          <span className={styles.reportLoadingBarFraction}>{part}/{whole}</span>
        </div>
      </ReportCard>
    </ReportWrapper>
  );
}
ReportLoading.propTypes = {
  part: propTypes.number.isRequired,
  whole: propTypes.number.isRequired,
};
