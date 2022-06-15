import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MDXComponents';
import { getFileBySlug, getFiles } from '@/helpers/mdx';
import BlogStats from '@/components/Blog/BlogStats';
import { BlogHeader, BlogShareSection } from './styled';
import ShareButton from '@/components/Elements/ShareButton';
import { Email, Facebook, LinkedIn, Reddit, Twitter, Whatsapp } from '@/components/Elements/Icons';
import { SocialShare } from '@/helpers/constants';

const Blog = ({ mdxSource, frontMatter }: Record<string, any>) => {
  const { title, publishedAt, readTime, slug } = frontMatter as FrontMatter;

  return (
    <article>
      <BlogHeader>
        <h1>{title}</h1>
        <BlogStats stats={{ publishedAt, readTime, slug }} queryType="update" />
        <BlogShareSection>
          <ShareButton type={SocialShare.TWITTER} text="share this" icon={Twitter} url={slug} title="Tweet" />
          <ShareButton type={SocialShare.REDDIT} text="share this" icon={Reddit} url={slug} title="Post" />
          <ShareButton type={SocialShare.LINKEDIN} text="share this" icon={LinkedIn} url={slug} title="Share" />
          <ShareButton type={SocialShare.FACEBOOK} text="share this" icon={Facebook} url={slug} title="Share" />
          <ShareButton type={SocialShare.WHATSAPP} text="share this" icon={Whatsapp} url={slug} title="Message" />
          <ShareButton type={SocialShare.EMAIL} text="share this" icon={Email} url={slug} title="Email" />
        </BlogShareSection>
      </BlogHeader>
      <MDXRemote {...mdxSource} components={MDXComponents} />
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

  return { props: post };
}

export default Blog;
