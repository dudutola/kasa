import React from "react";

function Card({ title, cover, location }) {
  return (
    <article className="card">
      <div className="card__content">
        <img src={cover} alt={title} />
        <div className="card__content--location">
          <p className="title">{location}</p>
        </div>
      </div>
    </article>
  )
}

export default Card
