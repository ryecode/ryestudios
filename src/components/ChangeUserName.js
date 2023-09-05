import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import { motion } from "framer-motion";

export const ChangeUserName = () => {
  const { setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  const { userName } = useContext(AppContext);
  return (
    <>
      <motion.div
        id="askName"
        className="modalTrigger"
        initial={{
          y: "-100vh",
          opacity: "0",
          transition: { duration: 1, delay: 0 },
        }}
        animate={{
          y: "0%",
          opacity: "1",
          transition: {
            type: "spring",
            bounce: "0.65",
            duration: 1.25,
            delay: 6.7,
          },
        }}
        exit={{
          x: "100vh",
          scale: "0",
          transition: { duration: 0.75, delay: 0 },
        }}
      >
        <p>
          May I know your name please?
        </p>
        <input
          onChange={(event) => {
            setNewUserName(event.target.value);
          }}
          style={{
            padding: "0.2em",
            textAlign: "center",
            caretColor: "blue",
            background: "#c1bebe",
            borderRadius: "50px",
            borderColor: "green",
            width: "65%",
          }}
          maxLength={"8"}
        />
        <br />
        <a href="#demo-modal" style={{ padding: "1em" }}>
          <motion.button
            className="enterBtn"
            style={{ marginTop: "1em" }}
            onClick={() => {
              setUserName(newUserName);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                bounce: "0.5",
                duration: 0.5,
                delay: 7.5,
              },
            }}
            exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
          >
            ENTER NAME
          </motion.button>
        </a>

        <div id="demo-modal" className="modal wrapper">
          <div className="modal__content">
            <h1>
              Greetings&nbsp;
              <span
                className="gradientUser"
                style={{ textTransform: "uppercase" }}
              >
                {userName}
              </span>
              !
            </h1>
            <p className="modal__footer">
              Thank you for visiting my website. I do hope you will like my
              portfolio. Please go ahead, explore, and enjoy!
              <br />
            </p>
            <p>
            <a href="#pointer" className="modal__close2">
                START <br/>EXPLORING!
                </a>
              </p>

          </div>
        </div>

        <div id="pointer" className="modalPointer">
          <img
            src="https://ryecode.github.io/portfolio/ImageBank/goldArrow.png"
            alt="pointer"
            width={"30%"}
          />
        </div>
      </motion.div>
    </>
  );
};
