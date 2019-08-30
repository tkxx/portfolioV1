import React, { Component } from "react"
import { Link } from "gatsby"

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      //hamburger menu during media queries
    }
  }

  render() {
    return (
      <div className="main-nav">
        <div className="right-links">
          <ul>
            <Link to="/">
              <li>Home </li>
            </Link>{" "}
            <Link to="/stats">
              <li>Stats </li>
            </Link>{" "}
            <Link to="/portfolio">
              <li>Portfolio </li>
            </Link>{" "}
            <Link to="/contact">
              <li>Contact </li>
            </Link>{" "}
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
