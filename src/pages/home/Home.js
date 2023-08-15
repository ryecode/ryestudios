import React from "react";
// import { useNavigate } from "react-router-dom";
import './Home.styles.css'
import videoBG from '../../assets/videoBG.mp4';
import { motion } from 'framer-motion';

export const Home = () => {
    // let navigate = useNavigate();
    
return (
  <motion.div className="home"
    // initial={{height: "100%"}}
    // animate={{height: "100%"}}
    // exit={{y: "-100%", transition: {duration: 0.6, delay: 0.1} }}

    // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
    // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
    // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

    initial={{scale: 0, transition: {duration: 2}}}
    animate={{scale: 1, transition: {duration: 1, delay: 0.2}}}
    exit={{scale: 0, transition: {duration: 1, delay: 0.2}}}
  >
    <div className="overlay"></div>
    <video
      src={videoBG}
      autoPlay
      loop
      muted
      playsInline
      fetchPriority={"high"}
      poster="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.jpeg"
    />
    <div className="content">
      <h1>WELCOME</h1>
      <p>To Rye Zone</p>
    </div>
  </motion.div>
);
}
