import React, { useContext } from "react";
import LangContext from "../IppoContext";
import englishText from "../textInserters/englishText";
import hebrewText from "../textInserters/HebrewText";
import russianText from "../textInserters/russianText";
import activeArrow from "../assets/09-menu-arrow.png";
import "../App.css";

function TitleEl({ setWhichIsActive, whichIsActive }) {
  const lang = useContext(LangContext).lang;

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText.titles1;
    }
    if (lang === "english") {
      return JSON.parse(JSON.stringify(englishText)).titles1;
    } else {
      return JSON.parse(JSON.stringify(russianText)).titles1;
    }
  }
  return (
    <div className="image-text-container">
      {whichFileToUse().map((item) => {
        return (
          <div
            key={item.name}
            id={item.name}
            onClick={() => setWhichIsActive(item.name)}
            className={
              lang === "hebrew"
                ? `${item.name}-title menu-general-heb addTitleFont`
                : `${item.name}-title menu-general-title addTitleFont`
            }
          >
            {whichIsActive === item.name ? (
              <img
                src={activeArrow}
                alt="active-arrow"
                className={"activeTitle"}
              />
            ) : null}
            <h1
              className={
                lang === "hebrew"
                  ? "menu-title-add heb-menu-title"
                  : "menu-title-add"
              }
            >
              {item.text}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default TitleEl;
