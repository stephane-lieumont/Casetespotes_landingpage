import { FunctionComponent } from "react"
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <svg><use xlinkHref={Logo + '#logo'}></use></svg>
      </Link>
      <nav>
        <ul>          
          <li>A propos</li>
          <li>Contact</li>
          <li>Pré-inscription</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header