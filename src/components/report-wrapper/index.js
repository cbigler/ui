import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import classnames from 'classnames';

import { IconArrowRight, IconCalendar } from '@density/ui-icons';
import colorVariables from '@density/ui/variables/colors.json';

import styles from './styles.scss';

function ReportWrapperHeaderDateRange({startDate, endDate}) {
  return (
    <div className={styles.reportHeaderDateRange}>
      <span><IconCalendar width={12} height={12} color={colorVariables.grayCinder} /></span>
      <span className={styles.reportHeaderDateRangeTextStart}>{startDate.format('MMM DD')}</span>
      <span><IconArrowRight width={12} height={12} color={colorVariables.grayDarker} /></span>
      <span className={styles.reportHeaderDateRangeTextEnd}>{endDate.format('MMM DD')}</span>
    </div>
  );
}

function ReportWrapperHeader({
  title,
  startDate,
  endDate,
  spaces,
}) {
  return (
    <div>
      <div className={styles.reportHeader}>
        {/* Left side contains title, space list, and when on mobile, the date range. */}
        <div className={styles.reportHeaderLeft}>
          <h2 className={styles.reportHeaderTitle}>{title}</h2>
          <span className={styles.reportHeaderSpaces}>
            {spaces.length === 1 ? spaces[0] : `${spaces.length} selected spaces`}
          </span>
          <div className={styles.reportHeaderDateRangeMobile}>
            <ReportWrapperHeaderDateRange
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>

        {/* Right side on desktop contains the date range and "more details" arrow. */}
        <div className={styles.reportHeaderRightDesktop}>
          <span className={styles.reportHeaderDetailsLink}>
            <span className={styles.reportHeaderDetailsLinkText}>Details</span>
            <span>
              <IconArrowRight width={12} height={12} color={colorVariables.brandPrimary} />
            </span>
          </span>
          <ReportWrapperHeaderDateRange startDate={startDate} endDate={endDate} />
        </div>

        {/* Right side on mobile contains an arrow */}
        <div className={styles.reportHeaderRightMobile}>
          <IconArrowRight width={14} height={14} color={colorVariables.brandPrimary} />
        </div>
      </div>
    </div>
  );
}

export function ReportCard({children, noPadding}) {
  return (
    <div className={classnames(styles.reportCard, noPadding ? styles.reportCardNoPadding : null)}>
      {children}
    </div>
  );
}
ReportCard.propTypes = {
  noPadding: propTypes.bool,
  children: propTypes.node.isRequired,
};

export default function ReportWrapper({
  title,
  startDate,
  endDate,
  spaces,
  children,
}) {
  return <div className={styles.reportWrapper}>
    <ReportWrapperHeader
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={spaces || ['foo', 'bar', 'baz']}
    />
    {children}
  </div>;
}
ReportWrapper.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.any.isRequired,
  endDate: propTypes.any.isRequired,
  children: propTypes.node,
  spaces: propTypes.arrayOf(propTypes.string),
};
