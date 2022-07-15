import ProjectsList from '@/components/Project';
import Videos from '@/components/Video';

const Projects = ({ projects, videos }: { projects: Project[]; videos: Video[] }) => {
  return (
    <section>
      <ProjectsList projects={projects} header="Live projects" />
      <Videos videos={[]} />
    </section>
  );
};

export default Projects;

export async function getStaticProps() {
  const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/projects.json`);
  const response = await tryProjects.json();
  return {
    props: {
      projects: tryProjects.ok ? response['projects'] : [],
      videos: tryProjects.ok ? response['videos'] : [],
    },
  };
}
