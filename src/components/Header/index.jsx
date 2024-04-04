import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import '../../styles/layout/_header.scss'

function Header() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const pathname = location.pathname

    if (pathname === "/") {
      setActiveLink("homepage")
    } else if (pathname === "/about") {
      setActiveLink("about")
    } else if (pathname.startsWith("/accommodation")) {
      setActiveLink("accommodation")
    } else {
      setActiveLink("")
    }
  }, [location])

  return (
    <nav className={`navbar ${activeLink}`}>
      <Link to='/'><img src={Logo} alt="Logo Kasa"/></Link>
      <div className="navbar__link">
        <Link to='/' className={activeLink === 'homepage' ? 'active' : ''}>Accueil</Link>
        <Link to='/about' className={activeLink === 'about' ? 'active' : ''}>A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
