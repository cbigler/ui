import React from 'react';
import { v4 } from 'uuid';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function RadioButton({text, name, value, checked, disabled}) {
  const unique = v4();
  return <div className={styles.radioButton}>
    <input
      type="radio"
      className={styles.radioButtonInput}
      id={`radio-button-${unique}`}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
    />
    <label
      className={styles.radioButtonLabel}
      htmlFor={`radio-button-${unique}`}
    >{text}</label>
  </div>;
}

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = {
  text: propTypes.node,
  name: propTypes.string,
  value: propTypes.string,
  checked: propTypes.boolean,
  disabled: propTypes.boolean,
};
