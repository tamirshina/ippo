import React, { useContext } from "react";
import titles from "../textInserters/frontPageTitles.json";
import LangContext from "../IppoContext";
import "../App.css";

function TitleFrontPage() {
  const lang = useContext(LangContext).lang;

  const titleToInsert = () => {
    return parseJson().titles[lang];
  };
  const ippoTitleToInsert = () => {
    return parseJson().ippo[lang];
  };
  const parseJson = () => {
    return JSON.parse(JSON.stringify(titles));
  };

  return (
    <div id="frontPageTitle" className="frontTitle">
      <div className="frontTitleIppo addTitleFont">{ippoTitleToInsert()}</div>
      <div className="addTitleFont">{titleToInsert()}</div>
    </div>
  );
}
export default TitleFrontPage;
