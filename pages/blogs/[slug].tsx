import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '../../components/Blog/BlogLayout';
import MDXComponents from '../../components/MDXComponents';
import { getFileBySlug, getFiles } from '../../helpers/mdx';

const Blog = ({ mdxSource, frontMatter }: Record<string, any>) => {
    console.log(mdxSource);
    console.log(frontMatter);
    return (
        <BlogLayout frontMatter={frontMatter}>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </BlogLayout>
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
