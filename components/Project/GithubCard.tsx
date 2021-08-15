import styles from '@/styles/components/GithubCard.module.scss';
import Image from 'next/image';
import ExtLink from '@/public/icons/external.svg';
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import { Card, Header, Tag } from '@/components/Common';

const GithubCard = ({ activityDetail }: { activityDetail: ActivityDetail }) => {
    const { name, description, languages, parent } = activityDetail;
    const profile = parent ?? activityDetail;
    const { forkCount, stargazerCount, owner, isPrivate, isFork } = profile;

    return (
        <Card className={styles.githubCard}>
            <header>
                <h5 title="Author">
                    {!!owner ? `${owner.login} ` : ""}
                    {isPrivate && <Tag label="private" variant="outline" classname={styles.ml1} />}
                    {isFork && <Tag label="forked" variant="outline" classname={styles.ml1} />}
                </h5>
                <Image className={styles.extLink} src={ExtLink} alt="External Link" />
            </header>
            <Header as="h3" label={name} />
            <Card.Body className={styles.githubCardBody}>
                <article>
                    <summary>{description || "--"}</summary>
                </article>
                <section className={styles.languages}>
                    {languages.nodes.length && languages.nodes.map(({ name }) => <Tag key={name} label={name} />) || "--"}
                </section>
                <section className={styles.forkStar}>
                    <figure>
                        <Image src={Fork} alt="Fork" />
                        <span>{forkCount}</span>
                    </figure>
                    <figure>
                        <Image src={Star} alt="Star" />
                        <span>{stargazerCount}</span>
                    </figure>
                </section>
            </Card.Body>
        </Card>
    )
}

export default GithubCard
