import Image from 'next/image';
import ExtLink from '@/public/external.svg';
import styles from '@/styles/components/Common/Card.module.scss';

type Props = {
    content: CardItem;
}

const Card = ({ content }: Props) => {
    const { title, summary, publishedAt, platform, url, image, technology } = content;
    return (
        <section className={styles.card}>
            {image && (
                <figure className={styles.cardImage}>
                    <Image
                        src={require(`../../public/${image}`)}
                        alt="Cover"
                    />
                </figure>
            )}
            <section className={styles.cardBody}>
                <header className={styles.cardTitle}>
                    <div>
                        <h3>{title}</h3>
                        {platform && <Image src={require(`../../public/${platform}`)} alt="Platform" width={20} height={20} />}
                    </div>
                    {url && <Image className={styles.extLink} src={ExtLink} alt="External Link" />}
                </header>
                <summary>{summary}</summary>
                {publishedAt && <small>{publishedAt}</small>}
                <section className={styles.tagGroup}>
                    {technology && technology.map((tech: string) => <span key={tech} className={styles.tag}>{tech}</span>)}
                </section>
            </section>
        </section>
    )
}

export default Card;
