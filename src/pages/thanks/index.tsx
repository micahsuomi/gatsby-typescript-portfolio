import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './style.scss'

const ThankYouPage = () => (
  <Layout>
    <SEO
      title="Thank you message"
      lang="en"
      description="Thank you for contacting me"
    />
    <div className="thank-you-message">
      <h1>Thank you for your message</h1>
      <p>And for visiting my website, will answer you as soon as I can!</p>
    </div>
  </Layout>
)

export default ThankYouPage
