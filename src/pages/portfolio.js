import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import "../styles/global.css"

const portfolio = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="portfolio" />
      <div className="stats-header">projects</div>
      <div className="row">
        <div className="column">
          IMAGE
          <p />
          <div className="emphasis">TITLE</div> /{" "}
          <div className="emphasis">DESCRIPTION</div> /
          <div className="emphasis">PROBLEMS</div> / what was it {"&"} how did
          you overcome it
          <div className="emphasis">TECH USED</div> [icons]
        </div>
        <div className="column">
          IMAGE
          <p />
          <div className="emphasis">TITLE</div> /{" "}
          <div className="emphasis">DESCRIPTION</div> /
          <div className="emphasis">PROBLEMS</div> / what was it {"&"} how did
          you overcome it
          <div className="emphasis">TECH USED</div> [icons]
        </div>
        <div className="column">
          IMAGE
          <p />
          <div className="emphasis">TITLE</div> /{" "}
          <div className="emphasis">DESCRIPTION</div> /
          <div className="emphasis">PROBLEMS</div> / what was it {"&"} how did
          you overcome it
          <div className="emphasis">TECH USED</div> [icons]
        </div>
      </div>
    </Layout>
  </>
)

export default portfolio
