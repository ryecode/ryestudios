import React from "react";
import "./Navbar.styles.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div>
        <nav className="top-nav fixed-top bg-body-tertiary">
          <div
            className="container-fluid"
            style={{
              paddingTop: "1em",
              paddingBottom: "0",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <a
              href="https://ryestudios.vercel.app/"
              style={{ textDecoration: "none" }}
            >
              <h1 class="animate-charcter">
                <img
                  className="RyeLogo"
                  src="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.png"
                  alt="RYE Logo"
                  height="12%"
                  width="12%"
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
              <NavLink className="nav-link" to="/"> Home </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink  className="nav-link" to="/profile"> Profile </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink  className="nav-link" to="/project"> Projects </NavLink>
            </li>
            <li className="nav-item neon-button1">
              <NavLink  className="nav-link" to="/contact"> Contact </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
