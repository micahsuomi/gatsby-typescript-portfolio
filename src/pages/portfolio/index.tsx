import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../../components/head'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/portfolioitem'

import './style.scss'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPortfolioHeader {
        title
        description {
          json
        }
      }
      allContentfulPortfolio(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            subtitle
            image {
              fluid(maxWidth: 930) {
                ...GatsbyContentfulFluid
              }
            }
            demoLink
          }
        }
      }
    }
  `)
  const { title, description } = data.contentfulPortfolioHeader
  return (
    <Layout>
      <Head title="Portfolio" />
      <div className="portfolio">
        <h2>{title}</h2>
        <p>{documentToReactComponents(description.json)}</p>
        <div className="portfolio__wrapper">
          {data.allContentfulPortfolio.edges.map((edge: any) => {
            const { slug, title, subtitle, image, demoLink } = edge.node
            return (
              <PortfolioItem
                key={slug}
                slug={slug}
                title={title}
                subtitle={subtitle}
                image={image}
                demoLink={demoLink}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
