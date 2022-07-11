import React, { SVGAttributes } from 'react';

const Caret = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => (
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
    <path fill="#f66346" d="m11.998 17l7-8h-14z" />
  </svg>
);

export default Caret;
