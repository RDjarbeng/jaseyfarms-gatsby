import React from "react"
import SectionTitle from "./SectionTitle"
import ProductCards from "./ProductCardJosh"
// import { graphql, useStaticQuery } from "gatsby"

export default function ProductSection() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: "/content/HomeProjects/i" } }
  //       sort: { fields: frontmatter___title }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             readMoreText
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)
  // const projects = data.allMarkdownRemark.edges
  return (
    <section id="projects">
      <div className="container project-con mt-4">
        <SectionTitle
          title="Our Products"
          subtitle="We highly recommend you place an order by using the option below:"
        />
        {/* <ProductCards content={projects} /> */}
        <ProductCards />
      </div>
    </section>
  )
}
