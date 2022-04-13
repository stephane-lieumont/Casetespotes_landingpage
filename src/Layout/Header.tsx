import { FunctionComponent } from "react"
import Logo from '../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <svg><use xlinkHref={Logo + '#logo'}></use></svg>
      </Link>
      <nav>
        <ul>          
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/a-propos">A propos</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Pré-inscription</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header