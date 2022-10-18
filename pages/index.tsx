import * as React from 'react';
import { ScrollTopButton } from '@/components/Elements';
import Highlights from '@/components/Highlights';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Latest from '@/components/Latest';

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
