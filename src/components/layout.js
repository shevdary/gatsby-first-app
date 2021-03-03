import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
export default Layout
