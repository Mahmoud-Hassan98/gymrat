
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';




export default function Contact() {
  return (
   
<>
<div className="contact_us_green">
  <div className="responsive-container-block big-container">
    <div className="responsive-container-block container">
      <div
        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
        id="i69b-2"
      >
        <form className="form-box">
          <div className="container-block form-wrapper">
            <div className="head-text-box">
              <p className="text-blk contactus-head">Contact us</p>
              <p className="text-blk contactus-subhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna al iqua. Ut
                enim
              </p>
            </div>
            <div className="responsive-container-block">
              <div
                className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                id="i10mt-6"
              >
                <p className="text-blk input-title">FIRST NAME</p>
                <input className="input" id="ijowk-6" name="FirstName" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">LAST NAME</p>
                <input className="input" id="indfi-4" name="Last Name" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">EMAIL</p>
                <input className="input" id="ipmgh-6" name="Email" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">PHONE NUMBER</p>
                <input className="input" id="imgis-5" name="PhoneNumber" />
              </div>
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                id="i634i-6"
              >
                <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                <textarea
                  className="textinput"
                  id="i5vyy-6"
                  placeholder="Please enter query..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
        id="ifgi"
      >
        <div className="container-box">
          <div className="text-content">
            <p className="text-blk contactus-head">Contact us</p>
            <p className="text-blk contactus-subhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna al iqua. Ut
              enim
            </p>
          </div>
          <div className="workik-contact-bigbox">
          <div className="workik-contact-box">
          <div className="phone text-box">
            <FontAwesomeIcon icon={faPhone} size="lg" color="#FFDD00" style={{ fontSize: '38px', marginRight: '20px' }} />
            <p className="contact-text"style={{ marginTop: '10px' }} >+962781158939</p>
          </div>
          <div className="address text-box">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#FFDD00" style={{ fontSize: '38px', marginRight: '20px' }} />
            <p className="contact-text" style={{ marginTop: '8px' }} >mahmoudd.a.hassan@gmail.com</p>
          </div>
          <div className="mail text-box">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#FFDD00" style={{ fontSize: '45px', marginRight: '20px' }} />
          <p className="contact-text" style={{ marginTop: '8px' }}>102 street, Amman  485656</p>
          </div>
        </div>
            <div className="social-media-links">
          
              <a href="">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#FFDD00" style={{ fontSize: '30px' }} />


              </a>
              <a href="">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#FFDD00" style={{ fontSize: '30px' }}  />

              </a>
              <a href="">
              <FontAwesomeIcon icon={faFacebookF} size="lg" color="#FFDD00" style={{ fontSize: '30px' }} />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>

  )
}
