
import Store_navbar from "../../Components/Headers/Store-navbar"
import Footer from "../../Components/Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';




import "./store.css"
export default function Store() {
  return (

<>

<Store_navbar/>
<main>
<div className="store_sections">
  <div className="container">
    <section id="portfolio">
      <div className="container">
        <h3 className="sub-title">
          SHOP <span>COLLECTIONS</span>
        </h3>
        <p />
        <div className="protfolio-grid" id="Port-img123">
          {/* img 1 */}
          <div className="portfolio-item">
            <div className="port-img-box">
              <img src="/image/store_image/Strength.jpg" className="img-fluid" />
            </div>
            <div className="port-img-info">
              <h2>Portfolio Project </h2>
              <h2>View project</h2>
              <a href="https://github.com/Mahmoud-Hassan98/Portfolio">
                {" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

              </a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="port-img-box">
              <img src="/image/store_image/Weights.jpg" className="img-fluid" />
            </div>
            <div className="port-img-info">
              <h2>mockup-and-wireframe</h2>
              <h2>View project</h2>
              <a href="https://github.com/Mahmoud-Hassan98/mockup-and-wireframe">
                {" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

              </a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="port-img-box">
              <img src="/image/store_image/Cardio.jpg" className="img-fluid" />
            </div>
            <div className="port-img-info">
              <h2>View project</h2>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <br />
  <br />
  <br />
  {/* section one end  */}
  <br />
  <br />

  <div className="container">
  <div className="containder">
    <div className="OUR-COACH">
      <div className="NEW-PRODUCTS">
        <p className="text-with-line">NEW PRODUCTS</p>
      </div>
      <br />
      <div className="centered-dotted-line" />
      <div className="card-grid">
        <div className="card">
          <img className="img1" src="/image/store_image/one1.png" alt="T-Shirt" />
          <h2 className="clothing-name">SPRI Balance Trainer Sport</h2>
          <p className="clothing-price">$19.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one2.png" alt="Jeans" />
          <h2 className="clothing-name">SPRI Balance Trainer Pro</h2>
          <p className="clothing-price">$49.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one3.png" alt="Hoodie" />
          <h2 className="clothing-name">
            Echelon Reflect Touch Fitness Mirror
          </h2>
          <p className="clothing-price">$39.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one4.png" alt="Sneakers" />
          <h2 className="clothing-name">
            Echelon Row-s Connected Rowing Machine
          </h2>
          <p className="clothing-price">$69.99</p>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  {/* section two end  */}
  {/* section 3 start   */}
  
  <div className="containder">
    <div className="OUR-COACH">
      <div className="NEW-PRODUCTS">
        <p className="text-with-line">SPECIALS &amp; OVERSTOCK </p>
      </div>
      <br />
      <div className="centered-dotted-line" />
      <div className="card-grid">
        <div className="card">
          <img className="img1" src="/image/store_image/one3.png" alt="T-Shirt" />
          <h2 className="clothing-name">SPRI Balance Trainer Sport</h2>
          <p className="clothing-price">$19.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one2.png" alt="Jeans" />
          <h2 className="clothing-name">SPRI Balance Trainer Pro</h2>
          <p className="clothing-price">$49.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one1.png" alt="Hoodie" />
          <h2 className="clothing-name">
            Echelon Reflect Touch Fitness Mirror
          </h2>
          <p className="clothing-price">$39.99</p>
        </div>
        <div className="card">
          <img className="img1" src="/image/store_image/one4.png" alt="Sneakers" />
          <h2 className="clothing-name">
            Echelon Row-s Connected Rowing Machine
          </h2>
          <p className="clothing-price">$69.99</p>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>






</main>

<Footer/>

</>
  )
}
