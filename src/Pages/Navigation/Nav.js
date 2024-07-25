import React, { Component } from 'react';
import './Navigation.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  componentDidMount() {
    this.updateMenuVisibility();
  }

  updateMenuVisibility = () => {
    let menu = document.getElementById("MENU");
    let navbar = document.getElementById("NAVBAR");
    
    if (this.state.visibility) {
      menu.style.display = "flex";
      navbar.style.height = "60vh";
      navbar.style.gridTemplateRows = "1fr 5fr";
    } else {
      menu.style.display = "none";
      navbar.style.height = "10vh";
      navbar.style.gridTemplateRows = "1fr 0";
    }
  }

  toggleMenuVisibility = () => {
    this.setState(prevState => ({
      visibility: !prevState.visibility
    }), this.updateMenuVisibility);
  }

  render() {
    return (
      <div id='NAVBAR' className=''>
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
          <div id='HAMBURGER_MENU' onClick={this.toggleMenuVisibility}>
            <span className='menu-part'></span>
            <span className='menu-part'></span>
            <span className='menu-part'></span>
          </div>
        </section>
      </div>
    );
  }
}

export default Nav;
