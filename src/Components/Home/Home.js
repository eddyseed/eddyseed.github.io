import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <section className='text-white'>
          <span className="flex justify-center items-end text-5xl playfair-fs" id='home_name_prefix'>Hey there, it's</span>
          <span className='flex justify-center items-center text-9xl playfair-fs' id='home_name'><span className='text-[#ba160c] playfair-fs'>RISHABH</span>&nbsp;JAIN</span>
        </section>
        <section className='grid grid-rows-2'>
          <div className="text-white flex items-end mb-4 justify-center space-x-7 text-3xl">
            <a href="https://open.spotify.com/user/312bmxs2xmmeq4ql3pahxrhgkuxe" target='_blank' rel='noreferrer'><i className="fa-brands fa-spotify"></i></a>
            <a href="https://www.instagram.com/coffee_converters/" target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCdNKU0ld__5DD_zO6L1ongw" target='_blank' rel='noreferrer'><i className="fa-brands fa-youtube"></i></a>
            <a href="https://discord.gg/YWGy27S6uj" target='_blank' rel='noreferrer'><i className="fa-brands fa-discord" ></i></a>
            <a href="https://twitter.com/rishabhjms" target='_blank' rel='noreferrer'><i className="fa-brands fa-twitter" ></i></a>
          </div>
          <div className="flex items-center justify-center mb-2">
            <a href="#about"><button className='text-white bg-[#ba160c] font-semibold px-4 py-3 rounded-lg'>READ MORE</button></a>
          </div>
        </section>
      </div>
    )
  }
}
