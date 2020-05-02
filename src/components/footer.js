import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
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
        <div>
            <p>Created by {author}, © 2020</p>
        </div>
    )
}

export default Footer;