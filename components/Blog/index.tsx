import { Button } from '@/common-components';
import SectionHeader from '../Elements/SectionHeader';
import BlogPost from './BlogPost';
import styles from './index.module.scss';

const Blog = ({ posts, header, viewMoreBtn = false }: { posts: Post[]; header: string; viewMoreBtn?: boolean }) => {
  return (
    <section className="mv2">
      <SectionHeader title="Recent Blogs" icon="blog" />
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
      {viewMoreBtn && <Button as="link" href="/blogs" label="View more" />}
    </section>
  );
};

export default Blog;
