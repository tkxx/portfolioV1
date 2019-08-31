import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import puggo from "../images/puggo.svg"
import octocat from "../images/OctocatGH.png"
import SEO from "../components/seo"

import "../styles/contact.css"

const ContactPage = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="Contact" />
      <div className="contact-header">
        contact me! {/* <span className="puggo"> */}
        <img src={puggo} className="puggo" />
        {/* </span> */}
      </div>
      <div className="contact-description">
        <div className="row">
          <div className="column">
            <div className="contact-info">
              feel free to drop a note of interest, say hello, or a friendly
              (but adamant) discussion on the current french fry ranking. you
              can email me <span className="emphasis">here</span>{" "}
              (NAME[at]EMAIL.COM) or fill out the form{" "}
              <span role="img" aria-label="finger pointing right">
                👉🏼
              </span>
              . i look forward to hearing from you!
            </div>
            <p />
            <a href="https://github.com/tkxx">
              <img
                src={octocat}
                alt="octopus and cat cartoon github character"
                className="icon-svg"
              />
            </a>
            / LINKEDIN / RESUME / INSTAGRAM?
          </div>
          <div className="column">
            <div className="form-submission">
              <form method="post" action="#">
                <label>
                  <span className="emphasis">NAME</span>
                  <input type="text" name="name" id="name" placeholder="name" />
                </label>
                <span> </span>
                <label>
                  <span className="emphasis">EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </label>
                <p />
                <label>
                  <span className="emphasis">SUBJECT</span>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="subject"
                  />
                </label>
                <p></p>
                <label>
                  <span className="emphasis">MESSAGE</span>{" "}
                  <textarea
                    name="message"
                    id="message"
                    placeholder="drop a line or a job offer"
                  />
                </label>
                <p />
                <button type="submit" className="form-buttons">
                  SEND
                </button>
                <input type="reset" value="CLEAR" className="form-buttons" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default ContactPage
