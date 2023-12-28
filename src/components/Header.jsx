import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {

  return (
    <header>
      <nav className="navbar">
        <Link to='/' className='logo-link'>
          <p><span>C</span>ampus <span>W</span>eather</p>
        </Link>
        <div className="header-title">
          {/* <a target='_blank' href="https://www.mietjammu.in"> */}
            <p>Model Institute of Engineering and Technology</p>
          {/* </a> */}
        </div>
        <div className="header-links">
          {/* <NavLink to='/login' className='link'>Login</NavLink>
          <NavLink to='/register' className='link'>Register</NavLink>     */}
          <button className='head-btn'>
            <Link  to='/login'>Login</Link>
          </button>
          {/* <button className='head-btn'>
          <Link  to='/register' >Register</Link>  
          </button> */}
        </div>    
      </nav>
    </header>
  );
};

export default Header;
