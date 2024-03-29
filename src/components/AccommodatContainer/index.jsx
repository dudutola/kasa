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
  return (
    <div className="accommodation">
      <article className="tete">
        <div>
          <h1 className="tete__title">{title}</h1>
          <p className="tete__location">{location}</p>
        </div>
        <div className="tete__host">
          <p>{host.name}</p>
          <img src={host.picture} alt="" />
        </div>
      </article>
      <article className="tags-rating">
        <span className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </span>
        <span className="rating">
          {renderStars()}
        </span>
      </article>
      <article className="description-equipments">
        <div>
          <span>{description}</span>
        </div>
        <div>
          <span>{equipments}</span>
        </div>
      </article>
    </div>
  );
}

export default AccommodatContainer;
