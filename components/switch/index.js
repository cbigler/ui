import * as uuid from 'uuid';
import * as React from 'react';
import './styles.scss';

export default function Switch({enabled, onChange}) {
  const uniqueId = uuid.v4();

  return <div className="switch">
    <input
      type="checkbox"
      id={`switch-${uniqueId}`}
      checked={enabled}
      onChange={onChange}
    />
    <label htmlFor={`switch-${uniqueId}`}></label>
  </div>
}
