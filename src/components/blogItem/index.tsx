import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { BlogItemProps } from '../../types'

import './style.scss'

const PortfolioItem = ({ slug, title, tags, image, date }: BlogItemProps) => {
  console.log(tags)
  return (
    <div className="blog-card">
      {image && (
        <div className="blog-card__image-container">
          <Img
            fluid={image.fluid}
            key={image.fluid.src}
            alt={title}
            className="gatsby-image-wrapper--blog"
          />
        </div>
      )}
      <div className="blog-card__content">
        <h4>{title}</h4>
        <p>{date}</p>
        Tags:
        <div className="blog-card__tags-wrapper">
          {tags.map((t: any) => {
            return <p key={t}>{t}</p>
          })}
        </div>
        <Link to={`/blog/${slug}`}>
          <button className="grow">Read</button>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioItem
