import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Forecast from './pages/Forecast';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
