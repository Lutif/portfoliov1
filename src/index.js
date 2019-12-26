import React, { useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

import "./styles.css";

function App() {
  let [tab, setTab] = useState("Education");
  function handleTabSelection(selected) {
    console.log("handle tab selection called", selected);
    setTab(selected);
  }

  return (
    <div className="App">
      <div className=" side column">
        <div>Photo</div>
        <div className="nav">
          <Sidebar handle={handleTabSelection} />
        </div>
      </div>
      <div className=" main column">
        {/* <div className='header'>header</div> */}
        <div className='mainContent'>
          <MainContent  tab={tab} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
