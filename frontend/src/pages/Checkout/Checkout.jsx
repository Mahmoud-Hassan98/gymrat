import "./checkout.css"
import { IoMdAdd } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(existingCartItems);
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.counter;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id; // Assuming the user ID is stored in the token

      const cartItemIds = cartItems.map((item) => item.id); // Assuming the cart item IDs are stored in the 'id' property of each item
      const totalPrice = calculateTotalPrice();

      const payload = {
        userId: userId,
        cartItemIds: cartItemIds,
        totalPrice: totalPrice,
      };
             console.log(userId);
      // Make the POST request to your server with the payload
      fetch('http://localhost:8000/payment/paymentproducts', {
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
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error(error);
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
      <Link to = "/Productstore/"> Back to Store</Link>
      
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
      <button className="buy-button"  onClick={handleCheckout} >Pay ${calculateTotalPrice()}</button>
    </div>

    <br/>
     

    <div className="shopping-cart">
    <div className="title">Shopping Bag</div>
    {/* Render cart items */}
    {cartItems.map((item, index) => (
      <div className="item" key={index}>
        <div className="image">
          <img
            src={`data:image/jpeg;base64,${item.images[0]}`}
            alt=""
            style={{ width: '100px', height: '100px', borderRadius: '5%' }}
          />
        </div>
        <div className="description">
          <span>{item.name}</span>
          <span>2XL</span>
          <span>White</span>
        </div>
        <div className="quantity">
          <button className="plus-btn" type="button" name="button">
            <AiOutlineMinus style={{ color: 'black' }} />
          </button>
          <input type="text" name="name" defaultValue={item.counter} />
          <button className="minus-btn">
            <IoMdAdd style={{ color: 'black' }} />
          </button>
        </div>
        <div className="total-price">${item.price * item.counter}</div>
      </div>
    ))}

    <div className="total-price" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Total:</span>
    <span style={{ marginLeft: 'auto' }}>${calculateTotalPrice()}</span>
  </div>
  
    </div>
</div>

<h5>
  © <b>GymRAT</b> - 2023 - Made by{" Mahmoud"}
</h5>
</div>
</div>

  
  </>
  )
}
