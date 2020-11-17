/* eslint-disable react/display-name */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../../components/head'
import Layout from '../../components/layout'
import EducationItem from '../../components/educationitem'

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEducationCourses(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            category
            image {
              file {
                url
              }
            }
            topics
            description {
              json
            }
            date
          }
        }
      }
    }
  `)
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} height="600" width="600" />
      },
    },
  }
  return (
    <Layout>
      <Head title="Education" />
      <div className="education">
        <div className="education__wrapper">
          {data.allContentfulEducationCourses.edges.map((edge: any) => {
            const {
              title,
              slug,
              category,
              image,
              description,
              topics,
            } = edge.node
            return (
              <EducationItem
                key={slug}
                slug={slug}
                title={title}
                category={category}
                image={image}
                topics={topics}
                description={description}
                options={options}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Education
