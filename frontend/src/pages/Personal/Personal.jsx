import "./Personal.css"
import "../About/about.css"
import "../../Components/Headers/MainHeader.css"
import { Link } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
export default function Personal() {
  return (

    <>
    
    
    <div className='headermainpages'>
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
              className="active"
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
                src="../../../image/PR/Screenshot (3) 1.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Personal Record</h5>
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
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <div className="header-logo">
            <div>
              <img
                className="logo"
                src="../../../image/logo.png"
                height="150px"
                width="200px"
                alt="Logo"
              />
              <img
                className="search"
                src="../../../image/search.png"
                alt="Search"
              />
            </div>
            <div className="button">
            <Link to="/Signup">
            <button className="button-5" role="button">
              Join Us
            </button>
          </Link>
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
                  <Link to="/" className="nav-link active" aria-current="page">
                  <img src="../../../image/home-img.png" alt="Home" />
                  Home
                </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Productstore" className="nav-link">
                  <img src="../../../image/store-img.png" alt="Store" />
                  Store
                </Link>
                  </li>
                  <li className="nav-item">
                   <Link to="/Coach" className="nav-link">
                      <img src="../../../image/coach.png" alt="Coach" />
                      Coach
                      </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Personal" className="nav-link">
                  <img
                    src='../../../image/pr-img.png'
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
  

    
    <div className="prpage">
    
    <div className="containerdd">
      <div className="content">
        <h1 id="abouuth1">What’s Your PR?</h1>
        <p id="abouut">
          PR, or Personal Record, is a reference to a person specific to the movement, task, or tasks in which they are doing. PRs should be objective for their reference of measure of deciding what is impactful to measure is entirely a subjective decision. For example, “ I was able to make it to the gym 24 days this month. That’s a PR!“ we love that measurement and accountability to your own self-care.
        </p>
      </div>
      <div className="image" />
    </div>
    <div className="prsub">
    <p className="submitt">
      <span className="ya-text">Submit your PR</span> for evaluation :
    </p>
  </div>
    <div className="container">
    
      <div className="itemm">
        <img src="../../../image/PR/1.png" alt="Image 1" />
        <div className="contents">
          <h3>Bench Press</h3>
          <p>Current PR - <span>140KG/315lb</span></p>
          <button>Choose..</button>
        </div>
      </div>
      <div className="itemm">
        <img src="../../../image/PR/2.png" alt="Image 2" />
        <div className="contents">
          <h3>Shoulder Press</h3>
          <p>Current PR - <span>220KG/484lb</span></p>
          <button>Choose..</button>
        </div>
      </div>
      <div className="itemm">
        <img src="../../../image/PR/3.png" alt="Image 3" />
        <div className="contents">
          <h3>Dead-lift</h3>
          <p>Current PR - <span>100KG/225lb</span></p>
          <button>Choose..</button>
        </div>
      </div>
      <div className="itemm" id="item44">
        <img src="../../../image/PR/4.png" alt="Image 4" />
        <div className="contents">
          <h3>Squat</h3>
          <p>Current PR - <span>140KG/315lb</span></p>
          <button>Choose..</button>
        </div>
      </div>
    </div>

    <div className="button-container">
    <button className="centered-button">Upload Now</button>
  </div>
  
  <div className="text-container">
  <p className="centered-text">
    <span className="blue-text">Remember</span>, If you can pick it up its
    lightweight.
  </p>
</div>


    
  </div>

<br/><br/>
<br/>

    <Footer/>


  


     
    </>
  );
}
