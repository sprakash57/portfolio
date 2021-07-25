import { Post } from '../../types';
import styles from '../../styles/components/Blog/BlogCard.module.scss';
import RouteLink from '../Common/RouteLink';

const BlogCard = ({ post }: { post: Post }) => {
    const { slug, title, summary, publishedAt } = post;
    return (
        <RouteLink href={`blog/${slug}`} passHref>
            <section key={title} className={styles.card}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <small>{publishedAt}</small>
            </section>
        </RouteLink>
    )
}

export default BlogCard;
