import React, { SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  withBg?: boolean;
}

const Facebook = ({ className, width, height, fill, withBg = false }: Props) => {
  if (withBg) {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill={fill}
          fillRule="evenodd"
          d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g>
        <path d="M18.768,7.465H14.5V5.56c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.513L14.171,0.5C10.244,0.5,9.5,3.438,9.5,5.32 v2.145h-3v4h3c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.465z" />
      </g>
    </svg>
  );
};

export default Facebook;
