import React from "react"
import ProductSection from "./ProductSection"
import Carousels from "./Carousel"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
import BenefitSection from "./BenefitSection"

export default function Home() {
  return (
    <React.Fragment>
      <Carousels />
      <ProductSection />
      <BenefitSection />
      <Orders />
      <AboutUs />
    </React.Fragment>
  )
}
