import { RouteLink, Button, Card, Tag, Loader } from '@/common-components';
import Image from 'next/image';
import ExtLink from "@/public/icons/external.svg";
import Fork from '@/public/icons/fork.svg';
import Star from '@/public/icons/star.svg';
import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';
import styles from './index.module.scss';

const RepoList = ({ header, viewMoreBtn = false }: { header: string, viewMoreBtn?: boolean }) => {
    const { data, error } = useSWR('/api/repos', fetcher);

    if (error) return <div className={styles.alert}>Failed to fetch Github Data!!</div>;

    if (!data?.repos) return <Loader />

    return (
        <section className="mb2">
            <header>
                <h2>{header}</h2>
            </header>
            <section className={styles.container}>
                {data.repos.map((repo: any) => {
                    const { isPrivate, isFork, name, description, languages, forkCount, stargazerCount } = repo;
                    return (
                        <RouteLink key={repo.name} href={repo.parent ? repo.parent.url : repo.url} isExternal>
                            <Card className={styles.container__card}>
                                <header>
                                    <h3 className={styles.container__card__title}>
                                        <span>{name}</span>
                                        {isPrivate && <Tag label="private" variant="outline" />}
                                        {isFork && <Tag label="forked" variant="outline" />}
                                        <Image className={styles.container__card__extLink} src={ExtLink} alt="External Link" />
                                    </h3>
                                </header>
                                <Card.Body className={styles.container__card__body}>
                                    <article>
                                        <summary>{description || "--"}</summary>
                                    </article>
                                    <section className={styles.container__card__body__languages}>
                                        {languages.nodes.map(({ name }: { name: string }) => <Tag key={name} label={name} />) || "--"}
                                    </section>
                                    <section className={styles.container__card__body__forkStar}>
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
                        </RouteLink>
                    )
                })}
            </section>
            {viewMoreBtn && <Button
                as="link"
                href="https://github.com/sprakash57?tab=repositories"
                label="View more"
                external
            />}
        </section>
    )
}

export default RepoList;
