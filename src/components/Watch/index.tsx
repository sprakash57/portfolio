import { VideoPlayer } from 'components/common';
import { Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import { AnimateLink, VerticalDivider } from 'components/common/styled';
import { MoreVideos, MoreVideosTitle } from './styled';

const data = [
  {
    id: '1',
    title: 'Tips for Start Deutsch A1',
    videoId: 'HgIUwovVg-0',
  },
  {
    id: '2',
    title: 'German work visa',
    videoId: 'DSUbPGfAEgg',
  },
  {
    id: '3',
    title: 'Magdeburg',
    videoId: 'Rhk7iRReX1E',
  },
];

const Watch = () => {
  return (
    <Layout header={Sections.Watch} scrollTo={Sections.Contact}>
      <article>
        {data.map(({ id, title, videoId }) => (
          <VideoPlayer key={id} videoId={videoId} title={title} />
        ))}
      </article>
      <MoreVideos>
        <AnimateLink href={Urls.Medium} target='_blank' rel='noopener noreferrer'>
          <MoreVideosTitle variant='P2'>More videos</MoreVideosTitle>
        </AnimateLink>
        <VerticalDivider> | </VerticalDivider>
        <AnimateLink href={Urls.SubscribeYoutube} target='_blank' rel='noopener noreferrer'>
          <MoreVideosTitle variant='P2'>Subscribe</MoreVideosTitle>
        </AnimateLink>
      </MoreVideos>
    </Layout>
  );
};

export default Watch;
