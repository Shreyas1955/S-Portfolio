import React from 'react';

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mb-0 h1" href="#welcome">Shreyas-Portfolio</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#about">About me <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
