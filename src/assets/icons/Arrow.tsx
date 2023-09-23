import { SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  size?: string;
}

const Arrow = ({ fill = 'white', className, size = '24' }: Props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' className={className}>
      <path
        fill={fill}
        d='M12 19.575q-.2 0-.375-.062T11.3 19.3l-6.6-6.6q-.3-.3-.3-.712t.3-.713q.3-.3.7-.3t.7.3l4.9 4.9v-11.2q0-.425.288-.7T12 4q.425 0 .713.288T13 5v11.175l4.9-4.9q.3-.3.7-.3t.7.3q.3.3.3.713t-.3.712l-6.6 6.6q-.15.15-.325.213t-.375.062Z'
      />
    </svg>
  );
};

export default Arrow;
