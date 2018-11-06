import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

import ReportWrapper, { ReportSubHeader, ReportCard } from '@density/ui-report-wrapper';

export default class ReportWastedSpace extends Component {
  render() {
    const {
      title,
      startDate,
      endDate,
      spaces,

      underutilizedNormalThreshold,
      normalOverutilizedThreshold,

      underutilizedPercent,
      normalPercent,
      overutilizedPercent,
    } = this.props;
    return (
      <ReportWrapper
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={spaces}
      >
        <ReportSubHeader
          title={<span><strong>30%</strong> of your spaces are <strong>underutilized</strong>.</span>}
        />
        <ReportCard>
          <div className={styles.utilizationBar}>
            <div className={classnames(styles.region, styles.under)} style={{width: '30%'}}>
              30%
            </div>
            <div className={classnames(styles.region, styles.normal)} style={{width: '51%'}}>
              51%
            </div>
            <div className={classnames(styles.region, styles.over)} style={{width: '19%'}}>
              19%
            </div>
          </div>
          <ul className={styles.utilizationLabels}>
            <li className={styles.under}>Underutilized (0-20% utilization)</li>
            <li className={styles.normal}>Normal (20-80% utilization)</li>
            <li className={styles.over}>Overutilized (80-100% utilization)</li>
          </ul>
        </ReportCard>
      </ReportWrapper>
    );
  }
}
