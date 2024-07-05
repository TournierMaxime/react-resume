import React from "react"
import data from "../data.json"

export default function Summary() {
  return (
    <div className="summary">
      <h3>{data.summary.title}</h3>
      <hr />
      <p className="paragraph">{data.summary.paragraph}</p>
    </div>
  )
}
