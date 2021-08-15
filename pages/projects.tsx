import { getAllFilesFrontMatter } from '@/helpers/mdx';
import ProjectsList from '@/components/Project/ProjectsList';
import RepoList from '@/components/Project/RepoList';
import useSWR from 'swr';
import fetcher from '@/helpers/fetcher';

const Projects = ({ projects }: { projects: CardItem[] }) => {
    const { data } = useSWR('/api/projects', fetcher);
    return (
        <section>
            <ProjectsList projects={projects} header="Featured" />
            <RepoList repos={data?.projects} header="All Projects" viewMoreBtn />
        </section>
    )
}

export default Projects;

export async function getStaticProps() {
    const projects = await getAllFilesFrontMatter('projects');
    return { props: { projects } }
}
