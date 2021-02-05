import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'

import './styles.module.css'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulFooter {
        copyright
        github
        linkedin
        facebook
        instagram
      }
    }
  `)

  return (
    <div
      style={{
        position: 'relative',
        minWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 5000,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer
          copyright={data.contentfulFooter.copyright}
          github={data.contentfulFooter.github}
          linkedin={data.contentfulFooter.linkedin}
          facebook={data.contentfulFooter.facebook}
          instagram={data.contentfulFooter.instagram}
        />
      </div>
    </div>
  )
}

export default Layout
