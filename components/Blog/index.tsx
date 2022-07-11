import React from 'react';
import { RouteLink, SectionHeader } from '@/components/Elements';
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
      {viewMoreBtn && (
        <RouteLink href="/blogs" classForContainer="btn__viewMore" isExternal>
          View more
        </RouteLink>
      )}
    </section>
  );
};

export default Blog;
