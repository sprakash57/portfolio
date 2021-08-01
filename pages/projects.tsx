import { getAllFilesFrontMatter, getGithubRepos } from '@/helpers/mdx';
import ProjectsList from '@/components/Project/ProjectsList';
import RepoList from '@/components/Project/RepoList';

const Projects = ({ projects, allProjects }: { projects: CardItem[], allProjects: CardItem[] }) => {
    return (
        <section>
            <ProjectsList projects={projects} header="Featured" />
            <RepoList repos={allProjects} header="All Projects" viewMoreBtn />
        </section>
    )
}

export default Projects;

export async function getStaticProps() {
    const projects = await getAllFilesFrontMatter('projects');
    const allProjects = await getGithubRepos();
    return { props: { projects, allProjects } }
}
