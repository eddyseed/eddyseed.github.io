import React from 'react'
import './Navbar.css'
const NAME = "RISHABH JAIN"
export default function Navbar() {
  return (
    <div id='navbar' className=''>
      <div className='title-bar'>
        <h1 className=' text-5xl'>
          <span className='playfair-fs'>{NAME.split(" ")[0]}</span>
          <span>{" "}</span>
          <span className='playfair-fs'>{NAME.split(" ")[1]}</span>
        </h1>
      </div>
      <div className='menu'>
        <section className='space-x-4 font-extralight monster'>
          <a href='/'>HOME</a>
          <a href='/'>EXPERIENCE</a>
          <a href='/'>ABOUT</a>
        </section>
        <section className=''>
          <i class="fa-solid fa-circle-half-stroke"></i>
        </section>
      </div>
    </div>
  )
}
