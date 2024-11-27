import React from "react"
import data from "../data"

export default function Header() {
  return (
    <div className="header">
      <h1>{data.header.title}</h1>
      <h2>{data.header.subTitle}</h2>
      <ul>
        <li>
          <span className="material-symbols-outlined">mail</span>
          {data.header.email}
        </li>
        <li>
          <span className="material-symbols-outlined">call</span>
          {data.header.phone}
        </li>
        <li>
          <i className="fa-brands fa-linkedin-in"></i>
          &nbsp;<a href={data.header.linkedinLink}>{data.header.linkedin}</a>
        </li>
        <li>
          <i className="fa-brands fa-github"></i>
          &nbsp;
          <a href={data.header.githubLink}>{data.header.github}</a>
        </li>
      </ul>
    </div>
  )
}
