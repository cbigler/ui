import React from 'react';
import styles from './styles.module.scss';
import colors from '../../variables/colors.json';

const AppScrollView: React.FC<any> = ({ backgroundColor=colors.white, children }) => {
  return <div
    className={styles.appScrollView}
    style={{ backgroundColor }}>{children}</div>;
}

AppScrollView.displayName = 'AppScrollView';
export default AppScrollView;
