import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ({ classes, title, info }) {
  return (
    <div className="col-lg-3 col-sm-6 ">
      <div
        className="info-box mb-4 shadow text-center p-3"
        style={{ height: 200, width: 250 }}
      >
        <FontAwesomeIcon icon={classes} size="2x" color="orange" />
        <h5 className="mt-2">
          <strong>{title}</strong>
        </h5>
        <p>{info}</p>
        {/* <p></p> */}
      </div>
    </div>
  )
}
