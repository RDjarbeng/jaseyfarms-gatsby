import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
// import parse from 'html-react-parser';//to parse the html correctly, dangerouslySetInnerHtml was not working
import ReactMarkdownWithHtml from "react-markdown/with-html";


export default function ProductCards({caption, image}) {
  return (
    <React.Fragment>
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" bg-white h-100 row" data-aos="fade-up">
          <div className=" d-flex justify-content align-items-center text-center text-white col-4" style={{ backgroundColor: 'green' }}>
            {/* Bugudon Gold Mine - Awaham Project */}
            {caption}
          </div>
          <div className="col-8 overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src={image} alt="vegetable" className=" img-fluid"/>
            </div>
          </div>
        </div>
      </div>
      
      </React.Fragment>
  );
}
