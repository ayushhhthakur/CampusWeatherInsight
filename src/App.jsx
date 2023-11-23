import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';
import About from './pages/About';
import Forecast from './pages/Forecast';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Hydro from './pages/Hydro';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path='/hydrophonic' element={<Hydro/>} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
