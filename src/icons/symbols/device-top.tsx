import React from "react";

const DeviceTop = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <title>{"device / device-top"}</title>
    <desc>{"Created with Sketch."}</desc>
    <g
      id="device-/-device-top"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M17,3 C19.209139,3 21,4.790861 21,7 L21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 L3,7 C3,4.790861 4.790861,3 7,3 L17,3 Z M12,17 C11.4477153,17 11,17.4477153 11,18 C11,18.5522847 11.4477153,19 12,19 C12.5522847,19 13,18.5522847 13,18 C13,17.4477153 12.5522847,17 12,17 Z M17,5 L7,5 C5.9456382,5 5.08183488,5.81587779 5.00548574,6.85073766 L5,7 L5,13 C5,14.0543618 5.81587779,14.9181651 6.85073766,14.9945143 L7,15 L17,15 C18.0543618,15 18.9181651,14.1841222 18.9945143,13.1492623 L19,13 L19,7 C19,5.9456382 18.1841222,5.08183488 17.1492623,5.00548574 L17,5 Z"
        id="Shape"
        fill={color}
      />
    </g>
  </svg>
);

export default DeviceTop;
