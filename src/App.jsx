import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import { ProjectsContext } from './store/ProjectContext'
import GetInTouch from './Components/GetInTouch/GetInTouch'

function App() {
  return (
    <ProjectsContext.Provider value={['project one','project two','project three']}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <GetInTouch/>
    </ProjectsContext.Provider>
  )
}

export default App