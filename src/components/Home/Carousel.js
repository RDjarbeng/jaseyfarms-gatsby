import React from "react"
import Carousel from "react-bootstrap/Carousel"
// import { graphql, useStaticQuery } from "gatsby"
import images from "../../content/homePageCarousel.json"

export default function Carousels() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     markdownRemark(fileAbsolutePath: { regex: "/homeCarousel.md/i" }) {
  //       frontmatter {
  //         image1
  //         image2
  //         image3
  //         vision
  //       }
  //     }
  //   }
  // `)
  // const {  vision } = data.markdownRemark.frontmatter
  const { image1, image2, image3, caption } = images
  return (
    <section id="intro">
      <Carousel className="img-hidden">
        <Carousel.Item>
          <div style={{ height: "70vh" }}>
            <img
              className="d-block w-100"
              // src='/img/contact_1.png'
              src={image1}
              alt="First slide"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: "70vh" }}>
            <img
              className="d-block w-100"
              // src='/img/hasin-hayder-974UGD5ov44-unsplash.jpg'
              src={image2}
              alt="Third slide"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* <Carousel.Caption
            style={{
              maxWidth: "70%",
              maxHeight: "70%",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50% !important",
            }}
          >
            <div>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: "70vh" }}>
            <img
              className="d-block w-100 img-3"
              // src='img/dominik-vanyi-Mk2ls9UBO2E-unsplashsmaller.jpg'
              src={image3}
              alt="Third slide"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="row ml-0 mr-0 logo-info">
        {/* <div className="col-md-2 text-white p-2 text-center vision-heading-col">
                        <h6 className="intro-text">Our Vision</h6>
                    </div> */}
        <div className="col bg-warning p-2 text-center cursive-heading ">
          <h6 className="intro-text">
            {/* To build a world-className listed mining firm with a chain of large-scale mines across Ghana and West Africa. */}
            {caption}
          </h6>
        </div>
      </div>
    </section>
  )
}
