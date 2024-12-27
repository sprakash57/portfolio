import { Icons, Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import { FurtherPostTitle, FurtherPosts, PostLink, PostTitle, PostsList } from './styled';
import Icon from 'assets/icons/Icon';
import { AnimateLink, VerticalDivider } from 'components/common/styled';

const blogPosts = [
  {
    id: '3',
    url: 'https://medium.com/javascript-in-plain-english/efficient-thumbnail-generation-for-pdf-more-in-express-js-2a883bde4d25',
    title: 'Efficient thumbnail generation for PDFs & more in Express.js',
  },
  {
    id: '2',
    url: 'https://medium.com/@sunny-prakash/logging-express-js-apps-with-grafana-and-loki-aa8132172013',
    title: 'Logging Express.js apps with Grafana and Loki',
  },
  {
    id: '1',
    url: 'https://medium.com/javascript-in-plain-english/the-secret-to-debugging-your-live-react-native-android-app-34c703fbbf87',
    title: 'The Secret to Debugging Your Live React Native Android App',
  },
  {
    id: '4',
    url: 'https://medium.com/javascript-in-plain-english/how-to-use-environment-variables-in-github-actions-workflows-598b583c1a92',
    title: 'How to use use Environment variables in Github Actions workflow',
  },
];

const Read = () => {
  return (
    <Layout header={Sections.Read} scrollTo={Sections.Explore}>
      <PostsList>
        {blogPosts.map(({ id, url, title }) => (
          <li key={id}>
            <PostLink href={url} target='_blank' rel='noopener noreferrer' title={title}>
              <PostTitle variant='P2'>{title}</PostTitle>
              <Icon name={Icons.Arrow} rotate={-90} />
            </PostLink>
          </li>
        ))}
      </PostsList>
      <FurtherPosts>
        <AnimateLink href={Urls.Medium} target='_blank' rel='noopener noreferrer'>
          <FurtherPostTitle variant='P2'>More blogs</FurtherPostTitle>
        </AnimateLink>
        <VerticalDivider> | </VerticalDivider>
        <AnimateLink href={Urls.SubscribeMedium} target='_blank' rel='noopener noreferrer'>
          <FurtherPostTitle variant='P2'>Follow</FurtherPostTitle>
        </AnimateLink>
      </FurtherPosts>
    </Layout>
  );
};

export default Read;
