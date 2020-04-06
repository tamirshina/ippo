import React, { useState } from "react";
import "./App.css";
import IppoPage from "./IppoPage";
import FrontPage from "./FrontPage";
import HomeBtn from "./fragments/HomeBtn";
import LanguageButtons from "./fragments/LanguageButtons";

function App() {
  const [isIppoPage, setIsIppoPage] = useState(false);
  const [isFrontPage, setIstFrontPage] = useState(true);

  const homeBtn = () => {
    setIstFrontPage(true);
    setIsIppoPage(false);
  };

  const playVideo = () => {
    const videoElem = document.getElementById("zoomInVideo");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        setTimeout(function () {
          setIsIppoPage(true);
        }, 3500);
        // setTimeout(function(){ setIsInfoRouting(true); }, 3500);
      };
      videoElem.onended = (event) => {
        setIstFrontPage(false);
      };
    }
  };

  return (
    <>
      {isFrontPage ? <FrontPage playVideoLogic={playVideo} /> : null}
      {isIppoPage ? <IppoPage homeBtn={homeBtn} /> : null}
      <LanguageButtons />
      {isFrontPage ? null : <HomeBtn homeBtnLogic={homeBtn} />}
    </>
  );
}

export default App;
