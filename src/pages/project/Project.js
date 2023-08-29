import React from "react";
import Card3D from "../../components/3dCards/Card3D";
import "../../global.css";
import "./Project.styles.css";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <motion.div
      className="projectBody"
      initial={{ y: "100%", transition: { duration: 1, delay: 0 } }}
      animate={{ y: "0%", transition: { duration: 0.75, delay: 1.5 } }}
      exit={{ y: "-110%", transition: { duration: 0.75, delay: 0.75 } }}
    >
      <div>
        <div className="projectCard">
          <div>
            <Card3D />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
