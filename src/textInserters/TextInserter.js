import React, { useContext, useRef, useState, useEffect } from "react";
import LangContext from "../IppoContext";
import russianText from "./RussianText";
import englishText from "./EnglishText";
import hebrewText from "./HebrewText";
import { timer, removeTimer } from "../TimerHundler";
import RighToLeftTitle from "../fragments/RightToLeftTitle";
import LeftToRightTitle from "../fragments/LeftToRightTitle";
import "../App.css";

function TextInserter({ subject, homeBtnLogic }) {
  const lang = useContext(LangContext).lang;
  const [isScrollDebounce, setIsScrollDebounce] = useState(true);
  const tempTimer = useRef(null);
  const textParaEl = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(tempTimer.current);
    };
    // eslint-disable-next-line
  }, []);

  function isLeftToRight() {
    if (lang === "english" || lang === "russian") {
      return true;
    }
    return false;
  }
  function createMarkup(str) {
    return { __html: str };
  }

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
  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return englishText;
    } else {
      return russianText;
    }
  }

  function infoToInsert() {
    return whichFileToUse().particularInfo[subject];
  }
  function titleToInsert() {
    return whichFileToUse().titles[subject];
  }

  return (
    <div
      className={isLeftToRight() ? "en-text-box" : "textBoxCss"}
      onScroll={handleScroll}
    >
      {isLeftToRight() ? (
        <LeftToRightTitle titleToInsert={titleToInsert()} />
      ) : (
        <RighToLeftTitle titleToInsert={titleToInsert()} />
      )}
      <p
        ref={textParaEl}
        className={isLeftToRight() ? "infoEnText" : "infoHeText"}
        id="particularTextBox"
        dangerouslySetInnerHTML={createMarkup(infoToInsert())}
      ></p>
    </div>
  );
}

export default TextInserter;
