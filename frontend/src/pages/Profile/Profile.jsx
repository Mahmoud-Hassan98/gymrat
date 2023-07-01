import React, { useState } from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import Homeprofile from "../../Components/profilepage/homeprofile";
import { BsStarFill } from "react-icons/bs";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtDecode from "jwt-decode";
import { FaUser } from 'react-icons/fa';
import Mytrainees from '../../Components/profilepage/Mytrainees';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Formcoach from '../../Components/profilepage/Formcoach';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import Mycoach from '../../Components/profilepage/Mycoach';

export default function Profile() {
  const [activeLink, setActiveLink] = useState('home');
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { role } = decodedToken;

  const handleLinkClick = (link) => {
    setActiveLink(link);

    if (link === 'logout') {
      // Remove token from localStorage
      localStorage.removeItem('token');

      // Navigate to homepage
      window.location.href = '/'; // Replace '/' with the desired homepage URL
    }
  };

  const renderComponent = () => {
    if (activeLink === 'home') {
      return <Homeprofile />;
    } else if (activeLink === 'Join us') {
      return <Formcoach />;
    } else if (activeLink === 'coach') {
      return <Mycoach/>;
    } else if (activeLink === 'My trainees') {
      return <Mytrainees/>;
    }

    return null; // Render nothing if no activeLink matches
  };

  return (
    <>
      <div className="profilepage">
        <header>
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse"
            style={{ backgroundColor: '#282828' }}
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${activeLink === 'home' ? 'active' : ''}`}
                  aria-current="true"
                  style={{ backgroundColor: '#282828', color: activeLink === 'home' ? '#FFDD00' : '#FFFFFF' }}
                  onClick={() => handleLinkClick('home')}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="me-3"
                    style={{ color: activeLink === 'home' ? '#FFDD00' : '#FFFFFF' }}
                  />
                  <span>Home</span>
                </a>

                {role !== 'coach' && (
                  <a
                    href="#"
                    className={`list-group-item list-group-item-action ${activeLink === 'coach' ? 'active' : ''}`}
                    aria-current="true"
                    style={{ backgroundColor: '#282828', color: activeLink === 'coach' ? '#FFDD00' : '#FFFFFF' }}
                    onClick={() => handleLinkClick('coach')}
                  >
                    <FaUser 
                      icon={faHome}
                      className="me-3"
                      style={{ color: activeLink === 'coach' ? '#FFDD00' : '#FFFFFF' }}
                    />
                    <span>My Coach</span>
                  </a>
                )}

                {role !== 'user' && (
                  <a
                    href="#"
                    className={`list-group-item list-group-item-action ${activeLink === 'My trainees' ? 'active' : ''}`}
                    style={{ backgroundColor: '#282828', color: activeLink === 'My trainees' ? '#FFDD00' : '#FFFFFF' }}
                    onClick={() => handleLinkClick('My trainees')}
                  >
                    <FaUser 
                      className="me-3"
                      style={{ color: activeLink === 'My trainees' ? '#FFDD00' : '#FFFFFF' }}
                    />
                    <span>My trainees</span>
                  </a>
                )}

                {role !== 'user' && (
                  <a
                    href="#"
                    className={`list-group-item list-group-item-action ${activeLink === 'Join us' ? 'active' : ''}`}
                    style={{ backgroundColor: '#282828', color: activeLink === 'Join us' ? '#FFDD00' : '#FFFFFF' }}
                    onClick={() => handleLinkClick('Join us')}
                  >
                  <FontAwesomeIcon
                  icon={faFileAlt}
                  className="me-3"
                  style={{ color: activeLink === 'Join us' ? '#FFDD00' : '#FFFFFF' }}
                />
                    <span>Join us</span>
                  </a>
                )}

         

                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${activeLink === 'help' ? 'active' : ''}`}
                  style={{ backgroundColor: '#282828', color: activeLink === 'help' ? '#FFDD00' : '#FFFFFF' }}
                  onClick={() => handleLinkClick('help')}
                >
                  <MdOutlineHelp
                    className="me-3"
                    style={{ color: activeLink === 'help' ? '#FFDD00' : '#FFFFFF' ,  fontSize: '20px' }}
                  />
                  <span>Help</span>
                </a>


                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${activeLink === 'logout' ? 'active' : ''}`}
                  style={{ backgroundColor: '#282828', color: activeLink === 'logout' ? '#FFDD00' : '#FFFFFF' }}
                  onClick={() => handleLinkClick('logout')}
                >
                  <RiLogoutBoxRFill
                    className="me-3"
                    style={{ color: activeLink === 'logout' ? '#FFDD00' : '#FFFFFF' }}
                  />
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Navbar here */}

          <nav
id="main-navbar"
className="navbar navbar-expand-lg navbar-light bg-black fixed-top"
>
{/* Container wrapper */}
<div className="container-fluid">
  {/* Toggle button */}
  <button
    className="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#sidebarMenu"
    aria-controls="sidebarMenu"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <FontAwesomeIcon icon={faBars} style={{ color: '#FFDD00' }} />
  </button>
  {/* Brand */}
  <Link to ="/">
  <img
    src="../../../image/profile/Untitled-removebg-preview 1 (3).png"
    height={40}
    alt="gymrat"
    loading="lazy"
  />
</Link>


  {/* Search form */}
  <form className="d-none d-md-flex input-group w-auto my-auto">
    <input
      autoComplete="off"
      type="search"
      className="form-control rounded"
      placeholder="Search"
      style={{ minWidth: 225 }}
    />
    <span className="input-group-text border-0" style={{ backgroundColor: 'black' }}>
      <FontAwesomeIcon icon={faSearch} style={{ color: '#FFDD00' }} />
    </span>
  </form>
  {/* Right links */}
  <ul className="navbar-nav ms-auto d-flex flex-row">
    {/* Avatar */}
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
          className="rounded-circle"
          height={22}
          alt="Avatar"
          loading="lazy"
        />
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a className="dropdown-item" href="#">
            My profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Logout
          </a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</nav>



        </header>
        {renderComponent()}
      </div>
    </>
  );
}


