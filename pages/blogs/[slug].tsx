import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../../components/MDXComponents';
import { getFileBySlug, getFiles } from '../../helpers/mdx';
import styles from '../../styles/blogs.module.scss';

const Blog = ({ mdxSource, frontMatter }: Record<string, any>) => {
    return (
        <article>
            <h1 className={styles.header}>{frontMatter.title}</h1>
            <summary className={styles.summary}>{frontMatter.publishedAt} <div className={styles.separator} /> {frontMatter.readingTime.text}</summary>
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
