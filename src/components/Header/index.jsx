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
    } else {
      setActiveLink("")
    }
  }, [location])

  return (
    <nav className="navbar">
      <Link to='/'><img src={Logo} alt="Logo Kasa" width={143.32} height={46}/></Link>
      <div className="navbar__link">
        <Link to='/' className={activeLink === 'homepage' ? 'active' : ''}>Accueil</Link>
        <Link to='/about' className={activeLink === 'about' ? 'active' : ''}>A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
