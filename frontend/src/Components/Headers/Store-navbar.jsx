import "./Store-navbar.css"
import { Link } from "react-router-dom";

export default function Store_navbar() {
  return (
   
<>
<header>
  {/* headers start */}
 
  <div className=" Store-navbar">
  <div className="top-header">
    <div className="containder">
      <div className="header-logo">
        <div>
          <img
            className="logo"
            src="/image/logo.png"
            height="105px"
            width="194px"
          />
          <img className="search" src="/image/search.png" />
        </div>
        <div className="button-navbar">
          <div className="button">
            <button className="btn">
              <div className="img-text">
                <img src="/image/store_image/cart.png" alt="" />
                <span>$0.00 (0)</span>
              </div>
            </button>
          </div>
          <div className="button">
            <button className="btn1">
              <div className="img-text">
                <img src="/image/store_image/account.png" alt="" />
                <span>Account</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="down-header">
    <div className="containder">
      <nav id="linkss" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul id="header-links" className="navbar-nav mx-auto navbar-grid">
              <li className="nav-item">
              
              <Link to="/" className="nav-link active" aria-current="page">
              <img src="/image/store_image/HOME.png" alt="Home" />
              <span>Home</span>
             </Link>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <img src="/image/store_image/Cardio.png" />
                  <span>Cardio</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  <img src="/image/store_image/Strength.png" />
                  <span>Strength</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <img src="/image/store_image/Weights.png" />
                  <span>Weights</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <img src="/image/store_image/Accessories.png" />
                  <span>Accessories</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  </div>
  {/* headers end */}
</header>


</>


  )
}
