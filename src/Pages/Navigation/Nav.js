import React from 'react'
import './Navigation.css'
export default function Nav() {
  return (
    <div id='NAVBAR' className=''>
      <section className="nav-links monster">
        <a href="#" className='active'>HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">COMMUNITY</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </section>
      <section className="nav-buttons m">
        <div className='m'>TOGG</div>
        <div className='m'>
          <span className='menu-part'></span>
          <span className='menu-part'></span>
          <span className='menu-part'></span>
        </div>
      </section>
    </div>
  )
}
