import { useMemo } from "react";
import { getAllFilesFrontMatter } from "@/helpers/mdx";
import { getTopThree } from "@/helpers/utils";
import BlogsList from "@/components/Blog/BlogsList";
import ProjectsList from "@/components/Project/ProjectsList";
import RepoList from "@/components/Project/RepoList";
import useSWR from "swr";
import fetcher from "@/helpers/fetcher";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
    activities: ActivityDetail[];
}

const Home = ({ posts, projects }: Props) => {
    const { data } = useSWR('/api/activity', fetcher);
    const recentPosts = useMemo(() => getTopThree(posts), [posts]);
    const recentProjects = useMemo(() => getTopThree(projects), [projects]);

    return (
        <section>
            <BlogsList posts={recentPosts} header="Recent Blogs" viewMoreBtn />
            <ProjectsList projects={recentProjects} header="Featured Projects" viewMoreBtn />
            <RepoList repos={data?.activities} header="Latest contributions" />
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    return { props: { posts, projects } }
}
