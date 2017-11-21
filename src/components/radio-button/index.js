import * as React from 'react';

import { v4 } from 'uuid';

export default function RadioButton({checked, onChange, text}) {
  const unique = v4();
  return <div className="radio-button">
    <input
      type="radio"
      id={`radio-button-${unique}`}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={`radio-button-${unique}`}>{text}</label>
  </div>;
}
