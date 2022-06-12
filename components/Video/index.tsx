import RouteLink from 'common-components/RouteLink';
import Image from 'next/image';
import React from 'react';
import SectionHeader from '../Elements/SectionHeader';
import styles from './index.module.scss';
import ExtLink from '@/public/icons/external.svg';
import Button from 'common-components/Button';

const Videos = ({ videos }: { videos: Video[] }) => {
  return (
    <section className="mv4">
      <SectionHeader title="Latest to watch" icon="youtube" />
      {videos.map((video) => {
        const { id, title, url, runtime } = video;
        return (
          <RouteLink key={id} href={url} isExternal>
            <article className={styles.videos}>
              <figure className={styles.videos__extlink}>
                <Image
                  className={styles.videos__extlinkIcon}
                  src={ExtLink}
                  alt="External Link"
                  width={12}
                  height={12}
                />
              </figure>
              <summary>{title}</summary>
              <div className={styles.videos__details}>
                <small>{runtime}</small>
                <figure className={styles.videos__video}>
                  <Image src={require('@/public/icons/video.svg')} alt={title} width={20} height={20} />
                </figure>
              </div>
            </article>
          </RouteLink>
        );
      })}
      <footer>
        <Button as="link" href="https://www.youtube.com/c/sunnyprakash5712/videos" label="View more" external />
        <RouteLink
          href="https://www.youtube.com/c/sunnyprakash5712/video"
          classForContainer={styles.videos__games}
          isExternal
        >
          <small>Looking for Gaming videos?</small>
        </RouteLink>
      </footer>
    </section>
  );
};

export default Videos;
