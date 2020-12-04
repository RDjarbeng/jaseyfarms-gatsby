import React from 'react';


export default function MakeOrderCard({caption, image}) {
  return (
    <React.Fragment>
      <div className="col-md-4 px-3 pb-2 ">
        <div className=" d-flex flex-column" data-aos="fade-up">
          <div className="overflow-auto d-inline-block">
            <div className="  prod-img" >
              <img src='/img/v1.jpg' alt="vegetable" className=" img-fluid" />
            </div>
          </div>
          <div className="" style={{ backgroundColor: 'green' }}>
            Lorem ipsum dolor sit.
          </div>
          <div className="" style={{ backgroundColor: 'green' }}>
            Lorem ipsum dolor sit.
          </div>
        </div>
      </div>
      
      </React.Fragment>
  );
}
