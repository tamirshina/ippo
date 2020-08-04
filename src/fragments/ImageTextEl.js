import React, { useContext, useRef, useState, useEffect } from "react";
import LangContext from "../IppoContext";
import { timer, removeTimer } from "../TimerHundler";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import russianText from "../textInserters/RussianText";
import "../App.css";

function ImageTextEl({ subject, homeBtnLogic }) {
  const lang = useContext(LangContext).lang;
  const [isScrollDebounce, setIsScrollDebounce] = useState(true);
  const tempTimer = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(tempTimer.current);
    };
    // eslint-disable-next-line
  }, []);

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

  function isCssAdd() {
    if (isLeftToRight()) {
      if (subject === "importentStructures") {
        return true;
      } else return false;
    } else return false;
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
  const position = {
    position: "relative",
    top: "35px",
  };

  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }

  function handleScroll() {
    if (isScrollDebounce) {
      setIsScrollDebounce(false);
      resetTimer();
      tempTimer.current = setTimeout(function () {
        setIsScrollDebounce(true);
      }, 10000);
    }
  }
  return (
    <>
      <div
        id="imageTextContainer"
        className="image-text-container"
        onScroll={handleScroll}
      >
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
                style={isCssAdd() ? position : null}
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
