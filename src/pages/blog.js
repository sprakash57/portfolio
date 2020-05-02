import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from './blog.module.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              fields{
                slug
              }
            }
          }
        }
      }
    `);

  const posts = () => {
    return data.allMarkdownRemark.edges.map(({ node }, index) => (
      <li key={index} className={styles.post}>
        <Link to={`/blog/${node.fields.slug}`}>
          <h3>{node.frontmatter.title}</h3>
          <small>{node.frontmatter.date}</small>
        </Link>
      </li>
    ))
  }

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol className={styles.posts}>{posts()}</ol>
    </Layout>
  )
}

export default Blog;