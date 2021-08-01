import { getAllFilesFrontMatter, getGithubRepos } from '@/helpers/mdx';
import ProjectsList from '@/components/Project/ProjectsList';

const Projects = ({ projects, allProjects }: { projects: CardItem[], allProjects: CardItem[] }) => {
    return (
        <section>
            <ProjectsList projects={projects} header="Featured" />
            <ProjectsList projects={allProjects} header="All Projects" />
        </section>
    )
}

export default Projects;

export async function getStaticProps() {
    const projects = await getAllFilesFrontMatter('projects');
    const allProjects = await getGithubRepos();
    return { props: { projects, allProjects } }
}
