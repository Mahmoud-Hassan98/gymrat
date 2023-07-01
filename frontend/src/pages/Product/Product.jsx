import React, { useEffect, useState } from "react";
import { BsStarFill } from 'react-icons/bs';
import Navbar from "../../Components/Headers/Navbar";
import "./Product.css";
import "../Store/store.css";

export default function Product() {
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

  const url = window.location.href;
  const id = parseInt(url.split("/").pop(), 10);
  const product = products.find((product) => product.id === id);
  let price;
  if (product) {
    price = product.price;
  }

  return (
    <>
      <Navbar />
      <div className="product_page">

      {product ? (
        <div className="productpage" key={product.id}>
          <div className="containerr">
            <div className="single-product">
              <div className="row">
                <div className="col-6">
                  <div className="product-image">
                    <div className="product-image-main">
                      <img src={`data:image/jpeg;base64,${product.images[0]}`} alt="" id="product-main-image" />
                    </div>
                    <div className="product-image-slider">
                      <img src={`data:image/jpeg;base64,${product.images[1]}`} alt="" className="image-list" />
                      <img src={`data:image/jpeg;base64,${product.images[2]}`} alt="" className="image-list" />
                      <img src={`data:image/jpeg;base64,${product.images[3]}`} alt="" className="image-list" />
                      <img src={`data:image/jpeg;base64,${product.images[4]}`} alt="" className="image-list" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="breadcrumb">
                    <span>
                      <a href="#">Store</a>
                    </span>
                    <span>
                      <a href="#">Product</a>
                    </span>
                    <span className="active">T-shirt</span>
                  </div>
                  <div className="product">
                    <div className="product-title">
                      <h2>{product.name}</h2>
                    </div>
                    <div className="product-rating">
                      <span>
                        <BsStarFill />
                      </span>
                      <span>
                        <BsStarFill />
                      </span>
                      <span>
                        <BsStarFill />
                      </span>
                      <span>
                        <BsStarFill />
                      </span>
                      <span>
                        <BsStarFill />
                      </span>
                      <span className="review">(47 Review)</span>
                    </div>
                    <div className="product-price">
                      <span className="offer-price">${product.price}</span>
                      <span className="sale-price">$129.00</span>
                    </div>
                    <div className="product-details">
                      <h3>Description</h3>
                      <p>
                        {product.details}
                      </p>
                    </div>
                    <div className="product-size">
                      <h4 className="sizee">Size</h4>
                      <div className="size-layout">
                        <input
                          type="radio"
                          name="size"
                          defaultValue="S"
                          id={1}
                          className="size-input"
                        />
                        <label htmlFor={1} className="size">
                          S
                        </label>
                        <input
                          type="radio"
                          name="size"
                          defaultValue="M"
                          id={2}
                          className="size-input"
                        />
                        <label htmlFor={2} className="size">
                          M
                        </label>
                        <input
                          type="radio"
                          name="size"
                          defaultValue="L"
                          id={3}
                          className="size-input"
                        />
                        <label htmlFor={3} className="size">
                          L
                        </label>
                        <input
                          type="radio"
                          name="size"
                          defaultValue="XL"
                          id={4}
                          className="size-input"
                        />
                        <label htmlFor={4} className="size">
                          XL
                        </label>
                        <input
                          type="radio"
                          name="size"
                          defaultValue="XXL"
                          id={5}
                          className="size-input"
                        />
                        <label htmlFor={5} className="size">
                          XXL
                        </label>
                      </div>
                    </div>
                    <div className="product-color">
                      <h4 className="cololor">Color</h4>
                      <div className="color-layout">
                        <input
                          type="radio"
                          name="color"
                          defaultValue="black"
                          className="color-input"
                        />
                        <label htmlFor="black" className="black" />
                        <input
                          type="radio"
                          name="color"
                          defaultValue="red"
                          className="color-input"
                        />
                        <label htmlFor="red" className="red" />
                        <input
                          type="radio"
                          name="color"
                          defaultValue="blue"
                          className="color-input"
                        />
                        <label htmlFor="blue" className="blue" />
                      </div>
                    </div>
                    <span className="divider" />
                    <div className="product-btn-group">
                      <div className="button buy-now">
                        <i className="bx bxs-zap" /> Buy Now
                      </div>
                      <div className="button add-cart">
                        <i className="bx bxs-cart" /> Add to Cart
                      </div>
                      <div className="button heart">
                        <i className="bx bxs-heart" /> Add to Wishlist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <br /><br /><br />

      <div className="container">
      <div className="store_sections">
      <div className="containder">
        <div className="OUR-COACH">
          <div className="NEW-PRODUCTS">
            <p className="text-with-line">You may also like</p>
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
      </div>
      </div>
      </div>

    </>
  );
}





