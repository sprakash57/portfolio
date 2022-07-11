import React, { SVGAttributes } from 'react';

const ExtLink = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      d="M17.001 20h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4v2h-4v11h11v-4h2v4a2 2 0 0 1-2 2zm-5.3-6.293l-1.41-1.414L16.584 6h-3.583V4h7v7h-2V7.415l-6.3 6.292z"
      fill="#626262"
    />
  </svg>
);

export default ExtLink;
