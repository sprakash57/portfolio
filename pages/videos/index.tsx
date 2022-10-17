import { RouteLink } from '@/components/Elements';
import YoutubePlayer from '@/components/YoutubePlayer';
import React from 'react';
import s from './index.module.scss';

const VIDEOS = {
  tutorials: [],
  career: [
    {
      id: 4,
      title: 'Work Visa Interview',
      videoId: 'DSUbPGfAEgg',
    },
    {
      id: 3,
      title: 'Type of Visas',
      videoId: '10r8WNHjWT4',
    },
    {
      id: 2,
      title: 'Cover letter format',
      videoId: 'pvUnMTI3VrM',
    },
    {
      id: 1,
      title: 'Resume Content',
      videoId: 'VmpA81mrY7E',
    },
  ],
};

const Videos = () => {
  const { tutorials, career } = VIDEOS;
  return (
    <section className={s.videos}>
      <div className={s.videos__row} id="tutorials">
        <h1>TUTORIALS</h1>
        <p>
          These aren't just tutorials where we will rewrite some code and you will repeat it. Each video aims to solve
          real world problems that developers encounter.
        </p>
        {tutorials.length ? (
          <>
            <div className={s.videos__tutorials}>
              {career.map(({ id, title, videoId }) => (
                <YoutubePlayer key={String(id)} title={title} videoId={videoId} styleClass={s.videos__video} />
              ))}
            </div>
            <RouteLink
              href="https://www.youtube.com/playlist?list=PL01iT_pmZ-4hhtV6w0p2fy7oe9DRoO_LC"
              isExternal
              classForContainer={s.videos__more}
            >
              <span>More Videos</span>
            </RouteLink>
          </>
        ) : (
          <h2 style={{ textAlign: 'center', letterSpacing: '8px' }}>COMING SOON...</h2>
        )}
      </div>
      <div className={s.videos__row} id="career">
        <h1>CAREER</h1>
        <p>
          You will learn not only how to write an impactful resume but also what it should contain. Also, these free
          videos will assist you in your visa interview process and how to find a job abroad.
        </p>
        <div className={s.videos__tutorials}>
          {career.map(({ id, title, videoId }) => (
            <YoutubePlayer key={String(id)} title={title} videoId={videoId} styleClass={s.videos__video} />
          ))}
        </div>
        <RouteLink
          href="https://www.youtube.com/playlist?list=PL01iT_pmZ-4hhtV6w0p2fy7oe9DRoO_LC"
          isExternal
          classForContainer={s.videos__more}
        >
          <span>More Videos</span>
        </RouteLink>
      </div>
    </section>
  );
};

export default Videos;
