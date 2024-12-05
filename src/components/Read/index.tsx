import { Icons, Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import { FurtherPostTitle, FurtherPosts, PostLink, PostTitle, PostsList } from './styled';
import Icon from 'assets/icons/Icon';
import { AnimateLink, VerticalDivider } from 'components/common/styled';

const blogPosts = [
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
  {
    id: '3',
    url: 'https://medium.com/@sunny-prakash/testing-solid-js-with-vitest-f9c030ff4197',
    title: 'Testing Solid.js with Vitest',
  },
  {
    id: '2',
    url: 'https://medium.com/@sunny-prakash/lesser-known-array-methods-in-javascript-31afbfa1d091',
    title: 'Lesser known array methods in JavaScript',
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
