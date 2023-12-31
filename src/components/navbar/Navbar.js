import React from "react";
import "./Navbar.styles.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <nav className="top-nav fixed-top">
          <div
            className="container-fluid"
            style={{
              paddingTop: "1em",
              paddingBottom: "0",
              width: "fitContent",
              backgroundColor: "transparent",
            }}
          >

              <div className="animate-charcter">
              <a
              href="https://ryestudios.vercel.app/"
              style={{ textDecoration: "none"}}
            >
                <img
                  className="RyeLogo"
                  src="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.png"
                  alt="RYE Logo"
                  height="12%"
                  width="12%"
                />
                            </a>{" "}
                RYE STUDIOS
              </div>

          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li className="nav-item neon-button1">
              <NavLink className="nav-link" to="/">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink className="nav-link" to="/profile">
                {" "}
                Profile{" "}
              </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink className="nav-link" to="/project">
                {" "}
                Projects{" "}
              </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink className="nav-link" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
