import React, { Component } from 'react'
import './About.css'
export default class About extends Component {
  render() {
    return (
      <div id='about' className='grid grid-flow-row'>
        <section className='flex items-end justify-center'>
          <span className="text-white text-xl tracking-wide">"It is not just four wheels and engines, it's home...."</span>
        </section>
        <section className='grid grid-cols-2'>
          <section className="flex items-center justify-center">
            <img id='about_pfp' src="https://avatars.githubusercontent.com/u/89150509?s=400&u=e4daac2e44c70ba99eb649962c636bf1e37c83b8&v=4" alt="Han" className='rounded-full' />
          </section>
          <section className='flex items-center'>
            <p className='text-white text-xl pr-12 leading-8'>
              Hi I'm <span className='text-primary'>Rishabh aka Han Laurens</span>, you can see me as a <span className="text-primary"> 16 year old web developer.</span> From a very early age, computer and technical stuff used to excite me.<br/><br/> Guess what! I've been into programming since <span className="text-primary">2020</span> (the f* lockdown period) i.e like <span className="text-primary">3.9 Years. </span>
              For me my aim for getting better at my passion requires me to stop making silly codes and reuse my existing ones. <br/>Still I've a lot of things on my checklist to accomplish within this year.
              <br/><br/>I use <span className="text-primary">DuckDuckGo </span>btw sometimes when I want privacy....
            </p>
          </section>
        </section>
      </div>
    )
  }
}
