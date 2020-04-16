import React from "react";
import "../App.css";

function RightToLeftTitle({ titleToInsert }) {
  return (
    <div className="enInfoTitle">
      <h1 className="addTitleFont frontPageEnTitle">{titleToInsert}</h1>
    </div>
  );
}
export default RightToLeftTitle;
