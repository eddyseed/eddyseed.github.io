import React, { useEffect, useState } from 'react'
import './Display.css'
const USERNAME = "k_rish4bh"
const GITHUB = "dotslashchiron"
let date = new Date()
const BIRTH_YEAR = 2007
let this_year = date.getFullYear()
let age = this_year - BIRTH_YEAR
const PROFILE_PIC = `https://avatars.githubusercontent.com/u/89150509?v=4`
export default function Display() {
    
    return (
        <div className='h-full' id='display-main'>
            <div>
                <section id='pfp-box'>
                    <main></main>
                </section>
            </div>
            <div>
                <section className='h-full main-text text-4xl'>
                    @{USERNAME}
                </section>
                <section>
                    <div className=''>
                        <span className='text-lg font-light monster m'>Hi I'm Rishabh aka Han Laurens, you can see me as a {age} year old web developer. From a very early age, computer and technical stuff used to excite me. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem dolor explicabo consectetur. Eius fugit veritatis quod sit.</span>
                        <section className='m'>
                            <div className='flex space-x-7'>
                                <div className="media-sphere"><i class="fa-brands fa-github"></i><span>@{GITHUB}</span></div>
                                <div className="media-sphere"><i class="fa-brands fa-instagram"></i><span>@{USERNAME}</span></div>
                                <div className="media-sphere"><i class="fa-brands fa-discord"></i><span>@{GITHUB}</span></div>
                            </div>
                        </section>
                    </div>
                    <section className='m'>
                        <div>
                            <button>READ MORE</button>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
