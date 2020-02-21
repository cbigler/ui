import React from "react";

const ReportShare = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <title>{"report / report-share"}</title>
    <desc>{"Created with Sketch."}</desc>
    <g
      id="report-/-report-share"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M12,3 L12,5 L5,5 L5,11.5310748 L8.67366581,7.25176151 L12.2266966,13.2718198 L15.4931409,9.58216498 L19,12.5530788 L19,12.55 L21,14.2474233 L21,21 L3,21 L3,3 L12,3 Z M8.35811494,10.7482385 L5,14.6599786 L5,19 L19,19 L19,15.2106152 L15.7034094,12.417835 L11.887469,16.7281802 L8.35811494,10.7482385 Z M23,1 L23,7 L21,7 L20.9998932,4.414 L16.7071068,8.70710678 L15.2928932,7.29289322 L19.5848932,3 L17,3 L17,1 L23,1 Z"
        id="Shape"
        fill={color}
      />
    </g>
  </svg>
);

export default ReportShare;
