import React from "react"
import ProjectSection from "./ProductSection"
import Carousels from "./Carousel"
import ProductBenefits from "./BenefitSection"
// import InvestorSection from "./InvestorSection"
// import CompanyHighlight from "./CompanyHighlight"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
// import Trial from "./Trial"

//From Joshua
import ProductSection from "./ProductSectionJosh"
import ProductBenefit from "./BenefitSectionJosh"

export default function Home() {
  return (
    <React.Fragment>
      <Carousels />
      <ProjectSection />

      {/* JOSH */}
      <ProductSection />

      {/* <Trial /> */}

      <ProductBenefits />

      {/* josh */}
      <ProductBenefit />

      <Orders />
      <AboutUs />
      {/* <InvestorSection /> */}
      {/* <CompanyHighlight /> */}
    </React.Fragment>
  )
}
