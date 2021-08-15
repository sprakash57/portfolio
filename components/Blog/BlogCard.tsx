import Card from "../common/Card";
import NextImage from "next/image";
import styles from "@/styles/components/BlogCard.module.scss";
import ExtLink from "@/public/icons/external.svg";

const BlogCard = ({ content }: { content: CardItem }) => {
    const { title, summary, publishedAt, platform, url, image, technology } = content;
    return (
        <Card addStyles={styles.blogCard}>
            <Card.Image image={image} alt="Cover" />
            <Card.Body>
                <Card.Title>
                    <div>
                        <h3>{title}</h3>
                        {platform && <NextImage src={require(`../../public/${platform}`)} alt="Platform" width={20} height={20} />}
                    </div>
                    {url && <NextImage className={styles.extLink} src={ExtLink} alt="External Link" />}
                </Card.Title>
                <summary>{summary}</summary>
                {publishedAt && <small>{publishedAt}</small>}
                {technology && (
                    <section className={styles.tagGroup}>
                        {technology.map((tech: string) => <span key={tech} className={styles.tag}>{tech}</span>)}
                    </section>
                )}
            </Card.Body>
        </Card>
    )
}

export default BlogCard;