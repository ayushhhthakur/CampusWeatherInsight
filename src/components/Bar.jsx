import React from 'react';
import '../css/Bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Bar = () => {
  return (
    <div className="set">
      <div className="links">
        <NavLink to="/analytics" className="link" activeClassName="active">
          Analytics
        </NavLink>

        <NavLink to='/hydro' className="link" activeClassName="active">
          Hydro
        </NavLink>

        <NavLink to='/' className="link" activeClassName="active">
          Home
        </NavLink>

        <NavLink to='/forecast' className="link" activeClassName="active">
          Forecast
        </NavLink>

        <NavLink to='/aqi' className="link" activeClassName="active">
          AQI
        </NavLink>
      </div>
      <div className="links-underline" />
    </div>
  );
};

export default Bar;
