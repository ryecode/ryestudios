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
        <div className="header" id="profileTitle">
        <h1 class="hero-title" id="title">
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
            <p id="p">Full-Stack Web Developer</p>
            <p id="aboutMe">
            Greetings GUEST! I'm Rye, a Full-Stack Web Developer based in Antipolo City, Philippines. I recently graduated from KodeGo's Full-Stack Web Development Bootcamp this past June 2023. Where I was awarded <br />"<a href="https://youtu.be/Hq0qzBNZzQA" target="_blank"  rel="noopener noreferrer" style={{color: "hsl(45, 100%, 53%)", zIndex: 1}} >Best in Coding</a>".  
                <br/>
                Since childhood, one of my passions has been computers. I can quickly learn stuff about computers and programming. My first code was a simple ATM program back in high school using Turbo Pascal, and I was having so much fun learning to code!
                <br/>
                Now that my skills have been somewhat updated, I'm looking to get a chance to work for a good IT company, showcase my skills and passion for coding, and further expand my knowledge about programming.              
          
            </p>
          </div>

          <div className="middle-container" id="pCardMid">
            <h3 id="h3" className="gradienttext">
              Programming Skills
            </h3>

          </div>

          <div className="right-container" id="pCardRight">
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
