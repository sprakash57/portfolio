import { ScreenSize } from '@/helpers/constants';
import { useScreenDimension } from '@/helpers/hooks';
import Image from 'next/image';
import React from 'react';
import { Icon, RouteLink } from '../Elements';
import s from './index.module.scss';

const TEAM = [
  {
    name: 'Sunny Prakash',
    area: 'Mostly Frontend',
    description:
      'He has 5+ years of experience in delivering robust Web and App based solutions. Skilled in designing, developing, and testing full-stack JavaScript applications. Believer of "Learn and Share". Also plays Elder Scrolls Online(@suprdev).',
    photo: 'https://i.ibb.co/kc4gKDn/newphoto.jpg',
    thumbnail: 'https://i.ibb.co/pXfv2KD/newphoto.jpg',
    icons: [
      { type: 'linkedin', src: 'https://www.linkedin.com/in/sunnyprakash12' },
      { type: 'twitter', src: 'https://twitter.com/sunny_pr_' },
      { type: 'github', src: 'https://github.com/sprakash57' },
      { type: 'youtube', src: 'https://www.youtube.com/channel/UC8hDBXuYXqDerW1_kGPGbTA' },
    ],
  },
  {
    name: 'Indrani Biswas',
    area: 'Python Expert',
    description:
      'She is skilled in Python based Web and Dashboard application. A career guide who loves to provide consulatation regarding Visa-sponsored jobs, process and its entierity',
    photo: 'https://i.ibb.co/3Fpghmv/Indrani-Pic.jpg',
    thumbnail: 'https://i.ibb.co/t2qVCpz/Indrani-Pic.jpg',
    icons: [
      { type: 'linkedin', src: 'https://www.linkedin.com/in/ibiswas' },
      { type: 'instagram', src: 'https://www.instagram.com/expat_travel_finds' },
      { type: 'github', src: 'https://github.com/biswain2309' },
      { type: 'youtube', src: 'https://www.youtube.com/c/ExpatTravelFinds' },
    ],
  },
];

const Team = () => {
  const { type: screenType } = useScreenDimension();
  return (
    <section className={s.team}>
      <h2>OUR TEAM</h2>
      <div className={s.team__row}>
        {TEAM.map(({ name, area, photo, thumbnail, icons }) => (
          <div className={s.team__card} key={name}>
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
        ))}
      </div>
    </section>
  );
};

export default Team;
