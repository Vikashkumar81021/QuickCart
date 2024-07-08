import React from 'react'
import "./Footer.css"
import footerlogo from "../assets/logo_big.png"
import instalogo from "../assets/instagram_icon.png"
import pintrest from "../assets/pintester_icon.png"
import whatsApplogo from "../assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
  <img src={footerlogo} alt="" />
  <p>QuickCart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instalogo} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintrest} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsApplogo} alt="" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
