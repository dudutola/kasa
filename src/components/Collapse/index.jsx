import React from "react";
import { useState } from 'react'
import "../../styles/components/_collapse.scss";

function Collapse({ title, content, initialState }) {
  const [displayText, setDisplayText] = useState(initialState)

  function handleClick() {
    setDisplayText(!displayText)
  }

  return (
    // <>
    //   <article className="collapse__card">
    //     <div className="collapse__card--title">
    //       <span>{title}</span>
    //     </div>
    //     <i className={`icon fa-solid fa-chevron-${displayText ? 'up' : 'down'}`} onClick={handleClick}></i>
    //   </article>
    //   <div className={`collapse__content ${displayText ? '' : 'open'}`}>
    //     <p className="equipment-only">{content}</p>
    //   </div>
    // </>
    <div className="collapse">
      <article className="collapse__card">
        <div className="collapse__card--title">
          <span>{title}</span>
        </div>
        <i className={`icon fa-solid fa-chevron-${displayText ? 'up' : 'down'}`} onClick={handleClick}></i>
      </article>
      <div className={`collapse__content ${displayText ? '' : 'open'}`}>
        <p className="equipment-only">{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
