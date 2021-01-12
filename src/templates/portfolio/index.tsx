/* eslint-disable react/display-name */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'

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
      demoLink
      githubLink
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
  const previousPortfolio = props.pageContext.previous && {
    url: `/portfolio/${props.pageContext.previous.slug}`,
    title: props.pageContext.previous.title,
  }

  const nextPortfolio = props.pageContext.next && {
    url: `/portfolio/${props.pageContext.next.slug}`,
    title: props.pageContext.next.title,
  }
  const {
    title,
    subtitle,
    description,
    tech,
    demoLink,
    githubLink,
  } = props.data.contentfulPortfolio
  return (
    <Layout>
      <div className="portfolio-template">
        <div className="portfolio-item">
          <div className="portfolio-item__exit">
            <Link to="/portfolio">
              <RiArrowGoBackLine className="exit-icon grow" />
              <span>Back </span>
            </Link>
          </div>
          <div className="portfolio-item__content">
            <div className="portfolio-item__portfolioDetail">
              {documentToReactComponents(description.json, options)}
            </div>
            <div>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p className="portfolio-item__tech-header">Tech used:</p>
              <ul className="portfolio-item__techs">
                {' '}
                {tech.map((t: any) => (
                  <li key={t}>
                    <p>{t}</p>
                  </li>
                ))}
              </ul>
              <div className="portfolio-item__btn-wrapper">
                <a href={demoLink} target="blank">
                  <button>Demo</button>
                </a>
                <a href={githubLink} target="blank">
                  <button>GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item__prevNext-wrapper">
            <div className="portfolio-item__prevNext grow">
              <div>
                {previousPortfolio && (
                  <Link to={previousPortfolio.url}>
                    <FaChevronLeft />
                    <span className="portfolio-item__prevText">Previous</span>
                  </Link>
                )}
              </div>
              <div>
                {previousPortfolio && (
                  <div>
                    <Link to={previousPortfolio.url}>
                      {props.pageContext.index}. {previousPortfolio.title}{' '}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="portfolio-item__prevNext grow">
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
