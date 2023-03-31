import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-primary rounded-lg shadow m-4 dark:bg-black">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm">© 2023 <a href="https://hanlaurens.github.io/" className="hover:underline">Rishabh and Han</a>. Habibi
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="https://discord.gg/YWGy27S6uj" className="mr-4 hover:underline md:mr-6" target='_blank' rel='noreferrer'>Join Server</a>
              </li>
              <li>
                <a href="https://github.com/hanlaurens/hanlaurens.github.io" className="mr-4 hover:underline md:mr-6" target='_blank' rel='noreferrer'>Licensing</a>
              </li>
              <li>
                <a href="mailto:rishabhjms99@gmail.com" className="hover:underline" target='_blank' rel='noreferrer'>Contact</a>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    )
  }
}
