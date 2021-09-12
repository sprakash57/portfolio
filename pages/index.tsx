import { getAllFilesFrontMatter } from "@/helpers/mdx";
import { getLatest, getPinned } from "@/helpers/utils";
import Blogs from '@/components/Blog';
import Projects from "@/components/Project";
import Contributions from "@/components/Contribution";
import Introduction from "@/components/Introduction";

type Props = {
    posts: CardItem[];
    projects: CardItem[];
}

const Home = ({ posts, projects }: Props) => {
    const recentPosts = getLatest(posts, 3);
    const recentProjects = getPinned(projects);
    return (
        <section>
            <Introduction />
            <Blogs posts={recentPosts} header="Recent Blogs" viewMoreBtn />
            <Projects projects={recentProjects} header="Featured Projects" viewMoreBtn />
            <Contributions header="Latest Contributions" viewMoreBtn />
        </section>
    )
}

export default Home;

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("posts");
    const projects = await getAllFilesFrontMatter("projects");
    return { props: { posts, projects } }
}
