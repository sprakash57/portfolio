import React, { SVGAttributes } from 'react';

const Buymecoffee = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      x="0px"
      y="0px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path d="M9.197 0L7.578 3.735H5.171v3.359h.921l.943 5.975H5.562L7.51 24.042l1.249-.015L10.015 32h11.891l.083-.531l1.172-7.443l1.188.015l1.943-10.973h-1.407l.937-5.975h1.011V3.734h-2.557L22.651-.001zm.704 1.073h12.057l1.025 2.375H8.868zm-3.666 3.73H25.76v1.228H6.235zm.604 9.333h18.183l-1.568 8.823l-7.536-.079l-7.511.079z" />
    </svg>
  );
};

export default Buymecoffee;