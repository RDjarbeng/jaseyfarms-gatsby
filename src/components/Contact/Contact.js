import React from "react"
import SectionTitle from "../Home/SectionTitle"
import { ContactData } from "./ContactData"
import ContactCards from "./ContactCards"
import Map from "./Map"
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <React.Fragment>
      <div
        className="container-fluid pt-3"
        style={{ backgroundColor: "rgba(225, 229, 228, 0.89)" }}
      >
        <div className="mt-5 pt-3 mb-3 pb-2">
          <SectionTitle title="CONTACT US" />
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          {ContactData.map(({ classes, title, info }) => {
            return (
              <ContactCards
                key={title}
                classes={classes}
                title={title}
                info={info}
              />
            )
          })}
        </div>
        <div className="row mb-3">
          <Map />
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  )
}
