import React from "react";

const Cards = ({color, width, height}) => <svg width={width || "18"} height={height || "17"} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
<g id="Page-1" fill="none" fillRule="evenodd">
    <g id="IconCards" transform="translate(-1 -2)" fill={color} fillRule="nonzero">
        <path d="M2,18.75 C1.58578644,18.75 1.25,18.4142136 1.25,18 L1.25,10 C1.25,9.58578644 1.58578644,9.25 2,9.25 L18,9.25 C18.4142136,9.25 18.75,9.58578644 18.75,10 L18.75,18 C18.75,18.4142136 18.4142136,18.75 18,18.75 L2,18.75 Z M2.75,17.25 L17.25,17.25 L17.25,10.75 L2.75,10.75 L2.75,17.25 Z"
        id="icon-square-copy-2" />
        <path d="M4,10.75 C3.58578644,10.75 3.25,10.4142136 3.25,10 L3.25,6 C3.25,5.58578644 3.58578644,5.25 4,5.25 L16,5.25 C16.4142136,5.25 16.75,5.58578644 16.75,6 L16.75,10 C16.75,10.4142136 16.4142136,10.75 16,10.75 L4,10.75 Z M4.75,9.25 L15.25,9.25 L15.25,6.75 L4.75,6.75 L4.75,9.25 Z"
        id="icon-square-copy-3" />
        <path d="M6,6.75 C5.58578644,6.75 5.25,6.41421356 5.25,6 L5.25,3 C5.25,2.58578644 5.58578644,2.25 6,2.25 L14,2.25 C14.4142136,2.25 14.75,2.58578644 14.75,3 L14.75,6 C14.75,6.41421356 14.4142136,6.75 14,6.75 L6,6.75 Z M6.75,5.25 L13.25,5.25 L13.25,3.75 L6.75,3.75 L6.75,5.25 Z"
        id="icon-square-copy-4" />
    </g>
</g>
</svg>;

export default Cards;