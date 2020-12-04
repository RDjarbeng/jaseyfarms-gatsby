import React from "react"
import SectionTitle from "./SectionTitle"
import BenefitCard from "./BenefitCard"
import content from "../../content/BenefitsData.json"

export default function ProductBenefits() {
  return (
    <section id="projects-benefits" className="">
      <div className="container project-con section-title-2">
        <SectionTitle
          title="BENEFITS"
          subtitle="A diet rich in vegetables can:"
        />
        <div className="row mt-2 mb-3 px-1 benefits-section">
          {/* {content.map(value => (
            <BenefitCard text={value} />
          ))} */}
          <BenefitCard/>
        </div>
      </div>
    </section>
  )
}
