import React from 'react'
import './App.css'
import Home from './Pages/Introduction/Home'
import Nav from './Pages/Navigation/Nav'
import Main from './Pages/Introduction/Main'
import About from './Pages/Gallery/About'
import Projects from './Pages/Gallery/Projects'
import Footer from './Pages/Navigation/Footer'
export default function App() {
  return (
    <div id='canvas'>
        <Nav/>
        <Home/>
        <Main/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  )
}
