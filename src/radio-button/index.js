import React from 'react';
import { v4 } from 'uuid';
import propTypes from 'prop-types';

import styles from './styles.scss';

export default function RadioButton({checked, onChange, text}) {
  const unique = v4();
  return <div className={styles.radioButton}>
    <input
      type="radio"
      className={styles.radioButtonInput}
      id={`radio-button-${unique}`}
      onChange={onChange}
      checked={checked}
    />
    <label
      className={styles.radioButtonLabel}
      htmlFor={`radio-button-${unique}`}
    >{text}</label>
  </div>;
}
RadioButton.propTypes = {
  checked: propTypes.bool,
  onChange: propTypes.func,
  text: propTypes.node,
};
