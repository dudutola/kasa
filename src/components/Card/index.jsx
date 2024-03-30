import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, cover, location }) {
  return (
    <Link id={id} to={`/accommodation/${id}`}>
      <article className="card">
        <div className="card__content">
          <img src={cover} alt={title} />
          <div className="card__content--location">
            <p className="title">{location}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Card;
