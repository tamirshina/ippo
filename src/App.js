import React, {useState} from 'react';
import './App.css';
import IppoPage from './IppoPage';
import LanguageButtons from './fragments/LanguageButtons';


function App() {

  const [isIppoPage, setIsIppoPage] = useState(true);

  return (
    <>
      {isIppoPage?<IppoPage />:null}
      <LanguageButtons/>
    </>
  );
}

export default App;
