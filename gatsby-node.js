const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  /*Its a 3 step process
  1. Get path to the template
  2. Get markdown data
  3. Create new pages
  */
  const postTemplate = path.resolve('./src/templates/post.js');
  const res = await graphql(`
    query{
      allContentfulPortfolioBlog{
          edges{
            node{
              slug
            }
          }
        }
      }
    `)
  res.data.allContentfulPortfolioBlog.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}