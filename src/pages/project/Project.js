import React from "react";
import Card3D from "../../components/3dCards/Card3D";
import "../../global.css";
import "./Project.styles.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Project = () => {
  const { userName } = useContext(AppContext);
  return (
    <motion.div
      className="projectBody"
      initial={{ x: "-100%", transition: { duration: 0, delay: 0 } }}
      animate={{
        x: "0%",
        transition: { type: "spring", bounce: "0.5", duration: 1, delay: 2 },
      }}
      exit={{ x: "100%", transition: { duration: 1, delay: 1 } }}
    >
      <div className="projectCard">
        <div className="projectHeadline">
          <motion.h5
            style={{ opacity: 0 }}
            id="pageTitle"
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
                duration: 2,
                delay: 2,
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
              Check out my project list
              <span
                className="gradientUser"
                style={{ textTransform: "uppercase", textShadow: "none" }}
              >
                &nbsp;{userName}
              </span>
              !
            </b>
          </motion.h5>
        </div>
        <Card3D />
      </div>
    </motion.div>
  );
};
