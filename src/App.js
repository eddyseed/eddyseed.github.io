import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Activity from './Components/Activity/Activity'
import Footer from './Components/Footer/Footer'
import './App.css'
export default class App extends Component {
  componentDidMount() {
    document.title = 'Rishabh - Han'
  }
  render() {
    return (
      <div>
        <section className='nav-home'>
          <Navbar />
          <Home />
        </section>
        <About />
        <Activity />
        <Footer />
      </div>
    )
  }
}
