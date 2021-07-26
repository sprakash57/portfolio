import { useMemo } from "react";
import { getAllFilesFrontMatter } from "../helpers/mdx";
import { CardItem } from "../types";
import styles from "../styles/Home.module.scss";
import RouteLink from "../components/Common/RouteLink";
import { getTopThree } from "../helpers/utils";
import Card from "../components/Common/Card";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
}

const Home = ({ posts, projects }: Props) => {

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
            <article className={styles.agenda}>
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
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    return { props: { posts, projects } }
}
