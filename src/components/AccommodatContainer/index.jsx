import Collapse from "../Collapse";
import "../../styles/components/_collapse.scss";

function AccommodatContainer({ title, description, host, rating,location, equipments, tags }) {

  function renderStars() {
    const ratingNumber = parseInt(rating)
    const stars = []

    for (let i = 0; i < 5; i++) {
      const starClass = i < ratingNumber ? 'fa fa-star rated' : 'fa fa-star unrated';
      stars.push(<i key={i} className={starClass}></i>)
    }
    return stars
  }

  return (
    <>
      <article className="infos">
        <div>
          <p className="infos__title">{title}</p>
          <p className="infos__location">{location}</p>
        </div>
        <div className="infos__host">
          <div className="infos__host--name">
            {host.name.split(' ').map((part, index) => (
              <p key={index} className={`name-part ${index === 0 ? 'first-name' : 'last-name'}`}>
                {part}
              </p>
            ))}
          </div>
          <img src={host.picture} alt="L'hôte de l'appartement" className="infos__host--pic" />
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
        <article>
          <Collapse
            title="Description"
            content={description}
            initialState={false}
          />
        </article>
        <article>
          <Collapse
            title="Équipements"
            content={equipments.map((equipment, index) => (
              <span key={index}>{equipment}</span>
            ))}
            initialState={false}
          />
        </article>
      </div>
    </>
  );
}

export default AccommodatContainer;
