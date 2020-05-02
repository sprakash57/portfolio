import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import styles from './layout.module.scss';
import Head from './head';

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <Head title={props.title} />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;