import React from "react"
import SectionTitle from "./SectionTitle"
import BenefitCards from "./BenefitCardJosh"

export default function ProductBenefit() {
  return (
    <section
      id="projects-benefits"
      className="mt-4"
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
