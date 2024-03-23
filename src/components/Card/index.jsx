import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-title">Titre de la location</p>
      </div>
    </div>
  )
}

export const generateCards = (count) => {
  const cards = []
  for (let i = 0; i < count; i++) {
    cards.push(<Card key={i} />);
  }
  return cards
}

export default Card
