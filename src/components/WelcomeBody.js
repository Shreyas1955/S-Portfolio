import React , { useEffect }from 'react'
import { ReactTyped } from "react-typed";

import img1 from '/Reacttt/portfolio/src/images/img1.png'

function WelcomeBody() {

    useEffect(() => {
        const handleScroll = () => {
          const welcomeSection = document.querySelector('.welcome-body');
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > 100) {  
            welcomeSection.classList.add('scrolled');
          } else {
            welcomeSection.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    




  return (
    <>
    
    <div className="welcome-body" id='welcome'>
    <img src={img1} className="rounded float-right" alt="Welcome" id='img1' />
    <div className="welcome-text">
      <h1>
        Hi <span role="img" aria-label="waving hand">👋</span>, <br /> Shreyas this side
      </h1>

      { <h2 className="changing-text">
        <ReactTyped
          strings={[
            'Software Engineer',
            'Web Developer',
            'JavaScript Proficient',
            'React Enthusiast',
            'Problem Solver',
            'Tech Enthusiast',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        </h2>
        }
        
    </div>
    <div id="introduction">
        <p>
          I am a passionate Software Engineer with a strong focus on web development. With a solid foundation in
          JavaScript, React, and SQL, I love turning complex problems into simple, beautiful, and intuitive designs.
          My journey in tech is fueled by a desire to create impactful solutions that make people's lives easier.
          Let's build something amazing together!
        </p>
      </div>
  </div>

  </>
  )
}

export default WelcomeBody
