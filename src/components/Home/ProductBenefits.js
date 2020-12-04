import React from "react"
import SectionTitle from "./SectionTitle"
import BenefitCards from "./BenefitCards"

export default function ProductBenefits() {
  return (
    <section
      id="projects-benefits"
      className="mt-4"
      style={{ borderTop: "2px solid black" }}
    >
      <div className="container project-con section-title-2 mt-4">
        <SectionTitle
          title="BENEFITS"
          subtitle="A diet rich in vegetables can:"
        />
        <BenefitCards />
      </div>
    </section>
  )
}
