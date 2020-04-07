import React, { useContext } from "react";
import LangContext from "../IppoContext";
import englishText from "../textInserters/englishText";
import hebrewText from "../textInserters/hebrewText";
import russianText from "../textInserters/russianText";
import activeArrow from "../assets/11-activeArrow.png";
import "../App.css";

function TitleEl({ setWhichIsActive, whichIsActive }) {
  const lang = useContext(LangContext).lang;

  function whichFileToUse() {
    if (lang === "hebrew") {
      return JSON.parse(JSON.stringify(hebrewText)).titles1;
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
            className={`${item.name}-title addTitleFont`}
          >
            <h1>{item.text}</h1>
            {whichIsActive === item.name ? (
              <img
                src={activeArrow}
                alt="active-arrow"
                className={"activeTitle"}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default TitleEl;
