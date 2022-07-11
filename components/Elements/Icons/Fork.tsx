import React, { SVGAttributes } from 'react';

const Fork = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1.033-3.817A3.001 3.001 0 1 1 11 16.17v-1.047l.008-.221a1 1 0 0 0-.462-.637L7.46 12.42A3 3 0 0 1 6 9.845V7.829a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324 3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V7.841a3.001 3.001 0 1 1 2-.024v2.028a3 3 0 0 1-1.46 2.575l-3.086 1.846a1 1 0 0 0-.462.637l.008.22v1.06zM7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export default Fork;
