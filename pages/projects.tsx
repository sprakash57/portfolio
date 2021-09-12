import { getAllFilesFrontMatter } from '@/helpers/mdx';
import ProjectsList from '@/components/Project';
import RepoList from '@/components/Repo';

const Projects = ({ projects }: { projects: CardItem[] }) => {
    return (
        <section>
            <ProjectsList projects={projects} header="Featured" />
            <RepoList header="All Projects" viewMoreBtn />
        </section>
    )
}

export default Projects;

export async function getStaticProps() {
    const projects = await getAllFilesFrontMatter('projects');
    return { props: { projects } }
}
