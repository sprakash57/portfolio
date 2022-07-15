import React from 'react';
import { RouteLink, SectionHeader } from '@/components/Elements';
import styles from './index.module.scss';
import YoutubePlayer from '../YoutubePlayer';
import NoData from '../NoData';
import { Alerts } from '@/helpers/constants';

const Videos = ({ videos }: { videos: Video[] }) => {
  return (
    <section className="mv4" id="videos">
      <SectionHeader title="Latest to watch" icon="youtube" />
      {!videos || !videos.length ? (
        <NoData message="Watch out this space for upcoming videos." color={Alerts.WARNING} />
      ) : (
        <>
          <article className={styles.videos__list}>
            {videos.map((video) => {
              const { id, title, videoId } = video;
              return (
                <YoutubePlayer key={`video-${id}`} videoId={videoId} title={title} styleClass={styles.videos__video} />
              );
            })}
          </article>
          <footer className={styles.videos__footer}>
            <RouteLink
              href="https://www.youtube.com/c/sunnyprakash5712/videos"
              isExternal
              classForContainer="btn__viewMore"
            >
              View more
            </RouteLink>
            <RouteLink
              href="https://www.youtube.com/c/sunnyprakash5712/video"
              classForContainer={styles.videos__games}
              isExternal
            >
              <small>Looking for Gaming videos?</small>
            </RouteLink>
          </footer>
        </>
      )}
    </section>
  );
};

export default Videos;
