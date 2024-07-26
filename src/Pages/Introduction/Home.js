import React from 'react'
import './Introduction.css'
export default function Home() {
  return (
    <div id='HOME' className=''>
      <section>
        <div>
          <span>
            <header className='m bebas-neue-regular text-9xl'>EDDY SEED</header>
          </span>
          <span className='m'>
            <header className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</header>
          </span>
        </div>
      </section>
      <section>
        <div className="">
          <a>A</a>
          <a>B</a>
          <a>C</a>
        </div>
        <div className="">
          <button>SEE AHEAD</button>
        </div>
      </section>
    </div>
  )
}
