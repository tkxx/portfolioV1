/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1060,
          padding: `1.2em 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div id="footer">
          <footer>
            made with{" "}
            <span role="img" aria-label="dumpling">
              🥟
            </span>{" "}
            and{" "}
            <span role="img" aria-label="cupid heart">
              💘
            </span>
            . © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
