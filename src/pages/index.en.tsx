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
        <div
          className="front-gallery-image image-1"
          data-sal="flip-right"
          data-sal-delay="300"
          data-sal-easing="ease"
        ></div>
        <div
          className="front-gallery-image image-2"
          data-sal="flip-right"
          data-sal-delay="300"
          data-sal-easing="ease"
        ></div>
        <div
          className="front-gallery-image image-3"
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
        ></div>
        <div
          className="front-gallery-image image-4"
          data-sal="flip-right"
          data-sal-delay="300"
          data-sal-easing="ease"
        ></div>
        <div>
          <div
            className="frontpage__wrapper"
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
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
        <div
          className="front-gallery-image image-6"
          data-sal="flip-right"
          data-sal-delay="100"
          data-sal-easing="ease"
        ></div>
        {/* <div class="front-gallery-image image-7" data-aos="flip-up"></div> */}
        <div
          className="front-gallery-image image-8"
          data-sal="flip-right"
          data-sal-delay="100"
          data-sal-easing="ease"
        ></div>
        <div
          className="front-gallery-image image-9"
          data-sal="flip-right"
          data-sal-delay="100"
          data-sal-easing="ease"
        ></div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
