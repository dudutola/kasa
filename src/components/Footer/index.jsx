import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO-White.png";
import '../../styles/layout/_footer.scss'

function Footer() {
  return (
    <footer className="footerbar">
      <nav>
        <Link to='/'><img src={Logo} alt="Logo Kasa" width={88} height={30}/></Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </nav>
    </footer>
  )
}

export default Footer
