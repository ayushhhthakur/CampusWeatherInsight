import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import '../styles/Dashboard.css';

const Sidebar = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // const toggleSidebar = () => {
  //   setSidebarClosed(!isSidebarClosed);
  // };

  // const openSidebarOnSearch = () => {
  //   setSidebarClosed(false);
  // };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="logo.png" alt="image" />
          </span>
          <div className="text header-text">
            <span className="name">Campus Weather</span>
            <span className="profession">Insight</span>
          </div>
        </div>

        {/* <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i> */}
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul> {/* Add this ul tag */}
            {/* <li className="search-box" onClick={openSidebarOnSearch}>
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search" />
            </li> */}
            <li className="nav-links">
              <Link to="/">
                <i className='bx bxs-cloud icon'></i>
                <span className="text nav-text">Weather</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/hydrophonic">
                <i className='bx bxs-cloud icon'></i>
                <span className="text nav-text">Hydorphonic</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/analytics">
                <i className='bx bx-analyse icon'></i>
                <span className="text nav-text">Analytics</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/forecast">
                <i className='bx bxs-tree icon'></i>
                <span className="text nav-text">Forecast</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/about">
                <i className='bx bx-info-circle icon'></i>
                <span className="text nav-text">About</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/settings">
                <i className='bx bx-cog icon'></i>
                <span className="text nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="bottom-content">
          <ul>
            <li className="mode" onClick={toggleDarkMode}>
              <div className="moon-sun">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className="mode-text text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Sidebar;
