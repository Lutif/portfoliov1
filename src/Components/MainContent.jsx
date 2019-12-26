import React from 'react';
import Story from './Story'
import Education from './Education';
import Skills from './Skills';
import './components.css'

function MainContent(prop){
  let tabs = {
    Home: <h2>I am Lutf Ali, oh you know that alreay !! alright go on have a look at skills and projec tab... </h2>,
    Story: <Story/>,
    Education: <Education/>, 
    Skills: < Skills />,
    "Hire Me": <h2>Not availabe</h2>,
    Resume: <h2>Will be available soon</h2>
    
  }
  let tab=prop.tab;

  return tabs[tab]
}

export default MainContent;