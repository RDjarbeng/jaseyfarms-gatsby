import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { graphql, useStaticQuery } from 'gatsby';
import parse, { domToReact } from 'html-react-parser';

export default function BenefitCards() {
  const benefits = useStaticQuery(graphql`
      query{
  benefit1: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit1/i"}) {
    frontmatter {
      title
      image1
      image2
    }
    html
  }
  benefit2: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit2/i"}) {
    frontmatter {
      title
      image1
    }
    html
  }
  benefit3: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit3/i"}) {
    frontmatter {
      title
      image1
      image2
    }
    html
  }
}

  `)

  const options = {
    replace: ({ children, name }) => {
      //add the class to the ol
      if (name === 'ol') {
        return <ol className="pl-3 text-justify list-div pt-0 ">{domToReact(children, options)}</ol>;
      }
    }
  };

  return (
    // benefit cards
    <div className="row mt-2 mb-3">
      <div className="col-md-3 p-2 ">
        <div className="shadow card border-0 h-100 ">
          <div className="card-body pl-2 pr-2 pt-0 ">
            <h5 className="card-title text-center font-weight-bold mb-0">Title ipsum dolor</h5>
            <div className="card-text mb-0">
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-2 ">
        <div className="shadow card border-0 h-100 ">
          <div className="card-body pl-2 pr-2 pt-0 ">
            <h5 className="card-title text-center font-weight-bold mb-0">Title ipsum dolor</h5>
            <div className="card-text mb-0">
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}