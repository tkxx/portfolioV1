import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import profilePic from "../images/portfolioProfilePic.jpg"
import markGH from "../images/MarkGHLight.png"
import bsIcon from "../images/bootstrapIcon.svg"
import css3Icon from "../images/css3Icon.svg"
import html5Icon from "../images/html5Icon.svg"
import jsIcon from "../images/javascriptIcon.svg"
import reactIcon from "../images/reactIcon.svg"
import downloadResume from "../images/downloadResume.png"
import pSQLicon from "../images/postgresIcon.svg"

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
            <span className="emphasis">tech education</span> web development
            immersive @ dev mountain
          </p>
        </div>
        <div className="column">
          <div className="tech-side">
            <p>
              <span className="emphasis">tech languages</span>
              <div className="tech-icons">
                <div>
                  <img
                    src={html5Icon}
                    alt="html icon"
                    className="icon-resize"
                  />
                  <span className="tech-skill">HTML</span>
                </div>
                <div>
                  <img src={css3Icon} alt="css icon" className="icon-resize" />
                  <span className="tech-skill">CSS</span>
                </div>
                <div>
                  <img
                    src={jsIcon}
                    alt="javascript icon"
                    className="icon-resize"
                  />
                  <span className="tech-skill">JS ES6</span>
                </div>
                <div>
                  <img
                    src={reactIcon}
                    alt="react icon"
                    className="icon-resize"
                  />{" "}
                  <span className="tech-skill">ReactJS</span>
                </div>
                <div>
                  <img
                    src={pSQLicon}
                    alt="postgresql icon"
                    className="icon-resize"
                  />{" "}
                  <span className="tech-skill">PostgreSQL</span>
                </div>
                <div>
                  <img
                    src={bsIcon}
                    alt="bootstrap icon"
                    className="icon-resize"
                  />{" "}
                  <span className="tech-skill">Bootstrap</span>
                </div>
              </div>
            </p>
            <p className="stats-list">
              <span className="emphasis">recent projects</span>

              <div className="recent-projects">
                <Link to="/portfolio">beatzz (group project):</Link>
                <span className="project-descriptions">
                  {" "}
                  an e-commerce site for producers to upload their beats and
                  musicians to download those beats.
                </span>
              </div>
              <p />
              <div className="recent-projects">
                <Link to="/portfolio">portfolio site v1.0:</Link>
                <span className="project-descriptions">
                  {" "}
                  first version of my portfolio site.
                </span>
              </div>
              <p />
              <div className="recent-projects">
                <Link to="/portfolio">projectify (personal project):</Link>
                <span className="project-descriptions">
                  {" "}
                  gamify your task management experience. earn points as you
                  complete each task and project.
                </span>
              </div>
            </p>
            <p>
              <span className="emphasis">experience [IMAGES]</span>{" "}
              <div className="work-experience-icons">
                <div>
                  <img
                    src={downloadResume}
                    alt="download resume icon"
                    className="icon-img"
                  />
                  <span className="tech-skill">resume</span>
                </div>
                <div>
                  <a href="https://github.com/tkxx">
                    <img
                      src={markGH}
                      alt="Github white octocat"
                      className="icon-img"
                    />
                    <span className="tech-skill">github</span>
                  </a>
                </div>
                <div>
                  / <span className="tech-skill">LinkedIn</span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default about
