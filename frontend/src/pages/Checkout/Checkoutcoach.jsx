import React from 'react';
import "./checkout.css";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Checkoutcoach() {
  // Retrieve the coach data from local storage
  const subscribedCoach = JSON.parse(localStorage.getItem("subscribedCoach"));

  const url = window.location.href;
  const coachid = parseInt(url.split("/").pop(), 10);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id; // Assuming the user ID is stored in the token

      const totalPrice = 30;

      const payload = {
        userId: userId,
        coachid: coachid,
        totalPrice: totalPrice,
      };

      // Make the POST request to your server with the payload
      fetch('http://localhost:8000/payment/paymentcoach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log(data);
          swal("Payment Successful", "You have successfully subscribed!", "success").then(() => {
            navigate('/'); // Redirect to homepage
          });
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error(error);
          swal("Payment Failed", "An error occurred while processing your payment.", "error");
        });
    }
  };
  return (
    <>
      <div className="Checkoutgymrat">
        <div className="container">
          <div className="wrapper">
            <div className="checkout-text">
              <div className="back-to-home">
                <Link to="/Productstore/"> Back to Store</Link>
                <img
                  src="https://img.icons8.com/sf-regular/48/aaaaaa/forward.png"
                  alt="Arrow"
                  height="15px"
                  width="15px"
                />
                <a href="">Payment</a>
              </div>
              <div className="pay-button">
                <button>
                  <img
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
                    alt="Apple-Pay"
                    height="20px"
                    width="20px"
                  />
                  <span>Pay</span>
                </button>
              </div>
              <div className="or-line">
                <p>Or pay with card</p>
              </div>
              <div className="card-details">
                <label>Card details</label>
                <div className="card-number">
                  <input type="number" placeholder="4242 4242 4242 4242" />
                  <div>
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      height="20px"
                      width="20px"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/mastercard.png"
                      height="20px"
                      width="20px"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/amex.png"
                      height="20px"
                      width="20px"
                    />
                  </div>
                </div>
                <div className="card-info">
                  <div className="mm-yy">
                    <input type="number" placeholder="MM / YY" />
                  </div>
                  <div className="cvc">
                    <input type="number" placeholder="CVC" />
                    <img
                      src="https://img.icons8.com/ios/50/000000/card-verification-value.png"
                      height="20px"
                      width="20px"
                    />
                  </div>
                </div>
              </div>
              <div className="owner-name">
                <label>Owner name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="country-region">
                <label>Country or region</label>
                <select>
                  <option>United States</option>
                  <option>Morocco</option>
                  <option>China</option>
                </select>
                <input type="number" placeholder="Zip code" />
              </div>
              <button className="buy-button"  onClick={handleCheckout}>Subscribe $30</button>
            </div>

            <br />

            <div className="shopping-cart">
              <div className="title">Subscribe With Coach</div>
              {/* Render cart items */}
              {subscribedCoach && (
                <div className="item">
                  <div className="image">
                    <img
                      src={`data:image/jpeg;base64,${subscribedCoach.images[0]}`}
                      alt=""
                      style={{ width: '150px', height: '150px', borderRadius: '5%' }}
                    />
                  </div>
                  <div className="description">
                    <span>  {subscribedCoach.first_name }</span>
                    <span>(Monthly)</span>
                    <span>Coach</span>
                  </div>
                  <div className="total-price">$30</div>
                </div>
              )}

            </div>
          </div>
        </div>
   
      </div>
    </>
  );
}
