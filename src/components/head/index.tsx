/* eslint-disable prettier/prettier */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { HeadProps } from '../../types'

const Head = ({ title }: HeadProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
}

export default Head
