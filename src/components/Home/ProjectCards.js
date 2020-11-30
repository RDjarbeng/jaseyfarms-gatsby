import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
// import parse from 'html-react-parser';//to parse the html correctly, dangerouslySetInnerHtml was not working
import ReactMarkdownWithHtml from "react-markdown/with-html";


export default function ProjectCards(props) {
  return (
    <div className="row pt-2 pb-3 shadow mb-2">
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" bg-white h-100 row" data-aos="fade-up">
          <div className=" text-center text-white col-4" style={{ backgroundColor: 'green' }}>
            {/* Bugudon Gold Mine - Awaham Project */}
            Lorem, ipsum dolor.
          </div>
          <div className="col-8 overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src="/img/v2.png" alt="vegetable" className=" img-fluid"/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" bg-white h-100 row" data-aos="fade-up">
          <div className=" text-center text-white col-4" style={{ backgroundColor: 'green' }}>
            {/* Bugudon Gold Mine - Awaham Project */}
            Lorem, ipsum dolor.
          </div>
          <div className="col-8 overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src="/img/v2.png" alt="vegetable" className=" img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" bg-white h-100 row" data-aos="fade-up">
          <div className=" text-center text-white col-4" style={{ backgroundColor: 'green' }}>
            {/* Bugudon Gold Mine - Awaham Project */}
            Lorem, ipsum dolor.
          </div>
          <div className="col-8 overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src="/img/v2.png" alt="vegetable" className=" img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" bg-white h-100 row" data-aos="fade-up">
          <div className=" text-center text-white col-4" style={{ backgroundColor: 'green' }}>
            {/* Bugudon Gold Mine - Awaham Project */}
            Lorem, ipsum dolor.
          </div>
          <div className="col-8 overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src="/img/v2.png" alt="vegetable" className=" img-fluid" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
