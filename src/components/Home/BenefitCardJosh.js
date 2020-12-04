import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { domToReact } from "html-react-parser" //parse,

export default function BenefitCards() {

  return (
    // benefit cards
    <React.Fragment>
      <div className="row mt-4">
        <div className="col-md-12 table-responsive">
          <div className="benefits-table" width="100%" padding="5px">
            <div className="align-middle">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 bg-success text-white rounded shadow text-center vert-align">
                    <p>Lower the risk of heart disease and stroke</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 light-green rounded shadow text-center vert-align">
                    <p>
                      Lower blood pressure for persons with high blood pressure
                    </p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 bg-success text-white rounded shadow text-center vert-align">
                    <p>Protection against cancer</p>
                  </div>
                </div>
                <div className=" col-md-3 mb-3">
                  <div className="benefit-box col p-2 light-green rounded shadow text-center vert-align">
                    <p>Help reduce the risk of type 2 diabetes</p>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 light-green rounded shadow text-center vert-align">
                    <p>Support weight loss</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 bg-success text-white rounded shadow text-center vert-align">
                    <p>Relieve or prevent constipation</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 light-green rounded shadow text-center vert-align">
                    <p>May help prevent diverticulosis</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="col benefit-box p-2 bg-success text-white rounded shadow text-center vert-align">
                    <p>
                      Help prevent two common aging-related eye diseases such as
                      cataracts and macular degeneration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
