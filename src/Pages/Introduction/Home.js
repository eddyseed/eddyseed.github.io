import React from 'react';
import './Introduction.css';
import { LINKS, TEXT } from './HomeConstants';

const Home = () => (
  <div id="HOME">
    <section>
      <div>
        <section>
          <header className="expletus-sans self-end">{TEXT.headerTitle}</header>
        </section>
        <section>
          <header className="self-start monster text-lg">
            {TEXT.description}
          </header>
        </section>
      </div>
    </section>
    <section>
      <div>
        <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github-alt"></i>
        </a>
        <a href={LINKS.stackOverflow} target="_blank" rel="noopener noreferrer">
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

export default Home;
