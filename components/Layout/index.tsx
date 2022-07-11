import React from 'react';
import Head from 'next/head';
import NavMenu from '@/components/NavMenu';
import styles from './index.module.scss';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.container}>
      <Head>
        <title>SUPR Dev</title>
        <meta name="description" content="Shorten your link here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container__body}>
        <NavMenu />
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
