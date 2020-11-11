import React from 'react'
import EducationItem from '..'

import { storiesOf } from '@storybook/react'

storiesOf('EducationItem', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => (
    <EducationItem
      slug="Web Development"
      title="Institution"
      category="Degree Type"
      description="Study Description"
      image="image url"
      topics={['HTML, CSS']}
      options={'body goes here'}
    />
  ))
