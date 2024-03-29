import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { PortfolioItemProps } from '../../types'

import './style.scss'

const PortfolioItem = ({
  slug,
  title,
  subtitle,
  image,
  demoLink,
  active,
}: PortfolioItemProps) => {
  return (
    <div
      className="portfolio-card"
      data-sal="flip-left"
      data-sal-delay="200"
      data-sal-easing="ease"
    >
      {image && (
        <div className="portfolio-card__image-container show">
          <Img
            fluid={image.fluid}
            key={image.fluid.src}
            alt={title}
            className="gatsby-wrapper-image--portfolio"
          />
        </div>
      )}
      <div className="portfolio-card__content hide">
        <h4>{title}</h4>
        <p className="porfolio-card__subtitle">{subtitle}</p>
        {active ? (
          <>
            <a href={demoLink} target="blank">
              <button className="grow">Demo</button>
            </a>
            <Link to={`/portfolio/${slug}`}>
              <button className="grow">Details</button>
            </Link>
          </>
        ) : (
          <>
            <p>Currently moving to a new hosting service</p>
            <Link to={`/portfolio/${slug}`}>
              <button className="grow">Details</button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default PortfolioItem
