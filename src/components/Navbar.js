import React from 'react'

import logo from '../assets/images/logo.jpg'

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <span className="link">Home</span>
        <span className="link">About</span>
        <div className="logo-container">
          <img src={logo} className="logo" />
        </div>
        <span className="link">Projects</span>
        <span className="link">Contact</span>
      </div>
    </div>
  )
}