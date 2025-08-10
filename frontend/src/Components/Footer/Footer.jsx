import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Zaika Logo" className="logo" />
          <p>Zaika brings homemade flavors straight to your doorstep. We connect you with talented home chefs to enjoy fresh, delicious, and authentic meals anytime.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+12345678901</li>
            <li>contact@zaika.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        © 2025 Zaika.com – All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
