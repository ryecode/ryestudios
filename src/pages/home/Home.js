import React from "react";
import "./Home.styles.css";
import glowingBG from "../../assets/glowingBG.mp4";
import { motion } from "framer-motion";
// import { useContext } from "react";
// import { AppContext } from "../../App";
import { ChangeUserName } from "../../components/ChangeUserName";
import "../../components/Modal.styles.css";
import "../../global.css";
// import CarouselFadeExample from '../../components/carousel/Carousel';

export const Home = () => {
  return (
    <motion.div
      className="overlay"
      initial={{ scale: 0, transition: { duration: 1, delay: 0 } }}
      animate={{ scale: 1, transition: { duration: 0.5, delay: 2 } }}
      exit={{ scale: 0, transition: { duration: 1, delay: 1 } }}
    >
      <video
        src={glowingBG}
        autoPlay
        loop
        muted
        playsInline
        fetchpriority={"high"}
        poster="https://ryecode.github.io/portfolio/ImageBank/loading.png"
      />

      <div className="content">
        <motion.div
          className="heroIMG"
          id="heroHome"
          exit={{
            x: "-100vw",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        >
          <div className="heroText">
            <h1 className="heroHeadline">
              <b>I'am Ryan Corral&nbsp;</b>
            </h1>
            <p className="jobTitle">And I'm a Full Stack Web Developer</p>

            <a
              href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hireButton">HIRE ME</button>
            </a>
          </div>
        </motion.div>
        <motion.div
          id="greet"
          initial={{
            y: "-100vh",
            transition: { delay: 0 },
          }}
          animate={{
            y: "0%",
            opacity: "1",
            transition: {
              type: "spring",
              bounce: "0.65",
              duration: 1,
              delay: 6.5,
            },
          }}
          exit={{
            y: "-100vh",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        >
          WELCOME to Rye Zone!
        </motion.div>
        <ChangeUserName />

        <motion.div
          className="blockRed"
          initial={{
            x: "-300%",
            y: "-40%",
            transition: { delay: 0 },
          }}
          animate={{
            x: "-255%",
            y: "-40%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 7.6,
            },
          }}
          exit={{
            y: "-300%",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        ></motion.div>
        <motion.div
          className="blockGreen"
          initial={{
            y: "-100%",
            x: "-94%",
            transition: { delay: 0 },
          }}
          animate={{
            y: "-20%",
            x: "-94%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 8,
            },
          }}
          exit={{
            y: "-100vh",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        ></motion.div>
        <motion.div
          className="blockBlue"
          initial={{
            y: "100%",
            x: "-30%",
            transition: { delay: 0 },
          }}
          animate={{
            y: "66%",
            x: "-30%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 8.4,
            },
          }}
          exit={{
            y: "100vh",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        ></motion.div>

        <motion.div
          className="blockPurple"
          initial={{
            y: "-100%",
            x: "70%",
            transition: { delay: 0 },
          }}
          animate={{
            y: "-41%",
            x: "70%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 8.8,
            },
          }}
          exit={{
            y: "-100vh",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        ></motion.div>

        <motion.div
          className="blockGold"
          initial={{
            x: "300%",
            y: "120%",
            transition: { delay: 0 },
          }}
          animate={{
            x: "162%",
            y: "120%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1,
              delay: 9.2,
            },
          }}
          exit={{
            x: "300%",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        ></motion.div>
        
        <motion.div
          className="branding"
          initial={{
            y: "-100%",
            x: "95%",
            transition: { delay: 0 },
          }}
          animate={{
            y: "10%",
            x: "95%",
            opacity: "1",
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.5,
              delay: 9.6,
            },
          }}
          exit={{
            y: "-100vh",
            scale: "0",
            transition: { duration: 1, delay: 0 },
          }}
        >
          <p>
          <img
                src="https://ryecode.github.io/portfolio/ImageBank/BestCodingSSnoBG.png"
                alt="resume"
                width="100%"
                height="100%"
              ></img>
          </p>
        </motion.div>

        <div className="carouselBox">
          <motion.div
            className="tilt-box-wrap"
            initial={{
              y: "-100vh",
              x: "-10%",
              transition: { duration: 0, delay: 0 },
            }}
            animate={{
              y: "0%",
              x: "-10%",
              opacity: "1",
              zIndex: "3",
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 6.3,
              },
            }}
            exit={{ scale: 0, transition: { duration: 1, delay: 0.25 } }}
            style={{ opacity: 0, width: "20em", height: "13em", margin: "0 0 0 -2em" }}
          >
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <div className="tilt-box">
              <img
                src="https://ryecode.github.io/portfolio/ImageBank/KodeGoCert.png"
                alt="resume"
                width="100%"
                height="100%"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
