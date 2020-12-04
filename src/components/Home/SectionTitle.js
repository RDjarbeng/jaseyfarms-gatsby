import React from "react"

export default function SectionTitle(props) {
  return (
    <div className="section-title mb-3 project-heading">
      <h2 className="text-uppercase">{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}
