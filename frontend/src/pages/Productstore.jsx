import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Headers/Navbar";
import "../Components/Headers/Store-navbar.css";
import "../pages/productstore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { BiShoppingBag } from 'react-icons/bi';


export default function Productstore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/product/getproduct")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    // Get the existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Check if the product is already in the cart
    const existingCartItem = existingCartItems.find((item) => item.id === product.id);
  
    if (existingCartItem) {
      // Product is already in the cart
      existingCartItem.counter = (existingCartItem.counter || 0) + 1;
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      alert("Product added to the cart. Counter increased.");
    } else {
      // Add the product to the cart
      const updatedCartItems = [...existingCartItems, { ...product, counter: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      alert("Product added to the cart.");
    }
  };
  

  return (
    <>
      <Navbar />

      <div className="productstore">      
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6" key={product.id}>
              <div className="product-grid">
                <div className="product-image">
                  <Link to={"/Product/" + product.id} className="image">
                    <img
                      className="img-1"
                      src={`data:image/jpeg;base64,${product.images[0]}`}
                      alt="T-Shirt"
                    />
                    <img
                      className="img-2"
                      src={`data:image/jpeg;base64,${product.images[1]}`}
                      alt="T-Shirt"
                    />
                  </Link>
                  <ul className="product-links">
                    <li>
                    <Link to = "/Checkout" onClick={() => handleAddToCart(product)}  >
                      <BiShoppingBag />
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faRandom} />
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleAddToCart(product)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </li>
                  </ul>
                  <Link to={"/Product/" + product.id} className="product-view">
                    <FontAwesomeIcon icon={faSearch} />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to={"/Product/" + product.id}>{product.name}</Link>
                  </h3>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
