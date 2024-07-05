import React from "react"
import data from "../data.json"

export default function Experience() {
  const experiences = data.experience.experiences.map((experience, index) => {
    const tasks = experience.tasks
    return (
      <div className="container" key={index}>
        <div className="header">
          <h4>{experience.job}</h4>
          <h6>{experience.years}</h6>
        </div>
        <div className="subHeader">
          <h5>
            {experience.company} - {experience.location}
          </h5>
        </div>
        <ul className="tasks">
          {tasks.map((task, index) => {
            return <li key={index}>{task.name}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div className="experience">
      <h3>{data.experience.title}</h3>
      <hr />
      {experiences}
    </div>
  )
}
