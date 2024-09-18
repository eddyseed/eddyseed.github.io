import React, { useEffect } from 'react';
import './App.css';
import Home from './Pages/Introduction/Home';
import Nav from './Pages/Navigation/Nav';
import Main from './Pages/Introduction/Main';
import About from './Pages/Gallery/About';
import Projects from './Pages/Gallery/Projects';
import Footer from './Pages/Navigation/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'Eddy Seed - Portfolio';
  }, []);

  return (
    <div id='canvas'>
      <div className='category-1'>
        <Nav />
        <Home />
      </div>
      <Main />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
