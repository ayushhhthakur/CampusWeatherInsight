import React from 'react';
import '../css/Bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Bar = () => {
  return (
    <div className="set">
      <div className="links">
        <NavLink
          to="/analytics"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Analytics
        </NavLink>

        <NavLink
          to="/hydro"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Hydro
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Home
        </NavLink>

        <NavLink
          to="/forecast"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Forecast
        </NavLink>

        <NavLink
          to="/aqi"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          AQI
        </NavLink>
      </div>
      <div className="links-underline" />
    </div>
  );
};

export default Bar;
