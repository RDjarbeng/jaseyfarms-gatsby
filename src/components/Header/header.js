import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import { Link } from "gatsby"

export default function Header() {
  return (
    <header id="nav1" style={{ height: "30px" }}>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        collapseOnSelect
        className="navbar navbar-expand-lg navbar-light bg-white p-0 nav-menu shadow"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
        <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "60px" }}>
          <Navbar.Brand>
            <div>
              <Link className="navbar-brand p-0 mr-auto p-1" to="/">
                <div style={{ width: "150px", height: "40px" }}>
                  <img
                    id="navImg"
                    src="/img/JaseyFarms_new_full_Logo.jpeg"
                    alt="logo"
                    className=" d-inline-block align-top w-100 h-100"
                    style={{ height: "" }}
                  />
                </div>
              </Link>
            </div>
          </Navbar.Brand>
          <Nav className="navbar-nav  mt-2 mt-lg-0 mr-xl-5 ml-md-auto">
            <Nav.Link className="nav-item ">
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <Link to="/projects" activeClassName="active">
                Order Now
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <Link to="/investors" activeClassName="active">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <Link to="/ourvegetables" activeClassName="active">
                Our Vegetable
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <Link to="/contact" activeClassName="active">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </header>
  )
}
