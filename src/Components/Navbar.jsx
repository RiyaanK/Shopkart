import React from 'react'
import {Link} from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../Components/Navbar.css';
import '../context/ThemeContext.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to="/" className='logo-link'>
            <span className='logo-icon'>🛒</span>
            <span className='logo-text'>ShopKart</span>
          </Link>
        </div>
        
        <ul className='nav-links'>
          <li><Link to="/" className='link'>🏠 Home</Link></li>
          <li><Link to="/products" className='link'>📦 Products</Link></li>
          <li>
            <Link to="/cart" className='link cart-link'>
              🛒 Cart
              <span className='cart-badge'>0</span>
            </Link>
          </li>
          <li><Link to="/login" className='link'>🔑 Login</Link></li>
          <li><Link to="/register" className='link'>📝 Register</Link></li>
          <li>
            <button className='theme-toggle' onClick={toggleTheme} aria-label='Toggle theme'>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar