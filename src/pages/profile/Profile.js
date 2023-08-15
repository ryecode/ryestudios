import React from "react";
import "./Profile.styles.css";
import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <>
      <motion.div
        // initial={{ height: "100%" }}
        // animate={{ height: "100%" }}
        // exit={{ y: "-100%", transition: {duration: 0.6, delay: 0.1 } }}

        // initial={{opacity: 0, transition: {duration: 1, delay: 0.2}}}
        // animate={{opacity: 1, transition: {duration: 1, delay: 0.2}}}
        // exit={{opacity: 0, transition: {duration: 1, delay: 0.2}}}

        initial={{scale: 0, transition: {duration: 2}}}
        animate={{scale: 1, transition: {duration: 1, delay: 0.2}}}
        exit={{scale: 0, transition: {duration: 1, delay: 0.2}}}
      >
        <div className="profileCard">
          <div className="left-container">
            <img
              className="profileImage"
              src="https://ryecode.github.io/portfolio/ImageBank/RyeFormal3.png"
              alt="Profile"
            />
            <h2 id="h2" className="gradienttext">
              Ryan Corral
            </h2>
            <p id="p">( MERN ) Full-Stack Web Developer</p>
            <p>
              sit esse et et amet pariatur Lorem Lorem proident voluptate do
              quis magna laboris sit voluptate et dolor nulla nisi minim amet
              laborum aliquip do
            </p>
          </div>
          <div className="right-container">
            <h3 id="h3" className="gradienttext">
              Profile Details
            </h3>
            <table className="table">
              <tr>
                <td className="td">Name :</td>
                <td className="td">John Doe</td>
              </tr>
              <tr>
                <td className="td">Age :</td>
                <td className="td">35</td>
              </tr>
              <tr>
                <td className="td">Mobile :</td>
                <td className="td">+91 XXXXXXXXXX</td>
              </tr>
              <tr>
                <td className="td">Email :</td>
                <td className="td">john@example.com</td>
              </tr>
              <tr>
                <td className="td">Address :</td>
                <td className="td">123 Main St, Anytown, USA</td>
              </tr>
              <tr>
                <td className="td">Email :</td>
                <td className="td">john@example.com</td>
              </tr>
              <tr>
                <td className="td">Address :</td>
                <td className="td">123 Main St, Anytown, USA</td>
              </tr>
            </table>
          </div>
        </div>
      </motion.div>
    </>
  );
};
