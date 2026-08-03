import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>About ShopKart</h3>
          <p>Your one-stop destination for quality products at amazing prices. We bring you the best deals from trusted brands worldwide.</p>
        </div>
        
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul className='footer-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/products'>Products</a></li>
            <li><a href='/cart'>Cart</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/register'>Register</a></li>
          </ul>
        </div>
        
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email: support@shopkart.com</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Address: 123 Shopping Street, City, Country</p>
          <div className='social-links'>
            <a href='#' aria-label='Facebook'>F</a>
            <a href='#' aria-label='Twitter'>T</a>
            <a href='#' aria-label='Instagram'>I</a>
            <a href='#' aria-label='LinkedIn'>L</a>
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>&copy; 2026 ShopKart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;