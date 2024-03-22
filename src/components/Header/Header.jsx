import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              All Characters
            </NavLink>
          </li>
          <li>
            <NavLink to='/nobility' activeClassName='active'>
              Nobility
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
