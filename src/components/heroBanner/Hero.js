import React from "react";
import "./Hero.styles.css";

export const Hero = () => {
  return (
    <div class="hero-image">
      <img
        class="hero-bg"
        src="https://ryecode.github.io/portfolio/ImageBank/heroBG.jpg"
        alt="Hero BG"
      />
      <div class="hero-text">
        <h1 class="hero-title">
          <b>I'am Ryan Corral</b>
        </h1>
        <p class="subtitle ">And I'm a Full Stack Web Developer</p>
        <button class="neon-button">
          <a
            id="resumeBtn"
            href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIRE ME
          </a>
        </button>
      </div>
    </div>
  );
};
