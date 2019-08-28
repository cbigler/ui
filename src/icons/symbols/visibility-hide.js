import React from "react";

const VisibilityHide = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M18.363961,7.94974747 L22.4142136,12 L18.363961,16.0502525 C14.8492424,19.5649712 9.1507576,19.5649712 5.63603897,16.0502525 L1.58578644,12 L5.63603897,7.94974747 C9.1507576,4.43502884 14.8492424,4.43502884 18.363961,7.94974747 Z M18.5857864,12.9997085 L5.41378644,12.9997085 L7.05025253,14.636039 C9.78392257,17.369709 14.2160774,17.369709 16.9497475,14.636039 L18.5857864,12.9997085 Z M7.05025253,9.36396103 L5.41378644,10.9997085 L18.5857864,10.9997085 L16.9497475,9.36396103 C14.2160774,6.63029099 9.78392257,6.63029099 7.05025253,9.36396103 Z"
      />
    </g>
  </svg>
);

export default VisibilityHide;
