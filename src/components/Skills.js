import React from 'react'
import { useEffect } from 'react';
import javascript from "/Reacttt/portfolio/src/images/javascript.svg";
import html from "/Reacttt/portfolio/src/images/html-5.svg";
import css from "/Reacttt/portfolio/src/images/css-3.svg";
import sql from "/Reacttt/portfolio/src/images/mysql-icon.svg";
import node from "/Reacttt/portfolio/src/images/nodejs-icon.svg";
import python from "/Reacttt/portfolio/src/images/python.svg";
import react from "/Reacttt/portfolio/src/images/react-query-icon.svg";


function Skills() {

  return (
    <div>
      <div className="about-me-section" id='skills'>
        <h2 className="section-title">Proficient in</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={html} alt="HTML" className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src={css} alt="CSS" className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src={javascript} alt="JavaScript" className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={sql} alt="SQL" className="skill-icon" />
            <p>SQL</p>
          </div>
          <div className="skill-item">
            <img src={react} alt="ReactJS" className="skill-icon" />
            <p>ReactJS</p>
          </div>
          <div className="skill-item">
            <img src={node} alt="NodeJS" className="skill-icon" />
            <p>NodeJS</p>
          </div>
          <div className="skill-item">
            <img src={python} alt="Python" className="skill-icon" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
