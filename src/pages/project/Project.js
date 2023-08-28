import React from "react";
import Card3D from "../../components/3dCards/Card3D";
import "../../global.css";
import "./Project.styles.css";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <motion.div 
      className="projectBody"
        initial={{ y: "100%", transition: {duration: 1, delay: 0}}}
        animate={{ y: "0%", transition: {duration: 1, delay: 1}}}
        exit={{ y: "-110%", transition: {duration: 1, delay: 0 }}}

      // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
      // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
      // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

      // initial={{ scale: 0, transition: { duration: 2, delay: 1.02}}}
      // animate={{ scale: 1, transition: { duration: 1, delay: 0.2}}}
      // exit={{ scale: 0, transition: { duration: 1, delay: 0.2}}}
    >
      <div>
      <div id="projectTitle">
          <h1 class="projTitle gradientTitle" id="titleID">
            <b>CHECK MY PROJECTS OUT!</b>
          </h1>
        </div>
      <div className="profileCard">
        <div>
          <Card3D />
        </div>
      </div>
      </div>

    </motion.div>
  );
};
