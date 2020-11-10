/* eslint-disable react/display-name */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FaBackspace, FaChevronRight, FaChevronLeft } from 'react-icons/fa'

import Layout from '../../components/layout'

import './styles.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      image {
        file {
          url
        }
      }
      title
      subtitle
      slug
      description {
        json
      }
      techImage {
        file {
          url
        }
      }
      tech
    }
  }
`

const Portfolio = (props: any) => {
  console.log(props.data)
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }
  const previousPortfolio = props.pageContext.previous
    ? {
        url: `/portfolio/${props.pageContext.previous.slug}`,
        title: props.pageContext.previous.title,
      }
    : null

  const nextPortfolio = props.pageContext.next
    ? {
        url: `/portfolio/${props.pageContext.next.slug}`,
        title: props.pageContext.next.title,
      }
    : null
  return (
    <Layout>
      <div className="portfolio-template">
        <div className="portfolio-item">
          <div className="portfolio-item__exit">
            <Link to="/portfolio">
              <FaBackspace className="exit-icon" />
              <span>Back </span>
            </Link>
          </div>
          <div className="portfolio-item__content">
            <div className="portfolio-item__portfolioDetail">
              {documentToReactComponents(
                props.data.contentfulPortfolio.description.json,
                options,
              )}
            </div>
            <div>
              <h3>{props.data.contentfulPortfolio.title}</h3>
              <h4>{props.data.contentfulPortfolio.subtitle}</h4>
              <ul className="portfolio-item__techs">
                {props.data.contentfulPortfolio.techImage.map((t: any) => (
                  <li key={t} className="portfolio-item__tech-container">
                    <img src={t.file.url} />
                  </li>
                ))}
              </ul>
              <p className="portfolio-item__tech-header">Tech used:</p>
              <ul className="portfolio-item__techs">
                {' '}
                {props.data.contentfulPortfolio.tech.map((t: any) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="portfolio-item__prevNext-wrapper">
            <div className="portfolio-item__prevNext">
              <div>
                {previousPortfolio && (
                  <Link to={previousPortfolio.url}>
                    <FaChevronLeft />
                    <span className="portfolio-item__prevText">Previous</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="portfolio-item__prevNext">
              <div>
                {previousPortfolio && (
                  <div>
                    <Link to={previousPortfolio.url}>
                      {props.pageContext.index}. {previousPortfolio.title}{' '}
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {nextPortfolio && (
                  <div>
                    <Link to={nextPortfolio.url}>
                      {props.pageContext.index + 2}. {nextPortfolio.title}{' '}
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {nextPortfolio && (
                  <Link to={nextPortfolio.url}>
                    <span className="portfolio-item__nextText">Next</span>
                    <FaChevronRight />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
