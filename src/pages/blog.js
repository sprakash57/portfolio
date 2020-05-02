import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from './blog.module.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulPortfolioBlog(
      sort:{fields: publishedDate, order: DESC}
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
    `);

  const posts = () => {
    return data.allContentfulPortfolioBlog.edges.map(({ node }, index) => (
      <li key={index} className={styles.post}>
        <Link to={`/blog/${node.slug}`}>
          <h3>{node.title}</h3>
          <small>{node.publishedDate}</small>
        </Link>
      </li>
    ))
  }

  return (
    <Layout title="Blogs">
      <h1>Blogs</h1>
      <ol className={styles.posts}>{posts()}</ol>
    </Layout>
  )
}

export default Blog;