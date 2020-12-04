import React from "react"
import SectionTitle from "./SectionTitle"
import BenefitCards from "./BenefitCards"
import content from "../../content/BenefitsData.json"

export default function ProductBenefits() {
  return (
    <section
      id="projects-benefits"
      className=""
      style={{ borderTop: "2px solid black" }}
    >
      <div className="container project-con section-title-2">
        <SectionTitle
          title="BENEFITS"
          subtitle="A diet rich in vegetables can:"
        />
        <div className="row mt-2 mb-3 px-1 benefits-section">
          {content.map(value => (
            <BenefitCards text={value} />
          ))}
          {/* <BenefitCards/> */}
        </div>
      </div>
    </section>
  )
}
