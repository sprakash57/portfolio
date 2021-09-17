import { Card, RouteLink } from 'common-components';
import BlogStats from './BlogStats';
import styles from './index.module.scss';

const BlogPost = ({ post }: { post: Post }) => {
    const { title, summary, publishedAt, slug, readTime } = post;
    return (
        <RouteLink key={title} href={`/blogs/${slug}`}>
            <Card className={styles.blogCard}>
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <summary>{summary}</summary>
                    <BlogStats stats={{ publishedAt, readTime, slug }} className={styles.statsText} />
                </Card.Body>
            </Card>
        </RouteLink>
    )
}

export default BlogPost;
