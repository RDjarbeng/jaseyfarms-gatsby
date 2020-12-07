import React from "react"
import contentData from "../../content/BenefitsData.json"
let content = contentData.productList
// {
//   content.map(value => (
//     <BenefitCard text={value} />
//   ))
// }
export default function BenefitCard() {
  return (
    // benefit cards
    <React.Fragment>
      <div className="row mt-2 mb-3 px-1 benefits-section">
      <div className="row mt-4">
        <div className="col-md-12 table-responsive">
          <div className="benefits-table" width="100%" padding="5px">
            <div className="align-middle">
                <div className="row">
                  {
                    content.map(value => (
                      <div className="col-md-3 col-sm-4 mb-3 box-marker">
                        <div className="col benefit-box p-2  rounded shadow text-center vert-align ">
                          <p>{value}</p>
                        </div>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}
