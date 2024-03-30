import { useState } from 'react'
import "../../styles/components/_collapse.scss";

function AccommodatContainer({ title, pictures, description, host, rating,location, equipments, tags }) {

  function renderStars() {
    const ratingNumber = parseInt(rating)
    const stars = []

    for (let i = 0; i < 5; i++) {
      const starClass = i < ratingNumber ? 'fa fa-star rated' : 'fa fa-star unrated';
      stars.push(<i key={i} className={starClass}></i>)
    }
    return stars
  }

  const [displayText, setDisplayText] = useState(false)
  function handleClick() {
    setDisplayText(!displayText)
  }

  return (
    <div className="accommodation">
      <article className="infos">
        <div>
          <p className="infos__title">{title}</p>
          <p className="infos__location">{location}</p>
        </div>
        <div className="infos__host">
          <p className="infos__host--name">{host.name}</p>
          <img src={host.picture} alt="L'hôtesse de l'appartement" className="infos__host--pic" />
        </div>
      </article>
      <article className="tags-rating">
        <span className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tags__tag">
              {tag}
            </span>
          ))}
        </span>
        <span className="rating">
          {renderStars()}
        </span>
      </article>
      <div className="details">
        <section>
          <article className="collapse__card">
            <div className="collapse__card--title">
              <span>Description</span>
            </div>
            <i className={`fa-solid fa-chevron-${displayText ? 'down' : 'up'}`} onClick={handleClick}></i>
          </article>
          <div className={`collapse__content ${displayText ? 'open' : ''}`}>
            <span>{description}</span>
          </div>
        </section>
        <section>
          <article className="collapse__card">
            <div className="collapse__card--title">
              <span>Équipements</span>
            </div>
            <i className={`fa-solid fa-chevron-${displayText ? 'down' : 'up'}`} onClick={handleClick}></i>
          </article>
          <div className={`collapse__content ${displayText ? 'open' : ''}`}>
            <span>{equipments}</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AccommodatContainer;
