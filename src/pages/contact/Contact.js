import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../../components/heroBanner/Hero";
import "./Contact.styles.css";

export const Contact = () => {
  return (
    <motion.div
      class="bodyContact"
      initial={{ scale: 0, transition: { duration: 1, delay: 0 } }}
      animate={{ scale: 1, transition: { duration: 0.75, delay: 1.5 } }}
      exit={{ scale: 0, transition: { duration: 0.75, delay: 0.75 } }}
    >
      <div>
      <Hero />
        <div id="rowDaw">
          <div class="col-sm-6 mb-3 mb-sm-0" id="tilter">
            <div class="tilt-box-wrap">
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
                  src="https://ryecode.github.io/portfolio/ImageBank/resumeSS.jpeg"
                  alt="resume"
                  width="100%"
                  height="100%"
                ></img>
              </div>
            </div>

            <p
              style={{
                margin: '1em 0 3em 0',
                color: "white",
                textShadow: "1px 1px black",
              }}
            >
              Download Calling card {""}
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textShadow: "none" }}
              >
                <b>{""}here</b>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
