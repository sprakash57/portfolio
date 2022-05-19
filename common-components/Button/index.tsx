import { RouteLink } from '@/common-components';
import { classnames } from '@/helpers/utils';
import styles from './index.module.scss';

type Props = {
  label: string;
  href: string;
  as?: string;
  external?: boolean;
  containerClass?: string;
};

const Button = ({ as = 'link', label, href, external, containerClass = '' }: Props) => {
  if (as === 'link') {
    return (
      <RouteLink href={href} classForContainer={classnames(styles.base, containerClass)} isExternal={external}>
        {label}
      </RouteLink>
    );
  }
  return <button>{label}</button>;
};

export default Button;
