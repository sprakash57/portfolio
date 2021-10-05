import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MDXComponents';
import { getFileBySlug, getFiles } from '@/helpers/mdx';
import BlogStats from '@/components/Blog/BlogStats';
import styles from './index.module.scss';


const Blog = ({ mdxSource, frontMatter }: Record<string, any>) => {
    const { title, publishedAt, readTime, slug } = frontMatter as FrontMatter;

    return (
        <article>
            <header className={styles.header}>
                <h1>{title}</h1>
                <BlogStats stats={{ publishedAt, readTime, slug }} queryType="update" />
            </header>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles('posts')

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }: any) {
    const post = await getFileBySlug('posts', params.slug);

    return { props: post }
}

export default Blog;
