import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import styles from './layout.module.scss';
import Head from './head';

const Layout = (props) => {
    const renderFooter = () => {
        if (['Home', 'Blogs', 'About', 'Contact'].includes(props.title)) {
            return <Footer />
        }
        return <></>
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <Head title={props.title} />
                {props.children}
            </div>
            {renderFooter()}
        </div>
    );
}

export default Layout;