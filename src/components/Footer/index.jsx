import React from "react";
import Logo from "../../assets/LOGO-White.png";
import '../../styles/layout/_footer.scss'

function Footer() {
  return (
    <footer className="footerbar">
      <img src={Logo} alt="Logo Kasa" width={60} height={20}/>
      <div className="">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
