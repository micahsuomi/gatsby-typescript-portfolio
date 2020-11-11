import React from 'react'
import { Link } from 'gatsby'

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
          <img src={image.file.url} alt={title} />
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
