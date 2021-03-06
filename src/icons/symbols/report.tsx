import React from "react";

const Report = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M19,12.5530788 L19,5 L5,5 L5,11.5310748 L8.67366581,7.25176151 L12.2266966,13.2718198 L15.4931409,9.58216498 L19,12.5530788 Z M19,15.2106152 L15.7034094,12.417835 L11.887469,16.7281802 L8.35811494,10.7482385 L5,14.6599786 L5,19 L19,19 L19,15.2106152 L19,15.2106152 Z M3,3 L21,3 L21,21 L3,21 L3,3 Z"
      />
    </g>
  </svg>
);

export default Report;
