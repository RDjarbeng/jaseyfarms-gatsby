import React from "react"
import ProjectSection from "./ProductSection"
import Carousels from "./Carousel"
import ProductBenefits from "./ProductBenefits"
// import InvestorSection from "./InvestorSection"
// import CompanyHighlight from "./CompanyHighlight"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
// import Trial from "./Trial"

export default function Home() {
  return (
    <React.Fragment>
      <Carousels />
      <ProjectSection />
      {/* <Trial /> */}
      <ProductBenefits />
      <Orders />
      <AboutUs />
      {/* <InvestorSection /> */}
      {/* <CompanyHighlight /> */}
    </React.Fragment>
  )
}
