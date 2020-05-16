import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import SocialIcon from '../components/socialIcon';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import styles from './404.module.scss';

const NotFound = () => {
    return (
        <Layout title='Not Found'>
            <main className='p-5 text-center'>
                <h2>Page Not Found</h2>
                <hr />
                <SocialIcon icon={faBan} size='5x' />
                <p>It looks like you have taken a wrong turn. <Link className={styles.activeLink} to='/'>Go to home</Link></p>
            </main>
        </Layout>
    )
}

export default NotFound;