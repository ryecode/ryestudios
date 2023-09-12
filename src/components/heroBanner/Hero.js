import React from "react";
import "./Hero.styles.css";

export const Hero = () => {
  return (
    <>
        <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero-title">
          <b>I'am Ryan Corral&nbsp;</b>
        </h1>
        <p className="subtitle ">And I'm a Full Stack Web Developer</p>

          <a
            id="resumeBtn"
            href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
                    <button className="neon-button">
            HIRE ME
            </button>
          </a>

      </div>
    </div>
    </>

  );
};
