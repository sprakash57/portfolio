import BlogsList from '@/components/Blog';
import { getAllFilesFrontMatter } from '@/helpers/mdx';
import { getLatest } from '@/helpers/utils';

const Blogs = ({ posts }: { posts: Post[] }) => {
    const latest = getLatest(posts);
    return (
        <section>
            <BlogsList posts={latest} header="Blogs" />
        </section>
    )
}

export default Blogs;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('posts')
    return { props: { posts } }
}
