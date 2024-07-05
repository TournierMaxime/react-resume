import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Summary from "./components/Summary"
import SoftSkills from "./components/SoftSkills"
import HardSkills from "./components/HardSkills"
import "./styles/App.scss"

const App = () => {
  return (
    <div className="App">
      <div className="left">
        <Header />
        <Summary />
        <Experience />
        <Education />
      </div>
      <div className="right">
        <SoftSkills />
        <HardSkills />
      </div>
    </div>
  )
}

export default App
