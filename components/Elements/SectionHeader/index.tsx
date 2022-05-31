import { classnames } from '@/helpers/utils';
import RouteLink from 'common-components/RouteLink';
import Image from 'next/image';

interface Props {
  title: string;
  icon?: string;
  imageAlt?: string;
  headerStyle?: string;
  figureStyle?: string;
  width?: number;
  height?: number;
}

const SectionHeader = ({ title, icon, imageAlt, headerStyle, figureStyle, width = 25, height = 25 }: Props) => {
  return (
    <header className={classnames('header', headerStyle)}>
      {icon && (
        <figure className={classnames('icon', figureStyle)}>
          <Image
            src={require(`@/public/icons/${icon}.svg`)}
            alt={imageAlt}
            title={imageAlt}
            width={width}
            height={height}
          />
        </figure>
      )}
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
