import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Jahangir Alam.</span>
        </h1>
        <p className="h-sub-text">
          A Computer science graduate who is seeking to find the opportunity
          to work in a fun and challenging working environment that will
          encourage him to improve and learn new and necessary skills as well as
          be motivated by the company to do his best for the sake of helping
          himself and the company advancement in the software engineering
          industry.
        </p>
        <div className="icons">
          <Link
            to="https://www.facebook.com/mdjahangiralamuits"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="https://github.com/droidjahangir" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="https://jahangir-devs.medium.com/" className="icon-holder">
            <FontAwesomeIcon icon={faMedium} className="icon med" />
          </Link>
          <Link to="https://www.linkedin.com/in/jahangir-alam-90a44a143/" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
