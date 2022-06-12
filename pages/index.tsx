import * as React from 'react';
import { getAllFilesFrontMatter } from '@/helpers/mdx';
import Blogs from '@/components/Blog';
import Projects from '@/components/Project';
import Contributions from '@/components/Contribution';
import Introduction from '@/components/Introduction';
import { useLatestData } from '@/helpers/hooks';

type Props = {
  posts: Post[];
  projects: Project[];
  tryRepos: any;
};

const Home = ({ posts, projects }: Props) => {
  const recentPosts = useLatestData<Post>(posts);
  const recentProjects = useLatestData<Project>(projects);
  console.log(recentProjects);
  return (
    <section>
      <Introduction />
      <Blogs posts={recentPosts} header="Recent Blogs" viewMoreBtn />
      <Projects projects={recentProjects} header="Featured Projects" viewMoreBtn />
      <Contributions header="Latest Contributions" viewMoreBtn />
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');
  const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/projects.json`);
  const response = await tryProjects.json();
  return {
    props: {
      posts,
      projects: tryProjects.ok ? response['projects'] : [],
    },
  };
}
