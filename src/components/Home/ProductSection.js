import React from "react"
import SectionTitle from "./SectionTitle"
import ProductCard from "./ProductCard"

// console.log(content);

export default function ProductSection() {
  return (
    <section id="projects">
      <div className="container project-con">
        <SectionTitle
          title="Our Products"
          subtitle="We highly recommend you place an order by using the option below:"
        />
        <ProductCard/>
          {/* <ProductCards caption={content[0].text0} image={content[0].Image0} /> */}
      </div>
    </section>
  )
}
