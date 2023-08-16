import React from "react";
import Card3D from "../../components/3dCards/Card3D";
import "../../global.css";
import "./Project.styles.css";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <motion.div
      className="projectBody"
        initial={{ height: "100%" }}
        animate={{ height: "100%" }}
        exit={{ y: "-110%", transition: {duration: 0.6, delay: 0.1 }}}

      // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
      // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
      // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

      // initial={{ scale: 0, transition: { duration: 2, delay: 1.02}}}
      // animate={{ scale: 1, transition: { duration: 1, delay: 0.2}}}
      // exit={{ scale: 0, transition: { duration: 1, delay: 0.2}}}
    >
      <div className="header">
        <h1 class="projectTitle">
          <b>GUEST, Check out my projects!</b>
        </h1>
      </div>
      <div className="profileCard">
        <div>
          <Card3D />
        </div>
      </div>
    </motion.div>
  );
};
