import React from 'react'
import './Navbar.css'
const NAME = "RISHABH KANAN JAIN"
export default function Navbar() {
  return (
    <div id='navbar' className='flex flex-col'>
        <div className='title-bar'>
            <h1 className='playfair-fs text-5xl'>{NAME}</h1>
        </div>
    </div>
  )
}
