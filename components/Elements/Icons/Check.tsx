import React, { SVGAttributes } from 'react';

const Check = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      x="0px"
      y="0px"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
};

export default Check;
