import "./homepage.css"
import MainHeader from '../../Components/Headers/MainHeader'
import { Link } from "react-router-dom";

import Footer from '../../Components/Footer/Footer'

export default function Homepage() {
  return (
   
    <>
    <MainHeader/>
    
    
    <main>
    {/* shop section start  */}
    <div className="container">
    <div className="hompage-shope-coach">
    <div className="OUR-SHOP">
    
      <div className="our-shop">
        <h2>EXPLORE OUR SHOP</h2>
      </div>
      <br />
      <div className="centered-dotted-line" />
      <div className="card-grid">
      <Link to="/Product"style={{ textDecoration: "none" }}>
        <div className="card">
          <img className="img1" src="../../../image/main_image/gym1.png" alt="T-Shirt" />
          <h2 className="clothing-name">Classic Joe Pullover Hoodie</h2>
          <p className="clothing-price">$19.99</p>
          <div>
            <img src="../../../image/main_image/color3.png" alt="" />
            <img src="../../../image/main_image/color2.png" alt="" />{" "}
            <img src="../../../image/main_image/color1.png" alt="" />{" "}
          </div>
        </div>
        </Link>
        <div className="card">
          <img className="img1" src="../../../image/main_image/gym2.png" alt="Jeans" />
          <h2 className="clothing-name">Train Crop Fleece Hoodie</h2>
          <p className="clothing-price">$49.99</p>
          <div>
            <img src="../../../image/main_image/color2.png" alt="" />{" "}
            <img src="../../../image/main_image/color1.png" alt="" />
          </div>
        </div>
        <div className="card">
          <img className="img1" src="../../../image/main_image/gym3.png" alt="Hoodie" />
          <h2 className="clothing-name">Muscle Joe Zip Hoodie</h2>
          <p className="clothing-price">$39.99</p>
          <div>
            <img src="../../../image/main_image/color1.png" alt="" />{" "}
            <img src="../../../image/main_image/color1.png" alt="" />
          </div>
        </div>
        <div className="card">
          <img className="img1" src="../../../image/main_image/gym4.png" alt="Sneakers" />
          <h2 className="clothing-name">Train Short Sleeve Hoodie</h2>
          <p className="clothing-price">$69.99</p>
          <div>
            <img src="../../../image/main_image/color1.png" alt="" />{" "}
            <img src="../../../image/main_image/color1.png" alt="" />
          </div>
        </div>
      </div>
      <br />
      <div className="button">
        <button className="button-5" role="button">
          View all
        </button>
      </div>
    </div>
    <br />
    <br />
    {/* shop section end */}
    {/* coach  section start  */}
    <div className="OUR-COACH">
      <div className="our-shop">
        <h2>FIND YOUR COACH</h2>
      </div>
      <br />
      <div className="centered-dotted-line" />
      <div className="card-grid">
        <div className="card">
          <img className="img1" src="../../../image/main_image/coach1.png" alt="T-Shirt" />
          <h2 className="clothing-name">Classic Joe Pullover Hoodie</h2>
          <p className="clothing-price">$19.99</p>
          <div>
            <img src="../../../image/main_image/rate.png" alt="" />
            <p className="reviews">80reviews</p>
          </div>
        </div>
        <div className="card">
          <img className="img1" src="../../../image/main_image/coach2.png" alt="Jeans" />
          <h2 className="clothing-name">Train Crop Fleece Hoodie</h2>
          <p className="clothing-price">$49.99</p>
          <div>
            <img src="../../../image/main_image/rate.png" alt="" />
            <p className="reviews">80reviews</p>
          </div>
        </div>
        <div className="card">
          <img className="img1" src="../../../image/main_image/coach3.png" alt="Hoodie" />
          <h2 className="clothing-name">Muscle Joe Zip Hoodie</h2>
          <p className="clothing-price">$39.99</p>
          <div>
            <img src="../../../image/main_image/rate.png" alt="" />{" "}
            <p className="reviews">80reviews</p>
          </div>
        </div>
        <div className="card">
          <img className="img1" src="../../../image/main_image/coach4.png" alt="Sneakers" />
          <h2 className="clothing-name">Train Short Sleeve Hoodie</h2>
          <p className="clothing-price">$69.99</p>
          <div>
            <img src="../../../image/main_image/rate.png" alt="" />
            <p className="reviews">80reviews</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="button">
        <button className="button-5" role="button">
          View all
        </button>
      </div>
    </div>
    </div>
    </div>
    {/* coach  section end  */}
    <br />
    <br />
    <br />
    <br />
    <br />
  </main>
    <Footer/>

    </>

  )
}
