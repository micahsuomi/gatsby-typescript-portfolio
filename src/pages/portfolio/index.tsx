import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../../components/head'
import Layout from '../../components/layout'

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
        <ul className="portfolio__wrapper">
          {data.allContentfulPortfolio.edges.map((edge: any) => {
            return (
              <li key={edge.node.slug} className="portfolio__item">
                {edge.node.image && (
                  <div className="portfolio__image-container">
                    <img src={edge.node.image.file.url} alt={edge.node.title} />
                  </div>
                )}
                <div className="portfolio__content">
                  <h4>{edge.node.title}</h4>
                  <p>{edge.node.subtitle}</p>
                  <Link to={`/portfolio/${edge.node.slug}`}>
                    <button className="grow">View</button>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Portfolio
