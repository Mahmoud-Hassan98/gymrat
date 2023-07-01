import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
import Store from "./pages/Store/Store";
import Signup from "./pages/Signup/Signup";
import Checkout from "./pages/Checkout/Checkout";
import { useEffect } from "react";
import Coach from "./pages/Coach/Coach";
import Personal from "./pages/Personal/Personal";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Formcoach from "./Components/profilepage/Formcoach";
import Checkoutcoach from "./pages/Checkout/Checkoutcoach";

import Productstore from "./pages/Productstore";
import Login from "./pages/Signup/Login";
export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Store" element={<Store />} />
    
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Formcoach" element={<Formcoach />} />
          <Route path="/Checkout/" element={<Checkout />} />
         
          <Route path="/Checkoutcoach/:id" element={<Checkoutcoach />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Coach" element={<Coach />} />
          <Route path="/Productstore" element={<Productstore />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
