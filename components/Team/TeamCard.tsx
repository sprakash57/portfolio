import { ScreenSize } from '@/helpers/constants';
import { useScreenDimension } from '@/helpers/hooks';
import Image from 'next/image';
import { Icon, RouteLink } from '../Elements';
import s from './index.module.scss';

export interface ITeamCard {
  photo: string;
  thumbnail: string;
  name: string;
  area: string;
  icons: { type: string; src: string }[];
}

const TeamCard = ({ photo, thumbnail, name, area, icons }: ITeamCard) => {
  const { type: screenType } = useScreenDimension();
  return (
    <div className={s.team__card}>
      <figure>
        <Image
          src={photo}
          alt="Photo"
          placeholder="blur"
          blurDataURL={thumbnail}
          width={140}
          height={140}
          style={{ borderRadius: '50%' }}
        />
      </figure>
      <h3>{name}</h3>
      <small>{area}</small>
      <div className={s['team__card_icons']}>
        {icons.map(({ type, src }) => (
          <RouteLink href={src} key={type} isExternal>
            <Icon
              name={type}
              styles={s[`team__card_icons--${type}`]}
              width={screenType === ScreenSize.MOBILE ? '32' : '20'}
              height={screenType === ScreenSize.MOBILE ? '32' : '20'}
            />
          </RouteLink>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
