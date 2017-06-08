import * as React from 'react';
import './styles.scss';

let switchId = 0;

export default function Switch({enabled, onChange}) {
  const randomId = (++switchId).toString();

  return <div className="switch">
    <input
      type="checkbox"
      id={`switch-id-${randomId}`}
      checked={enabled}
      onChange={onChange}
    />
    <label htmlFor={`switch-id-${randomId}`}></label>
  </div>
}
