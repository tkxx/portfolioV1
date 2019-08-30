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
        contact me!{" "}
        <span className="puggo">
          <img src={puggo} />
        </span>
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
                className="exp-img"
              />
            </a>{" "}
            / LINKEDIN / RESUME / INSTAGRAM?
          </div>
          <div className="column">
            <div className="form-submission">
              <form method="post" action="#">
                <label>
                  NAME
                  <input type="text" name="name" id="name" />
                </label>
                <span> </span>
                <label>
                  EMAIL
                  <input type="email" name="email" id="email" />
                </label>
                <p />
                <label>
                  SUBJECT
                  <input type="text" name="subject" id="subject" />
                </label>
                <p></p>
                <label>
                  MESSAGE
                  <textarea name="message" id="message" rows="10" />
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
