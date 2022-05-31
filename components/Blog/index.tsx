import { Button } from '@/common-components';
import { useDebounce } from '@/helpers/hooks';
import React from 'react';
import SectionHeader from '../Elements/SectionHeader';
import BlogPost from './BlogPost';

interface Props {
  posts: Post[];
  header: string;
  viewMoreBtn?: boolean;
}

const Blog = ({ posts, header, viewMoreBtn = false }: Props) => {
  return (
    <section className="mv2">
      <SectionHeader title={header} icon="blog" />
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
      {viewMoreBtn && <Button as="link" href="/blogs" label="View more" />}
    </section>
  );
};

export default Blog;
