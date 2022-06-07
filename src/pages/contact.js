import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"

const contact = () => {
  return (
    <div>
      <Layout>
        <h1>Feel free to get in touch</h1>
        <p>Leave use a message below</p>
        <p>
          Check us out on social
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default contact
