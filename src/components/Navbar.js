import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'react-scroll'

export default function Navbar(props) {

  const [ isOpen, setOpen ] = useState(false)

  return (
    <div className="nav-container">
      <div className="btn-menu">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => setOpen(!isOpen)}
          width={45}
          height={30}
          strokeWidth={3}
          rotate={0}
          color='#fff'
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <div className={isOpen ? "goto-container goto-opened" : "goto-container goto-closed"}>
        <Link className="goto" to="home" spy={true} smooth={true} duration={500}>Home</Link>
        <Link className="goto" to="about" spy={true} smooth={true} duration={500}>About</Link>
        <Link className="goto" to="edu-cert" spy={true} smooth={true} duration={500}>Educations and Certificates</Link>
        <Link className="goto" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
        <Link className="goto" to="contact" spy={true} smooth={true} duration={500}>Contacts</Link>
      </div>
    </div>
  )
}