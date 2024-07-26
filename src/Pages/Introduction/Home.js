import React from 'react'
import './Introduction.css'
export default function Home() {
  return (
    <div id='HOME' className=''>
      <section>
        <div>
          <section className=''>
            <header className='bebas-neue-regular self-end'>EDDY SEED</header>
          </section>
          <section className=''>
            <header className=' monster text-lg'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</header>
          </section>
        </div>
      </section>
      <section>
        <div className="">
          <a><i class="fa-brands fa-discord"></i></a>
          <a><i class="fa-brands fa-github-alt"></i></a>
          <a><i class="fa-brands fa-stack-overflow"></i></a>
        </div>
        <div className="">
          <button>SEE AHEAD</button>
        </div>
      </section>
    </div>
  )
}
