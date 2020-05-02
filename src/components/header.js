import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './header.module.scss';

const Header = () => {
    //graphql`` is called tagged-template string
    const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <header className={styles.header}>
            <h1><Link className={styles.title} to='/'>{title}</Link></h1>
            <nav>
                <ul className={styles.navList}>
                    <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/blog'>Blog</Link></li>
                    <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/about'>About</Link></li>
                    <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
