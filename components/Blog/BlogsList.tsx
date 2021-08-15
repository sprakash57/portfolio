import RouteLink from '@/components/common/RouteLink';
import BlogCard from './BlogCard';
import { Header, Button } from '@/common/index';

const BlogsList = ({ posts, header, viewMoreBtn = false }: { posts: CardItem[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb2">
            <Header as="h2" label={header} />
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
