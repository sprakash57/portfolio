import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import NavMenu from '@/components/NavMenu';
import styles from './index.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className={styles.container}>
            <Head>
                <title>SUPR Dev</title>
                <meta name="description" content="Shorten your link here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.content}>
                <NavMenu />
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Layout
