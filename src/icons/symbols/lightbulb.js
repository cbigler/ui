import React from "react";

const Lightbulb = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M12,6 C15.3137085,6 18,8.71613918 18,12.0666667 C18,14.0222222 17,16 15,18 L14,22 L10,22 L9,18 C7,16 6,14.0222222 6,12.0666667 C6,8.71613918 8.6862915,6 12,6 Z M12,8 C9.79583819,8 8,9.81579195 8,12.0666667 C8,13.2664624 8.58903983,14.5745992 9.85992945,16 L14.1400706,16 C15.4109602,14.5745992 16,13.2664624 16,12.0666667 C16,9.81579195 14.2041618,8 12,8 Z M5.98959236,4.0753788 L8.1109127,6.19669914 L6.69669914,7.6109127 L4.5753788,5.48959236 L5.98959236,4.0753788 Z M18.0104076,4.0753788 L19.4246212,5.48959236 L17.3033009,7.6109127 L15.8890873,6.19669914 L18.0104076,4.0753788 Z M13,2 L13,5 L11,5 L11,2 L13,2 Z"
      />
    </g>
  </svg>
);

export default Lightbulb;
