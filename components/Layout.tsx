import Head from 'next/head';
import React from 'react';
import styles from '../styles/components/Layout.module.scss';
import NavMenu from './NavMenu';

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
        </main>
    )
}

export default Layout
