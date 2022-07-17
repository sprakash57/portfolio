import { classnames } from '@/helpers/utils';
import styles from './index.module.scss';

const Loader = ({ size = 50, className }: { size?: number; className?: string }) => {
  return (
    <section className={classnames(styles.loader, className)} role="status">
      <div className={styles.loader__icon} style={{ width: `${size}px`, height: `${size}px` }} />
    </section>
  );
};

export default Loader;
