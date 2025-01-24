import { faHandHoldingHeart, faHeart, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dashboard.css';
const NavBar: React.FC = () => {
    return (
        <> <nav className="navbar  navbar-expand-lg  sticky-top primary-red-bg" id='dashboard'>
            <div className="container">
                <div  className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img src='/Image/placeholder-lady.png' className='img-fluid profileImage px-2'/>
                    </div>
                    <NavLink className="navbar-brand text-uppercase fs-4 text-white" to="/dashboard">Vivaha Divine</NavLink>
                </div>

                <div className="text-center collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                        <li className="nav-item px-2 fs-6">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                                <FontAwesomeIcon icon={faUsers} /> Search
                            </NavLink>
                        </li>

                        <li className="nav-item px-2 fs-6">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                            <FontAwesomeIcon icon={faHandHoldingHeart} /> Partner Preferences</NavLink>
                        </li>

                        <li className="nav-item px-2 fs-6">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                            <FontAwesomeIcon icon={faHandHoldingHeart} /> Profile I Liked</NavLink>
                        </li>

                        <li className="nav-item px-2 fs-6 ">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                            <FontAwesomeIcon icon={faHeart} /> Profile liked me</NavLink>
                        </li>

                        <li className="nav-item px-2 fs-6 ">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                            <FontAwesomeIcon icon={faHeart} />Like Each Other</NavLink>
                        </li>

                        <li className="nav-item px-2 fs-6">
                            <NavLink className={(isActive) => `nav-link ${isActive ? 'active' : ''} fw-semi-bold text-white`} to="/">
                            <FontAwesomeIcon icon={faRightFromBracket} />Logout</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar