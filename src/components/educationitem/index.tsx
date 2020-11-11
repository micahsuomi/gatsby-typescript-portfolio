import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { EducationItemProps } from '../../types'

import './style.scss'

const EducationItem = ({
  title,
  slug,
  category,
  image,
  topics,
  description,
  options,
}: EducationItemProps) => {
  return (
    <div className="education-card">
      <div className="education-card__image">
        <img src={image.file.url} alt={slug} />
      </div>
      <div className="education-card__content">
        <h3>{title}</h3>
        <h4>{category}</h4>
        <div className="education-card__description">
          <p>{documentToReactComponents(description.json, options)}</p>
        </div>
        <ul>
          {topics.map(topic => {
            return <li key={topic}>{topic}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default EducationItem
