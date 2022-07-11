import React, { SVGAttributes } from 'react';

const GitHub = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="M12 0A12 12 0 0 0 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57l-.015-2.235C6 21.135 5.22 19.845 4.98 19.17c-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22l-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12 12 12 0 0 0 12 0z" />
    </svg>
  );
};

export default GitHub;
