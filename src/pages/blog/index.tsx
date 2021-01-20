import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../../components/head'
import Layout from '../../components/layout'
import BlogItem from '../../components/blogItem'

import './style.scss'

const Blog = () => {
  const [scrolled, setScrolled] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80 || window.innerWidth <= 400) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  const data = useStaticQuery(graphql`
    query {
      contentfulBlogHeader {
        title
        description {
          json
        }
      }
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            image {
              fluid(maxWidth: 930) {
                ...GatsbyContentfulFluid
              }
            }
            tags
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <div className={scrolled ? 'blog active' : 'blog'}>
        <h2>{data.contentfulBlogHeader.title}</h2>
        {documentToReactComponents(
          data.contentfulBlogHeader.description.json,
        )}{' '}
        <div className="blog__wrapper">
          {data.allContentfulBlogPost.edges.map((edge: any) => {
            const { title, slug, tags, image, date } = edge.node
            return (
              <BlogItem
                key={slug}
                title={title}
                slug={slug}
                tags={tags}
                image={image}
                date={date}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
