import { NavLink, Outlet } from 'react-router-dom'
import './Nobility.css'
import React from 'react'
import NobilityRoutes from '../../components/NobilityRoutes/NobilityRoutes'

const Nobility = () => {

  const links = [
    { to: '/nobility/kings', label: 'Kings' },
    { to: '/nobility/queens', label: 'Queens' },
    { to: '/nobility/lords', label: 'Lords' },
    { to: '/nobility/ladies', label: 'Ladies' },
  ];

  return (
    <>
      <nav>
        <ul className='nobilityUl'>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} activeClassName='active'>
                {link.label}
              </NavLink>
            </li>
          ))}
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
