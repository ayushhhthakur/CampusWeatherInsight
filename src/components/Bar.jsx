import React from 'react';
import '../css/Bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Bar = () => {
    const yesterdayDate = () => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
      
        const formattedYesterday = yesterday.toISOString().split('T')[0];
      
        return formattedYesterday;
      };
      

      
      const tomorrowDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
      
        const formattedTomorrow = tomorrow.toISOString().split('T')[0];
      
        return formattedTomorrow;
      };

      const todayDate = () => {
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];
        return formattedToday;
      };
      
      

    return (
        <>
            <div className="set">
                <div className="links">
                    <NavLink to={`/weather/${yesterdayDate}`} className="link" activeClassName="active">
                        Yesterday
                    </NavLink>

                    <NavLink to={`/weather/${todayDate}`} className="link" activeClassName="active">
                        Today
                    </NavLink>

                    <NavLink to='/' className="link" activeClassName="active">
                        Home
                    </NavLink>

                    <NavLink to={`/weather/${tomorrowDate}`} className="link" activeClassName="active">
                        Tomorrow
                    </NavLink>

                    <NavLink to='/aqi' className="link" activeClassName="active">
                        AQI
                    </NavLink>
                </div>
                <div className="links-underline" />
            </div>
        </>
    );
};

export default Bar;
