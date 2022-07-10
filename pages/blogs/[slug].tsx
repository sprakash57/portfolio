import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponents from '@/components/MDXComponents';
import { getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/helpers/mdx';
import BlogStats from '@/components/Blog/BlogStats';
import { IconButton, RouteLink, ScrollTopButton } from '@/components/Elements';
import { Icons } from '@/helpers/constants';
import styles from './index.module.scss';
import Hashtags from '@/components/Hashtags';
import { randomizer } from '@/helpers/utils';
import BlogPost from '@/components/Blog/BlogPost';

interface Props {
  post: {
    frontMatter: FrontMatter;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
  extraPosts: Post[];
}

const Blog = ({ post, extraPosts }: Props) => {
  const { mdxSource, frontMatter } = post;
  const { id: postId, title, publishedAt, readTime, slug, tags } = frontMatter;

  return (
    <article className={`${styles.blogpage} mv2`}>
      <RouteLink href="/blogs">
        <span role="button" className={styles.blogpage__back}>
          &#10229; Back
        </span>
      </RouteLink>
      <header className={styles.blogpage__header}>
        <h1>{title}</h1>
        <Hashtags tags={tags} />
        <BlogStats stats={{ publishedAt, readTime, slug }} queryType="update" />
        <section className={styles.blogpage__section}>
          <IconButton type={Icons.TWITTER} text={title} icon={Icons.TWITTER} url={slug} title="Tweet" />
          <IconButton type={Icons.REDDIT} text={title} icon={Icons.REDDIT} url={slug} title="Post" />
          <IconButton type={Icons.LINKEDIN} text={title} icon={Icons.LINKEDIN} url={slug} title="Share" />
          <IconButton type={Icons.FACEBOOK} text={title} icon={Icons.FACEBOOK} url={slug} title="Share" />
          <IconButton type={Icons.WHATSAPP} text={title} icon={Icons.WHATSAPP} url={slug} title="Message" />
          <IconButton type={Icons.EMAIL} text={title} icon={Icons.EMAIL} url={slug} title="Email" />
        </section>
      </header>
      <MDXRemote {...mdxSource} components={MDXComponents} />
      <section className={styles.blogpage__actions}>
        <IconButton
          type={Icons.GITHUB}
          icon={Icons.GITHUB}
          url={slug}
          label="Edit on GitHub"
          labelStyle={styles.blogpage__label}
          iconStyle={styles.blogpage__icon}
          iconContainerStyle={styles.blogpage__iconBg}
        />
        <IconButton
          type={Icons.TWITTER_DISCUSS}
          icon={Icons.TWITTER_DISCUSS}
          url={slug}
          label="Discuss on Twitter"
          labelStyle={styles.blogpage__label}
          iconStyle={styles.blogpage__icon}
          iconContainerStyle={styles.blogpage__iconBg}
        />
      </section>
      <section>
        <h2>You might also like...</h2>
        {extraPosts
          .filter((item) => item.id !== postId)
          .map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
      </section>
      <ScrollTopButton />
    </article>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFileBySlug('posts', params.slug);
  const posts = (await getAllFilesFrontMatter('posts')) as Post[];

  return {
    props: {
      post,
      extraPosts: randomizer(posts),
    },
  };
}

export default Blog;
