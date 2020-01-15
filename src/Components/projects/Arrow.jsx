import React from "react";
import './Projects.css'

export default function Arrow(prop) {
  return (
    <div className={"arrow "+prop.direction} onClick={prop.clickFunction}>
      {prop.arrow}
    </div>
  );
}
