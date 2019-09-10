import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import "../styles/portfolio.css"
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
          <div className="emphasis">TITLE</div>{" "}
          <span className="portfolio-spans">Projectify</span>
          <div className="emphasis">DESCRIPTION</div>{" "}
          <span className="portfolio-spans">
            Gamify your task management experience. Create new projects with
            tasks to complete. Each completed task is worth 5 XP.
          </span>
          <div className="emphasis">STRUGGLES</div>{" "}
          <span className="portfolio-spans">
            Understanding and incorporating React Redux was the biggest hurdle
            for this particular project. I eventually implemented Redux where
            each time a task was completed, the user's coins would appear in
            their moneybag.{" "}
          </span>
          <div className="emphasis">TECH USED</div>{" "}
          <span className="portfolio-spans">
            HTML, CSS, React JS, React Redux, React-Bootstrap, Express, Node JS,
            PostgreSQL
          </span>
        </div>
        <div className="column">
          IMAGE
          <p />
          <div className="emphasis">TITLE</div>{" "}
          <span className="portfolio-spans">Portfolio Site: V1</span>
          <div className="emphasis">DESCRIPTION</div>
          <span className="portfolio-spans">
            First iteration of my portfolio site.
          </span>
          <div className="emphasis">STRUGGLES</div>
          <span className="portfolio-spans">
            There was a time-crunch: I had to learn GatsbyJS while also working
            on my group project.{" "}
          </span>
          <div className="emphasis">TECH USED</div>
          <span className="portfolio-spans">
            HTML, CSS, React JS, Gatsby JS
          </span>
        </div>
        <div className="column">
          IMAGE
          <p />
          <div className="emphasis">TITLE</div>{" "}
          <span className="portfolio-spans">Beatzz</span>
          <div className="emphasis">DESCRIPTION</div>
          <span className="portfolio-spans">
            An e-commerce marketplace for producers to sell their beats and
            vocal artists to purchase them.
          </span>
          <div className="emphasis">STRUGGLES</div>
          <span className="portfolio-spans">
            Amazon S3 continuously blocked the sample beats we were uploading.
            At the last minute, I had to adjust our media queries as we were
            presenting our project on a much larger screen.{" "}
          </span>
          <div className="emphasis">TECH USED</div>
          <span className="portfolio-spans">
            HTML, CSS, React JS, React Redux, React Hooks, Amazon S3, ChartJS,
            Sass, React-Bootstrap, Express, Node JS, PostgreSQL
          </span>
        </div>
      </div>
    </Layout>
  </>
)

export default portfolio
