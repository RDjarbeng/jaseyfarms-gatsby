import React from "react"
import SectionTitle from "../Home/SectionTitle"
import ReactMarkdownWithHtml from "react-markdown/with-html";
import content from '../../content/aboutData.json'

const AboutUs = () => {
  return (
    <section id="about" className="strat" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <br />
        <div className="mt-5 pt-3 mb-3 pb-2">
          <SectionTitle title="ABOUT US" />
        </div>

        <div className="row">
          <div
            id=""
            className=" col-md-12 col-sm-12"
            style={{ textAlign: "justify" }}
          >
            <div>
              <div className="content">
                {<ReactMarkdownWithHtml children={content.aboutus} allowDangerousHtml />}
                </div>
              <br />
              <h5 style={{ textAlign: "center" }}>
                <strong>Strategic Positioning</strong>
              </h5>
              {<ReactMarkdownWithHtml children={content.strategic} allowDangerousHtml />}
            </div>
            <div className="image-holder">
              <div
                className="about-cards p-4 mb-4"
                style={{ backgroundImage: "url('/img/about-pic.png')" }}
              >
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4
                          className="card-header text-center"
                          data_temp_dwid="1"
                        >
                          Vision
                        </h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          {content.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4 className="card-header text-center">Mission</h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          {content.mission}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4 className="card-header text-center">Values</h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          {content.values}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
