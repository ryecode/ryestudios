import React from 'react'
import './Navbar.styles.css';

export const Navbar = () => {
  return (
    <>
<div >
  <nav className="top-nav fixed-top navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid" 
           style={{paddingLeft: '10px', 
                   paddingTop: '5px', 
                   paddingBottom: '5px',
                   width: '500px',
                   backgroundColor: "transparent"
           }}>
          <a href="https://ryecode.github.io/portfolio/home" style={{textDecoration:'none'}} >
            <img className="RyeLogo" 
              src="https://ryecode.github.io/portfolio/ImageBank/RYELogoBLackSphere.png" 
              alt="RYE Logo" 
              height="35px" 
              width="35px" /> 
              <span className='ryeStudios'>Rye Studios</span>
              </a>
        </div>
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' for="menu-toggle">
      <div className='menu-button'>
      </div>
          </label>
              <ul className="menu" >
                  <li className="nav-item neon-button1">
                    <a className="nav-link" href="#bookmark">Home</a>
                  </li>
                  <li className="nav-item neon-button1">
                    <a className="nav-link" href="#aboutMe">My Profile</a>
                  </li>
                  <li className="nav-item neon-button1">
                      <a className="nav-link" href="#myProjects">My Projects</a>
                    </li>
                  <li className="nav-item neon-button1">
                      <a class="nav-link" href="#contactMe">Contact Me</a>
                  </li>
              </ul>
  </nav>
</div>
</>
  )
}

