import { SVGAttributes } from 'react';

const Twitter = ({ fill = 'white' }: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='24' viewBox='0 0 24 24'>
      <path
        fill={fill}
        d='M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z'
      />
    </svg>
  );
};

export default Twitter;