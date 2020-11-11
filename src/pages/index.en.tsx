import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './style.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePageBanner {
        title
        subtitle
        button
      }
    }
  `)
  const { title, subtitle, button } = data.contentfulHomePageBanner
  return (
    <Layout>
      <SEO title="Home" lang="en" description="home page" />
      <div className="frontpage">
        <div>
          <div className="frontpage__wrapper">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="frontpage__portfolio">
              <Link to="/portfolio" className="frontpage__portfolio-link">
                <button className="frontpage__portfolio-link--btn grow">
                  {button}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
