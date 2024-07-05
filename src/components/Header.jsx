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
          tourniermaxime@orange.fr
        </li>
        <li>
          <span className="material-symbols-outlined">call</span>
          +33.7.49.63.69.96
        </li>
        <li>
          <i class="fa-brands fa-linkedin-in"></i>
          &nbsp;tourniermaxime
        </li>
      </ul>
    </div>
  )
}
