import React from "react";
import { ReactTyped } from "react-typed";


function AboutMe() {
  return (
    <>
     
      <div className="container" id="about">
        { <h2 className="changing-text">
        <ReactTyped
          strings={[
           'About me'
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        </h2>
        }
        <p>
          I am Shreyas, a passionate Software Engineer currently pursuing an MSc
          in Computer Science at the University of Greenwich, London. With a
          solid background in web development and hands-on experience as a MERN
          stack developer, I have honed my skills in building scalable and
          efficient web applications. My technical expertise is complemented by
          strong problem-solving abilities and a drive to deliver impactful
          solutions.
        </p>
        <p>
          My journey in tech is marked by a deep curiosity and commitment to
          excellence. From developing full-stack projects with tight deadlines
          to optimizing processes that improve workflow efficiency, I thrive in
          dynamic environments where innovation is key. I am now eager to
          leverage my skills in software development or data analysis roles,
          contributing to projects that make a difference.
        </p>
      </div>
      
    </>
  );
}

export default AboutMe;
