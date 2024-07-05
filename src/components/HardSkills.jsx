import React, { Fragment } from "react"
import data from "../data.json"

export default function HardSkills() {
  const rate = (r) => {
    const circles = []
    for (let i = 1; i <= 5; i++) {
      circles.push(
        <span key={i} className={`circle ${i <= r ? "filled" : "empty"}`} />,
      )
    }
    return circles
  }

  const categories = data.hardSkill.categories.map((category, index) => {
    const skills = category.skills
    return (
      <ul key={index}>
        <h5>{category.title}</h5>
        {skills.map((skill, index) => {
          return (
            <li key={index}>
              {skill.name} - {rate(skill.rate)}
            </li>
          )
        })}
      </ul>
    )
  })

  return (
    <div className="hardSkill">
      <h3>{data.hardSkill.title}</h3>
      {categories}
    </div>
  )
}
