import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
query($slug: String!){
	contentfulPortfolioBlog(
    slug:{eq:$slug}
  ){
    title
    publishedDate(formatString: "MMM Do, YYYY")
    body{
      json
    }
  }
}
`

const Post = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }
  const { title, publishedDate, body } = props.data.contentfulPortfolioBlog;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Post;