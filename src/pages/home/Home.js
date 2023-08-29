import React from "react";
import "./Home.styles.css";
import videoBG from "../../assets/videoBG.mp4";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";
import { ChangeUserName } from "../../components/ChangeUserName";
import "../../components/Modal.styles.css";
import "../../global.css";

export const Home = () => {
  const { userName } = useContext(AppContext);

  return (
    <motion.div
      className="overlay"
      initial={{ scale: 0, transition: { duration: 1, delay: 0 } }}
      animate={{ scale: 1, transition: { duration: 0.75, delay: 1.5 } }}
      exit={{ scale: 0, transition: { duration: 0.5, delay: 0.75 } }}
    >
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline
        fetchpriority={"high"}
        poster="https://ryecode.github.io/portfolio/ImageBank/loading.png"
      />

      <div className="content">
        <motion.div class="hero-image" id="heroHome"
          exit={{ x: "-100vw", scale:'0', transition: { duration: 0.75, delay: 0 } }}
        >
          <div class="hero-text">
            <h1 class="hero-title">
              <b>I'am Ryan Corral</b>
            </h1>
            <p class="subtitle">And I'm a Full Stack Web Developer</p>
            <button class="neon-button">
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
                id="resumeBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                HIRE ME
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div id="greet"
              initial={{ y: "-100vh", opacity:'0', transition: { duration: 1, delay: 0 } }}
              animate={{ y: "0%", opacity:'1', transition: {type:'spring', bounce:'0.65', duration: 1.25, delay: 6.3 } }}
              exit={{ y: "-100vh", scale:'0', transition: { duration: 0.75, delay: 0 } }}
        >          
            WELCOME{""}{" "}
            <span
              className="gradientUser"
              style={{ textTransform: "uppercase" }}
            >
              {userName}
            </span>
            <br />
            To Rye Zone          
        </motion.div>
        <ChangeUserName />
      </div>
    </motion.div>
  );
};
