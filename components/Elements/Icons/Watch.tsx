import React, { SVGAttributes } from 'react';

const Watch = ({ className = '', width, height, fill }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        d="M8.75 8A4.75 4.75 0 0 0 4 12.75v18.5A4.75 4.75 0 0 0 8.75 36h30.5A4.75 4.75 0 0 0 44 31.25v-18.5A4.75 4.75 0 0 0 39.25 8H8.75ZM6.5 12.75a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v18.5a2.25 2.25 0 0 1-2.25 2.25H8.75a2.25 2.25 0 0 1-2.25-2.25v-18.5Zm4.75 26.75a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5h-25.5Z"
      />
    </svg>
  );
};

export default Watch;
