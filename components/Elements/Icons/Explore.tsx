import React, { SVGAttributes } from 'react';

const Explore = ({ className, width, height, fill }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="m7.425 17.075l6.25-2.925q.15-.075.275-.2q.125-.125.2-.275l2.925-6.25q.1-.225-.087-.413q-.188-.187-.413-.087l-6.25 2.925q-.15.075-.275.2q-.125.125-.2.275l-2.925 6.25q-.1.225.088.413q.187.187.412.087ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" />
    </svg>
  );
};

export default Explore;
