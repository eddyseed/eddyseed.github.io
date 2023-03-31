import React, { Component } from 'react'
import './Activity.css'
export default class Activity extends Component {
  render() {
    return (
      <div id='activity' className='grid space-y-8'>
        <section className="grid items-center px-24 space-y-8">
          <span className='text-white grid-rows-2 text-3xl text-extrabold self-end'>Activity Bar | Tener Vantage</span>
          <span className='text-white text-xl tracking-wide'>"Anything is possible when you have a path, a plan and a desire to take action...."</span>
        </section>
        <section className='space-y-8'>
          <section className="px-24" id='nodejs'>
            <div className='grid grid-rows-2 space-y-4 h-[10vh]'>
              <span className='text-primary px-2 text-xl'>Node JS</span>
              <section className='bg-[#ba150c7a] rounded-full'>
                <div className='bg-[#ba160c] h-full w-[5%] rounded-full'></div>
              </section>
            </div>
          </section>
          <section className="px-24" id='cpp'>
            <div className='grid grid-rows-2 space-y-4 h-[10vh]'>
              <span className='text-primary px-2 text-xl'>C++</span>
              <section className='bg-[#ba150c7a] rounded-full'>
                <div className='bg-[#ba160c] h-full w-[85%] rounded-full'></div>
              </section>
            </div>
          </section>
          <section className="px-24" id='mongodb'>
            <div className='grid grid-rows-2 space-y-4 h-[10vh]'>
              <span className='text-primary px-2 text-xl'>MongoDB</span>
              <section className='bg-[#ba150c7a] rounded-full'>
                <div className='bg-[#ba160c] h-full w-[20%] rounded-full'></div>
              </section>
            </div>
          </section>
          <section className="px-24" id='reactjs'>
            <div className='grid grid-rows-2 space-y-4 h-[10vh]'>
              <span className='text-primary px-2 text-xl'>React JS</span>
              <section className='bg-[#ba150c7a] rounded-full'>
                <div className='bg-[#ba160c] h-full w-[90%] rounded-full'></div>
              </section>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
