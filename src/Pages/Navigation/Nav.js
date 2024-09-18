import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { NAV_LINKS, SITE_HEADER } from './Linkage';

const Nav = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    const updateMenuVisibility = () => {
      const menu = document.getElementById("MENU");
      const navbar = document.getElementById("NAVBAR");

      if (window.innerWidth <= 768) {
        if (isMenuVisible) {
          menu.style.display = "flex";
          navbar.style.height = "60vh";
          navbar.style.gridTemplateRows = "1fr 5fr";
        } else {
          menu.style.display = "none";
          navbar.style.height = "10vh";
          navbar.style.gridTemplateRows = "1fr 0";
        }
      }
    };

    updateMenuVisibility();
    window.addEventListener('resize', updateMenuVisibility);

    return () => window.removeEventListener('resize', updateMenuVisibility);
  }, [isMenuVisible]);

  const toggleMenuVisibility = () => {
    setMenuVisibility(prev => !prev);
  };

  return (
    <div id='NAVBAR' className=''>
      <section className="nav-links" id='MENU'>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} className={link.text === 'HOME' ? 'active' : ''}>
            {link.text}
          </a>
        ))}
      </section>
     
    </div>
  );
};

export default Nav;
