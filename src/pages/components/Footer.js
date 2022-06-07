import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  //Api call with graphql - graphql in the template literal is a function
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
    <footer>
      <p>{data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
