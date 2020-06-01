import React from 'react'
import '../assets/styles/main.css'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Education from '../pages/Education'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export default class Main extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </>
    )
  }
}