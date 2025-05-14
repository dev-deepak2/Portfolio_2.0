import React from 'react'
import './styles/global.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ResizeWarning from './ResizeWarning'

function App() {
 

  return (
    <div className='app-container'>

<ResizeWarning />
     <Header/>

    <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
      <Projects />
      </section>
      <section id="contact">
      <Contact/>
      </section>
    
    </div>
  )
}

export default App
