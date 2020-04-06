import React, { useContext, useRef } from "react";
import scrollBtn from "../assets/11-activeArrow.png";
import isLeftToRight from "../fragments/IsLeftToRightFunc";
import LangContext from "../IppoContext";
import russianText from "./russianText";
import englishText from "./englishText";
import hebrewText from "./hebrewText";
import { timer, removeTimer } from "../TimerHundler";
import upperTextArrow from "../assets/11-activeArrow.png";
import RighToLeftTitle from "../fragments/RightToLeftTitle";
import LeftToRightTitle from "../fragments/LeftToRightTitle";
import "../App.css";

function TextInserter({ subject, homeBtnLogic }) {
  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);
  const upperScrollEl = useRef(null);
  const bottomScrollEl = useRef(null);

  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }

  function whichFileToUse() {
    if (lang === "hebrew") {
      return JSON.parse(JSON.stringify(hebrewText));
    }
    if (lang === "english") {
      return JSON.parse(JSON.stringify(englishText));
    } else {
      return JSON.parse(JSON.stringify(russianText));
    }
  }

  function infoToInsert() {
    return whichFileToUse().particularInfo[subject];
  }
  function titleToInsert() {
    return whichFileToUse().titles[subject];
  }

  return (
    <div className={isLeftToRight() ? null : "textBoxCss"}>
      {isLeftToRight() ? (
        <LeftToRightTitle titleToInsert={titleToInsert()} />
      ) : (
        <RighToLeftTitle titleToInsert={titleToInsert()} />
      )}
      <p
        ref={textParaEl}
        className={isLeftToRight() ? "infoEnText" : "infoHeText"}
        id="particularTextBox"
      >
        {infoToInsert()}
      </p>
      <img
        ref={upperScrollEl}
        onClick={() => {
          resetTimer();
        }}
        src={upperTextArrow}
        alt="scrollBtn"
        className={"topInfoScrollEn"}
      />
      <img
        ref={bottomScrollEl}
        onClick={() => {
          resetTimer();
        }}
        src={scrollBtn}
        alt="scrollBtn"
        className={"buttomInfoScroll"}
      />
    </div>
  );
}

export default TextInserter;
