import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Summary from "./components/Summary"
import SoftSkills from "./components/SoftSkills"
import HardSkills from "./components/HardSkills"
import "./styles/App.scss"
import React, { useRef } from "react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import data from "./data.json"

const App = () => {
  const pdfRef = useRef()

  const handleDownloadPDF = async () => {
    const input = pdfRef.current
    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF("p", "mm", "a4")
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth() - 4
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, "PNG", 2, 2, pdfWidth, pdfHeight)

    const links = input.querySelectorAll("a")
    links.forEach((link) => {
      const rect = link.getBoundingClientRect()
      const x = rect.left * 0.264583
      const y = rect.top * 0.264583
      const width = rect.width * 0.264583
      const height = rect.height * 0.264583
      pdf.link(x + 2, y + 2, width, height, { url: link.href })
    })

    pdf.save("resume_Maxime_Tournier.pdf")
  }

  return (
    <div className="App">
      <button onClick={handleDownloadPDF}>Télécharger en PDF</button>
      <div ref={pdfRef}>
        <Header />
        <div className="container">
          <div className="left">
            <Summary />
            <Experience />
            <Education />
          </div>
          <div className="right">
            <HardSkills />
            <SoftSkills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
