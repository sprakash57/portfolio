import styles from '@/styles/components/GithubCard.module.scss';
import Image from 'next/image';
import ExtLink from '@/public/external.svg';
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import Tag from './Common/Tag';

const GithubCard = ({ activityDetail }: { activityDetail: ActivityDetail }) => {
    const { name, description, languages, parent } = activityDetail;
    const profile = parent ?? activityDetail;
    const { forkCount, stargazerCount, owner, isPrivate } = profile;
    const { login } = owner;

    return (
        <section className={styles.githubCard}>
            <header>
                <h5 title="Author">{login} {isPrivate && <Tag label="private" variant="outline" classname={styles.ml1} />}</h5>
                <Image className={styles.extLink} src={ExtLink} alt="External Link" />
            </header>
            <header>
                <h3>{name}</h3>
            </header>
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
        </section>
    )
}

export default GithubCard
