import * as React from 'react';
import { getAllFilesFrontMatter } from '@/helpers/mdx';
import Blogs from '@/components/Blog';
import Projects from '@/components/Project';
import Contributions from '@/components/Contribution';
import { useLatestData } from '@/helpers/hooks';
import { ScrollTopButton } from '@/components/Elements';
import Highlights from '@/components/Highlights';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Latest from '@/components/Latest';

// type Props = {
//   posts: Post[];
//   projects: Project[];
// };

const Home = () => {
  return (
    <>
      <Highlights />
      <Services />
      <Team />
      <Latest />
      <ScrollTopButton />
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('posts');
//   const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/projects.json`);
//   const response = await tryProjects.json();
//   return {
//     props: {
//       posts,
//       projects: tryProjects.ok ? response['projects'] : [],
//     },
//   };
// }
