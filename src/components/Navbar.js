import React, { useState } from 'react'

import HamburgerMenu from 'react-hamburger-menu'

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
    </div>
  )
}