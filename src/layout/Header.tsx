import React, { FunctionComponent, useState, useEffect } from "react"
import Logo from '../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { HeaderProps } from "../types/Components.intf"
import RoutesLD from "../routes/Routes"

const Header: FunctionComponent<HeaderProps> = ({minifyHeader = false}) => {
  const [minify, setMinify] = useState<boolean>(minifyHeader)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    setMinify(minifyHeader)
  }, [minifyHeader])
  
  return (
    <header className={`${minify ? 'header-minimizer' : ''}`}>
      <Link to="/" className="logo">
        <svg><use xlinkHref={Logo + '#logo'}></use></svg>
      </Link>
      <nav>
        <div onClick={() => setShowMenu(!showMenu)} className={`hamburger ${ showMenu ? 'is-active' : '' }`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul>
          { RoutesLD.routesLDO.map(({path, label}) => (
            label ? (
              <li key={path}><NavLink onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? 'active' : '')} to={path}>{label}</NavLink></li>
            ): null
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header