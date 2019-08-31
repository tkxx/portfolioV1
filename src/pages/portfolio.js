import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import "../styles/stats.css"

const portfolio = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="portfolio" />
      <div className="stats-header">projects</div>
    </Layout>
  </>
)

export default portfolio
