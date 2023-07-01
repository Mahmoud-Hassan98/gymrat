import "./MainHeader.css";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faCog,
  faDoorOpen,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the token to extract user information
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setUsername(decodedToken.username);
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Update the login status
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="headermainpages">
        <header>
          <div className="header">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../../../image/hero.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>NEVER GIVE UP</h5>
                    <p />
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="../../../image/hero.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Keep Moving </h5>
                    <p />
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="../../../image/hero.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>JOIN US </h5>
                    <p />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="container">
              <br />
              <div className="header-logo">
                <div>
                  <img
                    className="logo"
                    src="../../../image/logo3.png"
                    height="60x"
                    width="130px"
                    alt="Logo"
                  />
                  <img
                    className="search"
                    src="../../../image/search.png"
                    alt="Search"
                  />
                </div>

                <div className="button">
                  {isLoggedIn ? (
                    <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px', marginTop: '18px' }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ffdd00', fontSize: '25px' }} />
                <span className="badge badge-warning" id="lblCartCount">
                  {" "}
                  5{" "}
                </span>
              </div>

                  <span className="usernameee" style={{ marginTop: '-10px' }}>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link hidden-arrow d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                      <FaUser className="w-6 h-6 text-gray-900 dark:text-gray-400" style={{ fontSize: '25px', color: '#ffdd00' }} />

                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="ms-2"
                          style={{ fontSize: '20px', color: '#ffdd00' }}
                        />
                      </a>
              
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuicon">
                        <li>
                          <Link to="/profile" className="dropdown-item">
                            <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FontAwesomeIcon icon={faCog} className="me-2" />
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faDoorOpen} className="me-2" />
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </span>
           
                </div>
              </>
                  ) : (
                    <Link to="/Signup">
                      <button className="button-5" role="button">
                        Join Us
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <nav
                id="linkss"
                className="navbar navbar-expand-lg navbar-dark bg-dark"
              >
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul id="header-links" className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link active"
                          aria-current="page"
                        >
                          <img src="../../../image/home-img.png" alt="Home" />
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="Productstore" className="nav-link">
                          <img src="../../../image/store-img.png" alt="Store" />
                          Store
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="Coach" className="nav-link">
                          <img src="../../../image/coach.png" alt="Coach" />
                          Coach
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="Personal" className="nav-link">
                          <img
                            src="../../../image/pr-img.png"
                            alt="Personal Records (PR)"
                          />
                          Personal Records (PR)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/About" className="nav-link">
                          <img src="../../../image/about-img.png" alt="About" />
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
