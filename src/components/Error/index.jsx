import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../assets/404.png";
import "../../styles/components/_error.scss";

function Error() {
  return (
    <div className="error">
      <img src={ErrorMessage} alt="Error message 404" className="error__img" />
      <h1 className="error__message">Oups! La page que<br className="error__mobile-only"/> vous demandez n'existe pas.</h1>
      <Link to='/' className="error__back">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
