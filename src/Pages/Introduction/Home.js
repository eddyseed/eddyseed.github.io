import React from 'react';
import './Introduction.css';

export default function Home() {
  return (
    <div id='HOME'>
      <section>
        <div>
          <section>
            <header className='expletus-sans self-end'>EDDY SEED</header>
          </section>
          <section>
            <header className='self-start monster text-lg'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
            </header>
          </section>
        </div>
      </section>
      <section>
        <div>
          <a href="https://discord.gg/YWGy27S6uj" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://github.com/eddyseed" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a href="https://stackoverflow.com/users/21011196/rishabh-jain" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-stack-overflow"></i>
          </a>
        </div>
        <div>
          <button>
            <span>SEE AHEAD</span>
          </button>
        </div>
      </section>
    </div>
  );
}
