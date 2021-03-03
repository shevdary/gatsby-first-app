import React from "react"
import "./footer.css"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <p>Created by {data.site.siteMetadata.author} </p>
    </footer>
  )
}

export default Footer
