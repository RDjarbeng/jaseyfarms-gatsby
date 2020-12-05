import React from "react"
import SectionTitle from "../Home/SectionTitle"

const AboutUs = () => {
  return (
    <section id="about" className="strat" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <br />
        <div className="mt-5 pt-3 mb-3 pb-2">
          <SectionTitle title="CONTACT US" />
        </div>

        <div className="row">
          <div
            id=""
            className=" col-md-12 col-sm-12"
            style={{ textAlign: "justify" }}
          >
            <div>
              <p className="content">
                More and more people are focusing on vegetables for healthy
                eating and vegetarian dieting; there are concerns about the
                source of these vegetables. These concerns include the quality
                of water used in growing these vegetables, the pesticide and
                chemical application, whether or not child labor is involved,
                the carbon footprint and environmental impact of the farming
                process, and also the post-harvest handling issues. Jasey farms
                work to address all these issues in their vegetable farming to
                ensure a sustainable supply of vegetables.
              </p>
              <p className="content">
                Jasey Farm is mainly into the farming and supply of the
                following named vegetables: tomato, onion, eggplant
                (garden-eggs), sweet pepper, carrots, cabbage, chili pepper, hot
                pepper, carrot, cucumber, and okra. We provide our products to
                the general public, and there are pre-orders as well. We
                recommend you use our "Order now" in the menu to place your
                request for both small and large supplies. Our sales
                representatives support domestic, institutional, and reseller
                arrangements.{" "}
              </p>
              <p className="content">
                We employ a state-of-the-art greenhouse facility and technology
                to reduce and eliminate the need for the use of dangerous
                pesticides found on many commercially grown crops. The
                controlled environment used to farm our vegetables allows us to
                create an optimum environment for growing our plants. This
                approach to farming helps to enhance the growth of our plants
                batch by batch and year after year, giving our customers well
                developed and nutrient-packed vegetables for their use and
                consumption always.{" "}
              </p>
              <p className="content">
                We built our business model around vegetable foods because of
                the enormous health benefits of vegetables. There are several
                compelling and robust evidence that a diet rich in vegetables
                can lower the risk of heart disease and stroke. Persons with
                high blood pressure can improve their lives by consuming a diet
                high in vegetables, which restricts the amount of saturated and
                total fat in the body resulting in lower blood pressure.
                Numerous studies have revealed what appears to be a strong
                connection between the consumption of vegetables and its
                protection against cancer. The increase consumption of
                vegetables may help reduce the risk of type 2 diabetes.
                Similarly, concerning body weight, eating non-starchy vegetables
                is likely to support weight loss over time. Most vegetables
                contain indigestible fiber, which absorbs water and expands as
                it passes through the digestive system. This assists in calming
                symptoms of irritable bowels, and triggering regular bowel
                movements can relieve or prevent constipation. The bulking and
                softening action of insoluble fiber also decreases pressure
                inside the intestinal tract and may help prevent diverticulosis.
                Lastly, eating vegetables can also keep your eyes healthy and
                may help prevent two common aging-related eye diseases such as
                cataracts and macular degeneration. All these benefits are in
                line with the objective of Jasey farms, which is to improve the
                health and the well-being of our consumers.{" "}
              </p>
              <br />
              <h5 style={{ textAlign: "center" }}>
                <b>Strategic Positioning</b>
              </h5>
              <p>
                As the population of Ghana growth exceeds the 30million with an
                increasing number of middle and upper className-income earners,
                Jasey farms foresee opportunities for a market that is very
                interested in the benefits of well-grown and healthy vegetables.
                Again, there is a clear indication that Ghana is importing lots
                of well-grown vegetables for the hospitality industry. For this
                reason, Jasey Farms is working to strategically positioning
                itself to tap into this market, and its management has set out
                the following vision, mission, and values as a guide.{" "}
              </p>
            </div>
            <div className="image-holder">
              <div
                className="about-cards p-4 mb-4"
                style={{ backgroundImage: "url('/img/about-pic.png')" }}
              >
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4
                          className="card-header text-center"
                          data_temp_dwid="1"
                        >
                          Vision
                        </h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          To promote the well-being of consumers through the
                          cultivating and supply of well grown vegetables.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4 className="card-header text-center">Mission</h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          To employ the modern farming know-how and capability
                          to support the supply of fresh, healthy and quality
                          vegetables at competitive rates with least impact on
                          the environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div
                      className="card col"
                      style={{ background: "rgb(255,255,255,0.8)" }}
                    >
                      <div className="card-title">
                        <h4 className="card-header text-center">Values</h4>
                      </div>
                      <div className="card-body text-center">
                        <p className="card-text">
                          Integrity Healthy products Value for money
                          Environmentally conscious
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
