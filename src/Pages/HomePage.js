import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Jahangir Alam.</span>
        </h1>
        <p className="h-sub-text">
          A Computer science graduate who is seeking to find the opportunity to
          work in a fun and challenging working environment that will encourage
          him to improve and learn new and necessary skills as well as be
          motivated by the company to do his best for the sake of helping
          himself and the company advancement in the software engineering
          industry.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/mdjahangiralamuits"
            className="icon-holder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            href="https://github.com/droidjahangir"
            className="icon-holder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://jahangir-devs.medium.com/"
            className="icon-holder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} className="icon med" />
          </a>
          <a
            href="https://www.linkedin.com/in/jahangir-alam-90a44a143/"
            className="icon-holder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a
            href="https://www.hackerrank.com/jahangir_devs?hr_r=1"
            className="icon-holder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHackerrank} className="icon hr" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
