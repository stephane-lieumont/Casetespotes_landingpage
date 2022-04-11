import { FunctionComponent } from "react"
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/" className="logo">Test
      </Link>
      <nav>
        <ul>          
          <li>Acceuil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header