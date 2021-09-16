import { Card, RouteLink } from 'common-components';
import styles from './index.module.scss';

const BlogPost = ({ post }: { post: CardItem }) => {
    const { title, summary, publishedAt, slug } = post;
    return (
        <RouteLink key={title} href={`/blogs/${slug}`}>
            <Card className={styles.blogCard}>
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <summary>{summary}</summary>
                    <small>{publishedAt}</small>
                </Card.Body>
            </Card>
        </RouteLink>
    )
}

export default BlogPost;
