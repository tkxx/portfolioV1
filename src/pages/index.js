import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import peace from "../images/peace.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Navbar />
    <Layout>
      <SEO title="Home" />
      <div className="name-header">
        tabitha sin <img src={peace} alt-text="peace" className="peace-sign" />
      </div>
      <div className="three-lines">
        web developer. voracious learner. french fry connoisseur.
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
    </Layout>
  </div>
)

export default IndexPage
