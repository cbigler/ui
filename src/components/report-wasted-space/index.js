import React, { Component } from 'react';
import propTypes from 'prop-types';

import moment from 'moment';
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

    const underutilizedTextAbove = width * (underutilizedPercent / 100) < 30,
          normalTextAbove = width * (normalPercent / 100) < 30,
          overutilizedTextAbove = width * (overutilizedPercent / 100) < 30;

    return (
      <ReportWrapper
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={spaces}
      >
        <ReportSubHeader
          title={(
            <span>
              <strong>{underutilizedPercent}%</strong> of your spaces are <strong>underutilized</strong>.
            </span>
          )}
        />
        <ReportCard>
          <div
            className={classnames(styles.utilizationBar, {
              [styles.utilizationBarTextAbove]: underutilizedTextAbove || normalTextAbove || overutilizedTextAbove,
            })}
            ref={r => { this.utilizationBar = r; }}
          >
            <div
              className={classnames(
                styles.region,
                styles.under,
                {[styles.textAbove]: underutilizedTextAbove},
              )}
              style={{width: `${underutilizedPercent}%`}}
            >
              <span className={styles.label}>{underutilizedPercent}%</span>
            </div>
            <div
              className={classnames(
                styles.region,
                styles.normal,
                {[styles.textAbove]: normalTextAbove},
              )}
              style={{width: `${normalPercent}%`}}
            >
              <span className={styles.label}>{normalPercent}%</span>
            </div>
            <div
              className={classnames(
                styles.region,
                styles.over,
                {[styles.textAbove]: overutilizedTextAbove},
              )}
              style={{width: `${overutilizedPercent}%`}}
            >
              <span className={styles.label}>{overutilizedPercent}%</span>
            </div>
          </div>
          <ul className={styles.utilizationLabels}>
            <li className={styles.under}>
              Underutilized (0%-{underutilizedNormalThreshold}% utilization)
            </li>
            <li className={styles.normal}>
              Normal ({underutilizedNormalThreshold}%-{normalOverutilizedThreshold}% utilization)
            </li>
            <li className={styles.over}>
              Overutilized ({normalOverutilizedThreshold}%-100% utilization)
            </li>
          </ul>
        </ReportCard>
      </ReportWrapper>
    );
  }
}
ReportWastedSpace.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  spaces: propTypes.arrayOf(propTypes.string).isRequired,

  underutilizedNormalThreshold: propTypes.number.isRequired,
  normalOverutilizedThreshold: propTypes.number.isRequired,

  underutilizedPercent: propTypes.number.isRequired,
  normalPercent: propTypes.number.isRequired,
  overutilizedPercent: propTypes.number.isRequired,
};
