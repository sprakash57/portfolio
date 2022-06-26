import React, { SVGAttributes } from 'react';

const Check = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      x="0px"
      y="0px"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
};

export default Check;
