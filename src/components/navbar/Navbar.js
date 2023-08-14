import React from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <nav className="top-nav fixed-top bg-body-tertiary">
          <div
            className="container-fluid"
            style={{
              paddingTop: "15px",
              paddingBottom: "5px",
              width: "80%",
              backgroundColor: "transparent",
            }}
          >
            <a
              href="https://ryecode.github.io/portfolio/home"
              style={{ textDecoration: "none" }}
            >
              <h1 class="animate-charcter">
                <img
                  className="RyeLogo"
                  src="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.png"
                  alt="RYE Logo"
                  height="15%"
                  width="15%"
                />{" "}
                RYE STUDIOS
              </h1>
            </a>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" for="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li className="nav-item neon-button1">
              <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item neon-button1">
              <Link className="nav-link" to="/profile"> My Profile </Link>
            </li>
            <li className="nav-item neon-button1">
              <Link className="nav-link" to="/project"> My Projects </Link>
            </li>
            <li className="nav-item neon-button1">
              <Link className="nav-link" to="/contact"> Contact Me </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
