import React from 'react'
import Contact from '..'

import { storiesOf } from '@storybook/react'

storiesOf('Contact', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => <Contact />)
