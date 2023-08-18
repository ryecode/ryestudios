import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../../components/heroBanner/Hero";

export const Contact = () => {
  return (
    <motion.div style={{ marginTop: '5%'}}
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

      <div>
        <Hero />
      </div>
      <div class="card about" 
  id="contactMe"
  style={{
    // backgroundImage: "url('https://ryecode.github.io/portfolio/ImageBank/ContactBG.jpg')",
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    background: "transparent",
    boxShadow: "none",
    margin: 0}}>
{/* <div>
  <h1 class="aboutTitle"> 
      CONTACT ME
  </h1>
</div> */}
  <p style={{color: "white"}}>
      Hover or Tap on the cards and icons!
  </p>
<div class="row" id="rowDaw">
  <div class="col-sm-6 mb-3 mb-sm-0" id="tilter">
    <div class="tilt-box-wrap">
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
        <div class="tilt-box">
          <img src="https://ryecode.github.io/portfolio/ImageBank/resumeSS.jpeg" alt="resume"
              width="75%" 
              height="100%">
          </img>
        </div>
    </div>

        <p id="pdfLink">
                    Download the PDF file {''}
                    <a href="https://ryecode.github.io/portfolio/ImageBank/RyanCorral_Resume.pdf"   
                      target="_blank" rel="noopener noreferrer">{''}here
                    </a>.
        </p>
  </div>    
    <div class="col-sm-6" 
        style={{height: '40px', zIndex: 1}}>
  <div class="sub"
      style={{zIndex: 1, width: "80%"}}>
    <a href="tel:+639179219988">
      <img class="subscribe" 
          src="https://ryecode.github.io/portfolio/ImageBank/phonePic.png" 
          alt="phone icon"  
          width="20%" />
    </a>
    <a href="mailto:mr.ryan.corral@gmail.com">
      <img class="subscribe" 
          src="https://ryecode.github.io/portfolio/ImageBank/emailPic.png" 
          alt="email icon"  
          width="20%" />
    </a>
    <a href="https://www.linkedin.com/in/rye-corral/" target="_blank" rel="noopener noreferrer">
      <img class="subscribe" 
          src="https://ryecode.github.io/portfolio/ImageBank/linkedPic.png" 
          alt="linkedIn icon"  
          width="25%" /></a>
    <a href="https://www.facebook.com/ryekoralzkie" target="_blank" rel="noopener noreferrer">
      <img class="subscribe" 
          src="https://ryecode.github.io/portfolio/ImageBank/fbPic.png" 
          alt="facebook icon"  
          width="20%" /></a>
  </div>
      {/* <div class="card" id="contactCardQuery">                  
        <img class="cardImage" 
            src="https://ryecode.github.io/portfolio/ImageBank/blueCarbonBG.jpg" 
            alt="background image" />  
        <p>
          <img id="cardQuery" 
              src="https://ryecode.github.io/portfolio/ImageBank/contactDetails.png" />
        </p>
      </div> */}
    </div>
</div>
</div>
    </motion.div>
  );
};
