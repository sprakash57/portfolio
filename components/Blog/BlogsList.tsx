import RouteLink from '@/components/common/RouteLink';
import BlogCard from './BlogCard';
import Header from '@/common/Header';

const BlogsList = ({ posts, header }: { posts: CardItem[], header: string }) => {
    return (
        <>
            <Header as="h2" label={header} />
            {posts.map(post => (
                <RouteLink key={post.title} href={`/blogs/${post.slug}`}>
                    <BlogCard content={post} />
                </RouteLink>
            ))}
        </>
    )
}

export default BlogsList;
