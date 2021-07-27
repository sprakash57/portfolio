import { CardItem } from '../../types';
import styles from '../../styles/components/Common/Card.module.scss';

type Props = {
    content: CardItem;
}

const Card = ({ content }: Props) => {
    const { title, summary, publishedAt, slug } = content;

    return (
        <div id={`card_${slug}`} className={styles.card}>
            <h3>{title}</h3>
            <summary>{summary}</summary>
            <small>{publishedAt}</small>
        </div>
    )
}

export default Card;
