import React, { useState } from 'react'
import './Navigation.css'
export default function Nav() {
  // const [first, setfirst] = useState(second)
  const toggleMenuVisibility = () => {
    let menu = document.getElementById("MENU")
    let navbar = document.getElementById("NAVBAR")
    menu.style.display="grid"
    navbar.style.height = "60vh"
    navbar.style.gridTemplateRows = "1fr 6fr"
  }
  return (
    <div id='NAVBAR' className='m'>
      <section className="nav-links monster" id='MENU'>
        <a href="https://google.com/" className='active'>HOME</a>
        <a href="https://google.com/">ABOUT</a>
        <a href="https://google.com/">COMMUNITY</a>
        <a href="https://google.com/">BLOG</a>
        <a href="https://google.com/">CONTACT</a>
      </section>
      <section className="nav-buttons">
        <div className=''>
          <main><span className='monster font-bold text-2xl'>EDDY SEED</span></main>
          <main className=''><button></button></main>
        </div>
        <div id='HAMBURGER_MENU' onClick={toggleMenuVisibility}>
          <span className='menu-part'></span>
          <span className='menu-part'></span>
          <span className='menu-part'></span>
        </div>
      </section>
    </div>
  )
}
