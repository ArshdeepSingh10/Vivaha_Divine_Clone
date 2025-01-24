import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id='navbar'>
        <div className="container">
          <div>
            <a className="navbar-brand  fs-1 fw-bold primary-red" href="#">Vivaha Divine</a>
          </div>

          <div className="text-center collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
              <li className="nav-item px-2 fs-6">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">Home</NavLink>
              </li>

              <li className="nav-item px-2 fs-6">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">About</NavLink>
              </li>

              <li className="nav-item px-2 fs-6">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">Success Stories</NavLink>
              </li>

              <li className="nav-item px-2 fs-6 ">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">Process</NavLink>
              </li>

              <li className="nav-item px-2 fs-6 ">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">Features</NavLink>
              </li>

              <li className="nav-item px-2 fs-6">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-semi-bold' : 'nav-link'} to="/">Contact Us</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav;