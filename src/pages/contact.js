import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact page </h1>
      <p>the best way to react me is </p>
      <p>
        <Link to="https://www.google.com.ua/?hl=ru">liiiink</Link>
      </p>
    </Layout>
  )
}
export default ContactPage
