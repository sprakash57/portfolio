import { classnames } from '@/helpers/utils';
import s from './index.module.scss';

const Arrow = ({ className = '' }: { className?: string }) => {
  return <span className={classnames(s.arrow, className)}>&gt;</span>;
};

export default Arrow;
