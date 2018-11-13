import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

import ReportWrapper, { ReportSubHeader, ReportCard } from '@density/ui-report-wrapper';

export default class ReportWastedSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { width: null };
  }
  componentDidMount() {
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  onResize() {
    this.setState({width: this.utilizationBar.clientWidth});
  }

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
    const { width } = this.state;
    return (
      <ReportWrapper
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={spaces}
      >
        <ReportSubHeader
          title={<span><strong>{underutilizedPercent}%</strong> of your spaces are <strong>underutilized</strong>.</span>}
        />
        <ReportCard>
          <div className={styles.utilizationBar} ref={r => { this.utilizationBar = r; }}>
            <div
              className={classnames(
                styles.region,
                styles.under,
                {[styles.textAbove]: width * (underutilizedPercent / 100) < 30}
              )}
              style={{width: `${underutilizedPercent}%`}}
            >
              <span className={styles.label}>{underutilizedPercent}%</span>
            </div>
            <div
              className={classnames(
                styles.region,
                styles.normal,
                {[styles.textAbove]: width * (normalPercent / 100) < 30}
              )}
              style={{width: `${normalPercent}%`}}
            >
              <span className={styles.label}>{normalPercent}%</span>
            </div>
            <div
              className={classnames(
                styles.region,
                styles.over,
                {[styles.textAbove]: width * (overutilizedPercent / 100) < 30}
              )}
              style={{width: `${overutilizedPercent}%`}}
            >
              <span className={styles.label}>{overutilizedPercent}%</span>
            </div>
          </div>
          <ul className={styles.utilizationLabels}>
            <li className={styles.under}>
              Underutilized (0%-{underutilizedNormalThreshold*100}% utilization)
            </li>
            <li className={styles.normal}>
              Normal ({underutilizedNormalThreshold*100}%-{normalOverutilizedThreshold*100}% utilization)
            </li>
            <li className={styles.over}>
              Overutilized ({normalOverutilizedThreshold*100}%-100% utilization)
            </li>
          </ul>
        </ReportCard>
      </ReportWrapper>
    );
  }
}
