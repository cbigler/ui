import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function %COMPONENTUPPERCAMEL%({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
%COMPONENTUPPERCAMEL%.displayName = '%COMPONENTUPPERCAMEL%';
%COMPONENTUPPERCAMEL%.defaultProps = {
};
%COMPONENTUPPERCAMEL%.propTypes = {
};
