import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="header">
      <h1>
        <Link to="/" className="title">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" activeClassName="active-nav-item" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName="active-nav-item"
              className="nav-item"
            >
              Blo
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="active-nav-item"
              className="nav-item"
            >
              {" "}
              Abouut
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeClassName="active-nav-item"
              className="nav-item"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
