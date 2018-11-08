import React, { Component } from 'react';

import styles from './styles.scss';

export default class DashboardReportGrid extends Component {
  constructor(props) {
    super(props);

    this.reportElements = {};
    this.state = {
      singleColumn: document.body.clientWidth <= props.mobileBreakpoint,
      reportHeights: {},
    };
  }

  componentDidMount() {
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = document.body.clientWidth;
    this.setState({
      singleColumn: (width <= this.props.mobileBreakpoint),

      reportHeights: Object.keys(this.reportElements)
        .map((key) => [key, this.reportElements[key].clientHeight])
        .reduce((acc, item) => Object.assign({}, acc, {[item[0]]: item[1]}))
    });
  }

  render() {
    const { reports } = this.props;
    const { singleColumn, reportHeights } = this.state;

    const reportComponents = reports.map(({id, report}) => {
      return (
        <div
          className={styles.dashboardReportGridCell}
          key={id}
          ref={r => {
            this.reportElements[id] = r;

            if (r) {
              const height = r.clientHeight;
              if (reportHeights[id] !== height) {
                this.setState({
                  reportHeights: Object.assign({}, reportHeights, {
                    [id]: height,
                  }),
                });
              }
            }
          }}
        >
          {report}
        </div>
      );
    });

    // Filter out all reports that don't have a height. Render them outside of the columns to a
    // height can be stored.
    const reportsWithoutHeights = reportComponents.filter((_, index) => {
      return !reportHeights[reports[index].id];
    });

    if (singleColumn) {
      const reportsWithHeights = reportComponents.filter((_, index) => {
        return reportHeights[reports[index].id];
      });
      return (
        <div className={styles.dashboardReportGridWrapper}>
          {reportsWithoutHeights}
          <div className={styles.dashboardReportGrid}>
            <div className={styles.dashboardReportGridColumn}>{reportsWithHeights}</div>
          </div>
        </div>
      );
    } else {
      // For all reports that have heights, sort them into columns.
      const { columnA, columnB } = reportComponents.filter((_, index) => {
        return this.state.reportHeights[reports[index].id];
      }).reduce(
        ({columnA, columnATotalHeight, columnB, columnBTotalHeight}, reportComponent, index) => {
          const reportId = reports[index].id;
          // Option one: arrange such that higher numbered reports are higher up the list
          if (columnATotalHeight <= columnBTotalHeight) {
          // Option two: always arrange from left to right
          // if (index % 2 === 0) {
            // Add to column a
            return {
              columnA: [...columnA, reportComponent],
              columnATotalHeight: columnATotalHeight + this.state.reportHeights[reportId],
              columnB,
              columnBTotalHeight,
            };
          } else {
            // Add to column b
            return {
              columnA,
              columnATotalHeight,
              columnB: [...columnB, reportComponent],
              columnBTotalHeight: columnBTotalHeight + this.state.reportHeights[reportId],
            };
          }
        },
        {columnA: [], columnB: [], columnATotalHeight: 0, columnBTotalHeight: 0}
      );

      return (
        <div className={styles.dashboardReportGridWrapper}>
          {reportsWithoutHeights}
          <div className={styles.dashboardReportGrid}>
            <div className={styles.dashboardReportGridColumn}>{columnA}</div>
            <div className={styles.dashboardReportGridColumn}>{columnB}</div>
          </div>
        </div>
      );
    }
  }
}
DashboardReportGrid.defaultProps = {
  mobileBreakpoint: 768,
};
