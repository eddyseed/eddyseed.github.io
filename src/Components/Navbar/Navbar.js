import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div id='navbar' className='font-bold space-x-7'>
        <a href="#" rel='noreferrer'>Home</a>
        <a href="#about" rel='noreferrer'>About</a>
        <a href="#activity" rel='noreferrer'>Activity</a>
      </div>
    )
  }
}
