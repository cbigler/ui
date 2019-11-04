import React from "react";

const ImpersonateOff = ({ width, height, color }) => (
  <svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width={24} height={24} />
      <path
        fill={color}
        fillRule="nonzero"
        d="M12,1.94590745 L22.2136693,5.35046389 L18.8662448,17.6243539 L12,22.2018504 L5.13375522,17.6243539 L1.78633067,5.35046389 L12,1.94590745 Z M14.5,15 L9.5,15 C8.7802941,15 8.16534501,15.5112155 8.02829028,16.2075968 C8.02466072,16.2260388 8.01146804,16.7409184 8.00445467,17.1353019 L12,19.7981496 L15.9956169,17.1354011 C15.9887402,16.7420575 15.9758347,16.2287711 15.9723022,16.2106237 C15.8364673,15.5128076 15.2208408,15 14.5,15 Z M12,4.05409255 L4.21366933,6.64953611 L6.43741695,14.8038933 C7.03890883,13.7190335 8.19511895,13 9.5,13 L14.5,13 C15.8049592,13 16.9610532,13.7190854 17.5625144,14.8037678 L19.7863307,6.64953611 L12,4.05409255 Z M12,5 C13.9329966,5 15.5,6.56700338 15.5,8.5 C15.5,10.4329966 13.9329966,12 12,12 C10.0670034,12 8.5,10.4329966 8.5,8.5 C8.5,6.56700338 10.0670034,5 12,5 Z M12,7 C11.1715729,7 10.5,7.67157288 10.5,8.5 C10.5,9.32842712 11.1715729,10 12,10 C12.8284271,10 13.5,9.32842712 13.5,8.5 C13.5,7.67157288 12.8284271,7 12,7 Z"
      />
    </g>
  </svg>
);

export default ImpersonateOff;