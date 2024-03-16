import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import '../../styles/layout/_header.scss'

function Header() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo Kasa" width={143.32} height={46}/>
      <div className="navbar-link">
        <Link to='/'>Accueil</Link>
        <Link to=''>A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
