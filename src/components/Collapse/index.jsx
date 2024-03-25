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
        <div className="collapse__card--title">
          <span>{title}</span>
        </div>
        <i className="fa-solid fa-chevron-up" onClick={handleClick}></i>
      </article>
      {displayText && <p>{content}</p>}
    </>
  );
}

export default Collapse;
