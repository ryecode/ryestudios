import React from "react";
import Card3D from "../../components/3dCards/Card3D";
import "../../global.css";
import "./Project.styles.css";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <motion.div
      className="projectBody"
      initial={{ x: "-100%", transition: { duration: 0, delay: 0 } }}
      animate={{ x: "0%", transition: { type:"spring", bounce:'0.4', duration: 0.75, delay: 1.5 } }}
      exit={{ x: "100%", transition: { duration: 0.75, delay: 0.75 } }}
    >
        <div className="projectCard">
            <Card3D />
        </div>
    </motion.div>
  );
};
