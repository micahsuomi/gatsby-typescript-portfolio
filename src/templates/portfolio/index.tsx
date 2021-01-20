/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FaGithub } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'
import {
  BsChevronLeft,
  BsChevronRight,
  BsBoxArrowUpRight,
} from 'react-icons/bs'

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
      image {
        fluid(maxWidth: 930) {
          ...GatsbyContentfulFluid
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
    contentfulPortfolioFooter {
      title
      description {
        json
      }
    }
  }
`

const Portfolio = (props: any) => {
  const [isPrevShowing, setIsPrevShowing] = useState(false)
  const [isNextShowing, setIsNextShowing] = useState(false)
  const showPrevName = () => {
    setIsPrevShowing(true)
  }
  const hidePrevName = () => {
    setIsPrevShowing(false)
  }
  const showNextName = () => {
    setIsNextShowing(true)
  }
  const hideNextName = () => {
    setIsNextShowing(false)
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
    image,
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
        <div className="portfolio-template__exit">
          <Link to="/portfolio">
            <RiArrowGoBackLine className="exit-icon grow" />
            <span>Back </span>
          </Link>
        </div>
        <div className="portfolio-item__prev grow">
          <div>
            {previousPortfolio && (
              <Link to={previousPortfolio.url}>
                <BsChevronLeft
                  className="portfolio-item__prevNext grow"
                  onMouseOver={showPrevName}
                  onMouseOut={hidePrevName}
                />
              </Link>
            )}
          </div>
          {isPrevShowing && (
            <div>
              {previousPortfolio && (
                <div className="portfolio-item__prevItemTitle">
                  <Link to={previousPortfolio.url}>
                    {props.pageContext.index}. {previousPortfolio.title}{' '}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="portfolio-item appear">
          <div className="portfolio-item__content">
            <div className="portfolio-item__portfolioDetail">
              <img src={image.file.url} alt={title} />
              <h3 className="portfolio-item__title">{title}</h3>
              <h4 className="portfolio-item__subtitle">{subtitle}</h4>
            </div>
            <hr></hr>
            <div className="portfolio-item__paragraph">
              {documentToReactComponents(description.json)}
            </div>
            <div className="portfolio-item__btn-wrapper">
              <a href={demoLink} target="blank">
                <button>
                  <span>Demo</span>
                  <BsBoxArrowUpRight className="portfolio-item__btn-icon" />
                </button>
              </a>
              <a href={githubLink} target="blank">
                <button>
                  <span>GitHub</span>
                  <FaGithub className="portfolio-item__btn-icon" />
                </button>
              </a>
            </div>
          </div>
          <div>
            <h4 className="portfolio-item__tech-header">Tech Used</h4>
            <ul className="portfolio-item__techs">
              {tech.map((t: any) => (
                <li key={t}>
                  <p>{t}</p>
                </li>
              ))}
            </ul>
          </div>
          <hr></hr>
          <div className="portfolio-item__footer-text">
            <h4>{props.data.contentfulPortfolioFooter.title}</h4>
            <p>
              {documentToReactComponents(
                props.data.contentfulPortfolioFooter.description.json,
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-item__next grow">
        {isNextShowing && (
          <div>
            {nextPortfolio && (
              <div className="portfolio-item__nextItemTitle">
                <Link to={nextPortfolio.url}>
                  {props.pageContext.index + 2}. {nextPortfolio.title}{' '}
                </Link>
              </div>
            )}
          </div>
        )}
        <div>
          {nextPortfolio && (
            <Link to={nextPortfolio.url}>
              <BsChevronRight
                className="portfolio-item__prevNext grow"
                onMouseOver={showNextName}
                onMouseOut={hideNextName}
              />
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
