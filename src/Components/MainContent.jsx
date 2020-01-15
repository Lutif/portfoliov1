import React from 'react';
import Projects from './projects/Projects.jsx';
import Education from './Education';
import Skills from './Skills';
import Home from './Home'
import './components.css'

function MainContent(prop){
  let tabs = {
    Projects: <Projects/>,
    Home: <Home/>,
    Education: <Education/>, 
    Skills: <Skills />,
    "Hire Me": <h2>Not availabe</h2>,
    Resume: <h2>Will be available soon</h2>
    
  }
  let tab=prop.tab;

  return tabs[tab]
}

export default MainContent;