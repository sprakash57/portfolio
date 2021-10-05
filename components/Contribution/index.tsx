import { RouteLink, Button, Card, Tag, Loader } from '@/common-components';
import Image from 'next/image';
import useSWR from 'swr';
import dompurify from 'dompurify';
import ExtLink from "@/public/icons/external.svg";
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import fetcher from '@/helpers/fetcher';
import styles from './index.module.scss';

const Contributions = ({ header, viewMoreBtn = false }: { header: string, viewMoreBtn?: boolean }) => {
    const { data, error } = useSWR('/api/contributions', fetcher);

    if (error) return <div className={styles.alert}>Failed to fetch GitHub Data!!</div>;

    if (!data?.contributions) return <Loader />

    return (
        <section className="mb4">
            <header>
                <h2>{header}</h2>
            </header>
            <section className={styles.container}>
                {data.contributions.map((repo: Contribution) => {
                    const { owner, name, descriptionHTML, languages, forkCount, stargazerCount, url } = repo;
                    return (
                        <RouteLink key={name} href={url} isExternal>
                            <Card className={styles.container__card}>
                                <header>
                                    <h5 title="Author" className={styles.container__card__author}>
                                        <Image
                                            className={styles.container__card__avatar}
                                            src={owner.avatarUrl}
                                            alt="User Avatar"
                                            height={35}
                                            width={35}
                                        />
                                        <span>{owner.login}</span>
                                    </h5>
                                    <Image
                                        className={styles.container__card__extLink}
                                        src={ExtLink}
                                        alt="External Link"
                                        height={15}
                                        width={15}
                                    />
                                </header>
                                <header>
                                    <h3>{name}</h3>
                                </header>
                                <Card.Body className={styles.container__card__body}>
                                    <article>
                                        <summary dangerouslySetInnerHTML={{__html: dompurify.sanitize(descriptionHTML) || "--"}}/>
                                    </article>
                                    <section className={styles.container__card__body__languages}>
                                        {languages.nodes.map(({ name }: { name: string }) => <Tag key={name} label={name} />) || "--"}
                                    </section>
                                    <section className={styles.container__card__body__forkStar}>
                                        <figure>
                                            <Image src={Fork} alt="Fork" width={16} height={16} />
                                            <span>{forkCount}</span>
                                        </figure>
                                        <figure>
                                            <Image src={Star} alt="Star" width={16} height={16} />
                                            <span>{stargazerCount}</span>
                                        </figure>
                                    </section>
                                </Card.Body>
                            </Card>
                        </RouteLink>
                    )
                })}
            </section>
            {viewMoreBtn && <Button
                as="link"
                href="https://github.com/sprakash57?tab=repositories&q=&type=fork&language=&sort="
                label="View more"
                external
            />}
        </section>
    )
}

export default Contributions;
