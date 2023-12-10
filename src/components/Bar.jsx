import React from 'react';
import '../css/Bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Bar = () => {
    return (
        <>
            <div className="set">
                <div className="links">
                    <NavLink to='/login' className="link" activeClassName="active">Yesterday</NavLink>
                    <NavLink to='/weather' className="link" activeClassName="active">Today</NavLink>
                    <NavLink to='/tomorrow' className="link" activeClassName="active">Tomorrow</NavLink>
                    <NavLink to='/aqi' className="link" activeClassName="active">AQI</NavLink>
                    <NavLink to='/settings' className="link" activeClassName="active">Settings</NavLink>
                </div>
                <div className="links-underline" />
            </div>
        </>
    );
};

export default Bar;
