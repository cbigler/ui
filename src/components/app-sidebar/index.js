import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export default function AppSidebar({ visible, children }) {
  return <div className={classnames(styles.appSidebarCollapser, {
    [styles.visible]: visible
  })}>
    <div className={styles.appSidebar}>{children}</div>
  </div>;
}
