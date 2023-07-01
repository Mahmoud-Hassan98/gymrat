import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Headers/Navbar";
import "../../Components/Headers/MainHeader.css";
import swal from 'sweetalert';
import axios from "axios";
import "./Coach.css";
import "../Homepage/homepage.css";

export default function Coach() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/coach/getcoach")
      .then((response) => response.json())
      .then((data) => {
        
        if (Array.isArray(data)) {
          setCoaches(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);

  const handleSubscribe = async (coachId) => {
    // Find the coach with the given ID
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const coach = coaches.find((coach) => coach.id === coachId);
    if (coach) {
      // Store the coach data in localStorage
      localStorage.setItem("subscribedCoach", JSON.stringify(coach));
  
      // Make an HTTP POST request to the backend endpoint
      fetch("http://localhost:8000/payment/checkcoach", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Subscription status:", data);
          // Check if the user is not subscribed to any coach
          if (data.isSubscribed) {
            swal("You are already subscribed to a coach!", "", "success");
          } else {
            // User is not subscribed, navigate to the checkout page
            window.location.href = "/Checkoutcoach/" + coachId;
          }
        })
        .catch((error) => {
          console.error("Error retrieving subscription status:", error);
          // Handle the error
        });
    }
  };

  return (
    <>
      <Navbar />

      <div className="coachcards">
        <div className="container">
          <div className="row">
            {/* Render coach cards based on the fetched data */}
            {coaches.map((coach) => {
              if (coach.deleted) {
                return (
                  <div key={coach.id} className="col-xs-12 col-md-6">
                    {/* product 1 */}
                    <div className="product-content product-wrap clearfix">
                      <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                          <div className="product-image">
                            <img
                              src={`data:image/jpeg;base64,${coach.images[0]}`}
                              alt="194x228"
                              className="img-responsive"
                              style={{ height: "250px" }}
                            />
                            <span className="tag2 hot">New</span>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                          <div className="product-deatil">
                            <h5 className="name">
                              <a href="#">
                                {coach.first_name} {coach.last_name}{" "}
                                <span>Coach</span>
                              </a>
                            </h5>
                            <p className="price-container">
                              <span>$99</span>
                            </p>
                            <span className="tag1" />
                          </div>
                          <div className="description">
                            <p>{coach.details}</p>
                          </div>
                          <div className="product-info smart-form">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <Link className="btn btn-success" onClick={() => handleSubscribe(coach.id)}>
                                  SUBSCRIBE
                                </Link>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="rating">
                                  <label htmlFor="stars-rating-5">
                                    <i className="fa fa-star" />
                                  </label>
                                  <label htmlFor="stars-rating-4">
                                    <i className="fa fa-star" />
                                  </label>
                                  <label htmlFor="stars-rating-3">
                                    <i className="fa fa-star text-primary" />
                                  </label>
                                  <label htmlFor="stars-rating-2">
                                    <i className="fa fa-star text-primary" />
                                  </label>
                                  <label htmlFor="stars-rating-1">
                                    <i className="fa fa-star text-primary" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end product 1 */}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </>
  );
}





// <div className="hompage-shope-coach">
// <div className="OUR-COACH">
// <div className="our-shop">
//   <h2>Start with your coach</h2>
// </div>
// <br />
// <div className="centered-dotted-line" />
// <div className="card-grid">
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach1.png" alt="T-Shirt" />
//     <h2 className="clothing-name">Classic Joe Pullover Hoodie</h2>
//     <p className="clothing-price">$19.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach2.png" alt="Jeans" />
//     <h2 className="clothing-name">Train Crop Fleece Hoodie</h2>
//     <p className="clothing-price">$49.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach3.png" alt="Hoodie" />
//     <h2 className="clothing-name">Muscle Joe Zip Hoodie</h2>
//     <p className="clothing-price">$39.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />{" "}
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
 
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach4.png" alt="Sneakers" />
//     <h2 className="clothing-name">Train Short Sleeve Hoodie</h2>
//     <p className="clothing-price">$69.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
// </div>
// <br />
// <br />
// </div>
// <div className="OUR-COACH">

// <br />
// <div className="card-grid">
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach1.png" alt="T-Shirt" />
//     <h2 className="clothing-name">Classic Joe Pullover Hoodie</h2>
//     <p className="clothing-price">$19.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach2.png" alt="Jeans" />
//     <h2 className="clothing-name">Train Crop Fleece Hoodie</h2>
//     <p className="clothing-price">$49.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach3.png" alt="Hoodie" />
//     <h2 className="clothing-name">Muscle Joe Zip Hoodie</h2>
//     <p className="clothing-price">$39.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />{" "}
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
//   <div className="card">
//     <img className="img1" src="../../../image/main_image/coach4.png" alt="Sneakers" />
//     <h2 className="clothing-name">Train Short Sleeve Hoodie</h2>
//     <p className="clothing-price">$69.99</p>
//     <div>
//       <img src="../../../image/main_image/rate.png" alt="" />
//       <p className="reviews">80reviews</p>
//     </div>
//   </div>
// </div>
// <br />
// <br />
// </div>
// <div className="button">
// <button className="button-5" role="button">
//   More
// </button>
// </div>

// </div>