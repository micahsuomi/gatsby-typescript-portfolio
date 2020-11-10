import React from 'react'
import Footer from '..'

import { storiesOf } from '@storybook/react'

storiesOf('Footer', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => (
    <Footer
      copyright="Say Hello"
      github="https://github.com/micahsuomi"
      linkedin="https://www.linkedin.com/in/michele-zucca/"
      facebook="https://www.facebook.com/michele.zucca.18/"
      instagram="https://www.instagram.com/mikibright_z/"
    />
  ))
