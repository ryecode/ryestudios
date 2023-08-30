import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../../components/heroBanner/Hero";
import "./Contact.styles.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Contact = () => {
  const { userName } = useContext(AppContext);

  return (
    <motion.div
      class="bodyContact"
      initial={{ scale: 0, transition: { duration: 1, delay: 0 } }}
      animate={{ scale: 1, transition: { duration: 0.75, delay: 1.5 } }}
      exit={{ scale: 0, transition: { duration: 0.75, delay: 0.75 } }}
    >
      <div>
        <motion.p
          exit={{
            x: "100vw",
            scale: "0",
            transition: {
              type: "spring",
              bounce: "0.5",
              duration: 1,
              delay: 0,
            },
          }}
        >
          <Hero />
        </motion.p>
        <div id="rowDaw">
          <div class="col-sm-6 mb-3 mb-sm-0" id="tilter">
            <motion.div
              class="tilt-box-wrap"
              exit={{ opacity: 0, transition: { duration: 0.75, delay: 0.25 } }}
            >
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <div class="tilt-box">
                <img
                  src="https://ryecode.github.io/portfolio/ImageBank/callingCardBG.jpg"
                  alt="resume"
                  width="100%"
                  height="100%"
                ></img>
                <div>
                  <img
                    className="callingCardImage"
                    src="https://ryecode.github.io/portfolio/ImageBank/RyeFormal3.png"
                    alt="Profile"
                    width={"5%"}
                  />
                  <h1 className="callingCardName">Ryan Corral</h1>
                  <p id="job">Full-Stack Web Developer</p>
                  <p id="contactDetails">
                    <ul>LinkedIn: www.linkedin.com/in/rye-corral</ul>
                    <ul>E-mail: mr.ryan.corral@gmail.com</ul>
                    <ul>Contact Number: +63-917-921-9988</ul>
                    <ul>
                      Social Media:
                      <br /> https://www.facebook.com/ryekoralzkie
                    </ul>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="download"
              initial={{
                y: "-100vh",
                opacity: "0",
                transition: { duration: 0, delay: 0 },
              }}
              animate={{
                y: "0%",
                opacity: "1",
                transition: {
                  type: "spring",
                  bounce: "0.65",
                  duration: 1.25,
                  delay: 7,
                },
              }}
              exit={{
                x: "-100vw",
                scale: "0",
                transition: {
                  type: "spring",
                  bounce: "0.5",
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
              Download Calling card&nbsp;
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/Ryan_Corral_WebDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textShadow: "none", color: "hsl(112, 100%, 50%)" }}
              >
                <b>here</b>
              </a>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
