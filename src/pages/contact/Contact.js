import { motion } from "framer-motion";
import React from "react";

export const Contact = () => {
  return (
    <motion.div
    initial={{width: "100%"}}
    animate={{width: "100%"}}
    exit={{x: "110%", transition: {duration: 0.6, delay: 0.1 } }}

    // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
    // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
    // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

    // initial={{scale: 0, transition: {duration: 2, delay: 1.02}}}
    // animate={{scale: 1, transition: {duration: 1, delay: 0.2}}}
    // exit={{scale: 0, transition: {duration: 1, delay: 0.2}}}
    >
      <h1> This is the Contact Page! </h1>
    </motion.div>
  );
};
