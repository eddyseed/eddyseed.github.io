import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Display from './Components/Display/Display'
export default function App() {
  return (
    <div id='canvas'>
      <div id='navbar-box'><Navbar/></div>
      <div id="display-box"><Display/></div>
    </div>
  )
}
