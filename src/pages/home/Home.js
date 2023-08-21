import React from "react";
import "./Home.styles.css";
import videoBG from "../../assets/videoBG.mp4";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";
import { ChangeUserName } from "../../components/ChangeUserName"
import '../../components/Modal.styles.css'

export const Home = () => {
  const { userName } = useContext(AppContext);

  return (
    <motion.div
      className="overlay"
      // initial={{height: "100%"}}
      // animate={{height: "100%"}}
      // exit={{y: "-100%", transition: {duration: 0.6, delay: 0.1} }}

      // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
      // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
      // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

      initial={{ scale: 0, transition: { duration: 2, delay: 1.02 } }}
      animate={{ scale: 1, transition: { duration: 1, delay: 0.2 } }}
      exit={{ scale: 0, transition: { duration: 1, delay: 0.2 } }}
    >
      {/* <div className="overlay"></div> */}
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
        <div class="hero-image" id="heroHome">
          {/* <img class="hero-bg"
       src="https://ryecode.github.io/portfolio/ImageBank/heroBG.jpg" 
       alt="Hero BG" /> */}
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
        </div>
        <div class="subtitle" id="greet">
        <h1 >
          WELCOME{""} <span style={{color:'#FFFB7D', textTransform: "uppercase"}}>{userName}</span>
         <br />To Rye Zone
         </h1>
        </div>
          <ChangeUserName />
      </div>
    </motion.div>
  );
};
