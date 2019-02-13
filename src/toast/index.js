import React from 'react';
import classnames from 'classnames';
import colorVariables from '../../variables/colors.json';
import propTypes from 'prop-types';

import Icons from '../icons';

import styles from './styles.scss';

export default function Toast({
  icon,
  type,
  title,

  onDismiss,

  children,
}) {
  const typeSuffix = ({
    'primary': 'Primary',
    'success': 'Success',
    'warning': 'Warning',
    'danger': 'Danger',
  })[type] || 'Primary';
  return <div className={classnames(styles.toast, styles[`toast${typeSuffix}`])}>
    <div className={classnames(styles.toastIcon, styles[`toastIcon${typeSuffix}`])}>
      <div className={styles.toastIconGlyph}>
        {icon}
      </div>
    </div>
    <div className={styles.toastBody}>
      {onDismiss ? <div className={styles.toastDismiss} onClick={onDismiss}>
        <Icons.Close
          width={10}
          height={10}
          color={colorVariables.grayCinder}
        />
      </div> : null}
      {title ? <h3 className={classnames(styles.toastHeader, styles[`toastHeader${typeSuffix}`])}>{title}</h3> : null}
      <span className={classnames(styles.toastText, title ? styles.hasTitle : styles.noTitle)}>
        {children}
      </span>
    </div>
  </div>;
}
Toast.propTypes = {
  icon: propTypes.node,
  type: propTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
  title: propTypes.node,

  onDismiss: propTypes.func,
  children: propTypes.node.isRequired,
};
