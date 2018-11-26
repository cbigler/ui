import React, { Component } from 'react';
import ReportWrapper, { ReportSubHeader, ReportCard } from '@density/ui-report-wrapper';
import propTypes from 'prop-types';

import { text } from '@density/ui';
import moment from 'moment';

import styles from './styles.scss';

export const MOST_VISITED = 'MOST_VISITED';
export const LEAST_VISITED = 'LEAST_VISITED';

export default class ReportTotalVisitsRollup extends Component {
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
      segmentName,
      startDate,
      endDate,
      visits,
      mode,
    } = this.props;
    const { width } = this.state;

    if (mode !== MOST_VISITED && mode !== LEAST_VISITED) {
      throw new Error(`Total visits rollup report mode must either be MOST_VISITED or LEAST_VISITED (got ${mode})`);
    }

    if (visits.length === 0) {
      throw new Error('No space visits were specified when rendering the report, please define at least one.');
    }

    if (visits.some(i => i.visits < 0)) {
      throw new Error('Visits values cannot be negative (received a value outside of that range)');
    }

    // Calculate maximum number of rows to render
    let maxNumberOfVisits = null; /* Infinity rows permitted when on detail page */
    if (width < 800) {
      maxNumberOfVisits = 7; /* normally, only 7 rows shown */
    }

    let sortedVisits = visits.sort((a, b) => {
      return mode === LEAST_VISITED ? a.visits - b.visits : b.visits - a.visits;
    });

    // Remove visits from list if a limit was defined
    if (maxNumberOfVisits) {
      sortedVisits = sortedVisits.slice(0, maxNumberOfVisits);
    }

    // Calculate all spaces to feature in the reportsubheader. This is done by finding the first
    // visits value in the sorted visits list (as this either has the max or the minimum
    // number of visits) and finding all other rows that also have that value.
    const minVisits = Math.min.apply(Math, sortedVisits.map(i => i.visits));
    const maxVisits = Math.max.apply(Math, sortedVisits.map(i => i.visits));
    const headerVisits = sortedVisits.filter(u => {
      return u.visits === (mode === LEAST_VISITED ? minVisits : maxVisits);
    });

    return (
      <ReportWrapper
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={visits.map(i => i.name)}
      >
        <ReportSubHeader
          title={
            <span>
              {text.toEnglishJsxList(headerVisits.map(u => <strong>{u.name}</strong>))}{' '}
              {headerVisits.length === 1 ? 'was' : 'were'} the{' '}
              <strong>{mode === LEAST_VISITED ? 'least' : 'most'}</strong>{' '}
              used space{headerVisits.length > 1 ? 's' : ''} during <strong>{segmentName}</strong>{' '}
              with <strong>{mode === LEAST_VISITED ? minVisits : maxVisits}</strong> visits.
            </span>
          }
        />
        <ReportCard>
          <div ref={r => { this.container = r; }} className={styles.rollupWrapper}>
            {sortedVisits.map(item => {
              return (
                <div key={item.id} className={styles.rollupRow}>
                  <div className={styles.rollupRowText}>{item.name}</div>
                  <div className={styles.rollupRowBar}>
                    <div
                      className={styles.rollupRowBarInner}
                      style={{width: `${maxVisits ? item.visits / maxVisits * 100 : 0}%`}}
                    />
                    <div className={styles.rollupRowBarText}>{item.visits}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </ReportCard>
      </ReportWrapper>
    );
  }
}
ReportTotalVisitsRollup.propTypes = {
  title: propTypes.string.isRequired,
  segmentName: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  mode: propTypes.oneOf([MOST_VISITED, LEAST_VISITED]).isRequired,
  visits: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.any.isRequired,
      name: propTypes.node.isRequired,
      visits: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
