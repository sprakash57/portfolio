import React from 'react';

const ClipboardChecked = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
        <g strokeWidth='2'>
          <path d='M12 3H19V21H5V3H12Z' />
          <path strokeDasharray='10' strokeDashoffset='10' d='M9 13L11 15L15 11'>
            <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='10;0' />
          </path>
        </g>
        <path d='M14.5 3.5V6.5H9.5V3.5' />
      </g>
    </svg>
  );
};

export default ClipboardChecked;
