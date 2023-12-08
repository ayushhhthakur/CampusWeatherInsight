import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo1.png'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to='/' className='logo-link'>
          <div className="logo">
            <img src={logo} alt="logo" style={{height: '60px', width: 'auto'}}/>
          </div>
        </Link>
        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
          <li><Link to='/hydrophonic'>Hydrophonic</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <button className="menu-icon" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
