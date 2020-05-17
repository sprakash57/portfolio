import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './footer.module.scss';

const Footer = (props) => {
    const { site: { siteMetadata: { author } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <div className={styles.footer}>
            <p style={{ color: props.color, marginBottom: 0, paddingBottom: '1rem' }}>Created by {author}, © 2020</p>
        </div>
    )
}

export default Footer;