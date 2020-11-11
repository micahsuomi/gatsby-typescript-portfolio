import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../../components/head'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/portfolioitem'

import './style.scss'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            subtitle
            image {
              file {
                url
              }
              description
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Portfolio" />
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio__wrapper">
          {data.allContentfulPortfolio.edges.map((edge: any) => {
            const { slug, title, subtitle, image } = edge.node
            return (
              <PortfolioItem
                key={slug}
                slug={slug}
                title={title}
                subtitle={subtitle}
                image={image}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
