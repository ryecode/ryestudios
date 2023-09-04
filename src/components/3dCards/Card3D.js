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
          <motion.div
            className="folder"
            initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
            animate={{
              y: "0%",
              opacity: "1",
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 3.4,
              },
            }}
            exit={{
              x: "-200%",
              scale: "0",
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 0.5,
              },
            }}
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
                  delay: 3.8,
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
                    This is version 2.0 of my portfolio. I migrated it to
                    React CRA and used new techniques I recently learned, like Framer Motion. I also implemented some React hooks for some interaction with the user.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, Framer Motion, CSS, Javascript, Vercel, and Bootstraps.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="folder"
            initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
            animate={{
              y: "0%",
              opacity: "1",
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 3.2,
              },
            }}
            exit={{
              y: "-200%",
              x: "-200%",
              scale: 0,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 0.5,
              },
            }}
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
                  delay: 4,
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
                    This was my very first mini-project I created during our KodeGo Bootcamp. It's a very simple single-page website that I built from scratch, aiming to showcase my current animation skills using old-school CSS at the time.
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

          <motion.div
            className="folder"
            initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
            animate={{
              y: "0%",
              opacity: "1",
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 3,
              },
            }}
            exit={{
              y: "-200%",
              scale: 0,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 0.5,
              },
            }}
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
                  delay: 4.2,
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
                    This is a collaborative project by Team IceCode. For this project, I created the whole backend, the database implementation, and the deployment of the website.
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, CSS, Javascript, Node, Express, MongoDB, Postman,
                    Mongoose, Bootstraps, and Vercel.
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="folder"
            initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
            animate={{
              y: "0%",
              opacity: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 2.8,
              },
            }}
              exit={{
                y: "-200%",
                x: "200%",
                scale: 0,
                transition: {
                  type: "spring",
                  bounce: "0.5",
                  duration: 1,
                  delay: 0.5,
                },
              }}
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
                  delay: 4.4,
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
                    This is a mini-game I created for my KodeGo technical exam. I really enjoyed the challenge of figuring out the correct logic for this one. And I'm planning to level up this game with more CSS effects, animations, and functionality.
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

          <motion.div
            className="folder"
            initial={{ y: "-200%", transition: { duration: 0, delay: 0 } }}
            animate={{
              y: "0%",
              opacity: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 2.6,
              },
            }}
            exit={{
              x: "200%",
              scale: 0,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 1,
                delay: 0.5,
              },
            }}
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
                Website under reconstruction!
              </a>
            </div>
            <div className="card-fg">
              <img
                className="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.png"
                alt="website screenshot"
                style={{width:'40%'}} 
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
                  delay: 4.6,
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
                    cvhack.com
                    <br />( Personal Project )
                  </p>
                  <p className="detail-description">
                    <span style={{ color: "blue" }}>Description:</span>
                    <br />
                    This was a mini-project for the KodeGo bootcamp. Unfortunately, its Github was ruined, and I'm currently reconstructing it. Stay tuned for the relaunch of this website soon!
                    <br />
                    <br />
                    <span style={{ color: "blue" }}>Tools Used:</span>
                    <br />
                    React, Node.js, MongoDB, Framer Motion, Javascript, CSS, and Vercel.
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
