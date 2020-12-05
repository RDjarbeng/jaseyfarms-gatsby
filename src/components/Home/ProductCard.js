import React from "react"
import content from "../../content/productData.json"
// import ReadMoreAndLess from "react-read-more-less"
// import parse from 'html-react-parser';//to parse the html correctly, dangerouslySetInnerHtml was not working
// import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function ProductCards({ caption, image }) {
  return (
    <React.Fragment>
      <div className="container shadow mb-3 mt-4">
        <div className="row pt-3 pb-3 mb-2 pr-3 pl-3">
          {content.map(({ text, image }) => (
            <div key={text} className="col-lg-4 col-md-6 p-0 ">
              <div className="card mb-2 shadow-none border-0">
                <div className="row no-gutters ">
                  <div className="col-md-4 bg-success product-text">
                    <div className="card-body d-flex">
                      <h4 className="card-title text-center">{text}</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="product-image ">
                      <img
                        className="card-img-top w-100 h-100"
                        src={image}
                        alt="Card  cap 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
