import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import { ProjectsContext } from './store/ProjectContext'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Footer from './Components/Footer/Footer'
import projects from './store/projectData'

function App() {

  return (
    <ProjectsContext.Provider value={projects}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <GetInTouch/>
      <Footer/>
    </ProjectsContext.Provider>
  )
}

export default App