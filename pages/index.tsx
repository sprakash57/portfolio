import React, { useMemo } from "react";
import { getAllFilesFrontMatter, getGithubActivity } from "@/helpers/mdx";
import styles from "@/styles/Home.module.scss";
import { getTopThree } from "@/helpers/utils";
import Card from "@/common/Card";
import RouteLink from "@/components/Common/RouteLink";
import GithubCard from "@/components/GithubCard";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
    activities: ActivityDetail[];
}

const Home = ({ posts, projects, activities }: Props) => {
    console.log(activities)
    const recentPosts = useMemo(() => getTopThree(posts), [posts]);
    const recentProjects = useMemo(() => getTopThree(projects), [projects]);

    return (
        <section>
            <article>
                <header className={styles.header}>
                    <h1>Recent Blogs</h1>
                </header>
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
            <article>
                <header className={styles.header}>
                    <h1>Featured Projects</h1>
                </header>
                <section>
                    {recentProjects.map(project => (
                        <RouteLink key={project.title} href={project.url!} childProps={{ rel: "noreferrer noopener", target: "_blank" }}>
                            <Card key={project.title} content={project} />
                        </RouteLink>
                    ))}
                </section>
                <RouteLink
                    href="/projects"
                    classForContainer={styles.viewMore}
                >
                    View more
                </RouteLink>
            </article>
            <article>
                <header className={styles.header}>
                    <h1>Latest Github contributions</h1>
                </header>
                <section className={styles.githubRepos}>
                    {activities.map(activity => <GithubCard key={activity.name} activityDetail={activity} />)}
                </section>
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
