// Sidebar.jsx
import React, { useState } from 'react';
import { FaBars, FaCloud, FaGlobe, FaChartLine, FaComments, FaSun, FaList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "../styles/Sidebar.css";
import logo from '../assets/logo.png';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/',
      name: 'Overview',
      icon: <FaCloud />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaGlobe />,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaChartLine />,
    },
    {
      path: '/comment',
      name: 'Comments',
      icon: <FaComments />,
    },
    {
      path: '/product',
      name: 'Forecast',
      icon: <FaSun />,
    },
    {
      path: '/productList',
      name: 'Forecast List',
      icon: <FaList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"><img src={logo} alt="logo" /></h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
