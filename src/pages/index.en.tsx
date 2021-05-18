/* eslint-disable react/display-name */

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import { BiCaretDown } from 'react-icons/bi'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IconCard from '../components/iconcard'
import ContactLink from '../components/contactLink'

import './style.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePageBanner {
        title
        subtitle
        button
      }
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
  const { title, subtitle, button } = data.contentfulHomePageBanner
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
      <SEO title="Home" lang="en" description="home page" />
      <div className="frontpage">
        <div className="front-gallery-image image-1"></div>
        <div className="front-gallery-image image-2"></div>
        <div className="front-gallery-image image-3"></div>
        <div className="front-gallery-image image-4"></div>
        <div>
          <div
            className="frontpage__wrapper"
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="frontpage__portfolio">
              <Link to="/portfolio" className="frontpage__portfolio-link">
                <button className="frontpage__portfolio-link--btn grow">
                  {button}
                </button>
              </Link>
            </div>
            <BiCaretDown className="frontpage__wrapper-arrow" />
          </div>
        </div>
        <div className="front-gallery-image image-6"></div>
        <div className="front-gallery-image image-8"></div>
        <div className="front-gallery-image image-9"></div>
      </div>
      <div className="about">
        <div
          className="about__img-container"
          data-sal="zoom-in"
          data-sal-delay="100"
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
          data-sal-delay="100"
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
            data-sal-delay="300"
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
          data-sal-delay="300"
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
      <ContactLink />
    </Layout>
  )
}

export default IndexPage
