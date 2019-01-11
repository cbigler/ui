import React from 'react';
import styles from './styles.scss';

export default function AppBar({
  leftSpan,
  rightSpan,
  title,
}) {
  return <div className={styles.appBar}>
    {leftSpan}
    <div className={styles.appBarTitle}>{title}</div>
    {rightSpan}
  </div>;
}
