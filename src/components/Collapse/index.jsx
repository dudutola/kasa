import React from "react";
import { useState } from 'react'
import "../../styles/components/_collapse.scss";

function Collapse({ title, content }) {
  const [displayText, setDisplayText] = useState(false)

  function handleClick() {
    setDisplayText(!displayText)
  }

  return (
    <>
      <article className="collapse__card">
      {/* <article className={`collapse__card ${displayText ? 'open' : ''}`}> */}
        <div className="collapse__card--title">
          <span>{title}</span>
        </div>
        <i className={`fa-solid fa-chevron-${displayText ? 'down' : 'up'}`} onClick={handleClick}></i>
      </article>
      <div className={`collapse__content ${displayText ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Collapse;
