import React from "react"
import data from "../data.json"

export default function Education() {
  const educations = data.education.educations.map((education, index) => {
    return (
      <div className="container" key={index}>
        <div className="header">
          <h4>{education.diploma}</h4>
          {/* <h6>{education.years}</h6> */}
        </div>
        <div className="subHeader">
          <h5>
            {education.school} - {education.location}
          </h5>
        </div>
      </div>
    )
  })

  return (
    <div className="education">
      <h3>{data.education.title}</h3>
      <hr />
      {educations}
    </div>
  )
}
