import React, { useState } from "react";
import "./Card3D.style.css";
import "../../global.css";
import { motion } from "framer-motion";

const Card3D = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);

  return (
    <>
      <div>
        <div className="projects">

          <motion.div className="folder"
      initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
      animate={{ y: "0%", opacity: '1', transition: { type:"spring", bounce: "0.5", duration: 1, delay: 3.2 } }}
      exit={{ x:"-200%", scale: "0", transition: { type:"spring", bounce: "0.5", duration: 1, delay: 0.5 } }}
          >
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryestudios.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to visit website
              </a>
            </div>
            <div className="card-fg">
              <img
                className="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyeStudiosSS.jpeg"
                alt="website screenshot"
              />
            </div>
            <motion.button
              className="detailsBtn"
              style={{ marginTop: "22em" }}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 0.75,
                  delay: 3.6,
                },
              }}
              exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
              onClick={() => {
                setShowDetails1(!showDetails1);
              }}
            >
              DETAILS
            </motion.button>
            {showDetails1 === true && (
              <div className="detailsModal">
                <div className="detail-container">
                  <p className="detail-header">
                    My Portfolio
                    <br /> ( Personal Project )
                  </p>
                  <p className="detail-description">
                    <span style={{ color: "blue" }}>Description:</span>
                    <br />
                    This is the 2nd version of my portfolio. I migrated it to
                    React and implemented new styles and techniques.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, Framer Motion, CSS, Javascript, and Bootstraps.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div className="folder"
                initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
                animate={{ y: "0%", opacity: '1', transition: { type:"spring", bounce: "0.5", duration: 1, delay: 3 } }}
                exit={{ y:'-200%', x: "-200%", scale: 0, transition: { type:"spring", bounce: "0.5", duration: 1, delay: 0.5 } }}
          >
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryecode.github.io/portfolio/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to visit website
              </a>
            </div>
            <div className="card-fg">
              <img
                className="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyePortfolioSS.jpeg"
                alt="website screenshot"
              />
            </div>
            <motion.button
              className="detailsBtn"
              style={{ marginTop: "22em" }}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 0.75,
                  delay: 3.8,
                },
              }}
              exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
              onClick={() => {
                setShowDetails2(!showDetails2);
              }}
            >
              DETAILS
            </motion.button>
            {showDetails2 === true && (
              <div className="detailsModal">
                <div className="detail-container">
                  <p className="detail-header">
                    Personal Portfolio
                    <br />( Mini Project )
                  </p>
                  <p className="detail-description">
                    <span style={{ color: "blue" }}>Description:</span>
                    <br />
                    This was my first mini-project during our KodeGo bootcamp.
                    It's a single-page website that I built from scratch.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    HTML5, CSS3, Bootstraps v5.3
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div className="folder"
                          initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
                          animate={{ y: "0%", opacity: '1', transition: { type:"spring", bounce: "0.5", duration: 1, delay: 2.8 } }}
                          exit={{ y:'-200%', x:"200%", scale: 0, transition: { type:"spring", bounce: "0.5", duration: 1, delay: 0.5 } }}
          >
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://etiket-com-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to visit website
              </a>
            </div>
            <div className="card-fg">
              <img
                className="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/EtiketSS.jpeg"
                alt="website screenshot"
              />
            </div>
            <motion.button
              className="detailsBtn"
              style={{ marginTop: "22em" }}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 0.75,
                  delay: 4,
                },
              }}
              exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
              onClick={() => {
                setShowDetails3(!showDetails3);
              }}
            >
              DETAILS
            </motion.button>
            {showDetails3 === true && (
              <div className="detailsModal">
                <div className="detail-container">
                  <p className="detail-header">
                    Etiket.com
                    <br />( Capstone Project )
                  </p>
                  <div className="detail-description">
                    <span style={{ color: "blue" }}>Description:</span>
                    <br />
                    This is a collaboration project by Team IceCode. For this
                    project, I created the whole backend, the database
                    implementation, and the deployment of the website.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, CSS, Javascript, Bootstraps, Node, Express, MongoDB,
                    Mongoose, Vercel
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div className="folder"
                          initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
                          animate={{ y: "0%", opacity: 1, transition: { type:"spring", bounce: "0.5", duration: 1, delay: 2.6 } }}
                          exit={{ x: "200%", scale: 0, transition: { type:"spring", bounce: "0.5", duration: 1, delay: 0.5 } }}
          >
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryetictactoe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to visit website
              </a>
            </div>
            <div className="card-fg">
              <img
                className="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyeTicTacToeSS.jpeg"
                alt="website screenshot"
              />
            </div>
            <motion.button
              className="detailsBtn"
              style={{ marginTop: "22em" }}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 0.75,
                  delay: 4.2,
                },
              }}
              exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
              onClick={() => {
                setShowDetails4(!showDetails4);
              }}
            >
              DETAILS
            </motion.button>
            {showDetails4 === true && (
              <div className="detailsModal">
                <div className="detail-container">
                  <p className="detail-header">
                    TicTacToe
                    <br />( Mini Game )
                  </p>
                  <p className="detail-description">
                    <span style={{ color: "blue" }}>Description:</span>
                    <br />
                    This is a minigame I created for my KodeGo technical exam.
                    And I'm planning to level up this game with more CSS
                    effects, animations, and functionality.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, Javascript, CSS, Vercel
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Card3D;
