import React from "react";
import frontBackground from "./assets/04-Poster.png";
import frontVideo from "./assets/03-IPPO-Transion.mp4";
import IppoTitle from "./fragments/TitleFrontPage";
import "./App.css";

function FrontPage({ playVideoLogic }) {
  const hundelOnClick = () => {
    playVideoLogic();
  };

  return (
    <>
      <video
        onClick={hundelOnClick}
        poster={frontBackground}
        id="zoomInVideo"
        src={frontVideo}
        className="fullBackground"
      />
      <IppoTitle />
    </>
  );
}

export default FrontPage;
