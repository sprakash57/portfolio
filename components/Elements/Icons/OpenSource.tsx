import React, { SVGAttributes } from 'react';

const OpenSource = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.523 0 10 4.477 10 10c0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55a3 3 0 1 0-2.809.001l-2.518 6.55A10.005 10.005 0 0 1 2 12C2 6.477 6.477 2 12 2z" />
  </svg>
);

export default OpenSource;
