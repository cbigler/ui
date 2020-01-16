import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import colors from '../../variables/colors.json';

const AppSidebar: React.FC<any> = ({ visible, backgroundColor=colors.white, width=415, children }) => {
  return <div
    className={classnames(styles.appSidebarCollapser, { [styles.visible]: visible })}
    style={{width: visible ? width : undefined}}
  >
    <div className={styles.appSidebar} style={{backgroundColor, width}}>{children}</div>
  </div>;
}

AppSidebar.displayName = 'AppSidebar';
export default AppSidebar;
