import { useMemo } from "react";
import { getAllFilesFrontMatter, getGithubActivity } from "@/helpers/mdx";
import { getTopThree } from "@/helpers/utils";
import BlogsList from "@/components/Blog/BlogsList";
import ProjectsList from "@/components/Project/ProjectsList";
import RepoList from "@/components/Project/RepoList";

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
            <BlogsList posts={recentPosts} header="Recent Blogs" viewMoreBtn />
            <ProjectsList projects={recentProjects} header="Featured Projects" viewMoreBtn />
            <RepoList repos={activities} header="Latest contributions" />
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
