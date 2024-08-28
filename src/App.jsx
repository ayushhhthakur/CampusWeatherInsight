// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Weather from './Pages/Weather';
import Hydro from './Pages/Hydro';
import Bar from './components/Bar';
import Login from './Pages/Login';
import Analytics from './components/Analytics';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import Forecast from './components/Forecast';
import AQI from './components/AQI';
// import Footer from './components/Footer';
import Admin from './Pages/Admin';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const authenticated = token ? true : false;
    setLoggedIn(authenticated);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Bar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/hydro" element={<Hydro />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/aqi" element={<AQI />} />
            <Route path="/*" element={<NotFound />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route
              path="/admin"
              element={
                isLoggedIn ? (
                  <Admin />
                ) : (
                  // Redirect to login if not logged in
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
{/*         <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
