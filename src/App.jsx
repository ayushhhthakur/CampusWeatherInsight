import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Forecast from './pages/Forecast.jsx';
import Predictions from './pages/Predictions.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;