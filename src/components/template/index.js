import React from 'react';

import styles from './styles.scss';

export default function %COMPONENTUPPERCAMEL%({text}) {
  return <div className={styles.%COMPONENTCAMEL%}>
    <p>{text}</p>
  </div>;
}
