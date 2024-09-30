import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'; 

function ContactMe() {
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("shreyasmhatre29@gmail.com");
        alert("Email copied to clipboard!");
      };
  return (
    <div className="contact-section" id='contact'>
      <h2 className="section-title">Resume & Social Links</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="resume-link">
            <a href="https://drive.google.com/file/d/1QGHMvB63fgKJC989Kg0fhqRoGTTwpn2K/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-download">
              <FaFileDownload className="icon" /> Download My Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Shreyas1955" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shreyasm29/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <button onClick={copyEmailToClipboard} className="copy-email">
              <FaEnvelope className="icon" /> Copy Email to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
