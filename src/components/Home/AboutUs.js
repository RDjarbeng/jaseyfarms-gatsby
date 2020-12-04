import React from "react"
import { Link } from "gatsby"
import { FaChartBar, FaRocket, FaBriefcase } from "react-icons/fa"
import { IconContext } from "react-icons"

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container">
        <br />
        <div className="section-title mb-5" data-aos="fade-up">
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className="about-us-main card-deck">
            <div className=" col-md-4 col-sm-12">
              <div className="icon-box text-center mb-3">
                <IconContext.Provider value={{ color: "green", size: "3rem" }}>
                  <FaBriefcase />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-header text-center">Our Objective</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text d-flex" style={{ width: "100%" }}>
                  Our objective is to improve the well-being of our consumers
                  through the cultivation and supply of well-grown farm products
                  with specific emphasis on vegetables.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="icon-box text-center mb-3">
                <IconContext.Provider value={{ color: "green", size: "3rem" }}>
                  <FaRocket />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-header text-center">Our Mission</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text">
                  Our focus is to develop our greenhouse farming know-how,
                  capability, and output progressively to enable us to supply
                  fresh, healthy, and quality vegetables at competitive rates
                  with the least impact on the environment
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="icon-box text-center mb-3">
                <IconContext.Provider value={{ color: "green", size: "3rem" }}>
                  <FaChartBar />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-header text-center">Our Approach</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text">
                  Our approach involves using a greenhouse-controlled
                  environment for farming various vegetables in commercial
                  quantities using no pesticides in the cultivation process.
                  More so, we mindfully endeavor to ensure less usage of water
                  and energy to lower our carbon footprint. We believe in
                  sustainable farming to meet the needs of our growing
                  population.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <button className="btn btn-success btn-lg " data-toggle="collapse">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              Read more...
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
