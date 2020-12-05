import React from "react"
import SectionTitle from "./SectionTitle"

const Orders = () => {
  return (
    <section className="" id="order">
      <div className="container project-con section-title-2 mt-4">
        <SectionTitle title="Make an Order" />
        <div className="row pt-3">
          <div className="col-md-4 mb-3">
            <div
              className="card testimonial-card shadow"
              //   style={{ maxWidth: "20rem" }}
            >
              <div className="card-up indigo lighten-1"></div>

              <div className="avatar mx-auto white">
                <div
                  className="vert-align"
                  style={{
                    height: "120px",
                    width: "120px",
                    objectFit: "cover",
                    backgroundColor: "#addfad",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      objectFit: "contain",
                    }}
                  >
                    <img
                      src="/img/headset.png"
                      className="w-100 h-100"
                      alt="woman avatar"
                    />
                  </div>
                </div>
              </div>

              <div className="card-body text-center">
                <h4 className="card-title">
                  Please call a sales representative
                </h4>
                <hr />

                <p>0244132705</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div
              className="card testimonial-card shadow"
              //   style={{ maxWidth: "20rem" }}
            >
              <div className="card-up indigo lighten-1"></div>

              <div className="avatar mx-auto white">
                <div
                  className="vert-align"
                  style={{
                    height: "120px",
                    width: "120px",
                    objectFit: "contain",
                    backgroundColor: "#addfad",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      objectFit: "contain",
                    }}
                  >
                    <img
                      src="/img/cart.png"
                      className=" w-100 h-100"
                      alt="woman avatar"
                    />
                  </div>
                </div>
              </div>

              <div className="card-body text-center">
                <h4 className="card-title">Place an order</h4>
                <hr />

                <p>Tap to order healthy, quality and affordable vegetables</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div
              className="card testimonial-card shadow"
              //   style={{ maxWidth: "20rem" }}
            >
              <div className="card-up indigo lighten-1"></div>

              <div className="avatar mx-auto white">
                <div
                  style={{
                    height: "120px",
                    width: "120px",
                    objectFit: "contain",
                    backgroundColor: "#addfad",
                  }}
                  className="vert-align"
                >
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      objectFit: "contain",
                    }}
                  >
                    <img
                      src="/img/at.png"
                      className=" w-100 h-100"
                      alt="woman avatar"
                    />
                  </div>
                </div>
              </div>

              <div className="card-body text-center">
                <h4 className="card-title">Engage Us</h4>
                <hr />

                <p>Send us an email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders
