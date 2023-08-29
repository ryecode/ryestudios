import React, { useState } from "react";
import "./Profile.styles.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";

import { AccordionComponent } from "../../components/Accordion";

export const Profile = () => {
  const { userName } = useContext(AppContext);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [color1, setColor1] = useState("hsl(113, 100%, 86%)");
  const [color2, setColor2] = useState(0);
  const [color3, setColor3] = useState(0);
  const changeIndex1 = () => {
    setIndex1(1);
    setIndex2(0);
    setIndex3(0);
    setColor1("hsl(113, 100%, 86%)");
    setColor2("hsl(126, 65%, 62%)");
    setColor3("hsl(126, 65%, 62%)");
  };
  const changeIndex2 = () => {
    setIndex1(0);
    setIndex2(1);
    setIndex3(0);
    setColor1("hsl(126, 65%, 62%)");
    setColor2("hsl(113, 100%, 86%)");
    setColor3("hsl(126, 65%, 62%)");
  };
  const changeIndex3 = () => {
    setIndex1(0);
    setIndex2(0);
    setIndex3(1);
    setColor1("hsl(126, 65%, 62%)");
    setColor2("hsl(126, 65%, 62%)");
    setColor3("hsl(113, 100%, 86%)");
  };

  return (
    <>
      <motion.div
        className="profileBody"
        initial={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
        animate={{ opacity: 1, transition: { duration: 0.75, delay: 1.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.75, delay: 0.75 } }}
      >
        <div className="profileCard">
          <div id="profileTitle">
            <h1 id="title">
              <b>
                Hello{""}{" "}
                <span
                  className="gradientUser"
                  style={{ textTransform: "uppercase", textShadow: "none" }}
                >
                  {userName}
                </span>
                {""} !
              </b>
            </h1>
            <h1
              className="subtitle"
              id="title1"
              style={{
                color: "hsl(126, 65%, 62%)",
                textShadow: "2px 2px black",
              }}
            >
              <b>Allow me to introduce myself..</b>
            </h1>
            <ul className="toggleBtns">
              <li className="chapter1">
                <button onClick={changeIndex1} style={{ color: color1 }}>
                  Chapter I
                </button>
              </li>
              <li className="chapter2">
                <button onClick={changeIndex2} style={{ color: color2 }}>
                  Chapter II
                </button>
              </li>
              <li className="chapter3">
                <button onClick={changeIndex3} style={{ color: color3 }}>
                  Chapter III
                </button>
              </li>
            </ul>
          </div>

          <motion.div
            className="skills-container"
            id="pCardSkills"
            initial={{
              y: -150,
              x: 240,
              opacity: 0,
            }}
            animate={{
              y: 1,
              x: 240,
              opacity: 1,
              transition: {
                delay: 1.3,
                duration: 0.7,
              },
            }}
            exit={{
              y: -150,
              x: 240,
              opacity: 0,
              transition: {
                duration: 0.75,
              },
            }}
            style={{ zIndex: index3 }}
          >
            <h3 id="h3" className="gradienttext">
              Programming Skills
            </h3>
            <div>
              <ul className="skillButtons">
                <li>
                  <a
                    href="https://html.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>HTML5</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>JAVASCRIPT</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3.org/Style/CSS/Overview.en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>CSS3</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vitejs.dev/guide/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>REACT / VITE</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://greensock.com/gsap/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GSAP3</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.framer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>FRAMER MOTION</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodejs.org/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>NODE.js</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>MONGO DB</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>POSTMAN</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>EXPRESS.js</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GITHUB</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>FIGMA</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>BOOTSTRAPS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.classmethod.jp/articles/git-bash-commands/?fbclid=IwAR2RADTjXgRVwBcGMezHKd9KVBQGoGCxod5ehizfVY20H4Lqr_jxGEmYzQY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GITBASH</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VERCEL</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://ryecode.github.io/portfolio/ImageBank/TeamWork.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>TEAMWORK</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="details-container"
            id="pCardDetails"
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 240,
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.7,
              },
            }}
            exit={{
              x: 500,
              opacity: 0,
              transition: {
                duration: 0.75,
              },
            }}
            style={{ zIndex: index2 }}
          >
            <h3 id="h3" className="gradienttext">
              Profile Details
            </h3>
            <div className="accordionContainer">
              <AccordionComponent />
            </div>
          </motion.div>

          <motion.div
            className="header-container"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 240,
              opacity: 1,
              transition: {
                delay: 2.7,
                duration: 0.7,
              },
            }}
            exit={{
              x: -100,
              opacity: 0,
              transition: {
                duration: 0.75,
              },
            }}
            style={{ zIndex: index1 }}
          >
            <img
              className="profileImage"
              src="https://ryecode.github.io/portfolio/ImageBank/RyeFormal3.png"
              alt="Profile"
            />
            <h1 id="h2" className="gradienttext">
              Ryan Corral
            </h1>
            <p id="role">Full-Stack Web Developer</p>
            <p id="qoute">
              <i>
                <q>
                  When you love coding, it's not considered hard work. <br />I
                  call it fun!
                </q>
              </i>
            </p>
            <p>
              <a
                href="https://ryecode.github.io/portfolio/ImageBank/KodeGoDiploma.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ryecode.github.io/portfolio/ImageBank/KodeGoDiploma.jpeg"
                  alt="certificate"
                  width={"90%"}
                  style={{
                    margin: "1em",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                />
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
