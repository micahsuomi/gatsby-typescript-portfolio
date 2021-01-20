/* eslint-disable react/display-name */
import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../../components/head'
import ShareButtons from '../../components/sharebuttons'

import blogStyles from './styles.module.scss'
import styles from './styles.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      description {
        json
      }
    }
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
  }
`

const Blog = (props: any) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        console.log(node)
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} className={blogStyles.img} />
      },
    },
  }
  const { title, publishedDate, description } = props.data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{publishedDate}</p>
        {documentToReactComponents(description.json, options)}

        <ShareButtons
          url={`${props.data.site.siteMetadata.siteUrl}${props.path}`}
          twitterHandle={`${props.data.site.siteMetadata.twitterHandle}${props.path}`}
          tags={title}
          title={title}
        />
        <div className={styles.backToPostsContainer}>
          <Link to="/blog">
            <span className={styles.backToPosts}>Back to Blog Posts</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
