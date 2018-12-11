import React, { Component } from 'react';
import ReportWrapper, { ReportSubHeader, ReportCard, ReportExpandController } from '@density/ui-report-wrapper';
import propTypes from 'prop-types';

import { text } from '@density/ui';
import moment from 'moment';

import styles from './styles.scss';

export const MOST_UTILIZED = 'MOST_UTILIZED';
export const LEAST_UTILIZED = 'LEAST_UTILIZED';

export default class ReportUtilization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = this.container.clientWidth;
    this.setState({width});
  }

  render() {
    const {
      title,
      startDate,
      endDate,
      utilizations,
      mode,
      onReportExpand,
    } = this.props;
    const { width } = this.state;

    if (mode !== MOST_UTILIZED && mode !== LEAST_UTILIZED) {
      throw new Error(`Utilization report mode must either be MOST_UTILIZED or LEAST_UTILIZED (got ${mode})`);
    }

    if (utilizations.length === 0) {
      throw new Error('No space utilizations were specified when rendering the utilization report, please define at least one.');
    }

    if (!utilizations.every(i => i.utilization < 1)) {
      throw new Error('Utilization values must be within the range of 0...1 (received a value outside of that range)');
    }

    // Calculate maximum number of rows to render
    let maxNumberOfUtilizations = null; /* Infinity rows permitted when on detail page */
    if (width < 800) {
      maxNumberOfUtilizations = 7; /* normally, only 7 rows shown */
    }

    let sortedUtilizations = utilizations.sort((a, b) => {
      if (mode === LEAST_UTILIZED) {
        return a.utilization - b.utilization;
      } else {
        return b.utilization - a.utilization;
      }
    });

    // Remove utilizations from list if a limit was defined
    if (maxNumberOfUtilizations) {
      sortedUtilizations = sortedUtilizations.slice(0, maxNumberOfUtilizations);
    }

    // Calculate all spaces to feature in the reportsubheader. This is done by finding the first
    // utilization in the sorted utilization list (as this either has the max or the minimum
    // utilization) and finding all other rows that also have that utilization value.
    const headerUtilizationValue = sortedUtilizations[0].utilization;
    const headerUtilizations = sortedUtilizations.filter(u => {
      return u.utilization === headerUtilizationValue;
    });

    return (
      <ReportWrapper
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={utilizations.map(i => i.name)}
      >
        <ReportSubHeader
          title={(
            <span>
              {text.toEnglishJsxList(headerUtilizations.map(u => <strong>{u.name}</strong>))}{' '}
              {headerUtilizations.length === 1 ? 'was' : 'were'}{' '}
              {mode === LEAST_UTILIZED ? 'only' : 'generally'}{' '}
              <strong>{Math.round(headerUtilizationValue * 100)}%</strong>{' '}
              utilized.
            </span>
          )}
        />
        <ReportCard>
          <div ref={r => { this.container = r; }} className={styles.utilizationWrapper}>
            {sortedUtilizations.map(item => {
              return (
                <div key={item.id} className={styles.utilizationRow}>
                  <div className={styles.utilizationRowText}>{item.name}</div>
                  <div className={styles.utilizationRowBar}>
                    <div
                      className={styles.utilizationRowBarInner}
                      style={{width: `${item.utilization * 100}%`}}
                    />
                  </div>
                  <div className={styles.utilizationRowBarText}>
                    {Math.round(item.utilization * 100)}%
                  </div>
                </div>
              );
            })}
          </div>
        </ReportCard>
        <ReportExpandController onClick={onReportExpand} />
      </ReportWrapper>
    );
  }
}
ReportUtilization.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  mode: propTypes.oneOf([MOST_UTILIZED, LEAST_UTILIZED]).isRequired,
  utilizations: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.any.isRequired,
      name: propTypes.node.isRequired,
      utilization: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
