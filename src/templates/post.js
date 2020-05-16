import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styles from './post.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Badge from '../components/badge';
import { DiscussionEmbed } from "disqus-react"
import Footer from '../components/footer';

export const query = graphql`
query($slug: String!){
	contentfulPortfolioBlog(
    slug:{eq:$slug}
  ){
    title
    slug
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
  const { title, publishedDate, body, timeToRead, tags, slug } = props.data.contentfulPortfolioBlog;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
  return (
    <>
      <Layout title={title}>
        <main className="container mt-4 mb-3">
          <section className="row text-center">
            <div className="col">
              <h1>{title}</h1>
            </div>
          </section>
          <section className="row mb-4 pb-3 hr-line text-center">
            <div className="col">
              {tags && tags.map((tag, i) => <Badge key={i} tag={tag} />)}<span className="text-muted">| {publishedDate}</span><span className="text-muted"> | {timeToRead} min Read</span>
            </div>
          </section>
          <section className="row">
            <article className="col-xs-12 text-justify ml-5 mr-5">
              {documentToReactComponents(body.json, options)}
            </article>
          </section>
        </main>
      </Layout>
      <DiscussionEmbed {...disqusConfig} />
      <Footer color='white' />
    </>
  )
}

export default Post;