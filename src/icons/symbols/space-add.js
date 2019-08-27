import React from "react";

const SpaceAdd = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M11,13 L11,22 L2,22 L2,13 L11,13 Z M18.5,14 L18.5,16.5 L21,16.5 L21,18.5 L18.5,18.5 L18.5,21 L16.5,21 L16.5,18.5 L14,18.5 L14,16.5 L16.5,16.5 L16.5,14 L18.5,14 Z M9,15 L4,15 L4,20 L9,20 L9,15 Z M11,2 L11,11 L2,11 L2,2 L11,2 Z M22,2 L22,11 L13,11 L13,2 L22,2 Z M9,4 L4,4 L4,9 L9,9 L9,4 Z M20,4 L15,4 L15,9 L20,9 L20,4 Z"
      />
    </g>
  </svg>
);

export default SpaceAdd;
