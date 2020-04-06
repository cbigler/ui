import React from "react";

const DeviceSide = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <title>{"device / device-side"}</title>
    <desc>{"Created with Sketch."}</desc>
    <g
      id="device-/-device-side"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M15.1405086,3.89315331 L20.0936724,6.81234089 C21.27821,7.51045777 22,8.74857158 22,10.0823368 L22,10.597782 C22,10.7035473 21.9954573,10.8087508 21.9864951,10.9131655 C21.9952103,11.0248058 22,11.1374196 22,11.2507788 L22,13.1925983 C22,14.5300111 21.3315955,15.7789364 20.2188008,16.5207995 L15.3282012,19.7811992 C13.3128047,21.1247969 10.6871953,21.1247969 8.67179882,19.7811992 L3.78119922,16.5207995 C2.66840454,15.7789364 2,14.5300111 2,13.1925983 L2,11.2507788 C2,11.1374196 2.00478975,11.0248058 2.01421748,10.9131768 C2.00454267,10.8087508 2,10.7035473 2,10.597782 L2,10.0823368 C2,8.74857158 2.72179004,7.51045777 3.90632758,6.81234089 L8.85949136,3.89315331 C10.7859436,2.75778291 13.2140564,2.75778291 15.1405086,3.89315331 Z M17.5,16 C17.2238576,16 17,16.2238576 17,16.5 C17,16.7761424 17.2238576,17 17.5,17 C17.7761424,17 18,16.7761424 18,16.5 C18,16.2238576 17.7761424,16 17.5,16 Z M10.1117938,5.51531016 L9.90632758,5.63332156 L4.95316379,8.67597932 C4.40645415,9.01181524 4.05689139,9.58743956 4.00634747,10.2207164 L4,10.3801313 L4,10.9173778 C4,11.5156197 4.26756289,12.0793694 4.72397593,12.4574466 L4.85307531,12.5558416 L9.70615062,15.9529943 C11.0235495,16.8751735 12.7580272,16.9152682 14.1116938,16.0732786 L14.2938494,15.9529943 L19.1469247,12.5558416 C19.6370236,12.2127724 19.9454281,11.6702871 19.9934253,11.0795659 L20,10.9173778 L20,10.3801313 C20,9.73851054 19.6924918,9.13936431 19.1793474,8.76482849 L19.0468362,8.67597932 L14.0936724,5.63332156 C12.8769657,4.88591602 11.3600965,4.84657889 10.1117938,5.51531016 Z"
        id="Shape"
        fill={color}
      />
    </g>
  </svg>
);

export default DeviceSide;