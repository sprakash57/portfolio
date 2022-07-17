import React from 'react';
import { RouteLink, SectionHeader } from '@/components/Elements';
import BlogPost from './BlogPost';
import { Alerts } from '@/helpers/constants';
import NoData from '@/components/NoData';

interface Props {
  posts: Post[];
  header: string;
  viewMoreBtn?: boolean;
}

const Blog = ({ posts, header, viewMoreBtn = false }: Props) => {
  if (!posts?.length) return <NoData type={Alerts.DANGER} message="Blogs are not available right now." />;

  return (
    <section className="mv2">
      <SectionHeader title={header} icon="blog" />
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
      {viewMoreBtn && (
        <RouteLink href="/blogs" classForContainer="btn__viewMore" role="button">
          View more
        </RouteLink>
      )}
    </section>
  );
};

export default Blog;
