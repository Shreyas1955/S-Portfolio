import React from 'react'

function Projects() {
    const projects = [
      {
        title: 'Employee Management System -CRUD',
        image: require('/Reacttt/portfolio/src/images/project8.png'),
        techStack: 'React, Javascript, Firebase, SQL, ExpressJS',
        description:
          'Admin side panel for managing employee data via CRUD operations',
        githubLink: 'https://github.com/Shreyas1955/Employee-mgmt-/tree/main',
        liveLink: 'https://employee-mgmt.onrender.com/Login'
      },  
      {
        title: 'React-Redux Shopping Cart',
        image: require('/Reacttt/portfolio/src/images/project9.png'),
        techStack: 'React, Redux, Javascript, HTML, CSS',
        description:
          'Shopping cart app using react and redux for global state management',
        githubLink: 'https://github.com/Shreyas1955/React-redux-cart',
        liveLink: 'https://react-redux-cart029.netlify.app/'
      },  
      
      {
          title: 'Digital Clock',
          image: require('/Reacttt/portfolio/src/images/Project1.png'),
          techStack: 'React, Javascript, HTML, CSS3',
          description:
            'A digital clock with features like worldclock, stopwatch, alarm and timer',
          githubLink: 'https://github.com/Shreyas1955/DigiClock',
          liveLink: 'https://digital-clock029.netlify.app',
        },
        
        {
          title: 'Weather App',
          image: require('/Reacttt/portfolio/src/images/project2.png'),
          techStack: 'React, Javascript, API, HTML, CSS3',
          description:
            'A Weather app which shows weather real time forecasting of any city',
          githubLink: 'https://github.com/Shreyas1955/weatherApp',
          liveLink: 'https://weatherapp029.netlify.app',
        },
        {
          title: 'React basic calculator',
          image: require('/Reacttt/portfolio/src/images/project4.png'),
          techStack: 'React, ExpressJS, Javascript, HTML, CSS3',
          description:
            'Basic calculator that performs arithmetic calculations with input validations',
          githubLink: 'https://github.com/Shreyas1955/React-calculator',
          liveLink: 'https://react-calculator029.netlify.app/',
        },
      
        {
          title: 'Troll checker (Gen AI)',
          image: require('/Reacttt/portfolio/src/images/project3.png'),
          techStack: 'Python, ML, Classification, GenAI',
          description:
            'Detects hatespeech & converts into positive comment on social media',
          githubLink: 'https://github.com/Shreyas1955/Troll-checker-for-social-media',
          liveLink: '#',
        },
       
      ];


  return (
    <div>
      <div className="projects-section" id='projects'>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.techStack}</p>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Projects
