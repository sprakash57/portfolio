import React from 'react';
import Layout from '../components/layout';
import styles from './blog.module.scss';
import BlogItem from '../components/blogItem';
import { BlogQuery } from '../libs/queryLib';

const Blog = () => {
  const posts = () => BlogQuery().map(({ node }, index) => <BlogItem key={index} node={node} styles={styles} />);

  return (
    <Layout title="Blogs">
      <div className="container mt-4">
        <div className="row hr-line">
          <section className="col">
            <h3>Blogs</h3>
          </section>
        </div>
        <div className="row">
          <div className="col-12">
            <ol className={styles.posts}>{posts()}</ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog;
