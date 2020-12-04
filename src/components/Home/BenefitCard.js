import React from 'react';

export default function BenefitCard({text}) {
  
  return (
    // benefit cards
    <React.Fragment>
      <div className="col-md-3 border-0 card   p-1">
        <div className=" benefit-card h-100 ">
          <div className="   h-100 d-flex justify-content align-items-center">
            <div className=" p-2 ">
              <span>{text}</span>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}