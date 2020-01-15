import React, { useState } from 'react';

let styles={
  display: 'block'
}

function Sidebar(props){


let [tablist, setTablist]=useState(['Home','Education','Skills','Projects','Hire Me','Resume']);

function handleClick(event){
  // console.log(event.target.value);
  props.handle(event.target.value);
}

let tabs= tablist.map(tab=><button className='navitems' value ={tab} onClick={handleClick} key={tab}>{tab}</button>)  
return tabs

}


export default Sidebar;