import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
 <>
 <div className='mainfooter'>
 <footer>
 {/* start footer  */}
 <div className="top-section">
   <section className="about-section">
     <div className="logo-footer">
       <img src="../../../image/logo1.png" alt="" />
     </div>
     <div className="social-icons" >
     <a href="facebook">
     <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
   </a>
   <a href="twitter">
     <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
   </a>
   <a href="instagram">
     <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
   </a>

     </div>
   </section>
   <section className="info-section">
     <h3>MAIN MENU</h3>
     <ul>
       <li>
         <a href="#">HOME</a>
       </li>
       <li>
         <a href="#">STORE</a>
       </li>
       <li>
         <a href="#">COACH</a>
       </li>
       <li>
         <a href="#">PR</a>
       </li>
       <li>
         <a href="#">ABOUT</a>
       </li>
     </ul>
   </section>
   <section className="links-section">
     <h3>HELP</h3>
     <ul>
       <li>
         <a href="#">Search</a>
       </li>
       <li>
         <a href="#">FAQ</a>
       </li>
       <li>
         <a href="#">PrIvacy Policy</a>
       </li>
       <li>
       <Link to="Contact">Contact Us</Link>
       </li>
       <li>
         <a href="#">Holiday Shipping</a>
       </li>
     </ul>
   </section>
   <section className="subscribe-section">
     <h3>Subscribe</h3>
     <div className="input-container">
       <input
         type="email"
         name="email"
         id="email"
         placeholder=" Enter Your Email"
       />
       <a href="a-pay" className="icon-link">
         {" "}
         <img src="footer-img/mail.png" alt="" />
       </a>
     </div>
   </section>
 </div>
 <div className="social-icons">
   <a href="a-pay">
     {" "}
     <img src="../../../image/a-pay.png" alt="" />
   </a>
   <a href="facebook">
     {" "}
     <img src="../../../image/g-pay.png" alt="" />
   </a>
   <a href="facebook">
     {" "}
     <img src="../../../image/mastercard.png" alt="" />
   </a>
   <a href="facebook">
     {" "}
     <img src="../../../image/visa.png" alt="" />
   </a>
 </div>
 <span id="copyy"> CopyRight © GymRAT.com 2023</span>
 {/* end footer */}
</footer>

</div>

 </>

  )
}
