import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import '../../styles/layout/_header.scss'

function Header() {
  return (
    <nav className="navbar">
      <Link to='/'><img src={Logo} alt="Logo Kasa" width={143.32} height={46}/></Link>
      <div className="navbar__link">
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
