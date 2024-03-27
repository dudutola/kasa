import React from "react";

function Card({ title, cover, location }) {
  return (
    <article className="card">
      <div className="card__content">
        <img src={cover} alt={title} width={42} height={46} />
        <p className="card__content--title">{location}</p>
      </div>
    </article>
  )
}

// export const generateCards = (count) => {
//   const cards = []
//   for (let i = 0; i < count; i++) {
//     cards.push(<Card key={i} />);
//   }
//   return cards
// }

export default Card


// function Card() {
//   return (
//     <div className="card">
//       <div className="card__content">
//         <p className="card__content--title">Titre de la location</p>
//       </div>
//     </div>
//   )
// }
