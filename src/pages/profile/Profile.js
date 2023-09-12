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
  const [color1, setColor1] = useState("rgb(236, 219, 60)");
  const [color2, setColor2] = useState(0);
  const [color3, setColor3] = useState(0);
  const changeIndex1 = () => {
    setIndex1(1);
    setIndex2(0);
    setIndex3(0);
    setColor1("rgb(236, 219, 60)");
    setColor2("#fdfdfd");
    setColor3("#fdfdfd");
  };
  const changeIndex2 = () => {
    setIndex1(0);
    setIndex2(1);
    setIndex3(0);
    setColor1("#fdfdfd");
    setColor2("rgb(236, 219, 60)");
    setColor3("#fdfdfd");
  };
  const changeIndex3 = () => {
    setIndex1(0);
    setIndex2(0);
    setIndex3(1);
    setColor1("#fdfdfd");
    setColor2("#fdfdfd");
    setColor3("rgb(236, 219, 60)");
  };

  return (
    <>
      <motion.div
        className="profileBody"
        initial={{ transition: { delay: 0 } }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 2 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div className="profileCard">
          <div id="profileTitle">
            <motion.h1
              id="title"
              initial={{
                translateY: "-100vh",
                translateX: "-100vw",
                transition: { duration: 0, delay: 0 },
              }}
              animate={{
                translateY: 0,
                translateX: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: "0.4",
                  duration: 5,
                  delay: 4.4,
                },
              }}
              exit={{
                translateY: "-100vh",
                translateX: "100vw",
                scale: "0",
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0,
                },
              }}
            >
              <b>
                Hello&nbsp;
                <span
                  className="gradientUser"
                  style={{ textTransform: "uppercase", textShadow: "none" }}
                >
                  {userName}
                </span>
                !
              </b>
            </motion.h1>
            <motion.h2
              id="title1"
              initial={{
                translateY: "-100vh",
                translateX: "-100vw",
                transition: { duration: 0, delay: 0 },
              }}
              animate={{
                translateY: 0,
                translateX: 0,
                opacity: "1",
                transition: {
                  type: "spring",
                  bounce: "0.4",
                  duration: 5,
                  delay: 4.6,
                },
              }}
              exit={{
                scale: "0",
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.6,
                },
              }}
            >
              <b>Allow me to introduce myself..</b>
            </motion.h2>
            <ul className="toggleBtns">

              <motion.li
                className="chapter1"
                initial={{
                  translateY: "-100vh",
                  translateX: "-100vw",
                  transition: { duration: 0, delay: 0 },
                }}
                animate={{
                  translateY: 0,
                  translateX: 0,
                  opacity: "1",
                  transition: {
                    type: "spring",
                    bounce: "0.4",
                    duration: 5,
                    delay: 4.8,
                  },
                }}
                exit={{
                  translateY: "100vh",
                  translateX: "100vw",
                  scale: "0",
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.4,
                  },
                }}
              >
                <button onClick={changeIndex1} style={{ color: color1 }}>
                  Chapter I
                </button>
              </motion.li>

              <motion.li
                className="chapter2"
                initial={{
                  translateY: "-100vh",
                  translateX: "-100vw",
                  transition: { duration: 0, delay: 0 },
                }}
                animate={{
                  translateY: 0,
                  translateX: 0,
                  opacity: "1",
                  transition: {
                    type: "spring",
                    bounce: "0.4",
                    duration: 5,
                    delay: 5,
                  },
                }}
                exit={{
                  translateY: "100vh",
                  translateX: "100vw",
                  scale: "0",
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.2,
                  },
                }}
              >
                <button onClick={changeIndex2} style={{ color: color2 }}>
                  Chapter II
                </button>
              </motion.li>

              <motion.li
                className="chapter3"
                initial={{
                  translateY: "-100vh",
                  translateX: "-100vw",
                  transition: { duration: 0, delay: 0 },
                }}
                animate={{
                  translateY: 0,
                  translateX: 0,
                  opacity: "1",
                  transition: {
                    type: "spring",
                    bounce: "0.4",
                    duration: 5,
                    delay: 5.2,
                  },
                }}
                exit={{
                  translateY: "100vh",
                  translateX: "100vw",
                  scale: "0",
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0,
                  },
                }}
              >
                <button onClick={changeIndex3} style={{ color: color3 }}>
                  Chapter III
                </button>
              </motion.li>
            </ul>
          </div>

          <motion.div
            className="skills-container"
            id="pCardSkills"
            initial={{
              y: "-300%",
              x: -200,
            }}
            animate={{
              y: 0,
              x: -200,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                delay: 2.5,
                duration: 1,
              },
            }}
            exit={{
              y: "-300%",
              x: -200,
              opacity: "0",
              transition: { duration: 1, delay: 0 },
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
                    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>BOOTSTRAPS</span>
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
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VS CODE</span>
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
              x: 100,
            }}
            animate={{
              x: -200,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                delay: 3,
                duration: 1,
              },
            }}
            exit={{
              x: 100,
              opacity: "0",
              transition: { duration: 1, delay: 0 },
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
              x: -500,
            }}
            animate={{
              x: -200,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                delay: 3.5,
                duration: 1,
              },
            }}
            exit={{
              x: -500,
              opacity: "0",
              transition: { duration: 1, delay: 0 },
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
                I'm so addicted to coding that when I start to code,<br/> food and sleep become fiction.
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
                  width={"85%"}
                  style={{
                    margin: "0 0 1em 0",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                />
              </a>
            </p>
          </motion.div>

          <motion.div className="blockCross1"
                    initial={{
                      x: "300%",
                      y: "-27%",
                      transition: { delay: 0 },
                    }}
                    animate={{
                      x: "53%",
                      y: "-27%",
                      opacity: "1",
                      transition: {
                        duration: 0.5,
                        delay: 4.2,
                      },
                    }}
                    exit={{
                      x: "300%",
                      scale: "0",
                      transition: { duration: 1, delay: 0 },
                    }}
          ></motion.div>
          <motion.div className="blockCross2"
                    initial={{
                      x: "-300%",
                      y: "-27%",
                      transition: { delay: 0 },
                    }}
                    animate={{
                      x: "-94.5%",
                      y: "-27%",
                      opacity: "1",
                      transition: {
                        duration: 0.5,
                        delay: 3.8,
                      },
                    }}
                    exit={{
                      x: "-300%",
                      scale: "0",
                      transition: { duration: 1, delay: 0 },
                    }}
          ></motion.div>
                    <motion.div className="blockCross3"
                    initial={{
                      x: "-83%",
                      y: "-200%",
                      transition: { delay: 0 },
                    }}
                    animate={{
                      x: "-83%",
                      y: "-82%",
                      opacity: "1",
                      transition: {
                        duration: 0.5,
                        delay: 4,
                      },
                    }}
                    exit={{
                      y: "-200%",
                      x: "-83%",
                      scale: "0",
                      transition: { duration: 1, delay: 0 },
                    }}
          ></motion.div>
                              <motion.div className="blockCross4"
                    initial={{
                      x: "-83%",
                      y: "200%",
                      transition: { delay: 0 },
                    }}
                    animate={{
                      x: "-83%",
                      y: "77%",
                      opacity: "1",
                      transition: {
                        duration: 0.5,
                        delay: 3.6,
                      },
                    }}
                    exit={{
                      y: "200%",
                      scale: "0",
                      transition: { duration: 1, delay: 0 },
                    }}
          ></motion.div>

        </div>
      </motion.div>
    </>
  );
};
