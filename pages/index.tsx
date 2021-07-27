import React, { useMemo } from "react";
import { getAllFilesFrontMatter } from "../helpers/mdx";
import { CardItem } from "../types";
import styles from "../styles/Home.module.scss";
import RouteLink from "../components/Common/RouteLink";
import { getTopThree } from "../helpers/utils";
import Card from "../components/Common/Card";
import { useState } from "react";
import ProjectDetail from "../components/ProjectDetail";
import Modal from "../components/Common/Modal";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
}

type State = {
    open: boolean;
    content: CardItem | null;
}

const Home = ({ posts, projects }: Props) => {

    const [modal, setModal] = useState<State>({ open: false, content: null });

    const handleClick = (cardSlug: string = "") => {
        const content = projects.find(project => project.slug === cardSlug)!;
        setModal(modal => ({ open: !modal.open, content }));
    }

    const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const clickEl = target.closest("div");
        if (clickEl?.id.includes("card_")) handleClick(clickEl.id.split("_")[1]);
    }

    const recentPosts = useMemo(() => getTopThree(posts), [posts]);
    const recentProjects = useMemo(() => getTopThree(projects), [projects]);

    return (
        <section>
            <article className={styles.agenda}>
                <h1>Recent Blogs</h1>
                {recentPosts.map(post => (
                    <RouteLink key={post.title} href={`/blogs/${post.slug}`} passHref>
                        <Card content={post} />
                    </RouteLink>
                ))}
                <RouteLink
                    href="/blogs"
                    classForContainer={styles.viewMore}
                >
                    View more
                </RouteLink>
            </article>
            <article className={styles.agenda} onClick={handleOpenModal}>
                <h1>Featured Projects</h1>
                {recentProjects.map(project => <Card key={project.title} content={project} />)}
                <RouteLink
                    href="/projects"
                    classForContainer={styles.viewMore}
                >
                    View more
                </RouteLink>
            </article>
            <article className={styles.agenda}>
                <h1>What&apos;s cooking</h1>
            </article>
            <Modal isOpen={modal.open} onClose={handleClick}>
                <ProjectDetail project={modal.content} />
            </Modal>
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    return { props: { posts, projects } }
}
