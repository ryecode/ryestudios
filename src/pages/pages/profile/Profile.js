import React from "react";
import "./Profile.styles.css";
import { motion } from "framer-motion";

import { AccordionComponent } from "../../components/Accordion";

export const Profile = () => {
  return (
    <>
      <motion.div
        // initial={{ height: "100%" }}
        // animate={{ height: "100%" }}
        // exit={{ y: "-100%", transition: {duration: 0.6, delay: 0.1 } }}

        initial={{ opacity: 0, transition: { duration: 1, delay: 0.2 } }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 0.2 } }}

        // initial={{scale: 0, transition: {duration: 2, delay: 1.02}}}
        // animate={{scale: 1, transition: {duration: 1, delay: 0.2}}}
        // exit={{scale: 0, transition: {duration: 1, delay: 0.2}}}
      >
        <div id="profileTitle">
          <h1 class="profTitle gradienttext" id="title">
            <b>A FEW THINGS ABOUT ME..</b>
          </h1>
        </div>

        <div className="profileCard">
          <div className="left-container" id="pCardLeft">
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
                "If it's your passion, It's never too late to start doing it."
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
                />
              </a>
            </p>
          </div>

          <div className="right-container" id="pCardRight">
            <h3 id="h3" className="gradienttext">
              Profile Details
            </h3>
            <div className="accordionContainer">
              <AccordionComponent />
            </div>
          </div>

          <div className="middle-container" id="pCardMid">
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
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>FIGMA</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>TAILWIND</span>
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
                    href="https://react-bootstrap.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>REACT BOOTSTRAP</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>BOOTSTRAP v5.3</span>
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
          </div>
        </div>
      </motion.div>
    </>
  );
};
