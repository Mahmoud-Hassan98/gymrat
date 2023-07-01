import "./about.css"
import { Link } from "react-router-dom";

export default function About() {
  return (

<>

<div className="about_gymrat">
<header>
  <div className="darken-bg">
    <div className="header">
    
      <div className="container">
      <br />
        <div className="header-logo">
          <div>
            <img
              className="logo"
              src="../../../image/logo3.png"
              height="60x"
              width="130px"
            />
            <img className="search" src="/image/search.png" />
          </div>
          <div className="button">
            <section className="about-section">
              <div className="social-icons">
                <a href="facebook">
                  <img src="/image/about_image/11.png" alt="" />
                </a>
                <a href="twitter">
                  <img src="/image/about_image/22.png" alt="" />
                </a>
                <a href="instagram">
                  <img src="/image/about_image/33.png" alt="" />
                </a>
              </div>
            </section>
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul id="header-links" className="navbar-nav mx-auto">
                <li className="nav-item">

                <Link to="/" className="nav-link active" aria-current="page">
                <img src="/image/home-img.png" alt="Home" />
                Home
              </Link>
                </li>
                <li className="nav-item">
                <Link to="/Productstore" className="nav-link">
                <img src="/image/store-img.png" alt="Store" />
                Store
              </Link>
                </li>
                <li className="nav-item">
                <Link to="/Coach" className="nav-link">
                    <img src="/image/coach.png" alt="Coach" />
                    Coach
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/Personal" className="nav-link">
                    <img
                      src="/image/pr-img.png"
                      alt="Personal Records (PR)"
                    />
                    Personal Records (PR)
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link">
                    <img src="/image/about-img.png" alt="About" />
                    About
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <br />
    <div className="title">
      <h1>ABOUT US</h1>
    </div>
    <br />
    <br />
  </div>
</header>


  <main>
    <div className="full-width">
      <div className="about-us">
        <p>
          From our industrial birthplace in Stevenage, Rise Gym has grown to
          become Hertfordshire’s premier fitness community. With
          state-of-the-art equipment and contemporary classes in an inclusive
          atmosphere, Rise is like no other gym outside of London. <br /> <br />{" "}
          Our new, second site in the heart of Welwyn Garden City takes our
          ethos up a notch. We’ve combined the elements that make us so great
          with our renewed commitment to advancing your health and wellbeing.
          We’ve invested in some of the world’s best fitness equipment to
          optimise your workouts. Our various exercise classes are designed to
          empower you through the many benefits of group fitness.{" "}
        </p>
      </div>
    </div>
    <div className="darken-bg2">
      <div className="full-width2">
        <div className="about2">
          <p>
            At our core, we’re a strength and conditioning gym but we recognise
            the latest fitness trends. We’ve tapped into the
            increasingly-popular yoga, spin and HIIT markets to bring fitness
            fans of all abilities the workout they crave.
          </p>
        </div>
      </div>
    </div>
    <div className="containerdd">
      <div className="image" />
      <div className="content">
        <h1>Our Members</h1>
        <p>
          We understand that the atmosphere in a gym is everything and with that
          in mind we encourage an attitude of friendliness, support and
          cohesion. We believe truly that ‘We Rise By Lifting Others’ so you can
          be sure that when training at Rise you won’t feel intimidated or out
          of place.
        </p>
      </div>
    </div>
  </main>
  
  <footer>
    <div className="footer-links">
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
      <a href="#">About us</a>
    </div>
  </footer>


</div>



</>




  )
}
