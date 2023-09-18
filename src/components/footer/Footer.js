import React from "react";
import "./Footer.styles.css";
import "../../global.css";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ y: "100%", transition: { duration: 0, delay: 0 } }}
      animate={{
        y: "0%",
        opacity: "1",
        transition: { type: "spring", bounce: "0.5", duration: 0.75, delay: 2 },
      }}
      exit={{ y: "100%", transition: { duration: 0.75, delay: 0 } }}
    >
      <button className="btn">
        <span className="words">© RYAN CORRAL 2023</span>
      </button>
      <div className="credit">
        Some background and images from&nbsp;
        <a
          href="https://www.freepik.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freepik.com
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://www.vecteezy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vecteezy.com
        </a>
      </div>
      <div
        className="sub"
        id="footerQuery"
        style={{ zIndex: 1, width: "100%", textAlign: "right", padding: "0" }}
      >
        <a href="tel:+639179219988">
          <img
            className="subscribe"
            src="https://ryecode.github.io/portfolio/ImageBank/phoneBtn.png"
            alt="phone icon"
            width="2.25%"
          />
        </a>
        <a href="mailto:mr.ryan.corral@gmail.com">
          <img
            className="subscribe"
            src="https://ryecode.github.io/portfolio/ImageBank/emailBtn.png"
            alt="email icon"
            width="2.25%"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rye-corral/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="subscribe"
            src="https://ryecode.github.io/portfolio/ImageBank/linkedinBtn.png"
            alt="linkedIn icon"
            width="2.25%"
          />
        </a>
        <a
          href="https://www.facebook.com/ryekoralzkie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="subscribe"
            src="https://ryecode.github.io/portfolio/ImageBank/msngrBtn.png"
            alt="facebook icon"
            width="2.25%"
          />
        </a>
      </div>
    </motion.div>
  );
};
