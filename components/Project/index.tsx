import { RouteLink, Button, Card } from '@/common-components';
import NextImage from "next/image";
import ExtLink from "@/public/icons/external.svg";
import styles from './index.module.scss';

const ProjectsList = ({ projects, header, viewMoreBtn = false }: { projects: Project[], header: string, viewMoreBtn?: boolean }) => {
    return (
        <section className="mb2">
            <header>
                <h2>{header}</h2>
            </header>
            {projects.map(project => {
                const { title, summary, url, image, technology } = project;
                return (
                    <RouteLink key={title} href={url!} isExternal>
                        <Card className={styles.project}>
                            <Card.Image image={image} alt="Cover" />
                            <Card.Body>
                                <Card.Title>
                                    <h3>{title}</h3>
                                    {url && <NextImage className={styles.extLink} src={ExtLink} alt="External Link" />}
                                </Card.Title>
                                <summary>{summary}</summary>
                                {technology && (
                                    <section className={styles.tagGroup}>
                                        {technology.map((tech: string) => <span key={tech} className={styles.tag}>{tech}</span>)}
                                    </section>
                                )}
                            </Card.Body>
                        </Card>
                    </RouteLink>
                )
            })}
            {viewMoreBtn && <Button as="link" href="/projects" label="View more" />}
        </section>
    )
}

export default ProjectsList;
