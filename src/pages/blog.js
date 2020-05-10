import React from 'react';
import Layout from '../components/layout';
import styles from './blog.module.scss';
import BlogItem from '../components/blogItem';
import { BlogQuery } from '../libs/queryLib';

const Blog = () => {
  const posts = () => BlogQuery().map(({ node }, index) => <BlogItem key={index} node={node} styles={styles} />);

  return (
    <Layout title="Blogs">
      <h1>Blogs</h1>
      <ol className={styles.posts}>{posts()}</ol>
    </Layout>
  )
}

export default Blog;
