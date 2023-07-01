import { useState } from "react";
import "./signup.css"
import { Link , useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    
      const data = await response.json();
      
      if (!data.token) {
        // Handle the error when token is missing
        console.error("Token is missing");
        return;
      }

      const token = data.token; // Extract the token from the response data
      console.log(token); // Handle the token
      localStorage.setItem("token", token);
      // Reset the form after successful submission
      setFormData({
        email: "",
        password: ""
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="signupgymrat">
        <header>
          <Link to="/">
            <div className="logo">
              <img
                src="/image/sign-up-in-img/Untitled-removebg-preview 1.png"
                alt="Logo"
              />
            </div>
          </Link>
        </header>
        <br />
        <br />
        <br />
        <main>
          <div className="forms-container">
            <div className="form-spacing" />
            <form action="" className="signin-form" onSubmit={handleSubmit}>
              <div className="headingsContainer">
                <h3 className="tilte1">Sign in</h3>
                <p className="tilte2"> We are so excited to see you again!</p>
              </div>
              <div className="mainContainer">
                <label htmlFor="email">
                  Email or Phone Number <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required=""
                />
                <br />
                <br />
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required=""
                />
                <div className="subcontainer">
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                  <p className="forgotpsd">
                    {" "}
                    <a href="#">Forgot Password?</a>
                  </p>
                </div>
                <button type="submit">Login</button>
                <p className="register">
                  Need an account? <Link to="/Signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
        <footer>
          <div className="top-images">
            <img src="/image/sign-up-in-img/1.png" alt="image 1" />
            <img src="/image/sign-up-in-img/2.png" alt="image 2" />
            <img src="/image/sign-up-in-img/3.png" alt="image 3" />
            <img src="/image/sign-up-in-img/4.png" alt="image 4" />
          </div>
          <div className="bottom-images">
            <img src="/image/sign-up-in-img/5.png" alt="image 5" />
            <img src="/image/sign-up-in-img/6.png" alt="image 6" />
            <img src="/image/sign-up-in-img/7.png" alt="image 7" />
          </div>
        </footer>
      </div>
    </>
  );
}

























