import { Arrow } from 'src/assets/icons';
import s from './index.module.css';
import { Sections, Urls } from 'src/constants';
import ScrollToView from 'src/components/common/ScrollToView';
import { SectionHeader } from '../common/Styled';

const blogPosts = [
 {
  id: '1',
  url: 'https://medium.com/@sunny-prakash/lesser-known-array-methods-in-javascript-31afbfa1d091',
  title: 'Lesser known array methods in JavaScript',
 },
 {
  id: '2',
  url: 'https://medium.com/@sunny-prakash/beyond-console-log-9af93a63c43c',
  title: 'Beyond console.log()',
 },
 {
  id: '3',
  url: 'https://medium.com/@sunny-prakash/lets-talk-about-es2020-75ceb45b378c',
  title: 'Let’s talk about ES2020',
 },
];

const Read = () => {
 return (
  <section id={Sections.Read}>
   <SectionHeader>Read</SectionHeader>
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
   <div className="scrollBtn">
    <ScrollToView elementId={Sections.Explore} />
   </div>
  </section>
 );
};

export default Read;
