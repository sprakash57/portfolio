import { useMemo } from "react";
import { getAllFilesFrontMatter, getGithubActivity } from "@/helpers/mdx";
import styles from "@/styles/Home.module.scss";
import { getTopThree } from "@/helpers/utils";
import RouteLink from "@/components/common/RouteLink";
import GithubCard from "@/components/Project/GithubCard";
import BlogsList from "@/components/Blog/BlogsList";
import ProjectsList from "@/components/Project/ProjectsList";
import Button from "@/components/common/Button";
import RepoList from "@/components/Project/RepoList";
import List from "@/components/common/List";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
    activities: ActivityDetail[];
}

const Home = ({ posts, projects, activities }: Props) => {
    const recentPosts = useMemo(() => getTopThree(posts), [posts]);
    const recentProjects = useMemo(() => getTopThree(projects), [projects]);

    return (
        <section>
            <article className={styles.articles}>
                <BlogsList posts={recentPosts} header="Recent Blogs" />
                <Button as="link" href="/blogs" label="View more" />
            </article>
            <article className={styles.articles}>
                <ProjectsList projects={recentProjects} header="Featured Projects" />
                <Button as="link" href="/projects" label="View more" />
            </article>
            <article className={styles.articles}>
                <RepoList listStyle={styles.githubRepos} repos={activities} header="What's cooking" />
            </article>
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    const activities = await getGithubActivity();
    return { props: { posts, projects, activities } }
}
