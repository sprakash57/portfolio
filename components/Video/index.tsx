import React from 'react';
import RouteLink from 'common-components/RouteLink';
import SectionHeader from '../Elements/SectionHeader';
import styles from './index.module.scss';
import Button from 'common-components/Button';
import YoutubePlayer from '../YoutubePlayer';

const Videos = ({ videos }: { videos: Video[] }) => {
  return (
    <section className="mv4" id="videos">
      <SectionHeader title="Latest to watch" icon="youtube" />
      <article className={styles.videos__list}>
        {videos.map((video) => {
          const { id, title, videoId } = video;
          return (
            <YoutubePlayer key={`video-${id}`} videoId={videoId} title={title} styleClass={styles.videos__video} />
          );
        })}
      </article>
      <footer className={styles.videos__footer}>
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
