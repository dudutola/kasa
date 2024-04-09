import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../../styles/components/_collapse.scss";

function Collapse({ title, content, initialState }) {
  const [displayText, setDisplayText] = useState(initialState)

  function handleClick() {
    setDisplayText(!displayText)
  }

  return (
    <div className="collapse">
      <article className="collapse__card">
        <div className="collapse__card--title">
          <span>{title}</span>
        </div>
        <FontAwesomeIcon
          icon={displayText ? faChevronDown : faChevronUp}
          className="icon"
          onClick={handleClick}
        />
      </article>
      <div className={`collapse__content ${displayText ? '' : 'open'}`}>
        <p className="equipment-only">{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
