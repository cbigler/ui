import React, { useContext } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export const AppBarContext = React.createContext(null);

export function AppBarTitle({ children }) {
  return (
    <span className={styles.appBarTitle}>
      {children}
    </span>
  );
}

export function AppBarSection({ children }) {
  return (
    <span>{children}</span>
  );
}

export default function AppBar({ children }) {
  const context = useContext(AppBarContext);
  const containerClasses = classnames(styles.appBar, {
    [styles.appBarTransparent]: context === 'TRANSPARENT'
  });
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}

AppBar.displayName = 'AppBar';
