import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import styles from './post.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Badge from '../components/badge';
import Footer from '../components/footer';
import { Disqus } from 'gatsby-plugin-disqus'
import { articlyzer } from '../libs/dataLib';

export const query = graphql`
query($slug: String!){
	contentfulPortfolioBlog(
    slug:{eq:$slug}
  ){
    id
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
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState('');

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
  const { id, title, publishedDate, body, timeToRead, tags, slug } = props.data.contentfulPortfolioBlog;

  const loadTotalViews = async () => {
    const response = await fetch(`${process.env.GATSBY_LAMBDA_COUNT}${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => data.json()).catch(e => alert('Views are not available currently'))
    setViews(response);
    setLoading(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoading(true);
    loadTotalViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data.contentfulPortfolioBlog])

  const siteUrl = 'https://suprdev.netlify.app/blog/';
  const disqusConfig = {
    url: `${siteUrl + slug}`,
    identifier: id,
    title,
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
              {tags && tags.map((tag, i) => <Badge key={i} tag={tag} />)}
              <span className="text-muted">| {publishedDate}</span>
              <span className="text-muted"> | <a title='Calculation done by Articlyzer' className={styles.activeLink} href={articlyzer} target="_blank" rel="noopener noreferrer">{timeToRead} min Read</a></span>
              <span className="text-muted"> | Views: {loading ? '' : views}</span>
            </div>
          </section>
          <section className="row">
            <article className="col-xs-12 ml-2 mr-2">
              {documentToReactComponents(body.json, options)}
            </article>
          </section>
          <section className="row mt-5 mb-4">
            <article className="col-xs-12 pl-1 pr-1">
              <h5 className='text-muted'><em>I hope you have liked the article! let me know in the comments below or shoot me a </em><Link className={styles.footerLink} to='/contact'>mail</Link></h5>
            </article>
          </section>
        </main>
      </Layout>
      <Disqus config={disqusConfig} />
      <Footer color='white' />
    </>
  )
}

export default Post;