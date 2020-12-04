import React from "react"
import SectionTitle from "./SectionTitle"
import ProductCard from "./ProductCard"
import content from "../../content/productData.json"
// console.log(content);

export default function ProductSection() {
  return (
    <section id="projects">
      <div className="container project-con">
        <SectionTitle
          title="Our Products"
          subtitle="We highly recommend you place an order by using the option below:"
        />
          <div className="container shadow mb-3 mt-4">
            <div className="row pt-3 pb-3 mb-2 pr-3 pl-3">
          {content.map(({ text, image }) => (
            <ProductCard caption={text} image={image} />
          ))}
          {/* <ProductCards caption={content[0].text0} image={content[0].Image0} /> */}
        </div>
        </div>
      </div>
    </section>
  )
}
