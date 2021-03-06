import React from "react"
import { Link } from "gatsby"
import data from "../../content/contactData.json"
// import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function Footer() {
  return (
    <footer id="footer" style={{ borderTop: "2px solid white" }}>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/#order">Order</Link>
                </li>
                <li>
                  <Link to="/company">Company</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <div>
                <strong>Location:</strong>
                <br />
                <div>{data.locationInfo}</div>
                {/* {<ReactMarkdownWithHtml children={data.locationInfo} allowDangerousHtml />} */}
                {/* H/No. C684 <br />
            Nii Kwamena Bonnie Crescent<br />
            Dzorwulu, Accra, Ghana<br /><br /> */}
                <strong>Postal Address:</strong> <br />
                {/* {<ReactMarkdownWithHtml children={data.postalInfo} allowDangerousHtml />}
                 */}
                <div>{data.postalInfo}</div>
                <br />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact pushed-down">
              <div>
                <strong className="font-weight-bold">Phone:</strong>
                <div>{data.phoneInfo}</div>
                <br />
                <strong>Email:</strong>
                <br />
                <div> {data.emailInfo} </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3> Careers</h3>
              <div>{data.careers}</div>
              <br />

              {/* <a href="contact.html" className="text-dark" > </a>*/}
              <button className="btn btn-warning"> Send mail</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0" style={{ backgroundColor: "ash" }}>
        <p className="copyright mb-0">
          &copy; Copyright{" "}
          {new Date().getFullYear() > 2020 ? new Date().getFullYear() : "2020"}{" "}
          <strong>
            <span>Jasey Farms Ltd</span>
          </strong>
          . All Rights Reserved. Developed and maintained by{" "}
          <a href="https://sterde.com" style={{ color: "#fdb305" }}>
            Sterde
          </a>
        </p>
      </div>
      <span className="back-to-top">
        <i className="icofont-simple-up"></i>
      </span>
    </footer>
  )
}
