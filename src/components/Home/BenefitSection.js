import React from "react"
import SectionTitle from "./SectionTitle"
import BenefitCard from "./BenefitCard"


export default function ProductBenefits() {
  return (
    <section id="projects-benefits" className="">
      <div className="container project-con section-title-2">
        <SectionTitle
          title="BENEFITS"
          subtitle="A diet rich in vegetables can:"
        />
          <BenefitCard/>
      </div>
    </section>
  )
}
