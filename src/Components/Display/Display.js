import React, { useEffect, useState } from 'react'
import './Display.css'
const USERNAME = "eddy_seed"
const GITHUB = "eddyseed"
let date = new Date()
const BIRTH_YEAR = 2007
let this_year = date.getFullYear()
let age = this_year - BIRTH_YEAR
const PROFILE_PIC = `https://avatars.githubusercontent.com/u/89150509?v=4`
document.title = "RISHABH | EDDY"
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
                        <span className='text-lg font-light monster m'>Eddy Seed — the name I earned from my adventures in programming communities. With 4-5 years of experience coding in a blend of technologies, I’ve turned my passion for web development into a journey of constant learning and innovation. At 17, I’m driven by big ambitions, aiming to push boundaries and create digital experiences that leave a mark. Whether it’s building sleek websites or diving deep into new technologies, I’m always ready for the next challenge in the world of coding.</span>
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
