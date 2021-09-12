import { Button, RouteLink, Card } from '@/common-components';
import styles from './index.module.scss';

const Blog = ({ posts, header, viewMoreBtn = false }: { posts: CardItem[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb2">
            <header>
                <h2>{header}</h2>
            </header>
            {posts.map(post => {
                const { title, summary, publishedAt } = post;
                return (
                    <RouteLink key={post.title} href={`/blogs/${post.slug}`}>
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
            })}
            {viewMoreBtn && <Button as="link" href="/blogs" label="View more" />}
        </section>
    )
}

export default Blog;
