import * as React from 'react';
import './styles.scss';

let switchId = 0;

export default function Switch({enabled, onChange}) {
  // Required to give the label and checkbox matchine identifiers.
  const randomId = (++switchId).toString();

  return <div className="switch">
    <input
      type="checkbox"
      id={`switch-${randomId}`}
      checked={enabled}
      onChange={onChange}
    />
    <label htmlFor={`switch-${randomId}`}></label>
  </div>
}
