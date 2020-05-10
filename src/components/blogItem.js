import React from 'react';
import { Link } from 'gatsby';

const BlogItem = ({ node, styles, index }) => {
    return (
        <li key={index} className={styles.post}>
            <Link to={`/blog/${node.slug}`}>
                <h4>{node.title}</h4>
                <small>{node.publishedDate}</small>
            </Link>
        </li>
    )
}

export default BlogItem;
