import React from "react";
import "./Home.styles.css";
import glowingBG from "../../assets/glowingBG.mp4";
import { motion } from "framer-motion";
// import { useContext } from "react";
// import { AppContext } from "../../App";
import { ChangeUserName } from "../../components/ChangeUserName";
import "../../components/Modal.styles.css";
import "../../global.css";

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
              <b>I'am Ryan Corral</b>
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
            opacity: "0",
            transition: { delay: 0 },
          }}
          animate={{
            y: "0%",
            opacity: "1",
            transition: {
              type: "spring",
              bounce: "0.65",
              duration: 1.25,
              delay: 6.3,
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

          <motion.div className="blockGreen"
                    initial={{
                      y: "-100%",
                      x: "-90%",
                      opacity: "0",
                      transition: { delay: 0 },
                    }}
                    animate={{
                      y: "-10%",
                      x: "-90%",
                      opacity: "1",
                      transition: {
                        type: "spring",
                        duration: 1.25,
                        delay: 8.2,
                      },
                    }}
                    exit={{
                      y: "-100vh",
                      scale: "0",
                      transition: { duration: 1, delay: 0 },
                    }}
          ></motion.div>
          <motion.div className="blockBlue"
                              initial={{
                                y: "100%",
                                x: "140%",
                                opacity: "0",
                                transition: { delay: 0 },
                              }}
                              animate={{
                                y: "40%",
                                x: "140%",
                                opacity: "1",
                                transition: {
                                  type: "spring",
                                  duration: 1.25,
                                  delay: 8.5,
                                },
                              }}
                              exit={{
                                y: "100vh",
                                scale: "0",
                                transition: { duration: 1, delay: 0 },
                              }}
          ></motion.div>
          <motion.div className="blockRed"
                              initial={{
                                x: "-300%",
                                y: "-175%",
                                opacity: "0",
                                transition: { delay: 0 },
                              }}
                              animate={{
                                x: "-245%",
                                y: "-175%",
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

      </div>
    </motion.div>
  );
};
