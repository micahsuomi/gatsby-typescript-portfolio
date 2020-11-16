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
}: PortfolioItemProps) => {
  return (
    <div className="portfolio-card">
      {image && (
        <div className="portfolio-card__image-container show">
          <Img fluid={image.fluid} key={image.fluid.src} alt={title} />
        </div>
      )}
      <div className="portfolio-card__content hide">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link to={`/portfolio/${slug}`}>
          <button className="grow">View</button>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioItem
