/* eslint-disable react/display-name */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../../components/layout'
import Head from '../../components/head'

import './style.scss'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        description {
          json
        }
        image {
          file {
            url
          }
          description
        }
      }
      allContentfulAboutMeSkills {
        edges {
          node {
            title
            description {
              json
            }
            image {
              file {
                url
              }
            }
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
      <Head title="About" />
      <div className="about">
        <div className="about__img-container">
          <img
            src={data.contentfulAbout.image.file.url}
            alt={data.contentfulAbout.image.description}
          />
        </div>
        <div className="about__content">
          <h2>{data.contentfulAbout.title}</h2>
          {documentToReactComponents(
            data.contentfulAbout.description.json,
            options,
          )}
        </div>
      </div>
      <div className="about__iconswrapper" data-aos="flip-right">
        {data.allContentfulAboutMeSkills.edges.map((edge: any) => {
          return (
            <div className="about__iconcard" key={edge.node.slug}>
              <div className="about__icon-image">
                <img src={edge.node.image.file.url} alt={edge.node.title} />
              </div>
              <div>
                <h4 className="punchline">{edge.node.title}</h4>
                {documentToReactComponents(edge.node.description.json, options)}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default AboutPage
