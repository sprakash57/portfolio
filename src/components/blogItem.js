import React from 'react';
import { Link } from 'gatsby';
import Badge from './badge';
import styles from './blogItem.module.scss';

const BlogItem = ({ node, styles: parentStyles, hideSummary }) => {

    return (
        <li className={parentStyles.post}>
            <Link to={`/blog/${node.slug}`}>
                <div className="row">
                    <section className="col-sm-5 col-md-3 mb-2">
                        <img className='img-fluid' src={node.images.file.url} alt="logo" />
                    </section>
                    <section className="col-sm-7 col-md-9">
                        <h2>{node.title}</h2>
                        {node.tags.length && node.tags.map((t, i) => <Badge key={i} tag={t} />)}
                        <small>{node.publishedDate} | {node.timeToRead} min read</small>
                        {!hideSummary && <p className={styles.summary}>{node.summaryText.summaryText}...</p>}
                    </section>
                </div>
            </Link>
        </li>
    )
}

export default BlogItem;
