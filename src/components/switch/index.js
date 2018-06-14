import React from 'react';
import uuid from 'uuid';

export default function Switch({enabled, disabled, onChange}) {
  const uniqueId = uuid.v4();

  return <div className={`switch ${disabled ? 'disabled' : ''}`}>
    <input
      type="checkbox"
      id={`switch-${uniqueId}`}
      checked={enabled}
      onChange={onChange}
    />
    <label htmlFor={`switch-${uniqueId}`}></label>
  </div>
}
