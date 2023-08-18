import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";

export const ChangeUserName = () => {
  const { setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  const { userName } = useContext(AppContext);
  return (
    <>
      <div id="askName">
        <h4>
          Greetings Guest,
          <br />
          please enter your name..
        </h4>
        <input
          onChange={(event) => {
            setNewUserName(event.target.value);
          }}
        />
        <br />
        <button
          class="neon-button"
          style={{ marginTop: "1em" }}
          onClick={() => {
            setUserName(newUserName);
          }}
        >
          <a href="#demo-modal">ENTER</a>
        </button>
        <div id="demo-modal" className="modal wrapper">
          <div class="modal__content">
            <div class="modal__close">
              {/* <button>
          <a href="#">X</a>
          </button> */}
            </div>
            <h1>
              Hi{""} {userName}!
            </h1>
            <p className="modal__footer">
              Thank you for visiting my website. I do hope you will like what
              you see here. So please go ahead, explore, and enjoy!
              <br />
              <img
                src="https://ryecode.github.io/portfolio/ImageBank/rocket.png"
                alt="rocket ship"
                width={"25%"}
                style={{ zIndex: 1 }}
              />
            </p>

            {/* <a href="/profile" class="modal__close1">
            <p style={{color:"black"}}>CHECK RYE PROFILE</p>
          </a> */}

            {/* <a href="#pointer" class="modal__close2">            
            <p style={{color:"black"}}>START EXPLORING!</p>
          </a> */}

            {/* <a href="/contact" class="modal__close3">
          <p style={{color:"black"}}>CONTACT RYE</p>        
          </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
