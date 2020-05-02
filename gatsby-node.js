const path = require('path');
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

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
        allMarkdownRemark{
          edges{
            node{
              fields{
                slug
              }
            }
          }
        }
      }
    `)
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: postTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}