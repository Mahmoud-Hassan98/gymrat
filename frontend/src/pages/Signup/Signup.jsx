import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    name: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
    role: ""
  });
 const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Invalid email format";
    }

    return "";
  };

  const validateName = (name) => {
    if (!name) {
      return "Username is required";
    }

    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const validateRole = (role) => {
    if (!role) {
      return "Account type is required";
    }

    return "";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    switch (e.target.name) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(e.target.value)
        }));
        break;
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: validateName(e.target.value)
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: validatePassword(e.target.value)
        }));
        break;
      case "role":
        setFormData((prevFormData) => ({
          ...prevFormData,
          role: e.target.value
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          role: validateRole(e.target.value)
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setFormData({
          role: "",
          email: "",
          name: "",
          password: ""
        });
        navigate("/");
      } else {
        const errorMessage = await response.text();
        if (response.status === 401) {
          setRegistrationError(errorMessage);
        } else {
          console.error(errorMessage);
          setRegistrationError("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      setRegistrationError("An error occurred. Please try again.");
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
            <form action="" className="signup-form" onSubmit={handleSubmit}>
              <div className="headingsContainer">
                <h3 className="tilte1">Create an account</h3>
                <p className="tilte3">Choose Account Type</p>
                <div>
                  <input
                    type="radio"
                    id="userRole"
                    name="role"
                    required
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                  />
                  <label htmlFor="userRole">User</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="coachRole"
                    required
                    name="role"
                    value="coach"
                    checked={formData.role === "coach"}
                    onChange={handleChange}
                  />
                  <label htmlFor="coachRole">Coach</label>
                </div>
                {errors.role && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.role}
                  </span>
                )}
              </div>
              {registrationError && (
                <div className="error-message" style={{ color: 'red', fontSize: '16px', marginTop: '10px' }}>
                  * {registrationError}
                </div>
              )}
              <div className="mainContainer">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.email}
                  </span>
                )}
                <br />
                <br />
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.name}
                  </span>
                )}
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.password}
                  </span>
                )}
                <button
                  type="submit"
                  disabled={Object.values(errors).some((error) => error !== "")}
                >
                  Signup
                </button>
                <p className="register">
                  You have an account? <Link to="/Login">Login</Link>
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
