import React, { useMemo } from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { getAllFilesFrontMatter } from "@/helpers/mdx";
import styles from "@/styles/Home.module.scss";
import { getTopThree } from "@/helpers/utils";
import Card from "@/common/Card";
import RouteLink from "@/components/Common/RouteLink";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
    githubRepos: any;
}

const Home = ({ posts, projects, githubRepos }: Props) => {
    console.log(githubRepos)
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
                    <h1>What&apos;s cooking</h1>
                </header>
            </article>
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    const client = new ApolloClient({
        uri: "https://api.github.com/graphql",
        cache: new InMemoryCache(),
        headers: {
            "Authorization": `Basic ${process.env.GH_TOKEN}`
        }
    })

    const { data } = await client.query({
        query: gql`
        {
            user(login: "sprakash57") {
                repositories(first: 10, privacy: PUBLIC, orderBy: {field: PUSHED_AT, direction: DESC}) {
                    nodes {
                        parent {
                            name
                            url
                            stargazerCount
                            forkCount
                        }
                        name
                        url
                        stargazerCount
                        forkCount
                    }
                }
            }
        }
        `
    })
    return { props: { posts, projects, githubRepos: data } }
}
