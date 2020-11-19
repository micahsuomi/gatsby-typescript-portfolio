/* eslint-disable react/display-name */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import Head from '../../components/head'
import IconCard from '../../components/iconcard'

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
          fluid(maxWidth: 930) {
            ...GatsbyContentfulFluid
          }
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
      allContentfulFrontEndSkills {
        edges {
          node {
            title
            list
            images {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulBackendSkills {
        edges {
          node {
            title
            list
            images {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulDatabaseSkills {
        edges {
          node {
            title
            list
            images {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulDevOpsDeploymentSkills {
        edges {
          node {
            title
            list
            images {
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
        <div
          className="about__img-container"
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <Img
            fluid={data.contentfulAbout.image.fluid}
            key={data.contentfulAbout.image.fluid.src}
            alt={data.contentfulAbout.title}
          />
        </div>
        <div
          className="about__content"
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>{data.contentfulAbout.title}</h2>
          {documentToReactComponents(
            data.contentfulAbout.description.json,
            options,
          )}
        </div>
      </div>
      <div className="about__iconswrapper">
        {data.allContentfulAboutMeSkills.edges.map((edge: any) => {
          const { slug, image, title, description, options } = edge.node
          return (
            <IconCard
              key={slug}
              title={title}
              image={image}
              description={description}
              options={options}
            />
          )
        })}
      </div>
      <div className="about__skills-wrapper">
        <div
          className="about__skills-frontend-container"
          data-sal="flip-left"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          {data.allContentfulFrontEndSkills.edges.map((edge: any) => {
            const { title, images, list } = edge.node
            return (
              <>
                <h3>{title}</h3>
                <div key={edge} className="about__skill-image--frontend">
                  {images.map((image: any) => {
                    return <img src={image.file.url} key={image.file.url} />
                  })}
                </div>
                <div key={edge} className="about__skill-list--frontend">
                  {list.map((l: any) => {
                    return <p key={l}>{l}</p>
                  })}
                </div>
              </>
            )
          })}
        </div>
        <div className="about__skills-nested">
          <div
            className="about__skills-backend-container"
            data-sal="flip-right"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            {data.allContentfulBackendSkills.edges.map((edge: any) => {
              const { title, images, list } = edge.node
              return (
                <>
                  <h3>{title}</h3>
                  <div key={edge} className="about__skill-image--backend">
                    {images.map((image: any) => {
                      return <img src={image.file.url} key={image.file.url} />
                    })}
                  </div>
                  <div key={edge} className="about__skill-list--backend">
                    {list.map((l: any) => {
                      return <p key={l}>{l}</p>
                    })}
                  </div>
                </>
              )
            })}
          </div>
          <div
            className="about__skills-database-container"
            data-sal="flip-left"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            {data.allContentfulDatabaseSkills.edges.map((edge: any) => {
              const { title, images, list } = edge.node
              return (
                <>
                  <h3>{title}</h3>
                  <div key={edge} className="about__skill-image--databases">
                    {images.map((image: any) => {
                      return <img src={image.file.url} key={image.file.url} />
                    })}
                  </div>
                  <div key={edge} className="about__skill-list--databases">
                    {list.map((l: any) => {
                      return <p key={l}>{l}</p>
                    })}
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div
          className="about__skills-devops-container"
          data-sal="flip-right"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          {data.allContentfulDevOpsDeploymentSkills.edges.map((edge: any) => {
            const { title, images, list } = edge.node
            return (
              <>
                <h3>{title}</h3>
                <div key={edge} className="about__skill-image--devops">
                  {images.map((image: any) => {
                    return <img src={image.file.url} key={image.file.url} />
                  })}
                </div>
                <div key={edge} className="about__skill-list--devops">
                  {list.map((l: any) => {
                    return <p key={l}>{l}</p>
                  })}
                </div>
              </>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
