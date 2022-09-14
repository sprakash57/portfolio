import React from 'react';
import Head from 'next/head';
import NavMenu from '@/components/NavMenu';
import styles from './index.module.scss';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <Head>
        <title>Code SUPR</title>
        <meta name="description" content="Web Development solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.layout__body}>
        <NavMenu />
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
