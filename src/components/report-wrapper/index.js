import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import classnames from 'classnames';

import { IconArrowRight, IconCalendar } from '@density/ui-icons';
import colorVariables from '@density/ui/variables/colors.json';

import styles from './styles.scss';

export function ReportPadding({children}) {
  return (
    <div className={styles.reportPadding}>{children}</div>
  );
}
ReportPadding.propTypes = {
  children: propTypes.node.isRequired,
};

export function ReportCard({children, noPadding}) {
  return (
    <div className={styles.reportCard}>
      {noPadding ? children : <ReportPadding>{children}</ReportPadding>}
    </div>
  );
}
ReportCard.propTypes = {
  noPadding: propTypes.bool,
  children: propTypes.node.isRequired,
};

export function ReportSubHeader({
  title,
  children
}) {
  const titleNode = title ? (
    <h2 className={classnames(
      styles.reportSubHeaderTitle,
      {[styles.noBody]: !children}
    )}>{title}</h2>
  ) : null;

  return <div className={styles.reportSubHeader}>
    {titleNode}
    <div className={styles.reportSubHeaderContent}>{children}</div>
  </div>;
}
ReportSubHeader.propTypes = {
  title: propTypes.node,
  children: propTypes.node
};

export function ReportOptionBar({options}) {
  return (
    <ul className={styles.reportOptionBarList}>
      {options.map(({id, label, color}) => (
        <li key={id} className={styles.reportOptionBarItem}>
          <div
            className={styles.reportOptionBarCircle}
            style={{backgroundColor: color}}
          />
          <span className={styles.reportOptionBarLabel}>{label}</span>
        </li>
      ))}
    </ul>
  );
}
ReportOptionBar.propTypes = {
  options: propTypes.arrayOf(propTypes.shape({
    id: propTypes.any.isRequired,
    label: propTypes.node.isRequired,
    color: propTypes.string.isRequired,
  })).isRequired,
};




function ReportWrapperHeaderDateRange({startDate, endDate}) {
  if (!startDate || !endDate) {
    return (
      <div className={styles.reportHeaderDateRange} />
    );
  } else {
    return (
      <div className={styles.reportHeaderDateRange}>
        <span><IconCalendar width={12} height={12} color={colorVariables.grayDarker} /></span>
        <span className={styles.reportHeaderDateRangeTextStart}>{startDate.format('MMM DD')}</span>
        <span><IconArrowRight width={12} height={12} color={colorVariables.grayDarker} /></span>
        <span className={styles.reportHeaderDateRangeTextEnd}>{endDate.format('MMM DD')}</span>
      </div>
    );
  }
}

function ReportWrapperHeader({
  title,
  startDate,
  endDate,
  spaces,
  hideDetailsLink,
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
          <span
            className={styles.reportHeaderDetailsLink}
            style={{opacity: hideDetailsLink ? 0 : 1}}
          >
            <span className={styles.reportHeaderDetailsLinkText}>Details</span>
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

export default function ReportWrapper({
  title,
  startDate,
  endDate,
  spaces,
  children,
  hideDetailsLink,
}) {
  return (
    <div className={styles.reportWrapper}>
      <ReportWrapperHeader
        title={title}
        startDate={startDate}
        endDate={endDate}
        spaces={spaces}
        hideDetailsLink={hideDetailsLink}
      />
      {children}
    </div>
  );
}
ReportWrapper.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.any,
  endDate: propTypes.any,
  children: propTypes.node,
  spaces: propTypes.arrayOf(propTypes.string).isRequired,
  hideDetailsLink: propTypes.bool,
};
ReportWrapper.defaultProps = {
  hideDetailsLink: true,
};
