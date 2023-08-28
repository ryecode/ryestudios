import React from "react";
import "./Footer.styles.css";
import "../../global.css";

export const Footer = () => {
  return (
    <div className="footer fixed-bottom" >
      <button class="btn">
        <span class="words">© RYAN CORRAL 2023</span>
      </button>
      <div class="credit">
        Some background and images from{" "}
        <a
          href="http://www.pngtree.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          pngtree.com
        </a>{" "}
        &{" "}
        <a
          href="https://www.vecteezy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vecteezy.com
        </a>
        
        <div
          class="sub"
          id="footerQuery"
          style={{ zIndex: 1, width: "100%", textAlign: "right", padding:'0' }}
        >
          <a href="tel:+639179219988">
            <img
              class="subscribe"
              src="https://ryecode.github.io/portfolio/ImageBank/phonePic.png"
              alt="phone icon"
              width="3.5%"
            />
          </a>
          <a href="mailto:mr.ryan.corral@gmail.com">
            <img
              class="subscribe"
              src="https://ryecode.github.io/portfolio/ImageBank/emailPic.png"
              alt="email icon"
              width="3.5%"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rye-corral/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="subscribe"
              src="https://ryecode.github.io/portfolio/ImageBank/linkedPic.png"
              alt="linkedIn icon"
              width="3.5%"
            />
          </a>
          <a
            href="https://www.facebook.com/ryekoralzkie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="subscribe"
              src="https://ryecode.github.io/portfolio/ImageBank/fbPic.png"
              alt="facebook icon"
              width="3.5%"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
