import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
query($slug:String){
    markdownRemark(
      fields: {
        slug:{
          eq:$slug
        }
      }){
      frontmatter{
       title 
       date
      }
      html
      timeToRead
    }
  }
  `

const Post = (props) => {
    const { frontmatter, html, timeToRead } = props.data.markdownRemark;
    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            <p>Time to read: {timeToRead} min</p>
        </Layout>
    )
}

export default Post;