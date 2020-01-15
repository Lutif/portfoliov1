import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Project from "./Project";
import './Projects.css';
import data from './data.js';


export default function Projects(props) {
  let [current, setCurrent] = useState(0);
  let [autoSlide, setAuto] = useState(true);

  function goBack() {
    setAuto(false);
    let prev = (current + 3 - 1) % data.length;
    setCurrent(prev);
  }
  function goNext() {
    setAuto(false);
    let next = (current + 1) % data.length;
    setCurrent(next);
  }
  useEffect(() => {
    let id = setTimeout(() => {
      if (autoSlide) {
        setCurrent((current + 1) % data.length);
      }
    }, 2000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className='carousel'>
      <Arrow direction="left" arrow="&#9664;" clickFunction={goBack} />
      <div className='projectContainer'><Project  content={data[current]} />
      </div>
      <Arrow direction="right" arrow="&#9654;" clickFunction={goNext} />
    </div>
  );
}
