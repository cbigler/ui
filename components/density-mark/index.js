import * as React from 'react';
import classnames from 'classnames';

export default function DensityMark({className}) {
  return <div className={classnames('density-mark', className)}>
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 211 216.5">
      <path d="M84.9,119.8c4.5-2.7,8.3-6.5,10.9-11c2.8-4.7,4.4-10.2,4.4-16.1v-21c0-1.1,0.9-2,2-2h9.5c1.1,0,2,0.9,2,2v21
      c0,5.9,1.6,11.4,4.4,16.1c2.7,4.5,6.4,8.3,10.9,11l18.7,10.8c1,0.6,1.3,1.8,0.7,2.7l-4.7,8.2c-0.6,1-1.8,1.3-2.7,0.7l-18.3-10.6
      c-4.6-2.6-10-4.1-15.7-4.1c-5.7,0-11,1.5-15.7,4.1l-18.3,10.6c-1,0.6-2.2,0.2-2.7-0.7l-4.7-8.2c-0.6-1-0.2-2.2,0.7-2.7L84.9,119.8z"
      />
    </svg>
  </div>;
}
