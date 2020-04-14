import React, { useContext } from "react";
import LangContext from "../IppoContext";
import englishText from "../textInserters/englishText";
import hebrewText from "../textInserters/HebrewText";
import russianText from "../textInserters/russianText";
import "../App.css";

function ImageTextEl({ subject }) {
  const lang = useContext(LangContext).lang;

  function whichLangToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return JSON.parse(JSON.stringify(englishText));
    } else {
      return JSON.parse(JSON.stringify(russianText));
    }
  }
  function whichFileToUse() {
    return whichLangToUse()[subject];
  }
  return (
    <div id="imageTextContainer" className="image-text-container">
      {whichFileToUse().map((item) => {
        return (
          <div key={item.id} className="item-container-image-text">
            <img
              src={require(`../assets/${subject}/${item.image}.png`)}
              alt="someImage"
              className="image-for-imageText"
            />
            <p className={"heads-text"}>{item.info}</p>
            <div />
          </div>
        );
      })}
    </div>
  );
}

export default ImageTextEl;
