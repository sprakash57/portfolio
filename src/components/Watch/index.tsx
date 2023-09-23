import s from './index.module.css';
import VideoPlayer from 'components/common/VideoPlayer';
import { Sections, Urls } from 'helpers/constants';
import Layout from 'components/common/Layout';

const data = [
  {
    id: '1',
    title: 'German work visa',
    videoId: 'DSUbPGfAEgg',
  },
  {
    id: '2',
    title: 'Magdeburg',
    videoId: 'Rhk7iRReX1E',
  },
  {
    id: '3',
    title: 'Best Resume for visa sponsored jobs',
    videoId: 'VmpA81mrY7E',
  },
];

const Watch = () => {
  return (
    <Layout header={Sections.Watch} scrollTo={Sections.Contact}>
      <article className={s.Watch}>
        {data.map(({ id, title, videoId }) => (
          <VideoPlayer key={id} videoId={videoId} title={title} />
        ))}
      </article>
      <div className={s.moreVideos}>
        <a href={Urls.Medium} target='_blank' rel='noopener noreferrer'>
          More Videos
        </a>{' '}
        <span>|</span>{' '}
        <a href={Urls.SubscribeYoutube} target='_blank' rel='noopener noreferrer'>
          Subscribe me
        </a>
      </div>
    </Layout>
  );
};

export default Watch;
