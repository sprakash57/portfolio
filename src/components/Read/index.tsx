import { Arrow } from 'assets/icons';
import s from './index.module.css';
import { Sections, Urls } from 'helpers/constants';
import Layout from 'components/common/Layout';

const blogPosts = [
  {
    id: '4',
    url: 'https://medium.com/@sunny-prakash/testing-solid-js-with-vitest-f9c030ff4197',
    title: 'Testing Solid.js with Vitest',
  },
  {
    id: '3',
    url: 'https://medium.com/@sunny-prakash/lesser-known-array-methods-in-javascript-31afbfa1d091',
    title: 'Lesser known array methods in JavaScript',
  },
  {
    id: '2',
    url: 'https://medium.com/@sunny-prakash/beyond-console-log-9af93a63c43c',
    title: 'Beyond console.log()',
  },
  {
    id: '1',
    url: 'https://medium.com/@sunny-prakash/lets-talk-about-es2020-75ceb45b378c',
    title: 'Let’s talk about ES2020',
  },
];

const Read = () => {
  return (
    <Layout header={Sections.Read} scrollTo={Sections.Explore}>
      <ul className={s.postsList}>
        {blogPosts.map(({ id, url, title }) => (
          <li key={id} className={s.postsListItem}>
            <a href={url} target="_blank" rel="noopener noreferrer" title={title} className={s.postLink}>
              <span>{title}</span>
              <Arrow className={s.readMore} />
            </a>
          </li>
        ))}
      </ul>
      <article className={s.moreBlogs}>
        <a href={Urls.Medium} target="_blank" rel="noopener noreferrer">
          More Blogs
        </a>{' '}
        <span>|</span>{' '}
        <a href={Urls.SubscribeMedium} target="_blank" rel="noopener noreferrer">
          Subscribe
        </a>
      </article>
    </Layout>
  );
};

export default Read;
