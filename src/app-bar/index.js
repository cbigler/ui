import React from 'react';
import styles from './styles.scss';

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
  return (
    <div className={styles.appBar}>
      {children}
    </div>
  );
}

AppBar.displayName = 'AppBar';
