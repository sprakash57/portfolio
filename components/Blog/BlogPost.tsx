import { RouteLink } from 'common-components';
import BlogStats from './BlogStats';
import styles from './index.module.scss';

interface Props {
  post: Post;
}

const BlogPost = ({ post }: Props) => {
  const { title, summary, publishedAt, slug, readTime, tags } = post;

  return (
    <RouteLink key={title} href={`/blogs/${slug}`}>
      <article className={styles.post}>
        <header className={styles.post__header}>
          <h3>{title}</h3>
          {tags.map((tag) => (
            <span key={tag} className={styles.post__tags}>
              #{tag}
            </span>
          ))}
        </header>
        <summary>{summary}</summary>
        <footer>
          <BlogStats stats={{ publishedAt, readTime, slug }} className={styles.post__stats} />
        </footer>
      </article>
    </RouteLink>
  );
};

export default BlogPost;
