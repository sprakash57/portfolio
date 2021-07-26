import { CardItem } from '../../types';
import styles from '../../styles/components/Common/Card.module.scss';

const Card = ({ content }: { content: CardItem }) => {
    const { title, summary, publishedAt } = content;
    return (
        <section key={title} className={styles.card}>
            <h3>{title}</h3>
            <summary>{summary}</summary>
            <small>{publishedAt}</small>
        </section>
    )
}

export default Card;
