import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
  size?: string;
}

export default function Copyright({ size = "24", fill = "white" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 32 32"
    >
      <g fill="currentColor">
        <path d="M18.722 19.54c.22-.13.46-.22.72-.22c1.31 0 1.84 1.74.7 2.43a6.9 6.9 0 0 1-3.6 1.02h-.29c-3.94 0-7.13-3.34-6.86-7.35c.25-3.65 3.45-6.41 7.11-6.41h.05c1.15 0 2.22.28 3.17.78c1.23.64.77 2.5-.61 2.5c-.22 0-.43-.07-.63-.17c-.58-.29-1.23-.47-1.92-.47h-.29c-2.48 0-4.47 2.14-4.22 4.67c.21 2.2 2.19 3.82 4.41 3.82h.1c.79 0 1.53-.22 2.16-.6"></path>
        <path d="M2 16c0 7.72 6.28 14 14 14s14-6.28 14-14S23.72 2 16 2S2 8.28 2 16m3 0C5 9.93 9.93 5 16 5c6.06 0 11 4.93 11 11s-4.93 11-11 11S5 22.06 5 16"></path>
      </g>
    </svg>
  );
}