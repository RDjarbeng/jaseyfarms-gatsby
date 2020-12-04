import React from "react"
// import ReadMoreAndLess from "react-read-more-less"
// import parse from 'html-react-parser';//to parse the html correctly, dangerouslySetInnerHtml was not working
// import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function ProductCards({ caption, image }) {
  return (
    <React.Fragment>
      <div className="col-md-4 p-0 ">
        <div className="card mb-2 shadow-none border-0">
          <div className="row no-gutters">
            <div
              className="col-md-4 bg-success"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-center">{caption}</h4>
              </div>
            </div>
            <div className="col-md-8">
              <div
                style={{
                  height: "160px",
                  objectFit: "contain",
                }}
              >
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
    </React.Fragment>
  )
}
