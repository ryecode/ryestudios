import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../../components/heroBanner/Hero";

export const Contact = () => {
  return (
    <motion.div
      class="galaxyBackground"
      style={{ marginTop: "2%" }}
      initial={{ x: "-100%", transition: { duration: 1, delay: 0 } }}
      animate={{ x: "0%", transition: { duration: 1, delay: 1 } }}
      exit={{ x: "110%", transition: { duration: 1, delay: 0 } }}
    >
      <div>
        <div class="row" id="rowDaw">
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
                  width="75%"
                  height="100%"
                ></img>
              </div>
            </div>

            <p style={{ margin: "-4em 0 3em -12em" }}>
              Download the PDF file {""}
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div>
        <Hero />
      </div>
    </motion.div>
  );
};
