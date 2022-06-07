import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
const about = () => {
  return (
    <div>
      <Layout>
        <h1>About us</h1>
        <p>lorem ipsum dolar sit amit fransen</p>
        <p>
          Reach out<Link to="/contact">here</Link>
        </p>
      </Layout>
    </div>
  )
}

export default about
