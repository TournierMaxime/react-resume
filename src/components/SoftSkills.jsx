import React from "react"
import data from "../data.json"

export default function SoftSkills() {
  const skills = data.softSkill.skills.map((skill, index) => {
    return (
      <div key={index}>
        <h5>{skill.title}</h5>
        <li>{skill.description}</li>
      </div>
    )
  })
  return (
    <div className="softSkill">
      <h3>{data.softSkill.title}</h3>
      <hr />
      <ul>{skills}</ul>
    </div>
  )
}
