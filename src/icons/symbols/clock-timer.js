import React from "react";

const ClockTimer = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M11,4 L10,4 L10,2 L14,2 L14,4 L13,4 L13,4.05492853 C14.7358554,4.24681677 16.3229212,4.93237613 17.6176886,5.96809784 L18.6568599,4.92892655 L20.0710734,6.34314011 L19.0319022,7.3823114 C20.2635287,8.92198163 21,10.8749832 21,13 C21,17.9705705 16.9705705,22 12,22 C7.02942954,22 3,17.9705705 3,13 C3,8.36743869 6.50004355,4.55237132 11,4.05492853 L11,4 Z M19,13 C19,9.13399904 15.866001,6 12,6 C8.13399904,6 5,9.13399904 5,13 C5,16.866001 8.13399904,20 12,20 C15.866001,20 19,16.866001 19,13 Z M11,12 L11,9 L13,9 L13,14 L8,14 L8,12 L11,12 Z"
      />
    </g>
  </svg>
);

export default ClockTimer;
