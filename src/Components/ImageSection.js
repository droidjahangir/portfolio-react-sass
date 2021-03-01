import React from 'react';
import { Link } from 'react-router-dom';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Jahangir Alam</span>
        </h4>
        <p className="about-text">
          I have completed my bachelor degree in Computer Science from
          University of Information Technology & Sciences. I graduated with cgpa
          3.08 out of 4.00. I like to travel. I believe travelling gives you a
          new perspective to everything. You get to know a lot about the
          different cultures, the cuisines, their history, the language and all
          the small unique things every place has to offer.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Jahangir Alam</p>
            <p>: 26</p>
            <p>: Bangladeshi</p>
            <p>: Bengali, Hindi and English</p>
            <p>: Pingna, Jamalpur, Dhaka, Bangladesh</p>
            <p>: Bangladesh</p>
          </div>
        </div>

        {/* file need to locate in public directory */}
        <Link
          to="/cv/resume.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download Cv
        </Link>
        {/* <button className="btn">Download Cv</button> */}
        {/* <a className="btn">Download Cv</a> */}
      </div>
    </div>
  );
}

export default ImageSection;
