/* eslint-disable prettier/prettier */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const portfolioTemplate = path.resolve('./src/templates/portfolio/index.tsx')
  const portfolioData = await graphql(`
    query {
      allContentfulPortfolio(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const portfolio = portfolioData.data.allContentfulPortfolio.edges
  portfolio.forEach((edge, index) => {
    createPage({
      component: portfolioTemplate,
      path: `/portfolio/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        index: index,
        previous: index === 0 ? null : portfolio[index - 1].node,
        next: index === portfolio.length - 1 ? null : portfolio[index + 1].node,
      },
    })
  })
  const blogTemplate = path.resolve('./src/templates/blog/index.tsx')
  const blogPostData = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const blog = blogPostData.data.allContentfulBlogPost.edges
  blog.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        url: `/blog/${edge.node.slug}`,
      },
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
