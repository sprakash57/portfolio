import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styles from './post.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
query($slug: String!){
	contentfulPortfolioBlog(
    slug:{eq:$slug}
  ){
    title
    publishedDate(formatString: "Do MMM")
    body{
      json
    }
    timeToRead
    tags
  }
}
`

const Post = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return (
          <div className="text-center mb-4">
            <img alt={alt} src={url} className={styles.fluidImg} />
          </div>
        )
      }
    }
  }
  const { title, publishedDate, body, timeToRead, tags } = props.data.contentfulPortfolioBlog;
  return (
    <Layout title={title}>
      <div className="container mt-4 mb-3">
        <section className="row text-center">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </section>
        <section className="row mb-4 pb-3 hr-line text-center">
          <div className="col">
            {tags && tags.map((tag, i) => <span className={styles.badge} key={i}>{tag}</span>)}<span>| {publishedDate}</span><span className="text-muted"> | {timeToRead} min Read</span>
          </div>
        </section>
        <section className="row">
          <article className="col text-justify ml-5 mr-5">
            {documentToReactComponents(body.json, options)}
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default Post;