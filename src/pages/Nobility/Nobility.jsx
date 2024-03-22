import { NavLink, Outlet } from 'react-router-dom'
import './Nobility.css'
import React from 'react'
import NobilityRoutes from '../../components/NobilityRoutes/NobilityRoutes'

const Nobility = () => {
  return (
    <>
      <nav>
        <ul className='nobilityUl'>
          <li>
            <NavLink to='/nobility/kings' activeClassName='active'>
              Kings
            </NavLink>
          </li>
          <li>
            <NavLink to='/nobility/queens' activeClassName='active'>
              Queens
            </NavLink>
          </li>
          <li>
            <NavLink to='/nobility/lords' activeClassName='active'>
              Lords
            </NavLink>
          </li>
          <li>
            <NavLink to='/nobility/ladies' activeClassName='active'>
              Ladies
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className='nobilitySection'>
        <NobilityRoutes />
        <Outlet />
      </section>
    </>
  )
}

export default Nobility
