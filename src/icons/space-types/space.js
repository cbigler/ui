import React from "react";

const Space = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M3,22 L3,20 L6,20 L6,2 L18,2 L18,20 L21,20 L21,22 L6,22 L3,22 Z M16,4 L8,4 L8,20 L16,20 L16,4 Z"
      />
      <circle cx={13.5} cy={12.5} r={1.5} fill={color} />
    </g>
  </svg>
);

export default Space;
