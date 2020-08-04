import React from "react";
import scrollUpImg from "../assets/08-UP.png";
import scrollDwonImg from "../assets/07-down.png";
import "../App.css";

function ScrollingBtn({ whichIsActive }) {
  function scrollDown() {
    if (
      whichIsActive === "headsOf" ||
      whichIsActive === "importentStructures"
    ) {
      let paraEl = document.getElementById("imageTextContainer");
      if (paraEl) {
        paraEl.scrollTop += 40;
      }
    } else {
      let paraEl = document.getElementById("particularTextBox");
      if (paraEl) {
        paraEl.scrollTop += 40;
      }
    }
  }

  function scrollUp() {
    if (
      whichIsActive === "headsOf" ||
      whichIsActive === "importentStructures"
    ) {
      let paraEl = document.getElementById("imageTextContainer");
      if (paraEl) {
        paraEl.scrollTop -= 40;
      }
    } else {
      let paraEl = document.getElementById("particularTextBox");
      if (paraEl) {
        paraEl.scrollTop -= 40;
      }
    }
  }

  return (
    <div className="scroll-button-container">
      <img
        src={scrollUpImg}
        alt="scroll-up"
        onClick={scrollUp}
        className={"left-scroll"}
      />
      <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
    </div>
  );
}

export default ScrollingBtn;
