/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useContext, useState } from "react";
import backgroudImage from "./assets/06-background.png";
import menuImage from "./assets/05-red-menu.png";
import { timer, removeTimer } from "./TimerHundler";
import LangContext from "./IppoContext";
import russianText from "./textInserters/russianText";
import englishText from "./textInserters/englishText";
import hebrewText from "./textInserters/hebrewText";
import aactiveArrow from "./assets/11-activeArrow.png";
import "./App.css";
import TextInserter from "./textInserters/TextInserter";

function IppoPage({ homeBtnLogic }) {
  const lang = useContext(LangContext).lang;
  const [whichIsActive, setWhichIsActive] = useState("ippo");

  useEffect(() => {
    timer(homeBtnLogic);

    return () => {
      // Return callback to run on unmount.

      removeTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return JSON.parse(JSON.stringify(hebrewText)).titles;
    }
    if (lang === "english") {
      return JSON.parse(JSON.stringify(englishText)).titles;
    } else {
      return JSON.parse(JSON.stringify(russianText)).titles;
    }
  }

  return (
    <div>
      <img src={backgroudImage} className="fullBackground"></img>
      <img src={menuImage} className="reMenu"></img>
      <div
        id="ippo"
        onClick={() => setWhichIsActive("ippo")}
        className={"ippoTitle addTitleFont"}
      >
        <h1>{whichFileToUse().ippo}</h1>
        {whichIsActive === "ippo" ? (
          <img
            src={aactiveArrow}
            alt="active-arrow"
            className={"activeTitle"}
          />
        ) : null}
      </div>
      <div
        id="headsOf"
        onClick={() => setWhichIsActive("headsOf")}
        className="headsOfTitle addTitleFont"
      >
        <h1>{whichFileToUse().headsOf}</h1>
        {whichIsActive === "headsOf" ? (
          <img
            src={aactiveArrow}
            alt="active-arrow"
            className={"activeTitle"}
          />
        ) : null}
      </div>
      <div
        id="humanitarian"
        onClick={() => setWhichIsActive("humanitarian")}
        className="humanitarianTitle addTitleFont"
      >
        <h1>{whichFileToUse().humanitarian}</h1>
        {whichIsActive === "humanitarian" ? (
          <img
            src={aactiveArrow}
            alt="active-arrow"
            className={"activeTitle"}
          />
        ) : null}
      </div>
      <div
        id="importentStructures"
        onClick={() => setWhichIsActive("importentStructures")}
        className="importentStructuresTitle addTitleFont"
      >
        <h1>{whichFileToUse().importentStructures}</h1>
        {whichIsActive === "importentStructures" ? (
          <img
            src={aactiveArrow}
            alt="active-arrow"
            className={"activeTitle"}
          />
        ) : null}
      </div>
      <div
        id="hitrovo"
        onClick={() => setWhichIsActive("hitrovo")}
        className="hitrovoTitle addTitleFont"
      >
        <h1>{whichFileToUse().hitrovo}</h1>
        {whichIsActive === "hitrovo" ? (
          <img
            src={aactiveArrow}
            alt="active-arrow"
            className={"activeTitle"}
          />
        ) : null}
      </div>
      <TextInserter subject={whichIsActive} />
    </div>
  );
}

export default IppoPage;
