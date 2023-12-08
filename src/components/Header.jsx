import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo1.png'

const Header = () => {

  return (
    <header>
      <nav className="navbar">
        <Link to='/' className='logo-link'>
          <div className="logo">
            <img src={logo} alt="logo" style={{ height: '60px', width: 'auto' }} />
          </div>
        </Link>
        <div className="header-title">
          <p>Model Institute of Engineering and Technology</p>
        </div>
        <div className="header-links">
          <Link to='/login' className='link'>Login</Link>
          <Link to='/register' className='link'>Register</Link>    
        </div>    
      </nav>
    </header>
  );
};

export default Header;
