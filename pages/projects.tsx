import ProjectsList from '@/components/Project';
import RepoList from '@/components/Repo';

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section>
      <ProjectsList projects={projects} header="Live projects" />
      <RepoList header="Noteworthy repos" viewMoreBtn />
    </section>
  );
};

export default Projects;

export async function getStaticProps() {
  const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/projects.json`);
  return {
    props: {
      projects: tryProjects.ok ? await tryProjects.json() : [],
    },
  };
}
