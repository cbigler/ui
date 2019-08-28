import React from "react";

const FoodUtensils = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M5,3 L5,10 L6,10 L6,3 L8,3 L8,10 L9,10 L9,3 L11,3 L11,12 L8,12 L8,21 L6,21 L6,12 L3,12 L3,3 L5,3 Z M17,3 C19.209139,3 21,4.790861 21,7 L21,9 C21,10.8635652 19.7256022,12.429479 18.0007613,12.8737865 L18,21 L16,21 L16.0002435,12.8740452 C14.2748927,12.4300871 13,10.8639271 13,9 L13,7 C13,4.790861 14.790861,3 17,3 Z M17,5 C15.8954305,5 15,5.8954305 15,7 L15,9 C15,10.0962015 15.8819148,10.9864209 16.9749325,10.9998461 L17.025,10.999 L17.1492623,10.9945143 C18.1841222,10.9181651 19,10.0543618 19,9 L19,7 C19,5.8954305 18.1045695,5 17,5 Z"
      />
    </g>
  </svg>
);

export default FoodUtensils;
