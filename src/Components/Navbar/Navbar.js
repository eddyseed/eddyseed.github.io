import React from 'react';
import './Navbar.css';

// Define the Navbar component
export default function Navbar() {

  // Function to handle button click
  const handleClick = () => {
    alert("hil");
  };

  // Return JSX for the Navbar component
  return (
    <div id='navbar' className=''>
      <div className='menu '>
        <section className='space-x-4 font-extralight ubuntu-fs'>
          <a href='/' className='active'>HOME</a>
          <a href='/'>COFFEE CONVERTERS</a>
          <a href='/'>ABOUT</a>
        </section>
        <section className=''>
          <div onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </section>
      </div>
    </div>
  );
}
