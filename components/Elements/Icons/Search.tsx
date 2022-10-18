import React, { SVGAttributes } from 'react';

const Search = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1200 1200"
  >
    <path
      fill={fill}
      d="M672.633 0C389.326 0 159.634 229.652 159.634 512.958c0 100.662 28.986 194.563 79.083 273.79c-.368.16-.729.305-1.098.471l-223.21 223.172L204.019 1200l231.249-231.288c-.069-.326-.162-.651-.234-.979c71.035 37.19 151.865 58.224 237.6 58.224c283.309 0 512.959-229.69 512.959-512.997C1185.59 229.652 955.939 0 672.633 0zm0 227.877c157.441 0 285.041 127.639 285.041 285.081s-127.6 285.081-285.041 285.081c-157.442 0-285.082-127.639-285.082-285.081S515.19 227.877 672.633 227.877z"
    />
  </svg>
);

export default Search;