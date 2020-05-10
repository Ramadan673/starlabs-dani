import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default ({ data }) => (
    <div>
        <h1>Hello gatsby-image</h1>
        <Img fixed={data.file.childImageSharp.fixed} />
    </div>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp { 
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`