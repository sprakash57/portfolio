import React, { SVGAttributes } from 'react';

const Consult = ({ className = '', width, height, fill }: SVGAttributes<SVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 15 15"
  >
    <path
      fill={fill}
      d="m4.076 6.47l.495.07l-.495-.07Zm-.01.07l-.495-.07l.495.07Zm6.858-.07l.495-.07l-.495.07Zm.01.07l-.495.07l.495-.07ZM9.5 12.5v.5a.5.5 0 0 0 .5-.5h-.5Zm-4 0H5a.5.5 0 0 0 .5.5v-.5Zm-.745-3.347l.396-.306l-.396.306Zm5.49 0l-.396-.306l.396.306ZM6 15h3v-1H6v1ZM3.58 6.4l-.01.07l.99.14l.01-.07l-.99-.14ZM7.5 3a3.959 3.959 0 0 0-3.92 3.4l.99.14A2.959 2.959 0 0 1 7.5 4V3Zm3.92 3.4A3.959 3.959 0 0 0 7.5 3v1a2.96 2.96 0 0 1 2.93 2.54l.99-.14Zm.01.07l-.01-.07l-.99.14l.01.07l.99-.14Zm-.79 2.989c.63-.814.948-1.875.79-2.99l-.99.142a2.951 2.951 0 0 1-.59 2.236l.79.612ZM9 10.9v1.6h1v-1.599H9Zm.5 1.1h-4v1h4v-1Zm-3.5.5v-1.599H5V12.5h1ZM3.57 6.47a3.951 3.951 0 0 0 .79 2.989l.79-.612a2.951 2.951 0 0 1-.59-2.236l-.99-.142ZM6 10.9c0-.823-.438-1.523-.85-2.054l-.79.612c.383.495.64.968.64 1.442h1Zm3.85-2.054C9.437 9.378 9 10.077 9 10.9h1c0-.474.257-.947.64-1.442l-.79-.612ZM7 0v2h1V0H7ZM0 8h2V7H0v1Zm13 0h2V7h-2v1ZM3.354 3.646l-1.5-1.5l-.708.708l1.5 1.5l.708-.708Zm9 .708l1.5-1.5l-.708-.708l-1.5 1.5l.708.708Z"
    />
  </svg>
);

export default Consult;
