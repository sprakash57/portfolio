import BlogCard from './BlogCard';
import { Button, RouteLink } from '@/common-components';

const BlogsList = ({ posts, header, viewMoreBtn = false }: { posts: CardItem[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb2">
            <header>
                <h2>{header}</h2>
            </header>
            {posts.map(post => (
                <RouteLink key={post.title} href={`/blogs/${post.slug}`}>
                    <BlogCard content={post} />
                </RouteLink>
            ))}
            {viewMoreBtn && <Button as="link" href="/blogs" label="View more" />}
        </section>
    )
}

export default BlogsList;
