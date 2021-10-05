import { Button } from '@/common-components';
import BlogPost from './BlogPost';
import styles from './index.module.scss';

const Blog = ({ posts, header, viewMoreBtn = false }: { posts: Post[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb4">
            <header>
                <h2>{header}</h2>
            </header>
            {posts.map(post => <BlogPost key={post.slug} post={post} />)}
            {viewMoreBtn && <Button as="link" href="/blogs" label="View more" />}
        </section>
    )
}

export default Blog;
