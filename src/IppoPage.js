/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import TextInserter from "./textInserters/TextInserter";
import backgroudImage from "./assets/06-background.png";
import { timer, removeTimer } from "./TimerHundler";
import ImageTextEl from "./fragments/ImageTextEl";
import menuImage from "./assets/05-red-menu.png";
import ScrollingBtns from "./fragments/ScrollingBtn";
import TitleEl from "./fragments/TitleEl";
import "./App.css";

function IppoPage({ homeBtn }) {
  const [whichIsActive, setWhichIsActive] = useState("ippo");

  useEffect(() => {
    timer(homeBtn);

    return () => {
      // Return callback to run on unmount.

      removeTimer();
    };
  }, [homeBtn]);

  function isImageText() {
    if (
      whichIsActive === "headsOf" ||
      whichIsActive === "importentStructures"
    ) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <img src={backgroudImage} className="fullBackground"></img>
      <img src={menuImage} className="reMenu"></img>
      <TitleEl
        setWhichIsActive={setWhichIsActive}
        whichIsActive={whichIsActive}
      />

      {isImageText() ? (
        <ImageTextEl subject={whichIsActive} />
      ) : (
        <TextInserter subject={whichIsActive} />
      )}
      <ScrollingBtns homeBtnLogic={homeBtn} whichIsActive={whichIsActive} />
    </div>
  );
}

export default IppoPage;
