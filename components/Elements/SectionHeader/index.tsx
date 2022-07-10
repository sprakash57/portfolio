import { classnames } from '@/helpers/utils';
import Icon from '@/components/Elements/Icons/Icon';
import styles from './index.module.scss';

interface Props {
  title: string;
  icon?: string;
  imageAlt?: string;
  headerStyle?: string;
  figureStyle?: string;
  width?: number;
  height?: number;
}

const SectionHeader = ({ title, icon, imageAlt, headerStyle, figureStyle, width = 30, height = 30 }: Props) => {
  return (
    <header className={classnames(styles.header, headerStyle)}>
      {icon && (
        <figure className={classnames(styles.header__icon, figureStyle)} title={imageAlt}>
          <Icon name={icon} width={String(width)} height={String(height)} />
        </figure>
      )}
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
