import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
      const navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    };
  }, []);

  return (
    <>
      <header>
        <div className="logo">Campus Weather</div>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-bar">
          <ul>
            <li>
                <NavLink
                to="/">
                    Home
                </NavLink>
            </li>

            <li>
            <NavLink
                to="/campus">
                    Campus
                </NavLink>
            </li>

            <li>
            <NavLink
                to="/about">
                    About
                </NavLink>
            </li>

            <li>
                <NavLink to="/contact" >
                    Contact
                </NavLink>
            </li>

            <li>
            <NavLink
                to="/pricing">
                  Pricing
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
