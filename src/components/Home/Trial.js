import React from "react"
import Carousel from "react-bootstrap/Carousel"

// const Trial = () => {
//   return (
//     // <!--Carousel Wrapper-->
//     <div
//       id="multi-item-example"
//       className="carousel slide carousel-multi-item"
//       data-ride="carousel"
//     >
//       {/* <!--Controls--> */}
//       <div className="controls-top">
//         <a
//           className="btn pmd-btn-fab"
//           href="#multi-item-example"
//           data-slide="prev"
//         >
//           <i className="fas fa-chevron-left"></i>
//         </a>
//         <a
//           className="btn pmd-btn-fab rounded"
//           href="#multi-item-example"
//           data-slide="next"
//         >
//           <i className="fas fa-chevron-right"></i>
//         </a>
//       </div>
//       {/* <!--/.Controls--> */}

//       {/* <!--Indicators--> */}
//       <ol className="carousel-indicators">
//         <li
//           data-target="#multi-item-example"
//           data-slide-to="0"
//           className="active"
//         ></li>
//         <li data-target="#multi-item-example" data-slide-to="1"></li>
//         <li data-target="#multi-item-example" data-slide-to="2"></li>
//       </ol>
//       {/* <!--/.Indicators--> */}

//       {/* <!--Slides--> */}
//       <div className="carousel-inner row">
//         {/* <!--First slide--> */}
//         <div className="carousel-item active">
//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
//                 alt="Card  cap 1"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
//                 alt="Card  cap 2"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
//                 alt="Card  cap 3"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!--/.First slide--> */}

//         {/* <!--Second slide--> */}
//         <div className="carousel-item">
//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
//                 alt="Card  cap 4"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
//                 alt="Card  cap 5"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
//                 alt="Card  cap 6"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!--/.Second slide--> */}

//         {/* <!--Third slide--> */}
//         <div className="carousel-item">
//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
//                 alt="Card  cap 7"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
//                 alt="Card  cap 8"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-2">
//               <img
//                 className="card-img-top"
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
//                 alt="Card  cap 9"
//               />
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a className="btn btn-primary">Button</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!--/.Third slide--> */}
//       </div>
//       {/* <!--/.Slides--> */}
//     </div>
//   )
// }

const Trial = () => {
  return (
    <React.Fragment>
      <div className="container shadow">
        <div className="row pt-2 pb-3 mb-2 pr-3 pl-3">
          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-0 ">
            <div className="card mb-2">
              <div class="row no-gutters">
                <div
                  class="col-md-4 bg-success"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title text-center">Card title</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card  cap 8"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Trial
