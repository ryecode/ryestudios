import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../../components/heroBanner/Hero";
import "./Contact.styles.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Contact = () => {
  const { userName } = useContext(AppContext);

  return (
    <>
        <motion.div
      className="bodyContact"
      initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
      animate={{ y: "0%", opacity: '1', transition: { type:"spring", bounce: "0.5", duration: 1, delay: 2 } }}
      exit={{ y: "100%", transition: { duration: 1, delay: 1 } }}
    >
      <div className="backdrop">
        <motion.div
          exit={{
            x: "100vw",
            scale: "0",
            transition: {
              type: "spring",
              duration: 1,
              delay: 0,
            },
          }}
        >
          <Hero />
        </motion.div>
        <div id="rowDaw">
          <div className="col-sm-6 mb-3 mb-sm-0" id="tilter">
            <motion.div
              className="tilt-box-wrap"
              exit={{ scale: 0, transition: { duration: 1, delay: 0.25 } }}
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
                  src="https://ryecode.github.io/portfolio/ImageBank/callingCardSim.jpeg"
                  alt="resume"
                  width="100%"
                  height="100%"
                ></img>
              </div>
            </motion.div>

          </div>
          
          <motion.div
              className="download"
              initial={{
                y: "-100vh",
                transition: { duration: 0, delay: 0 },
              }}
              animate={{
                y: "0%",
                opacity: "1",
                zIndex: "3",
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 2,
                  delay: 6.5,
                },
              }}
              exit={{
                x: "-100vw",
                scale: "0",
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0,
                },
              }}
            >
              <span
                className="gradientUser"
                style={{ textTransform: "uppercase" }}
              >
                {userName}&nbsp;
              </span>
              Download my Calling card&nbsp;
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_WebDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textShadow: "1px 1px black", textDecoration: "none", color: "hsl(63, 100%, 50%)" }}
              >
                <b>here</b>
              </a>
              .
            </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  );
};
