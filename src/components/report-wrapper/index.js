import React from 'react';
import classnames from 'classnames';

import { IconArrowRight } from '@density/ui-icons';
import colorVariables from '@density/ui/variables/colors.json';

import styles from './styles.scss';

function ReportWrapperHeader({
  title,
  startDate,
  endDate,
}) {
  return (
    <div className={styles.reportHeader}>
      <h2 className={styles.reportHeaderText}>{title}</h2>
      <div className={styles.reportHeaderDateRange}>
        <span className={styles.reportHeaderDateRangeTextStart}>{startDate.format('MMM DD')}</span>
        <IconArrowRight width={12} height={12} color={colorVariables.grayDarker} />
        <span className={styles.reportHeaderDateRangeTextEnd}>{endDate.format('MMM DD')}</span>
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

export default function ReportWrapper({
  title,
  startDate,
  endDate,
  children,
}) {
  return <div className={styles.reportWrapper}>
    <ReportWrapperHeader
      title={title}
      startDate={startDate}
      endDate={endDate}
    />
    {children}
  </div>;
}
