import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { IconCardProps } from '../../types'

import './style.scss'

const IconCard = ({ title, image, description, options }: IconCardProps) => {
  return (
    <div
      className="icon-card"
      data-sal="flip-right"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div className="icon-card__image">
        <img src={image.file.url} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{documentToReactComponents(description.json, options)}</p>
      </div>
    </div>
  )
}

export default IconCard
