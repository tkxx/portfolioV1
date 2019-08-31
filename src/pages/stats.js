import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import profilePic from "../images/portfolioProfilePic.jpg"
import markGH from "../images/MarkGHLight.png"

import "../styles/stats.css"

const about = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="about" />
      <div className="stats-header">
        hi!{" "}
        <span role="img" aria-label="waving-hi">
          👋🏼
        </span>{" "}
        get to know me
      </div>
      <div className="row">
        <div className="column">
          <img
            src={profilePic}
            alt="profile picture"
            className="profile-pic"
          ></img>
          <p>
            <span className="emphasis">the journey</span> a freshly-minted web
            developer with a creative writing background, I am passionate on
            delivering the story of a website and making it responsible and
            enjoyable for the user. I am currently based in NYC and interested
            in building communities and making technology more accessible.
          </p>
          <p>
            <span className="emphasis">education</span> dev mountain, vona
            (voices of our nations arts), nyu
          </p>
        </div>
        <div className="column">
          <div className="tech-side">
            <p>
              <span className="emphasis">tech languages [IMAGES]</span>
            </p>
            <p className="stats-list">
              <span className="emphasis">recent projects [IMAGES]</span>
              <ul>
                <li>
                  <Link to="/portfolio">beatzz (group project):</Link> an
                  e-commerce site for producers to upload their beats and
                  musicians to download those beats.
                </li>
                <li>
                  <Link to="/portfolio">portfolio site v1.0:</Link> first
                  version of my portfolio site.
                </li>
                <li>
                  <Link to="/portfolio">projectify (personal project):</Link>{" "}
                  gamify your task management experience. earn points as you
                  complete each task and project.
                </li>
              </ul>
            </p>
            <p>
              <span className="emphasis">experience [IMAGES]</span> download pdf{" "}
              <span role="img" aria-label="clipboard" className="exp-img">
                📋
              </span>{" "}
              /{" "}
              <a href="https://github.com/tkxx">
                <img
                  src={markGH}
                  alt="Github white octocat"
                  className="icon-img"
                />
              </a>{" "}
              / linkedin
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default about
