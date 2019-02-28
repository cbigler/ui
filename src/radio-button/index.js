import React from 'react';
import { v4 } from 'uuid';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function RadioButton({id, text, checked, onChange}) {
  const unique = v4();
  return <div className={styles.radioButton}>
    <input
      type="radio"
      className={styles.radioButtonInput}
      id={id || `radio-button-${unique}`}
      onChange={onChange}
      checked={checked}
    />
    <label
      className={styles.radioButtonLabel}
      htmlFor={id || `radio-button-${unique}`}
    >{text}</label>
  </div>;
}

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = {
  checked: propTypes.bool,
  onChange: propTypes.func,
  text: propTypes.node,
};
