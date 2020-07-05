import React, { useContext } from "react";
import LangContext from "../IppoContext";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import russianText from "../textInserters/RussianText";
import "../App.css";

function ImageTextEl({ subject }) {
  const lang = useContext(LangContext).lang;
  function createMarkup(str) {
    return { __html: str };
  }

  function isLeftToRight() {
    if (lang === "hebrew") {
      return false;
    } else {
      return true;
    }
  }

  function whichLangToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return englishText;
    } else {
      return russianText;
    }
  }
  function whichFileToUse() {
    return whichLangToUse()[subject];
  }
  return (
    <>
      <div id="imageTextContainer" className="image-text-container">
        {subject === "importentStructures" ? (
          <p
            className={isLeftToRight() ? "heads-text" : "heb-heads-text"}
            dangerouslySetInnerHTML={createMarkup(
              whichLangToUse().openingParagraph
            )}
          ></p>
        ) : null}
        {whichFileToUse().map((item) => {
          return (
            <div
              key={item.id}
              className={
                isLeftToRight()
                  ? "item-container-image-text"
                  : "item-container-heb"
              }
            >
              <img
                src={require(`../assets/${subject}/${item.image}.png`)}
                alt="someImage"
                className="image-for-imageText"
              />
              <p
                dangerouslySetInnerHTML={createMarkup(item.info)}
                className={isLeftToRight() ? "heads-text" : "heb-heads-text"}
              ></p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageTextEl;
